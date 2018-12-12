import readFilePromise from "fs-readfile-promise"

exports.handler = async  (event, context, callback) => {
    let type = event.queryStringParameters.type
    let jsonData = await readFilePromise(`./json/${type}.json`,"utf8");
    callback(null, {
        statusCode: 200,
        body: jsonData
    });
}