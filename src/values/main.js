'use strict';

import array  from './getArray.js';
import object  from './getObject.js';

class ValuesClass{};
const VALUES = new  ValuesClass();

VALUES.getArray = array;
VALUES.getObject = object;

export default VALUES

