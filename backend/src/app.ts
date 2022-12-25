import * as express from 'express';
import * as cors from 'cors';

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

    this.app.get('/', (req: express.Request, res: express.Response) => {
      return res.send('worked')
    })
  }
}