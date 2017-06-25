import axios from 'axios';

/**
 * GET THE RESULT as array of object for the graph, e.g.: [{month: 1, amount:500},{month: 2, amount:700},{month: 3, amount:1000},{month: 4, amount:1500}]
 * @returns {{type: string, payload: [*,*,*,*]}}
 */
export function getInterestRate(data){

    return function(dispatch){
        axios.post("/api/calculateinterestrate", data)
            .then(function(response){
                dispatch({type:"INTERESTRATERESULT_GET", payload:response.data})
            })
            /*
            .catch(function(err){
                dispatch({type:"INTERESTRATERESULT_ERROR", msg: 'error when calculating interest rate'})
            })
            */
    }

}

export function setInterestRate(val){
    console.log('setInterestRate',val);
    return {
        type:"INTERESTRATE_SET",
        payload: val
    }

}


export function setSaving(val){
    console.log('SAVINGS_SET',val);
    return {
        type:"SAVINGS_SET",
        payload: val
    }
}

export function setMonthlyDeposit(val){
    console.log('MONTLYDEPO_SET',val);
    return {
        type:"MONTLYDEPO_SET",
        payload: val
    }
}

export function updateFrenquency(val){

}

export function updateCurrency(val){

}






