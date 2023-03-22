
function middleware(req,res,next){
    console.log('midd working');
    next()
}
module.exports=middleware