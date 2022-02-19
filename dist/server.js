"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
require("express-async-errors");
var express_1 = __importDefault(require("express"));
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.get("/", function (request, response) {
    return response.json({ message: "Hello Joao We Miss U" });
});
app.post("/courses", function (request, response) {
    var name = request.body.name;
    return response.json({ name: name });
});
app.listen(3333, function () { return console.log("Server is running in port 3333 🚀"); });
//# sourceMappingURL=server.js.map