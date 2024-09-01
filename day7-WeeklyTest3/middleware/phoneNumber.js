export function numberValidate(req, res, next) {
    const { phoneNumber } = req.body;
    if (!phoneNumber) {
        return next('Phone number is required.');
    }
    if(phoneNumber.length<10){
        return next('Phone number is invalid.');
    }
    next();
}