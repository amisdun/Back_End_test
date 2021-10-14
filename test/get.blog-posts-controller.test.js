import chai, { expect } from "chai";
import chaiHttp from "chai-http";
const server_url = "http://localhost:8080";

//To run the test, make sure you are connected to to internet

chai.use(chaiHttp);

describe("Testing for get-blog-post-controller", function () {
	it("should fail when tags is undefined", (done) => {
		chai
			.request(server_url)
			.get("/api/posts")
			.end(function (err, res) {
				expect(res.body.statusCode).to.be.equal(400);
				expect(res.body).have.property("error");
				expect(res.body).have.property("statusCode");
				expect(res.body.error).to.be.equal("Tags parameter is required");
				done();
			});
	});
	it("should fail when sortBy is invalid", (done) => {
		chai
			.request(server_url)
			.get("/api/posts?tags=tech&sortBy=books")
			.end(function (err, res) {
				expect(res.body).have.property("statusCode");
				expect(res.body).have.property("error");
				expect(res.body.statusCode).to.be.equal(400);
				expect(res.body.error).to.be.equal("sortBy parameter is invalid");
				done();
			});
	});
	it("should fail when direction is invalid", (done) => {
		chai
			.request(server_url)
			.get("/api/posts?tags=tech&direction=left")
			.end(function (err, res) {
				expect(res.body).have.property("statusCode");
				expect(res.body).have.property("error");
				expect(res.body.statusCode).to.be.equal(400);
				expect(res.body.error).to.be.equal(
					"Invalid Direction parsed, parse desc or asc",
				);
				done();
			});
	});

	it("should fetch posts when tags are/is defined", (done) => {
		chai
			.request(server_url)
			.get("/api/posts?tags=tech")
			.end(function (err, res) {
				expect(res.body).have.property("statusCode");
				expect(res.body).have.property("posts");
				expect(res.body.statusCode).to.be.equal(200);
				expect(res.body.posts.length).to.be.greaterThan(0);
				done();
			});
	});

	it("should arrange posts in ascending order by likes", (done) => {
		chai
			.request(server_url)
			.get("/api/posts?tags=tech&sortBy=likes")
			.end(function (err, res) {
				expect(res.body).have.property("statusCode");
				expect(res.body).have.property("posts");
				expect(res.body.statusCode).to.be.equal(200);
				expect(res.body.posts.length).to.be.greaterThan(0);
				expect(res.body.posts[0]["likes"]).to.lessThan(
					res.body.posts[1]["likes"],
				);
				done();
			});
	});
	it("should arrange posts in descending order by likes", (done) => {
		chai
			.request(server_url)
			.get("/api/posts?tags=tech&sortBy=likes&direction=desc")
			.end(function (err, res) {
				expect(res.body).have.property("statusCode");
				expect(res.body).have.property("posts");
				expect(res.body.statusCode).to.be.equal(200);
				expect(res.body.posts.length).to.be.greaterThan(0);
				expect(res.body.posts[0]["likes"]).to.be.greaterThan(
					res.body.posts[1]["likes"],
				);
				done(err);
			});
	});
});
