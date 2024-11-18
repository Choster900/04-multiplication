import fs from 'fs';
import path from 'path';

export interface SaveFileUseCase {
    execute: (options: SaveFileOptions) => boolean;
}

export interface SaveFileOptions {
    content: string;
    filePath?: string;
    fileName?: string;
}

export class SaveFile implements SaveFileUseCase {


    constructor(
        /** 
         * repository; StorageRepository
         */
    ) { }

    execute({
        content,
        fileName = 'table.txt',
        filePath = 'outputs'
    }: SaveFileOptions): boolean {

        try {

            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, { recursive: true });
            }

            const pathFile = path.join(filePath, fileName + '.txt');
            fs.writeFileSync(pathFile, content);

            
            return true;
        } catch (error) {
            //console.log(error); !Save error in windston

            return false;
        }


    };



}