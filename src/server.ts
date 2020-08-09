import Koa from "koa";
import Cors from "koa-cors";
import BodyParser from "koa-bodyparser";

import ErrorMiddleware from "./middlewares/ErrorMiddleware";
import routes from "./router";

const app = new Koa();

app.use(Cors());
app.use(BodyParser());
app.use(ErrorMiddleware);
app.use(routes);

app.listen(3000);
