import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';

interface RunOptions { 
    //Reglas que quiero ponerle a mi objeto
    base: number;
    limit: number;
    showTable: boolean;
    fileName: string;
    fileDestination: string;

}

export class ServerApp {
    //Como va a funcionar mi app de entrada

    static run({base, limit, showTable, fileName, fileDestination}: RunOptions){
        console.log('Server runing...');

        const table = new CreateTable().execute({base, limit});
        const wasCreated = new SaveFile().execute({fileContent: table, fileDestination, fileName })

        if (showTable) {
            console.log(table);
            
        }
    }
}