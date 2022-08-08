export class MembersService {
  async getPost() {
    const https = require('https');
    const agent = new https.Agent({
      rejectUnauthorized: false,
    });
    const res = await fetch('https://78.108.218.94:25837/api/members', {
      agent,
      method: 'no-cors',
    });
    const post = await res.json();
    return post;
  }
}
