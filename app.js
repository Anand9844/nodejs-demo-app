const http = require('node:http');

function createServer() {
  return http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <!doctype html>
      <html>
        <head><title>DevOps CI/CD Demo</title></head>
        <body style="font-family:Arial,sans-serif;text-align:center;margin-top:80px">
          <h1>DevOps CI/CD Pipeline is Working!</h1>
          <p>Node.js + Docker + GitHub Actions</p>
          <p>The system architecture incorporates Docker for containerization and GitHub Actions for continuous integration and continuous deployment (CI/CD).</p>
        </body>
      </html>
    `);
  });
}

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  createServer().listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = { createServer };
