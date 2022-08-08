export class MembersService {
    getPost() {
        const https = require('https');
        const agent = new https.Agent({
            rejectUnauthorized: false,
        });
        const res = fetch('https://78.108.218.94:25837/api/members', {
            agent,
        });
        const post = res;
        return post;
    }
}
