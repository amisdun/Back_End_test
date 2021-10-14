export const errorResponse = (res, error, code = 400) => {
	return res.json({
		statusCode: code,
		error,
	});
};

export const successResponse = (res, posts, code = 200) => {
	return res.json({
		statusCode: code,
		success: true,
		posts,
	});
};
