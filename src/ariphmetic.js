import sum from './lib/sum';
import minus from './lib/minus';
import divide from './lib/divide';
import multiply from './lib/multiply';
import { CleanPlugin } from 'webpack';

export default {
  sum,
  minus,
  divide,
  multiply,
};


const foo = (name) => console.log(name)

console.log('dada')