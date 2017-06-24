import React, { Component } from 'react'


export default class Instructions extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isVisible: false
        }
    }

    handleVisibility(e) {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    render() {

        return (
            <div id="Instructions">
                <button onClick={this.handleVisibility.bind(this)} >{this.state.isVisible? 'CLOSE' : 'Instructions'}</button>
                <div className={this.state.isVisible? 'show' : 'hide'}>
                    <p>The app must satisfy the following Acceptance Criteria (ACs):</p>
                    <ul>
                        <li>[] It should allow the user to vary the initial savings amount, monthly deposit and interest rate through the UI</li>
                        <li>[] It should display how much the user's initial savings amount will be worth over the next 50 years, to a monthly precision. This should assume that the monthly amount is paid in each month, and the value rises with the interest rate supplied.</li>
                        <li>[] It should allow the user to select how often interest is paid - either 'Monthly', 'Quarterly' or 'Annually'</li>
                        <li>[] It should allow the user to optionally select another currency to display the results in. If this is selected, it should convert the results using the latest exchange rate from GBP via a 3rd party API (e.g. <a href="http://fixer.io/">Fixer</a>)</li>
                        <li>[] All calculations must take place server-side, and all monthly projection data should be returned via an endpoint</li>
                        <li>[] The calculations must be triggered onChange of any input, to give live feedback on the input data.</li>
                        <li>[] You should manage app state using Redux (even though it is arguably overkill in this particular case)</li>
                    </ul>

                    <h3>Our Guidance</h3>

                    <p>Code quality</p>

                    <p>MVP</p>

                    <p>BDD/TDD</p>

                    <p>Build a simple API for bigger structure</p>

                    <p>Use multiple commit</p>
                </div>
            </div>
        )
    }
}
