import * as pug from 'pug';
import { tplMain, tplFooter } from './template';

export const pugMain = pug.render(tplMain);
export const pugFooter = pug.render(tplFooter);
