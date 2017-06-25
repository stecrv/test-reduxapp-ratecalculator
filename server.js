const express = require('express');

const app = express();

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

 var defresult = [
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
]
function calculate(data) {

  return defresult;
}

app.post('/api/calculateinterestrate', function(req, res){
    var data = req.body;
    res.json(defresult);
});



app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
