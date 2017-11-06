import {Request, Response} from 'express';

export function processLogin(req: Request, res: Response) {

    res.render('login');
}