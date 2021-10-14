import { sortArray } from "../packages/node_packages.js";

export const sortData = (data, sortBy, direction) => {
	if (Array.isArray(data) && data.length) {
		const sortedData = sortArray(data, {
			by: sortBy || "id",
			order: direction || "asc",
		});
		return sortedData;
	}
	throw new Error("No Data available");
};
