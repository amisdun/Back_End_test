import { express, bodyParser, cors, dotenv } from "./packages/node_packages.js";
import Routes from "./routes/index.js";
dotenv.config();

const server = express();

// enable cors resource sharing
server.use(cors());

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(bodyParser.raw());

// Register routes
server.use("", Routes);

let PORT;
PORT = process.env.PORT;
// listening app on a port
server.listen(PORT, () => {
	console.log(`Server listening on PORT ${PORT}`);
});

export default server;
