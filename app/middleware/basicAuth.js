basicAuth = async (req, res, next) => {
    try {
        const authheader = req.headers.authorization;

        if (!authheader) {
            return res.status(422).send({
                data: {
                    success: 0,
                    data: null,
                    message: "Auth Token is required"
                },
                statusCode: 422
            });
        }
        const [user, pass] = new Buffer.from(authheader.split(" ")[1], "base64").toString().split(":");

        if (user == "TestUser" && pass == "Test@123") {
            return next();
        } else {
            return res.status(422).send({
                data: {
                    success: 0,
                    data: null,
                    message: "Unauthorized user"
                },
                statusCode: 422
            });
        }
    } catch (error) {
        console.log("Error: Basic Auth > basicAuth :>>", error);

        return res.status(500).send({
            data: {
                success: 0,
                data: null,
                message: "Internal Server Error"
            },
            statusCode: 500
        });
    }
}

module.exports = { basicAuth };
