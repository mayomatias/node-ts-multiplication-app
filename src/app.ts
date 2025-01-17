import { yarg } from './config/plugins/args.plugin'
import { ServerApp } from './presentation/server-app';

(async() => {
    await main();
    console.log('exit');
})();

async function main() {
    const{b:base, l:limit, s:showTable, n: fileName, d: fileDestination} = yarg;
    ServerApp.run({base, limit, showTable, fileName, fileDestination})
    console.log(yarg);
}