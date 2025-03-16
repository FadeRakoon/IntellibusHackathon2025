const server = Bun.serve({
  port: 3000,
  fetch(request) {
    // Handle preflight requests
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
          // Optional: "Access-Control-Max-Age": "86400",
        },
      });
    }
    
    // For all other requests, add the CORS header
    const response =  Response.json({text:"Welcome to Bun!"});
    response.headers.set("Access-Control-Allow-Origin", "*");
    return response;
  },
});

console.log(`Listening on ${server.url}`);
