class ApiStatus extends Error {

    constructor (status, message) {
        super();
        this.status = status;
        this.message = message;
    }

    static badRequest(message) {
        return new ApiStatus(400, message);
    }

    static UnauthorizedError() {
        return new ApiStatus(401, "Пользователь не авторизован");
    }

    static forbidden(message) {
        return new ApiStatus(403, message);
    }

    static pageNotFound(message) {
        return new ApiStatus(404, message);
    }
    
    //ошибки сервера
    static internal(message) {
        return new ApiStatus(500, message);
    }
}

module.exports = ApiStatus;