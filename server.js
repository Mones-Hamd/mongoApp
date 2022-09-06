import express from 'express';
import dotenv from 'dotenv';
import { engine } from 'express-handlebars';
import router from './server/routes/router.js';
const config = dotenv.config();

const app = express();
const PORT = process.env.PORT || 80808;
//meddel ware functions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('assets/css'));
app.use(express.static('assets/js'));
app.use(express.static('assets/img'));
app.use('/', router);

app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    defaultLayout: 'main',
  }),
);
app.set('view engine', 'hbs');

app.listen(PORT, () =>
  console.log(`server is running on port : http://localhost:${PORT}`),
);
