import { Context } from "koa";

import UserService from "../services/UserService";
import ClassService from "../services/ClassService";
import ScheduleService, {
  ScheduleInterface,
} from "../services/ScheduleService";

import TimeConverter from "../utils/TimeConverter";

export default {
  index: async (ctx: Context) => {
    const filter = ctx.request.query;

    if (filter.time) {
      filter.time = TimeConverter.hoursToMinutes(filter.time);
    }

    ctx.body = await ClassService.list(filter);
  },
  create: async (ctx: Context) => {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedules,
    } = ctx.request.body;

    const insertedUsersIds = await UserService.insert({
      name,
      avatar,
      whatsapp,
      bio,
    });

    const insertedClassesIds = await ClassService.insert({
      user_id: insertedUsersIds[0],
      subject,
      cost,
    });

    const insertedSchedulesIds = await ScheduleService.insert(
      schedules.map((item: ScheduleInterface) => ({
        class_id: insertedClassesIds[0],
        week_day: item.week_day,
        from: TimeConverter.hoursToMinutes(item.from),
        to: TimeConverter.hoursToMinutes(item.to),
      }))
    );

    ctx.status = 201;
  },
};
