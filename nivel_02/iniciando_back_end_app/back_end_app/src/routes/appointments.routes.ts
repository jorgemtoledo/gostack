import { Router, request } from 'express';
import { getCustomRepository } from 'typeorm';

import {parseISO} from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const appointmentsRouter = Router();
// const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.get('/', async (request, response) => {
  // console.log(request.user)

  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointments = await appointmentsRepository.find();

  return response.json(appointments);
})

// Method post
// Post http://localhost:3333/appointments
appointmentsRouter.post('/', async (request, response) => {

  const { provider_id, date } = request.body;

  console.log(request.body)
  const parsedDate = parseISO(date);

  const createAppointment = new CreateAppointmentService();

  const appointment = await createAppointment.execute({
    provider_id,
    date: parsedDate
  });

  return response.json(appointment);

});

export default appointmentsRouter;
