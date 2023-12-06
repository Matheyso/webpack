import soma from './calc.js';
import Heading from './components/heading.js';

console.log("Testando o webpack");

soma(1,2);
soma(12,12);

//loaders
const heading = new Heading();
heading.create("Este título é dinâmico");
heading.create("AOOOOOOOOOOOBA");