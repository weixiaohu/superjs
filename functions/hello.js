exports.handler = function (event, context, callback) {
    let data = {
        "terminalUrl": "https://datav.aliyun.com/share/60a862488f8563e284c126989aabf8e9",
        "dealerUrl": "https://datav.aliyun.com/share/bca4f8ee9a2abcd1f208719ce40cb070"
    };
    callback(null, {
        statusCode: 200,
        body: JSON.stringify([data])
    });
}