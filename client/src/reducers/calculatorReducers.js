

//  REDUCERS
export function calculatorReducers(state={interestreateresult:{interestrate: 0,savings: 0, monthlydepo: 0},currency:'GBP',frequency:'monthly'}, action) {
    switch(action.type){
        case "INTERESTRATERESULT_GET":
            return{...state,
                interestreateresult:action.payload,
            }
            break;
        case "FREQUENCY_UPDATE":
            return {...state,
                frequency:action.payload,
            }
            break;
        case "CURRENCY_UPDATE":
            return {...state,
                currency:action.payload,
            }
            break;

    }
    return state
}
