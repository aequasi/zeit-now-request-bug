require('dotenv').config();
const request          = require('request');
const {SecretsManager} = require('aws-sdk');

const manager = new SecretsManager({
    region:      process.env.AWS_REGION,
    credentials: {
        accessKeyId:     process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

const handler = async (req, res) => {
    const secret = await manager.getSecretValue({SecretId: process.env.SECRET_ID}).promise();

    try {
        res.json(JSON.parse(secret.SecretString));
    } catch (ignored) {
        res.json(secret.SecretString);
    }
};

if (!process.env.NOW_REGION) {
    handler(null, {json: (msg) => console.log(msg)});
}

module.exports = handler;
