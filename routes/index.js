import { express } from "../packages/node_packages.js";
import blogRouter from "./get.blog-post-route.js";
import pingRouter from "./get.ping-route.js";

const Routes = express.Router();

Routes.use("/", blogRouter);
Routes.use("/", pingRouter);

export default Routes;
