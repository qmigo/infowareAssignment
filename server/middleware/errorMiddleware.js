const errorMiddleware = (err, res, req, next)=>{
    let error = {
        code: err.statusCode || 500,
        msg: error.msg || "Internal Servor Error"
    }
    
    res.status(error.code).json(error.msg)
}

module.exports = errorMiddleware