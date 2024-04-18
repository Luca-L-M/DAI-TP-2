import Alumno from "./models/alumno.js";
import ValidacionesHelper from "./models/ValidacionesHelper.js";
import {sumar, restar, multiplicar, dividir} from "./modules/matematica.js";
import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from "./modules/omdb-wrapper.js";
import express from "express"; // hacer npm i express
import cors from "cors"; // hacer npm i cors

const app = express();
const port = 3000;

const alumnosArray = [];
alumnosArray.push(new Alumno("Esteban Dido" , "22888444", 20));
alumnosArray.push(new Alumno("Matias Queroso", "28946255", 51));
alumnosArray.push(new Alumno("Elba Calao" , "32623391", 18));


// Agrego los Middlewares
app.use(cors()); // Middleware de CORS
app.use(express.json()); // Middleware para parsear y comprender JSON

// Aca pongo todos los EndPoints
app.get('/', (req, res) => { // EndPoint "/"
    res.status(200).send('Ya estoy respondiendo!');
})

app.get('/saludar/:nombre', (req, res) => { // EndPoint "/saludar/:nombre"
    res.status(200).send('Hola ' + req.params.nombre);
})

app.get('/validarFecha/:ano/:mes/:dia', (req, res) => { // EndPoint "/ValidarFecha/:año/:mes/:dia"
    let ano = ValidacionesHelper.getIntegerOrDefault(req.params.ano, 2000);
    let mes = ValidacionesHelper.getIntegerOrDefault(req.params.mes, 1);
    let dia = ValidacionesHelper.getIntegerOrDefault(req.params.dia, 1);
    let fecha = `${ano}-${mes}-${dia}`;
    fecha = Date.parse(fecha);
    if(!isNaN(fecha))
    {
        res.status(200).send(fecha.toString())
    } else {
        res.status(400).send();
    }
})

//Matematicas
app.get('/matematica/sumar', (req, res) => { // EndPoint "/matematica/sumar?n1=int&n2=int"
    let n1 = req.query.n1
    let n2 = req.query.n2
    let total = sumar(n1, n2)
    res.status(200).send(total);
})

app.get('/matematica/restar', (req, res) => { // EndPoint "/matematica/restar?n1=int&n2=int"
    let n1 = req.query.n1
    let n2 = req.query.n2
    let total = restar(n1, n2)
    res.status(200).send(total);
})

app.get('/matematica/multiplicar', (req, res) => { // EndPoint "/matematica/multiplicar?n1=int&n2=int"
    let n1 = req.query.n1
    let n2 = req.query.n2
    let total = multiplicar(n1, n2)
    res.status(200).send(total);
})

app.get('/matematica/dividir', (req, res) => { // EndPoint "/matematica/dividir?n1=int&n2=int"
    let n1 = req.query.n1
    let n2 = req.query.n2
    if(n2 == 0)
    {
        res.status(400).send("El divisor no puede ser 0");
    }
    else
    {
        let total = dividir(n1, n2)
        res.status(200).send(total);
    }
})

//OMDB
app.get('/omdb/searchbypage', (req, res) => { // EndPoint "/omdb/searchbypage?search=string&page=int"
    let search = req.query.search
    let p = req.query.p
    let returnobject = OMDBSearchByPage(search, p)
    res.status(200).send(returnobject);
})

app.get('/omdb/searchcomplete',(req, res)=>{ // EndPoint "/omdb/searchcomplete?search=string"
    let search = req.query.search
    let returnobject = OMDBSearchComplete(search)
    res.status(200).send(returnobject);
})

// Inicio el Server y lo pongo a escuchar.
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//Almunos
app.get('alumnosArray', (req, res)=>{ //Endpoint alumnos
    let search=req.query.search
    let returnobject = Alumno.toString
    res.status(200).send(returnobject);
})

app.get('alumnosArray', (req, res)=>{ //Endpoint alumnosDNI
    function findDNI(obj){
        return obj.DNI == req.query,dni
    }
    let returnobject = alumnosArray.find(findDNI)
    res.status(200).send(returnobject);
})

app.post('alumnosArray',(req, res)=> { // Endpoint alumnod/ Agregar por body
    let objBuscado=req.body
    res.json(obj)
    alumnosArray.push(new Alumno(objBuscado));
    res.status(201);
})

app.delete('alumnosArray',(req, res)=> {
    let objBuscado=req.body
    res.json(objBuscado)
    alumnos.findIndex(alumno => alumno.dni == objBuscado);
    if(objBuscado!=-1)
    {
        alumnosArray.splice(objBuscado,1)
        res.status(200);
    }
    else res.status(404); 

})