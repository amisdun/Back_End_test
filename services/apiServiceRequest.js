import { axios, dotenv } from "../packages/node_packages.js";
dotenv.config();

export const fetchPostWithTags = async (tags) => {
	const arrayTags = tags.split(",");
	let postResults = [];
	for (let tag of arrayTags) {
		const {
			data: { posts },
		} = await axios.get(`${process.env.BASE_ENDPOINT}?tag=${tag}`);
		postResults.push(...posts);
	}

	// Using Set to return Unique post
	const sets = new Set();
	const uniquePosts = postResults.filter((post) => {
		const duplicate = sets.has(post.id);
		sets.add(post.id);
		return !duplicate;
	});
	return uniquePosts;
};
