"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// server.ts
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.use('/node_modules', express_1.default.static(path_1.default.join(__dirname, '../node_modules')));
app.get('*.ts', (req, res) => {
    const tsPath = path_1.default.join(__dirname, '../public', req.path);
    res.sendFile(tsPath);
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map