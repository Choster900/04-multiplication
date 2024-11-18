import { SaveFile } from './save-file.use-cases';
import fs from 'fs';
describe('SaveFileUseCase', () => {


    const customOptions = {
        content: 'custom content',
        filePath: 'custom-outputs/file-destination',
        fileName: 'custom-table-name'
    }

    const customFilePath = `${customOptions.filePath}/${customOptions.fileName}.txt`;

    afterEach(() => {
        const outputFolderExist = fs.existsSync('outputs')
        if (outputFolderExist) {fs.rmSync('outputs', { recursive: true });}

        const customOutputFolderExist = fs.existsSync(customOptions.filePath)
        if (customOutputFolderExist){ fs.rmSync(customOptions.filePath, { recursive: true });}
    });


    test('should save file with default values', () => {

        const saveFile = new SaveFile()

        const filePath = 'outputs/prueba.txt'
        const options = {
            content: 'test content',
            fileName: 'prueba',
        }

        const result = saveFile.execute(options)

        const fileExists = fs.existsSync(filePath)
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

        expect(result).toBeTruthy()
        expect(fileExists).toBeTruthy()
        expect(fileContent).toBe(options.content)
    })

    test('should save file with custom values', () => {

        const saveFile = new SaveFile()

        const result = saveFile.execute(customOptions)
        const fileExists = fs.existsSync(customFilePath)
        const fileContent = fs.readFileSync(customFilePath, { encoding: 'utf8' })

        expect(result).toBeTruthy()
        expect(fileExists).toBeTruthy()
        expect(fileContent).toBe(customOptions.content)

    })

    test('should return false if directory can not be created', () => {

        const saveFile = new SaveFile()

        const mkDirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
            () => { throw new Error('This is a custom error message from testing') }
        )

        const result = saveFile.execute(customOptions);

        expect(result).toBe(false)

        mkDirSpy.mockRestore()

    })

    test('should return false if directory could not be created', () => {

        const saveFile = new SaveFile()

        const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(
            () => { throw new Error('This is a custom writing error message') }
        )

        const result = saveFile.execute({ content: 'hola' });

        expect(result).toBe( false );

        writeFileSpy.mockRestore();
        

    })
});