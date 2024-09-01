export function emailValidate(req, res, next) {
    const { email } = req.body;
    if (!email) {
        return next('Email is required.');
    }
    if(email.includes('@')===false){
        return next('Email is invalid.');
    }
    next();
}