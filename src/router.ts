import Router from "koa-router";

import ClassController from "./controllers/ClassController";
import ConnectionController from "./controllers/ConnectionController";

const router = new Router();

router.get("/", (ctx) => {
  ctx.body = { message: `Hello World` };
});

router.get("/classes", ClassController.index);
router.post("/classes", ClassController.create);

router.get("/connections", ConnectionController.index);
router.post("/connections", ConnectionController.create);

export default router.routes();
