// Node.js HTTP server wrapper for Hostinger Node.js hosting
// This wraps the TanStack Start SSR server (built for fetch API) into a standard Node.js HTTP server

import { createServer } from "node:http";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;

// Dynamically import the built TanStack Start server
const { default: app } = await import("./dist/server/server.js");

const server = createServer(async (req, res) => {
  try {
    // Build a full URL from the request
    const host = req.headers.host || `localhost:${PORT}`;
    const protocol = req.headers["x-forwarded-proto"] || "http";
    const url = `${protocol}://${host}${req.url}`;

    // Read the request body if present
    const chunks = [];
    for await (const chunk of req) {
      chunks.push(chunk);
    }
    const body = chunks.length > 0 ? Buffer.concat(chunks) : null;

    // Build a Fetch API Request object
    const request = new Request(url, {
      method: req.method,
      headers: req.headers,
      body: body && body.length > 0 ? body : undefined,
      duplex: "half",
    });

    // Call the TanStack Start fetch handler
    const response = await app.fetch(request, {}, {});

    // Write status and headers back to Node.js response
    res.writeHead(response.status, Object.fromEntries(response.headers.entries()));

    // Stream the response body
    if (response.body) {
      const reader = response.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(value);
      }
    }
    res.end();
  } catch (err) {
    console.error("Server error:", err);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Internal Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`Palm Beach Rental Pros running on port ${PORT}`);
});
