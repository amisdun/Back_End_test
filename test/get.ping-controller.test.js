import chai, { expect } from "chai";
import chaiHttp from "chai-http";
const server_url = "http://localhost:8080";

chai.use(chaiHttp);

describe("Testing for get-ping-controller", function () {
	it("should return { success:true }", (done) => {
		chai
			.request(server_url)
			.get("/api/ping")
			.end(function (err, res) {
				expect(res.body.statusCode).to.be.equal(200);
				expect(res.body).have.property("success");
				expect(res.body).have.property("statusCode");
				expect(res.body.success).to.be.equal(true);
				done();
			});
	});
});
