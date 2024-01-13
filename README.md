# API Gateway for Healthcare Services

This project serves as an API Gateway for coordinating and proxying requests to different healthcare services. It is built using [Express](https://expressjs.com/) and utilizes [http-proxy-middleware](https://www.npmjs.com/package/http-proxy-middleware) for handling proxy requests.

## Features

- **CORS Support:** Cross-Origin Resource Sharing is enabled using [cors](https://www.npmjs.com/package/cors) middleware.

- **Proxy to Payment Service:**

  - Path: `/payment-service`
  - Target: [https://prescription-payment-service.onrender.com/](https://prescription-payment-service.onrender.com/)

- **Proxy to Prescription Service:**
  - Path: `/prescription-service`
  - Target: [https://prescription-service-kttk.onrender.com/](https://prescription-service-kttk.onrender.com/)

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- [npm](https://www.npmjs.com/) (Node Package Manager) installed

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/alperengokbak/Prescription-Api-Gateway.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the API Gateway:

   ```bash
   npm run start
   ```

   The API Gateway will be running on [http://localhost:3000](http://localhost:3000).

2. Send requests to the healthcare services through the specified paths.

## Configuration

You can customize the proxy paths and targets in the `index.js` file.

- For Payment Service:

  ```javascript
  "/payment-service": {
      target: "https://prescription-payment-service.onrender.com/",
      // ... other configurations
  }
  ```

- For Prescription Service:

  ```javascript
  "/prescription-service": {
      target: "https://prescription-service-kttk.onrender.com/",
      // ... other configurations
  }
  ```

## Acknowledgments

- Special thanks to the creators of [Express](https://expressjs.com/) and [http-proxy-middleware](https://www.npmjs.com/package/http-proxy-middleware).
