import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import shopifyBuy from 'shopify-buy'; // Import the shopify-buy module
import cors from 'cors';

const corsOptions = {
  origin: ['http://localhost:3000', 'https://highloversclub.com'],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 200
};

const app = express();
const port = 4200;

const shopifyClient = shopifyBuy.buildClient({
  domain: 'highloversclub.com',
  storefrontAccessToken: '23f2e180ef22943f3d32de2b1d239562'
});

// Fetch store info and products
// localhost:4200/api/products 
app.get('/api/products', cors(corsOptions), async (req, res) => {
  try {
    //const shop = await shopifyClient.shop.fetchInfo();
    const products = await shopifyClient.product.fetchAll();

    console.log(products);

    // products.forEach(product => {
    //   fullProducts.push(( await shopifyClient.product.fetch(product.id)));
    // })


    res.json({ products });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`CORS-enabled web server listening on port: ${port}!`);
});