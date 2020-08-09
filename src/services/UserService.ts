import db from "../database/connection";

interface UserInterface {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

export default {
  insert: async (data: UserInterface) => {
    return await db("users").insert(data);
  },
};
