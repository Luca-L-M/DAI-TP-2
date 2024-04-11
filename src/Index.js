import Alumno from "./models/alumno.js";
import {sumar, restar, multiplicar, dividir} from "./modules/matematica.js";
import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from "./modules/omdb-wrapper.js";
import express from "express"; // hacer npm i express
import cors from "cors"; // hacer npm i cors

const app = express();
const port = 3000;

// Agrego los Middlewares
app.use(cors()); // Middleware de CORS
app.use(express.json()); // Middleware para parsear y comprender JSON

// Aca pongo todos los EndPoints
app.get('/', (req, res) => { // EndPoint "/"
    res.status(200).send('Ya estoy respondiendo!');
})

app.get('/saludar/:nombre', (req, res) => { // EndPoint "/saludar/:nombre"
    res.status(200).send('Hola' + req.params.nombre);
})

app.get('/validarFecha/:año/:mes/:dia', (req, res) => { // EndPoint "/ValidarFecha/:año/:mes/:dia"
    let fecha = `${req.params.año}-${req.params.mes}-${req.params.dia}`;
    let fechanum = null;
    fechanum = Date.parse(fecha)
    if(!isnan(fechanum))
    {
        res.status(200).send(fechanum)
    } else {res.status(400)}
})

app.get('/matematica/sumar', (req, res) => { // EndPoint "/matematica/sumar?n1=int&n2=int"
    n1 = req.query.n1
    n2 = req.query.n2
    total = sumar(n1, n2)
    res.status(200).send(total);
})

// Inicio el Server y lo pongo a escuchar.
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
