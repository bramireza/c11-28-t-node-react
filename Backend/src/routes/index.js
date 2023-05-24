const authRouter = require("./authRouter");
const doctorRouter = require("./doctorRouter");
const specialtyRouter = require("./specialtyRouter");

const routes = [
  ["auth", authRouter],
  ["specialty", specialtyRouter],
  ["doctor", doctorRouter],
];

const router = (app) => {
  routes.forEach(([path, controller]) => {
    app.use(`/api/v1/${path}`, controller);
  });
};

module.exports = router;
