import { CreateTable } from "../domain/use-cases/create-table.use-cases";
import { SaveFile } from "../domain/use-cases/save-file.use-cases";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    filePath: string;
    fileName: string;
}
export class ServerApp {

    static run({ base, limit, showTable, filePath, fileName }: RunOptions) {
        console.log("Server is running...");

        const table = new CreateTable().execute({
            base,
            limit
        });
        const wasCreated = new SaveFile().execute({
            content: table,
            filePath: filePath,
            fileName: fileName
        })

        if (showTable) console.log(table);

        (wasCreated) ? console.log("File was created") : console.log("File not created")

    }
}