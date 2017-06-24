import React, { Component } from 'react';
import CurrencyInput from './components/CurrencyInput'
import SliderInput from './components/SliderInput'
import DisplayGraph from './components/DisplayGraph'
import Instructions from './components/Instructions'
import './App.css';

import {render} from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators, createStore} from 'redux';
import {getInterestRate, increaseInterestRate, decreaseInterestRate, increaseSaving, decreaseSaving, increaseMonthlyDeposit, decreaseMonthlyDeposit, updateFrenquency, updateCurrency} from './actions/calculatorAction';

getInterestRate, increaseInterestRate, decreaseInterestRate, increaseSaving, decreaseSaving, increaseMonthlyDeposit, decreaseMonthlyDeposit, updateFrenquency, updateCurrency
class App extends Component {
    constructor() {
        super();
        this.state = {}
    }
	componentDidMount(){
		//TODO get default data from api
	}
  render() {
    return (
      <div className="App">
        <div className="header-banner">
          <h1 className="fmz-white-font">Finimize Interest Rate Calculator</h1>
        </div>
				<div className="financial-inputs">
					<div className="inline oneThird">
                        <p className="input-label">How much have you saved?</p>
                        <CurrencyInput defaultValue={0} type={'savings'}/>
					</div>
					<div className="inline oneThird">
                        <p className="input-label">How much will you save each month?</p>
                        <CurrencyInput defaultValue={0}  type={"monthlydepo"}/>
					</div>
                    <div className="inline oneThird">
                        <p className="input-label">How much interest will you earn per year?</p>
                        <SliderInput defaultValue={4} type={"interestrate"}/>
					</div>
                    <Instructions />

				</div>
				<div className="financial-display">
					{/*We have included some sample data here, you will need to replace this
					with your own. Feel free to change the data structure if you wish.*/}
					<DisplayGraph data={[
						{
							month: 1,
							amount:500
						},
						{
							month: 2,
							amount:700
						},
						{
							month: 3,
							amount:1000
						},
						{
							month: 4,
							amount:1500
						}
					]}/>
				</div>

      </div>
    );
  }
}

function mapStateToProps(state){
    return {
        interestreateresult: 	state.calculator.interestreateresult,
        interestrate:	state.calculator.interestrate,
        savings:			state.calculator.savings,
        monthlydepo:state.calculator.monthlydepo,
        currency:state.calculator.currency,
        frequency:state.calculator.frequency
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getInterestRate:	getInterestRate,
        increaseInterestRate:	increaseInterestRate,
        decreaseInterestRate:	decreaseInterestRate,
        increaseSaving:	increaseSaving,
        decreaseSaving:	decreaseSaving,
        increaseMonthlyDeposit:	increaseMonthlyDeposit,
        decreaseMonthlyDeposit:	decreaseMonthlyDeposit,
        updateFrenquency:	updateFrenquency,
        updateCurrenc:	updateCurrency
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

