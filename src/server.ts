import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

import userRouter from "./routers/user";
import taskRouter from "./routers/task";

const app = express();

const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 3000;

// Swagger config https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.1",
    info: {
      title: "Template API",
      version: "1.0.0",
      license: {
        name: "MIT",
      },
      description: "Swagger documentation here",
      contact: {
        name: "Milenkovic Mihailo",
        email: "mihailo.milenkovic4@gmail.com",
      },
      servers: [`${host}:${port}`],
    },
  },
  apis: [`src/routers/*.ts`],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

const swaggerUIOptions = {
  // explorer: true,
};
console.log(swaggerDocs);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs, swaggerUIOptions)
);
app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
