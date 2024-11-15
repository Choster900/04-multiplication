import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv) )
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        description: 'Multiplication base',
    })
    .option('l',{
        alias: 'limit',
        type: 'number',
        default: 10,
        description: 'Multiplication limit',
    })
    .option('s',{
        alias: 'show',
        type: 'boolean',
        default: false,
        description: 'Show multiplication table',
    })
    .check(( argv, options) => {
       // console.log({ argv , options});

        if ( argv.b < 0)  throw 'Error base must be a positive number'
        
        return true;
    })
    .parseSync();