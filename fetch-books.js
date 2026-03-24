const fs = require('fs');

const urls = [
  {name: 'book1.jpg', url: 'https://product.kyobobook.co.kr/detail/S000212988137'},
  {name: 'book2.jpg', url: 'https://www.yes24.com/product/goods/25099950'},
  {name: 'book3.jpg', url: 'https://www.yes24.com/product/goods/25099973'}
];

async function run() {
  for(const {name, url} of urls) {
    try {
      const res = await fetch(url);
      const text = await res.text();
      let match = text.match(/<meta\s+(?:property|name)="og:image"\s+content="([^"]+)"/i);
      if(!match) {
        match = text.match(/<meta\s+content="([^"]+)"\s+(?:property|name)="og:image"/i);
      }
      if(match) {
        console.log('Found', name, match[1]);
        const imgRes = await fetch(match[1]);
        const buffer = await imgRes.arrayBuffer();
        fs.writeFileSync('public/' + name, Buffer.from(buffer));
      } else {
        console.log('Not found obj:', name);
      }
    } catch(e) {
      console.error(e);
    }
  }
}
run();
