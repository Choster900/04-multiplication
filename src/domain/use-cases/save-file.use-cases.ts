import fs from 'fs';

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

    execute(options: SaveFileOptions): boolean {

        const OUTPUT_DIR = 'outputs';
        const FILE_NAME = `tabla-${BASE}-hasta-${LIMIT}.txt`;

        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR, { recursive: true });
        }

        const filePath = path.join(OUTPUT_DIR, FILE_NAME);
        fs.writeFileSync(filePath, headerContent);

        const data = fs.readFileSync(filePath, 'utf8');
        return true;

        return true;
    };



}