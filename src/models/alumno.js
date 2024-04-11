export default class Alumno
{

    constructor(username = "Adan", dni = "00000001", edad = 5603)
    {
        this.Username = username
        this.DNI = dni
        this.Edad = edad
    }

    toString()
    {
        return `Nombre: ${this.Username}, DNI: ${this.DNI} y Edad: ${this.Edad}`;
    }
}