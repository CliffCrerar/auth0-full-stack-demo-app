
// import authConf from '../../../path.js';
import { DOMAIN, FE_CLIENT_ID, AUDIENCE } from '../../../auth.conf.json';
import * as process from 'process';

export const environment = {
	production: true,
	domain: DOMAIN || process.env.DOMAIN,
	clientId: FE_CLIENT_ID || process.env.FE_CLIENT_ID,
	audience: AUDIENCE || process.env.AUDIENCE,
	productsPath: '/api/products'
};
