export const assertQueryParams = (req) => {
	const { tags, sortBy, direction } = req.query;
	const allowedSortFields = ["id", "reads", "likes", "popularity"];
	const allowedDirection = ["desc", "asc"];
	if (!tags) throw new Error("Tags parameter is required");
	if (sortBy && !allowedSortFields.includes(sortBy))
		throw new Error("sortBy parameter is invalid");
	if (direction && !allowedDirection.includes(direction))
		throw new Error("Invalid Direction parsed, parse desc or asc");
	return { tags, sortBy, direction };
};
