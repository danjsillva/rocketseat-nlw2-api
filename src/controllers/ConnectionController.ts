import { Context } from "koa";

import ConnectionService from "../services/ConnectionService";

export default {
  index: async (ctx: Context) => {
    const filter = ctx.request.query;

    const totalConnections = await (await ConnectionService.list(filter))
      .length;

    ctx.body = { totalConnections };
  },
  create: async (ctx: Context) => {
    const { user_id } = ctx.request.body;

    const insertedUsersIds = await ConnectionService.insert({ user_id });

    ctx.status = 201;
  },
};
