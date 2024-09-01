export function password(req, res, next) {
    const { password } = req.body;

    if (!password) {
        return next(new Error('Password is required.'));
    }

    if (password.length < 8) {
        return next('Password must be at least 8 characters long.');
    }

    const hasSpecialCharacter = /[^A-Za-z0-9]/.test(password);
    
    
    const hasUppercaseLetter = /[A-Z]/.test(password);
    
    
    const hasNumericCharacter = /[0-9]/.test(password);

    if (!hasSpecialCharacter || !hasUppercaseLetter || !hasNumericCharacter) {
        return next('Password must contain at least one special character, one uppercase letter, and one numeric character.');
    }

    next(); 
}
