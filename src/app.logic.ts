import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';


let header = `===========================\n\tTabla del ${yarg.b}\n===========================\n\n`;
let outputMessage = '';
const base = yarg.b


for (let i = 1; i <= yarg.l; i++) {
    outputMessage += `${base} x ${i} = ${base*i}\n`;
}

outputMessage = header + outputMessage;

if( yarg.s ) {
    console.log(outputMessage);
}
const outputPath = './outputs'

//fs.mkdirSync(outputPath, {recursive: true})
fs.writeFileSync(`${outputPath}/tabla-del-${yarg.b}.txt`, outputMessage)




