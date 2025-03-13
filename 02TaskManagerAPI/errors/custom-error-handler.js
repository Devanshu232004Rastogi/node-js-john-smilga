
class CustomizedError extends Error{
    constructor(message , statusCode){
        super(message);

        this.statusCode = statusCode;
    }
}

const createCustomError = (message , statusCode)=>{
    return new CustomizedError (message , statusCode);
}

module.exports = {createCustomError , CustomizedError};