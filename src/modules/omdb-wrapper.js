import axios from "axios";
const APIKEY = "daaccdd3";

const OMDBSearchByPage = async (searchText, page = 1) => {
    let returnObject = {
        respuesta : false,
        cantidadTotal : 0,
        datos : {}
    };
    let requestString = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}&page=${page}`;
    let respuesta = await axios.get(requestString);
    returnObject = respuesta.data

    return returnObject;
};

const OMDBSearchComplete = async (searchText) => {
    let returnObject = {
        respuesta : false,
        cantidadTotal : 0,
        datos : {}
    };
    let requestString = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}`;
    let response = await axios.get(requestString);
    returnObject = response.data

    return returnObject;
};
const OMDBGetByImdbID = async (imdbID) => {
    let returnObject = {
        respuesta : false,
        cantidadTotal : 0,
        datos : {}
    };
    let requestString = `http://www.omdbapi.com/?apikey=${APIKEY}&i=${imdbID}`;
    let response = await axios.get(requestString);
    returnObject = response.data

    return returnObject;
};

export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};