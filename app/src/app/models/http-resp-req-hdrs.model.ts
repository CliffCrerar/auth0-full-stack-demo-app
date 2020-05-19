/**
 * @description ExpressRequestHeaders
 */

export class ExpressRequestHeaders {
	public 'accept-encoding': string;
	public 'accept-language': string;
	public 'sec-fetch-dest': string;
	public 'sec-fetch-mode': string;
	public 'sec-fetch-site': string;
	public 'if-none-match': string;
	public 'content-type': string;
	public 'user-agent': string;
	public authorization: string;
	public connection: string;
	public referer: string;
	public accept: string;
	public cookie: string;
	public host: string;
	constructor(p) {
		this['accept-encoding'] = p['accept-encoding'];
		this['accept-language'] = p['accept-language'];
		this['sec-fetch-dest'] = p['sec-fetch-dest'];
		this['sec-fetch-mode'] = p['sec-fetch-mode'];
		this['sec-fetch-site'] = p['sec-fetch-site'];
		this['if-none-match'] = p['if-none-match'];
		this['content-type'] = p['content-type'];
		this['user-agent'] = p['user-agent'];
		this.authorization = p.authorization;
		this.connection = p.connection;
		this.referer = p.referer;
		this.cookie = p.cookie;
		this.accept = p.accept;
		this.host = p.host;
	}
}
