

//  REDUCERS
export function calculatorReducers(state={interestreateresult:[],interestrate:0,savings:0,
                                    monthlydepo:0,currency:'GBP',frequency:'monthly'}, action) {
    switch(action.type){
        case "INTERESTRATERESULT_GET":
            return{...state,
                interestreateresult:action.payload,
            }
            break;
        case "INTERESTRATE_INCREASE":
            return{...state,
                interestrate:action.payload,
            }
            break;
        case "INTERESTRATE_DECREASE":
            return {...state,
                interestrate:action.payload,
            }
            break;
        case "SAVINGS_INCREASE":
            return{...state,
                savings:action.payload,
            }
            break;
        case "SAVINGS_DECREASE":
            return {...state,
                savings:action.payload,
            }
            break;
        case "MONTRLYDEPO_INCREASE":
            return{...state,
                monthlydepo:action.payload,
            }
            break;
        case "MONTRLYDEPO_DECREASE":
            return {...state,
                monthlydepo:action.payload,
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
