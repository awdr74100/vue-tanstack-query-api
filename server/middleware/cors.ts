export default defineEventHandler((e) => {
  handleCors(e, {
    origin: ["http://localhost:5173"],
    credentials: true,
    methods: "*",
    allowHeaders: "*",
  });
  if (e.node.req.method === "OPTIONS") {
    return null;
  }
});
