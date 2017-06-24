"use strict"

import {combineReducers} from 'redux';


import {calculatorReducers} from "./calculatorReducers"

export default combineReducers({
    calculator: calculatorReducers,
})