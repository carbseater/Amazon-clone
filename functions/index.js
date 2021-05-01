const functions = require('firebase-functionts');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')("sk_test_51HY82EC5Jq1coe8rJXKKw6a10dWjNESgwLKC1ievAUwhi3AdSIXYqZivuAEww1R8s3ZSQbvL9zljqH8Sjr6iwTmz00ZSAez8ZT")

// App-config
const app = express();

// middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// App-routes
app.get('/', (req, res) => {
    res.status(200).send("Hello world");
})

//Listen command
exports.api = functions.https.onRequest(app);