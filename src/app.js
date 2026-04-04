import { Hono } from "hono";
import router from "./routes/ web";
import { serveStatic } from "hono/bun";
const app = new Hono();
// static file (CSS)
app.use("/css/*", serveStatic({ root: "./src/public" }));
//midlware untuk set currentPath agar bisa digunakan di layout.ejs untuk active menu
app.use("*", async (c, next) => {
    c.set("currentPath", c.req.path);
    await next();
});
// routes
app.route("/", router);
export default {
    port: 3000,
    fetch: app.fetch,
};
