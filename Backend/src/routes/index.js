const authRouter = require("./authRouter");
const specialtyRouter = require("./specialtyRouter");

const routes = [
  ["auth", authRouter],
  ["specialty", specialtyRouter],
];

const router = (app) => {
  routes.forEach(([path, controller]) => {
    app.use(`/api/v1/${path}`, controller);
  });
};

module.exports = router;
