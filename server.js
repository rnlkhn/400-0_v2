import { createServer } from "node:http";
import { createReadStream, existsSync } from "node:fs";
import { stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const HOST = process.env.HOST || "127.0.0.1";
const PORT = Number(process.env.PORT || 3000);
const ROOT = process.cwd();

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
};

function resolvePath(urlPath) {
  const cleanPath = urlPath === "/" ? "/index.html" : urlPath;
  const safePath = normalize(cleanPath).replace(/^(\.\.[/\\])+/, "");
  return join(ROOT, safePath);
}

createServer(async (request, response) => {
  const filePath = resolvePath(request.url || "/");

  if (!existsSync(filePath)) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  const fileStat = await stat(filePath);
  if (!fileStat.isFile()) {
    response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Forbidden");
    return;
  }

  const extension = extname(filePath);
  response.writeHead(200, {
    "Content-Type": MIME_TYPES[extension] || "application/octet-stream",
  });
  createReadStream(filePath).pipe(response);
}).listen(PORT, HOST, () => {
  console.log(`400-0 is running at http://${HOST}:${PORT}`);
});
