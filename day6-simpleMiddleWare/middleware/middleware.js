export function logger(req, res, next) {
    const dateTime=new Date().toLocaleString();

    console.log(`${req.method} ${req.path} ${req.ip}  ${dateTime}`);
    next();
}