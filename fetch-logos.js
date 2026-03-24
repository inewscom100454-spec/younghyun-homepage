const fs = require('fs');
const https = require('https');

const urls = [
  {name: 'logo_koma.jpg', url: 'https://koma.qshop.ai/8nmbuh7f'},
  {name: 'logo_newscom.jpg', url: 'https://blog.naver.com/newsad1/220208313890'},
  {name: 'logo_lovelytattoo.jpg', url: 'https://www.lovelytattoo.co.kr/'},
  {name: 'logo_1promarket.jpg', url: 'https://smartstore.naver.com/1promarket'},
  {name: 'logo_1procafe.jpg', url: 'https://naver.me/GCvfLV8m'},
  {name: 'logo_kuamp.jpg', url: 'https://www.kuamp.co.kr/'}
];

async function run() {
  for(const {name, url} of urls) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } });
      const text = await res.text();
      let match = text.match(/<meta\s+(?:property|name)="og:image"\s+content="([^"]+)"/i);
      if(!match) {
        match = text.match(/<meta\s+content="([^"]+)"\s+(?:property|name)="og:image"/i);
      }
      if(match) {
        let imgUrl = match[1];
        // Handle relative URLs
        if (imgUrl.startsWith('//')) {
           imgUrl = 'https:' + imgUrl;
        } else if (imgUrl.startsWith('/')) {
           const urlObj = new URL(url);
           imgUrl = urlObj.origin + imgUrl;
        }
        console.log('Found', name, imgUrl);
        const imgRes = await fetch(imgUrl);
        const buffer = await imgRes.arrayBuffer();
        fs.writeFileSync('public/' + name, Buffer.from(buffer));
      } else {
        console.log('Not found obj:', name);
      }
    } catch(e) {
      console.error(e.message);
    }
  }
}
run();
