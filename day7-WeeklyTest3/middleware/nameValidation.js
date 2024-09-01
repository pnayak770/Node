export function validate(req, res, next) {
    const { firstName, lastName } = req.body;

    if (firstName[0] !== firstName[0].toUpperCase()) {
        return next('First name must start with a capital letter.');
    }

    if (lastName[0] !== lastName[0].toUpperCase()) {
        return next('Last name must start with a capital letter.');
    }

    next(); 
}
