
// import authConf from '../../../path.js';
import env from '../../../auth.conf.json';

export const environment = {
	production: true,
	domain: env.DOMAIN,
	clientId: env.FE_CLIENT_ID,
	audience: env.AUDIENCE,
	productsPath: '/api/products'
};
