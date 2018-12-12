import readFilePromise from "fs-readfile-promise"
const path = require('path');

exports.handler = async  (event, context, callback) => {
    const dirname = __dirname;
    const currpath = path.dirname(__filename)
    const filename = __filename;
    let type = event.queryStringParameters.type;
    //let jsonData = await readFilePromise(`./json/${type}.json`,"utf8");
    callback(null, {
        statusCode: 200,
        body: `${dirname} -- ${currpath} -- ${filename}`
    });
}