import db from "../database/connection";

interface ConnectionInterface {
  user_id: number;
  created_at?: string;
}

export default {
  list: async ({ user_id = null }) => {
    return await db("user_connections").where(function () {
      if (user_id) {
        this.where("user_id", "=", user_id);
      }
    });
  },
  insert: async (data: ConnectionInterface) => {
    return await db("user_connections").insert(data);
  },
};
