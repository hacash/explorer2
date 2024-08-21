
const fullnode = koappx.model('fullnode');


// cache key
const ck_supply = "supply";

module.exports = async function(cnf, ctx){

    // check cache
    let res = ctx.cache.get(ck_supply);
    if(res){
        ctx.apiData( res )
        return
    }

    // query from fullnode
    try {

        res = await fullnode.query('supply');
        // console.log(res)
        ctx.cache.set(ck_supply, res, 300); // cache 5min
        ctx.apiData( res )

    }catch(e) {

        ctx.apiError(e)

    }
    
}
    