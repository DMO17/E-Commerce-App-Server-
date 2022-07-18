const { Route } = require("express");

const api = require("./api");

const route = Route();

route.use("/api", api);

module.exports = route;
