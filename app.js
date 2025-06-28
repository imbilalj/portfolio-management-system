import express from 'express';
import swaggerUi from 'swagger-ui-express';
import config from './config/config.js';
import { connectDB } from './utils/db.js';
import router from './routes/index.js';
import { swaggerSpec } from './swagger.js';

const app = express();

// const PORT = config.port;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());

connectDB();

app.use('/api', router);

// app.listen(PORT, () => {
//   console.log(`Running on PORT ${PORT}`);
// });
export default app;
