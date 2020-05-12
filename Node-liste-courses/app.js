  
const express = require('express');
const app = express();
const api = require('./api/v1/index');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connection = mongoose.connection;

app.set('port', (process.env.port || 3500));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use('/api/v1',api); 


mongoose.connect('mongodb://localhost:27017',{useNewUrlParser: true,useUnifiedTopology: true
    
});


app.use((req, res) => {
    const err = new Error('404 - Not found !!!!!');
    err.status = 404;
    res.json({msg : '404 - Not found !!!!!!!', err: err});
     
});



connection

    .on('error',(error) => {
    console.warn('Erreur durant la connexion à MongoDb',error);
    })
    .once('open',() =>
    {
            console.log('La connexion MongoDb est établie');

            app.listen(app.get('port'), () => {
                console.log(`Express server listening on port !!! ${app.get('port')}`);
            });
        
    })
   




