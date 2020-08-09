import db from "../database/connection";

export interface ScheduleInterface {
  class_id: number;
  week_day: string;
  from: string;
  to: string;
}

export default {
  insert: async (data: ScheduleInterface) => {
    return await db("class_schedules").insert(data);
  },
};
