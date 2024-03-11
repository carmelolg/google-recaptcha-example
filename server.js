const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

const GOOGLE_RECAPTCHA_SECRET = '___GOOGLE_KEY_BACKEND___'
const GOOGLE_RECAPTCHA_API = 'https://www.google.com/recaptcha/api/siteverify'

app.get('/', (_request, _response) => {
    _response.sendFile(__dirname + '/index.html')
});

app.post('/submit', function (_request, _response) {

    let captchaInput = _request.body['g-recaptcha-response']

    if (captchaInput === undefined || captchaInput === '' || captchaInput === null) {
        return _response.json({
            'code': 1,
            'response': 'Resolve the captcha first'
        })
    }

    let _queryParams = {
        'secret': GOOGLE_RECAPTCHA_SECRET,
        'response': captchaInput,
        'remoteip': _request.socket.remoteAddress
    }

    request({
        url: GOOGLE_RECAPTCHA_API,
        qs: _queryParams
    }, function (err, response, body) {
        body = JSON.parse(body);
        if (body.success !== undefined && !body.success) {
            return _response.json({
                "code": 2,
                "response": "Captcha verification has failed. Try again."
            })
        }
        _response.json({
            "code": 3,
            "response": "Captcha ok!"
        })
    })



})

// for handling 404 requests.
app.use("*", function (req, res) {
    res.status(404).send("404");
})

app.listen(3000, function () {
    console.log('app listening on port:3000');
});