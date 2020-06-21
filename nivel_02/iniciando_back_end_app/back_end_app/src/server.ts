import 'reflect-metadata';

import express, { Request, Response, NextFunction} from 'express';
import 'express-async-errors';

import routes from './routes';
import uploadConfig from './config/upload';
import AppError from './errors/appError';



import './database';

const app = express();

app.use(express.json());
// http://localhost:3333/files/d3f1f650e42c692aab20-projeto_server.png
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {

    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    console.error(err);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);


app.listen(3333, () => {
    console.log('Server started!')
});
