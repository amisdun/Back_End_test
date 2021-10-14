import { errorResponse, successResponse } from "../server_response/response.js";
import { postServices } from "../services/postServices.js";
import { assertQueryParams } from "../utils/assertQueryParams.js";

class BlogPosts {
	async fetchPosts(req, res) {
		try {
			const { tags, sortBy, direction } = assertQueryParams(req);
			const posts = await postServices(tags, sortBy, direction);
			return successResponse(res, posts);
		} catch (error) {
			return errorResponse(res, error.message);
		}
	}
}

const Posts = new BlogPosts();

export { Posts };
