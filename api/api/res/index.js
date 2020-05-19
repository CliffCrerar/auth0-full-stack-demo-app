

module.exports = class ResponseHeaders {

    ok = (body,req,res) => res.status(200).send({
            path: req.path,
            query: req.query,
            headers: req.headers,
            name: 'HttpOkResponse',
            status: 200,
            statusText: 'Ok',
            Ok: true,
            url: req.referrer,
            message: 'Requested fulfilled with no errors.',
            body
        })
    
    error = (status,body,req,res) => res.status(status).send({
            path: req.path,
            query: req.query,
            name: 'HttpErrorResponse',
            headers: req.headers,
            status,
            statusText: this.interpretCode(status),
            Ok: false,
            url: req.referrer,
            message: 'Http failure for response for '+ req.referrer,
            body
    })

    interpretCode(code){
        switch(code){
            case 401: return 'Request Not authorized';
            case 404: return 'Not Found';
            case 500: return 'Internal Server Error';
            case 503: return 'Service not available';
            case 504: return 'Gateway timeout';
            case 400: return 'Bad Request';
            default: return 'Unknown Error';
        }
    }
}