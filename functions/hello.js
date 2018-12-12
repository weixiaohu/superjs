exports.handler = function (event, context, callback) {
    console.log(event.queryStringParameters)
    let data = {
        "url": event.queryStringParameters.url
    };
    callback(null, {
        statusCode: 200,
        body: JSON.stringify([data])
    });
}