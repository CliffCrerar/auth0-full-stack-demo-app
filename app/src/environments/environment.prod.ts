
import authConf from '../../../auth.conf.json';

export const environment = {
  production: true,
  domain: authConf.DOMAIN,
  clientId: authConf.FE_CLIENT_ID,
  audience: authConf.AUDIENCE
};
