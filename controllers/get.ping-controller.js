import { errorResponse, successResponse } from "../server_response/response.js";

class Ping {
	async getPing(req, res) {
		try {
			return successResponse(res);
		} catch (error) {
			return errorResponse(res, error.message);
		}
	}
}

const ping = new Ping();

export { ping };
