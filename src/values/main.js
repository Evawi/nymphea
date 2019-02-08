'use strict';

import array  from './getArray.js';
import object  from './getObject.js';
import date  from './getDate.js';

class ValuesClass{};
const VALUES = new  ValuesClass();

VALUES.getArray = array;
VALUES.getObject = object;
VALUES.getDate = date;

export default VALUES

