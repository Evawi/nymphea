'use strict';
import $ from 'jquery';
global.$ = global.jQuery = $;

import React from 'react';
global.React  = React;

import _ from 'underscore';
global._  = _;

import Enzyme from 'enzyme';
import Adapter  from 'enzyme-adapter-react-15';
Enzyme.configure({ adapter: new Adapter() });