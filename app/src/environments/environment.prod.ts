
import authConf from '../../../auth.conf.json';

export const environment = {
  production: true,
  domain: authConf.DOMAIN,
  clientId: authConf.CLIENT_ID
};
