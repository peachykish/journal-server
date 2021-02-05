let express = require('express');
let app = express();

let log = require('./controllers/logController')

app.use('/log',log)

app.listen(3000,function(){
   console.log ('App is listening on port 3000'); 
})