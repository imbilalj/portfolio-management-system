import app from './app.js';
import config from './config/config.js';
import { logger } from './utils/logger.js';

const PORT = config.port;

app.listen(PORT, () => {
  logger.info(`Running on PORT ${PORT}`);
});
