import express from 'express';
import bodyParser from 'body-parser';
import { routes } from './routes';


const app = express();
app.use(express.json())
const PORT = 3001;


routes.forEach((route) => {
  const {method, path, middleware, handler} = route;
  app[method](path, ...middleware, handler)
})

app.listen(PORT, () => {
  console.log(`Express with Typescript! http://localhost:${PORT}`);
});
