import express, { Request, Response } from 'express';
import cors from 'cors';
import endpoints from './endpoints/index';

const app:any = express();

const corsOptions = {
  credentials: true,
  origin: true,
};
app.use(cors(corsOptions));

const port = process.env.PORT || 5000;

endpoints.forEach((endpoint) => {
  app[endpoint.method || 'get'](endpoint.path, async (req: Request, res: Response) => {
    const { data } = endpoint;
    const json = data ? await import(`./data/${data}`) : {};

    setTimeout(() => res.json(json.default), 500);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
