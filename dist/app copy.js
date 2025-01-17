"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
let header = '===========================\n\tTabla del 5\n===========================\n\n';
let outputMessage = '';
for (let i = 1; i <= 10; i++) {
    outputMessage += `5 x ${i} = ${5 * i}\n`;
}
outputMessage = header + outputMessage;
console.log(outputMessage);
const outputPath = './outputs';
fs_1.default.rmSync(outputPath);
fs_1.default.mkdirSync(outputPath);
fs_1.default.writeFileSync(`${outputPath}/tabla-del-5.txt`, outputMessage);
