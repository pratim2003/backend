/*const asyncHandler = (fn)=>async (req,res,next)=>{
    try {
        await fn(req,res,next)
    } catch (error) {
        res.status(next(error.code)).json({
            messsage : error.messsage,
            success : false
        })
    }
}*/
const asyncHandler = (apiHandler)=>{
    (req,res,next)=>{
        Promise.resolve(apiHandler(req,res,next)).catch((error)=>next(error))
    }
}
export {asyncHandler}