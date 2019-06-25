const request = require('request');

const handler = (req, res) => {
    /*
    request(
        'https://jsonplaceholder.typicode.com/todos/1',
        (err, resp, body) => {
            if (err) console.log(err);

            if (res) {
                res.status(200).json([JSON.parse(body)]);
            } else {
                console.log(body, typeof body); // JSON as string, string
                console.log(JSON.parse(body));
            }
        }
    )*/
    res.json(undefined);
}

if (!process.env.NOW_REGION) {
    handler();
}

module.exports = handler;
