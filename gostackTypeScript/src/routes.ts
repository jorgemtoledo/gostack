import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'jorge@mail.com',
        password: '123456',
        techs: [
            'NodeJs',
            'ReactJs',
            'React Native',
            { title: 'Javascript', experience: 100 }
        ]
    })

    return response.json({ message: 'Hello' });
}