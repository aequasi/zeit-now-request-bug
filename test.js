const request = require('request');

const handler = (req, res) => {
    request(
        'https://jsonplaceholder.typicode.com/todos/1',
        (err, resp, body) => {
            console.log(err, resp, body);

            if (res) {
                res.json(body);
            }
        }
    )
}

if (!process.env.NOW_REGION) {
    handler();
}

module.exports = handler;
