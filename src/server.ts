import Koa from "koa";
import Cors from "koa-cors";
import BodyParser from "koa-bodyparser";

import routes from "./router";

const app = new Koa();

app.use(Cors());
app.use(BodyParser());
app.use(routes);

app.listen(3000);
