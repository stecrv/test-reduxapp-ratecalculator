const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

const defResult = null;

var baseLenght = 12;

function oneRate(past, current, rate){

    current = parseInt(current);
    past = parseInt(past);
    rate =  parseFloat(rate);

    // not sure about this
    var r =  past +  current  + (current *  (rate / 100))

    return r.toFixed(2);
}
function calculate(data) {

    if (!data) return defResult;

    var r =[];
    var lastAmount = parseInt(data.savings);

    for (let i = 0; i < baseLenght; i++) {
        r.push(
            {
                month: i,
                amount: oneRate(lastAmount, data.monthlydepo, data.interestrate)
            }
        )
        lastAmount = lastAmount + parseInt(data.monthlydepo)
    }
    return r;
}

app.post('/api/calculateinterestrate', function (req, res) {
    res.json(calculate(req.body));
});


app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
