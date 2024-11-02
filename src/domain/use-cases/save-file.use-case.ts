import fs from 'fs';

export interface SaveFileUseCase {
    execute: ( options: SaveFilesOptions ) => boolean;
}

export interface SaveFilesOptions {
    fileContent: string;
    fileDestination?: string;
    fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
    constructor(/* DI */){

    }
    execute({
        fileContent,
        fileDestination = 'outputs',
        fileName = 'table.txt'
    }: SaveFilesOptions): boolean{

        try {
            fs.mkdirSync(fileDestination, {recursive: true})
            fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent)
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }

    }
}