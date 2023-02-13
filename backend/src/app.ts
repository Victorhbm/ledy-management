import * as cors from 'cors';
import * as express from 'express';
import RegisterRouter from './routes/RegisterRouter';
import LoginRouter from './routes/LoginRouter';
import CategoryRouter from './routes/CategoryRouter';
import SubcategoryRouter from './routes/SubcategoryRouter';
import CustomerRouter from './routes/CustomerRouter';
import ErrorMiddleware from './middlewares/ErrorMiddleware';

export default class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config():void {
    const acessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Acess-Control-Allow-Origin', '*');
      res.header('Acess-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS, PUT, PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    }

    this.app.use(acessControl);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT);
    console.log(`Server is running on PORT: ${PORT}`);
  }

  private routes():void {
    this.app.use(express.json());
    this.app.use(cors());

    this.app.use('/register', RegisterRouter);
    this.app.use('/login', LoginRouter);
    this.app.use('/category', CategoryRouter);
    this.app.use('/subcategory', SubcategoryRouter);
    this.app.use('/customer', CustomerRouter);

    this.app.use(ErrorMiddleware);
  }
}