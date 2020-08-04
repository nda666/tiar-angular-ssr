import { Request, Response, NextFunction } from 'express';
import { User } from '../models/user';

export class UserRoute {

  public userRoute(app): void {
    app.route('/api/user').get((req: Request, res: Response, next: NextFunction) => {
      User.find((err, users) => {
        console.log(User)
        if (err) {
          return next(err);
        }
        res.json(users);
      });
    });

    app.route('/api/user/:id').get((req: Request, res: Response, next: NextFunction) => {
      User.findById(req.params.id, (err, user) => {
        if (err) {
          return next(err);
        }
        res.json(user);
      });
    });

    app.route('/api/user').post((req: Request, res: Response, next: NextFunction) => {
      console.log(req.body);
      User.create(req.body, (err, user) => {
        if (err) {
          return next(err);
        }
        res.json(user);
      });
    });

    app.route('/api/user/:id').put((req: Request, res: Response, next: NextFunction) => {
      User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
        if (err) {
          return next(err);
        }
        res.json(user);
      });
    });

    app.route('/api/user/:id').delete((req: Request, res: Response, next: NextFunction) => {
      User.findByIdAndRemove(req.params.id, req.body, (err, user) => {
        if (err) {
          return next(err);
        }
        res.json(user);
      });
    });
  }
}
