const { verifySignUp } = require("../middleware/verifySignUp");
const controller = require("../controllers/auth.controller");

module.exports =  (app) => {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/auth/signup",
        controller.signup ,
        // [
        //     verifySignUp.checkDuplicateUsernameOrEmail,
        //     verifySignUp.checkRolesExisted()
        // ]
    );

    app.post("/api/auth/signin", controller.signin);
};