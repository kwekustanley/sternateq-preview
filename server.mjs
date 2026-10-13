import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.ttf':'font/ttf'};
const port = Number(process.env.PORT || 4173);
http.createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const filename = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (!filename.startsWith(root + path.sep)) { response.writeHead(403).end(); return; }
    if (['.mjs','.json','.md'].includes(path.extname(filename))) { response.writeHead(404).end(); return; }
    let content;
    let extension = path.extname(filename);
    try { content = await readFile(filename); }
    catch (error) {
      if (error.code !== 'ENOENT' || extension) throw error;
      content = await readFile(path.join(root, 'index.html'));
      extension = '.html';
    }
    response.writeHead(200, {'Content-Type':mime[extension] || 'application/octet-stream','X-Content-Type-Options':'nosniff'}).end(content);
  } catch { response.writeHead(404).end('Not found'); }
}).listen(port, '127.0.0.1', () => console.log(`Sternateq preview: http://localhost:${port}`));
