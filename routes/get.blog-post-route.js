import { express } from "../packages/node_packages.js";
import { Posts } from "../controllers/get.blog-posts-controller.js";
const Router = express.Router();

Router.get("/api/posts", Posts.fetchPosts);

export default Router;
