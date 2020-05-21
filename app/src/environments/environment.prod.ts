
import authConf from '../../../path.js';

export const environment = {
	production: true,
	domain: authConf.DOMAIN,
	clientId: authConf.FE_CLIENT_ID,
	audience: authConf.AUDIENCE,
	productsPath: '/api/products'
};
