import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const PORT = 3000;

app.use(
  "/payment-service",
  createProxyMiddleware({
    target: "http://localhost:3001/",
    pathRewrite: {
      "^/payment-service": "",
    },
  })
);

app.use(
  "/prescription-service",
  createProxyMiddleware({
    target: "http://localhost:3002/",
    pathRewrite: {
      "^/prescription-service": "",
    },
  })
);

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
