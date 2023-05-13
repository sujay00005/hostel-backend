exports.paginatedResult = (model,query)=> {
    //returning so that it can act as middleware and take the request and return the processed data per page 
    return async (req, res, next) => {
        const page=parseInt(req.query.page);
        const limit=30;

        const startIndex=(page-1)*limit;
        const endIndex=page*limit;

        //console.log(startIndex+"============"+endIndex);

        const result={};
        const documentCount=await model.countDocuments().exec();

        result.documentCount=documentCount;

        if(endIndex < documentCount) {
            result.next={
                page: page+1,
            }
        }

        if(startIndex>0) {
            result.prev={
                page: page-1,
            }
        }

        //console.log("############################");
        //console.log(result);

        const requestQuery=req.query;
        //console.log("😊😉");
        


    //FOR QUERY
    let query={};

    if(!requestQuery.name||!requestQuery.phone||!requestQuery.email)
        query={};
    else if(requestQuery) {
        query={
            $or: [
                {'name': {$regex: requestQuery.name, $options: 'i'}},
                {'phone': {$regex: requestQuery.phone}},
                {'email': {$regex: requestQuery.email, $options: 'i'}},
            ]
        }
        }
        
        //Finds according to the query and then apply the limit and skip if result exceeds limit

        model.find(query).limit(limit).skip(startIndex)
            .then((foundResult) => {
                //console.log("Result Paginated");
                //console.log(result);
                result.results=foundResult;
                //console.log("😀😀😀😀😀😀")
                //console.log(result);
                res.paginatedResult=result;
                //console.log(result);
                return result;
            })
            .then(result => {
                next();
            })
            .catch(err=> console.log(err));
    }
}