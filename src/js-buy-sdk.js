import fetch from 'node-fetch';
import Client from 'shopify-buy';

global.fetch = fetch;

const client = Client.buildClient({
	storefrontAccessToken: '23f2e180ef22943f3d32de2b1d239562',
  	domain: 'highloversclub.com'
});

export default client;