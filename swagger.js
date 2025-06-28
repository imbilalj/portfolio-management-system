import swaggerJsDoc from 'swagger-jsdoc';
import config from './config/config.js';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'HCL Hackathon API',
      version: '1.0.0',
      description: 'HCL Hackathon API Docs',
    },
    servers: [{ url: `http://localhost:${config.port}` }],
  },
  apis: ['./routes/*.js'],
};

export const swaggerSpec = swaggerJsDoc(options);
