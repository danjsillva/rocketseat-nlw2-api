import db from "../database/connection";

interface ClassInterface {
  user_id: number;
  subject: string;
  cost: number;
}

export default {
  list: async ({ week_day = null, subject = null, time = null }) => {
    return await db("user_classes")
      .where(function () {
        if (subject) {
          this.where("user_classes.subject", "like", `%${subject}%`);
        }

        if (week_day) {
          this.where("class_schedules.week_day", "=", week_day);
        }

        if (time) {
          this.where("class_schedules.from", "<=", time).where(
            "class_schedules.to",
            ">",
            time
          );
        }
      })
      .join("users", "user_classes.user_id", "=", "users.id")
      .join(
        "class_schedules",
        "class_schedules.class_id",
        "=",
        "user_classes.id"
      )
      .select(["user_classes.*", "users.*"]);
  },
  insert: async (data: ClassInterface) => {
    return await db("user_classes").insert(data);
  },
};
