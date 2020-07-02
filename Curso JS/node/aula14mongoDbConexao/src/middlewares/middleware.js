module.exports = (req, res, next) => {
    if(req.body.cliente) {
        console.log();
        console.log(`Estou te observando ${req.body.cliente}`);
        console.log();
    }
    next();
};