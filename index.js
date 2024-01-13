import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());

app.use(
  "/payment-service",
  createProxyMiddleware({
    target: "https://prescription-payment-service.onrender.com",
    pathRewrite: {
      "^/payment-service": "",
    },
  })
);

app.use(
  "/prescription-service",
  createProxyMiddleware({
    target: "https://prescription-service-kttk.onrender.com",
    pathRewrite: {
      "^/prescription-service": "",
    },
  })
);

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
