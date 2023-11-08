// Cài đặt thư viện
const md = require('markdown-it')().use(require('markdown-it-emoji')).use(require('markdown-it-iframe'));;
const imsize = require('markdown-it-imsize');

md.use(imsize);

// Đọc nội dung README.md
const readme = require('fs').readFileSync('./README.md', 'utf8'); 

// Render markdown 
let html = md.render(readme);

;

md.use(require('markdown-it-emoji'), {
    emojis: {
      defs: 'https://gitmoji.carloscuesta.me/json' 
    }
  });
  const result = md.render(':sparkles: Hello world!'); 
  const marked = require('marked');
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false, 
    breaks: false,
    smartLists: true,
    smartypants: false,
    svg: true
  });
 
console.log(html);