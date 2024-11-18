import { CreateTable } from './create-table.use-cases';


describe('src/domaincreate-table.use-cases', () => {

    const createTable = new CreateTable();

    test('should create a table with default values', () => {

        const table = createTable.execute( { base : 2})
        const rows = table.split('\n');
        

        expect(createTable).toBeInstanceOf(CreateTable);
        expect(table).toContain('2 x 1 = 2')
        expect(table).toContain('2 x 10 = 20')
        expect(rows.length).toBe(10);
    })

    test('should create a table with custom values', () => {
        const options = {
            base: 3,
            limit: 20
        }

        const table = createTable.execute(options)
        const rows = table.split('\n');

        expect(table).toContain('3 x 1 = 3')
        expect(table).toContain('3 x 10 = 30')
        expect(table).toContain('3 x 20 = 60')
        expect(rows.length).toBe(20);

    });
});