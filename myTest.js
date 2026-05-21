import Table from './Table.js';
import {projects, books} from './data_test.js';

const heaers = Object.keys(books[0]);
const data = books.map(books => Object.values(books));

const table = new Table(heaers, data);
table.displayIn("table-prototype");


