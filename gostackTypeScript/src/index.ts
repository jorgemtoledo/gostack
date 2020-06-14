import express, { response } from 'express';
import { helloWorld } from './routes'

const app = express();

// app.get('/', (request, response) => {
//     return response.json({ message: 'Hello'});
// });

app.get('/', helloWorld);

app.listen(3333);