import { Router, response } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

// routes.get('/', (request, response) =>  response.json({ message: 'Hello' }));
// routes.get('/', (request, response) => {
//   return response.json({ message: 'Hello' });
// });

routes.use('/appointments', appointmentsRouter);


export default routes
