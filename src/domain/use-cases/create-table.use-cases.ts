export interface CreateTableUseCase {
    execute: (options: CreateTableOptions) => string;
}
export interface CreateTableOptions {
    base: number;
    limit?: number;
}

export class CreateTable implements CreateTableUseCase {
    constructor() /**
   * DI  Dependency Injection
   */ { }

    execute({ base, limit = 10 }: CreateTableOptions) {
        const arrayNumbers = Array.from({ length: limit }, (_, i) => i + 1);

        return arrayNumbers.map((i) => `${base} x ${i} = ${base * i}`).join("\n");
    }
}
