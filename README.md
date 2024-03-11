# Captcha Verification with Node.js

This Node.js application demonstrates how to implement captcha verification using Google's reCAPTCHA service.

## Prerequisites

- Node.js installed on your machine
- An internet connection to communicate with Google's reCAPTCHA service

## Installation

1. Clone or download the repository.
2. Navigate to the project directory in your terminal.
3. Install dependencies by running:

    ```
    npm install
    ```

## Configuration

Before running the application, you need to set up your Google reCAPTCHA secret key.

1. Obtain your Google reCAPTCHA secret key from the [reCAPTCHA admin console](https://www.google.com/recaptcha/admin).
2. Replace the value of `GOOGLE_RECAPTCHA_SECRET` in the `server.js` file with your secret key:

    ```javascript
    const GOOGLE_RECAPTCHA_SECRET = 'YOUR_SECRET_KEY_HERE';
    ```

## Usage

1. Start the server by running:

    ```
    node server.js
    ```

2. Open your web browser and navigate to `http://localhost:3000`.
3. Fill out and submit the form on the webpage. If the captcha verification is successful, you will receive a "Captcha ok!" response.

## Endpoint

- `POST /submit`: Endpoint for submitting the captcha response.

## Error Handling

- If captcha verification fails, an appropriate error message will be returned.
- The server responds with a 404 error for any invalid routes.

## Author

[carmelolg](https://carmelolg.github.io)

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to customize this README with additional information or sections as needed!