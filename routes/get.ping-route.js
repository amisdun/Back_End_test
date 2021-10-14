import { express } from "../packages/node_packages.js";
import { ping } from "../controllers/get.ping-controller.js";
const Router = express.Router();

Router.get("/api/ping", ping.getPing);

export default Router;
