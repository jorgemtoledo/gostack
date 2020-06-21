import { Router } from 'express';
// import { uuid } from 'uuidv4';
import {startOfHour, parseISO, isEqual} from 'date-fns';
import Appointment from '../models/Appointment'
import AppointmentsRepository from '../repositories/AppointmentsRepository';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();



// interface Appointment {
//   id: string;
//   provider: string;
//   date: Date;
// }

// const appointments: Appointment[] = [];

// Method post
// Post http://localhost:3333/appointments
appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;
  const parseDate = startOfHour(parseISO(date));

  // const findAppointmentInSameDate = appointments.find(appointment =>
  //   isEqual(parseDate, appointment.date),
  // );

  const findAppointmentInSameDate = appointmentsRepository.findByDate(
    parseDate,
  );

  if (findAppointmentInSameDate) {
    return response
      .status(400)
      .json({ message: 'This appointment is already booked' });
  }


  // const appointment = {
  //   id: uuid(),
  //   provider,
  //   date: parseDate,
  // }

  // const appointment = new Appointment(provider, parseDate);

  // appointments.push(appointment);

  const appointment = appointmentsRepository.create(provider, parseDate);



  // return response.json({ message: 'Appointments' });
  return response.json(appointment);
});

export default appointmentsRouter;

