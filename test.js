const request = require('request');

export default (req, res) => {
    request(
        'https://jsonplaceholder.typicode.com/todos/1',
        (err, resp, body) => {
            console.log(err, resp, body);

            res.json(body);
        }
    )
}
