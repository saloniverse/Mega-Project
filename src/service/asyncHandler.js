// const asyncHandler = "Saloni"
// const asyncHandler = () => {}
// const asyncHandler = (func) => {} // taking function as argument & passing into the body of the function
// const asyncHandler = (func) => () => {} // taking function as argument & passing it to anaother function

const asyncHandler = (func) => async (req, res, next) => {
    try{
        await func(req, res, next)
    } catch(error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message
        })
    }
}
export default asyncHandler;