import React, {Component} from 'react';
import CurrencyInput from './components/CurrencyInput'
import SliderInput from './components/SliderInput'
import DisplayGraph from './components/DisplayGraph'
import Instructions from './components/Instructions'
import './App.css';

import {render, findDOMNode} from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getInterestRate, updateFrenquency, updateCurrency} from './actions/calculatorAction';

getInterestRate, updateFrenquency, updateCurrency

class App extends Component {
    constructor() {
        super();
        this.state = {
            interestrate: 0,
            savings: 0,
            monthlydepo: 0,
        }
    }

    componentDidMount() {
        //TODO get default data from api
        this.props.getInterestRate(null)
    }

    handleValueChange(type, val) {

        this.setState({[type]: val})

        const data = {
            interestrate: this.state.interestrate,
            savings: this.state.savings,
            monthlydepo: this.state.monthlydepo
        }
        this.props.getInterestRate(data);
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
                        <CurrencyInput defaultValue={0} type='savings' onChangeVal={this.handleValueChange.bind(this)}/>
                    </div>
                    <div className="inline oneThird">
                        <p className="input-label">How much will you save each month?</p>
                        <CurrencyInput defaultValue={0} type="monthlydepo"
                                       onChangeVal={this.handleValueChange.bind(this)}/>
                    </div>
                    <div className="inline oneThird">
                        <p className="input-label">How much interest will you earn per year?</p>
                        <SliderInput defaultValue={4} type="interestrate"
                                     onChangeVal={this.handleValueChange.bind(this)}/>
                    </div>
                    <Instructions/>

                </div>
                <div className="financial-display">
                    {this.props.interestreateresult && this.props.interestreateresult.length>0 ?
                        <DisplayGraph data={this.props.interestreateresult}/>
                        : <div><h2>Please complete the form</h2></div>
                    }

                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        interestreateresult: state.calculator.interestreateresult,
        currency: state.calculator.currency,
        frequency: state.calculator.frequency
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getInterestRate: getInterestRate,
        updateFrenquency: updateFrenquency,
        updateCurrenc: updateCurrency
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

