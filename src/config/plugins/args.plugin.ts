import yargs from 'yargs';
import {hideBin} from 'yargs/helpers'

export const yarg = yargs(hideBin(process.argv))
.options('b', {
    alias: 'base',
    type:'number',
    demandOption: true,
    describe: 'Multiplication table base'
})
.options('l', {
    alias: 'limit',
    type:'number',
    default: 10,
    describe: 'Multiplication table limit'
})
.options('s', {
    alias: 'show',
    type:'boolean',
    default: false,
    describe: 'Show multiplication table'
})
.options('n', {
    alias:'name',
    type: 'string',
    default: 'multiplication-table',
    describe: 'File name'
})
.options('d', {
    alias:'destination',
    type: 'string',
    default: 'outpus',
    describe: 'File destination'
})
//CHECKS verificaciones adicionales
.check((argv, options) => {
    if (argv.b < 1) throw 'Error: la base debe ser mayor 0';

    return true;
})
.parseSync()