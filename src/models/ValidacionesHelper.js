class ValidacionesHelper
{
    /**
    * Este método recibe un 'value', e intenta convertirlo a un número entero,
    * si por alguna razón falla retorna el 'defaultValue', sino el valor
    * numérico entero del parámetro 'value'.
    * @param {*} value valor a verificar.
    * @param {*} defaultValue valor por default en el caso de que 'value' no
    * se pueda convertir a un número entero.
    * @returns Un número entero.
    */
    getIntegerOrDefault = (value, defaultValue) => {
        let result
        result = parseInt(value)
        if(isNaN(result))
        {
            return defaultValue
        }
        else return result
    };

    /**
    * Este método recibe un 'value', en el caso de que sea undefined o null
    * retorna el 'defaultValue', sino el valor del parámetro 'value'.
    * @param {*} value valor a verificar.
    * @param {*} defaultValue valor por default en el caso de que 'value' sea
    * undefined o null.
    * @returns Un número entero.
    *
    * @example
    * let variable;
    * let result1 = ValidacionesHelper.getStringOrDefault("10", ""); // returns: "10"
    * let result2 = ValidacionesHelper.getStringOrDefault(null, "TEST"); // returns: "TEST"
    * let result3 = ValidacionesHelper.getStringOrDefault(variable, "TEST"); // returns: "TEST"
    */
    getStringOrDefault = (value, defaultValue) => {
        let result
        result = toString(value)
        if(isNaN(result))
        {
            return result
        }
        else return defaultValue
    };
}

export default new ValidacionesHelper();