const express = require('express');
const  app = express();

app.get('/',() =>{
    res.send('index page');
});

app.get('/operacionSuma/:numero1/:numero2', (req,res) =>{
    const num1 = parseInt(req.params.numero1);
    const num2 = parseInt(req.params.numero2);
    console.log(num1);
    console.log(num2);
    res.send('recibido')
    s
    res.json(result)
});
app.get('/operacion/:numero1/:numero2', (req,res) =>{
    const num1 = parseInt(req.params.numero1);
    const num2 = parseInt(req.params.numero2);
    if(isNaN(num1) || isNaN(num2)){
        res.status(404);
        res.json({"error": 'Bad request'});
        return ;
    }else {
        const suma = num1 + num2;
        const  resta = num1 - num2;

        result = {
            suma: suma,
            resta: resta
        }
        res.json(result);
    }

});

app.listen(3000, () =>{
    console.log('server on port 3000')
})