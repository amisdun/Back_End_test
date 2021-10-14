import { fetchPostWithTags } from "./apiServiceRequest.js";
import { sortData } from "./sortServices.js";
import { NodeCache } from "../packages/node_packages.js";
const postCache = new NodeCache();

const fetchDataAndCacheData = async (tags, checkTags) => {
	const posts = await fetchPostWithTags(tags);
	postCache.set("posts", posts, 10000);
	postCache.set("tags", checkTags, 10000);
	return { posts };
};

export const postServices = async (tags, sortBy, direction) => {
	const checkTags = tags.split(",");
	let data = postCache.get("posts");
	const fetchTags = postCache.get("tags");
	if (Array.isArray(fetchTags) && fetchTags?.length) {
		var validateTags = fetchTags.every((val) => checkTags.includes(val));
	}

	if ((!Array.isArray(data) && !data?.length) || !validateTags) {
		data = undefined;
		var { posts } = await fetchDataAndCacheData(tags, checkTags);
	}

	if (sortBy || direction) {
		const sortedData = sortData(
			Array.isArray(data) && data?.length ? data : posts,
			sortBy,
			direction,
		);
		return sortedData;
	}
	return Array.isArray(posts) && posts?.length ? posts : data;
};
