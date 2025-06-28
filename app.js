import express from 'express';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import config from './config/config.js';
import { connectDB } from './utils/db.js';
import router from './routes/index.js';
import { swaggerSpec } from './swagger.js';
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: [config.corsOrigin],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
  })
);

// const PORT = config.port;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());
app.use(cookieParser());

connectDB();

app.use("/api", router);

// app.listen(PORT, () => {
//   console.log(`Running on PORT ${PORT}`);
// });
export default app;
