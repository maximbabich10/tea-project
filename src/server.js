import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
import path from 'path';
import jsxRender from './utils/jsxRender';
import indexRouter from './routes/indexRouter';
import apiAuthRouter from './routes/apiAuthRouter';
import { signInUserMiddleware } from './middlewares/authMiddlewares';
import authRouter from './routes/authRouter';
import resLocals from './middlewares/resLocals'
import adminRouter from './routes/adminRouter';

require('dotenv').config();

const SessionFileStore = sessionFileStore(session);

const PORT = process.env.SERVER_PORT || 3000;
const app = express();

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(resLocals)
app.use(session({
  store: new SessionFileStore({}),
  secret: 'lalala',
  name: 'test',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
}));
app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  next();
});
app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});


app.use('/', indexRouter);
app.use('/api/auth', apiAuthRouter);
app.use('/auth', signInUserMiddleware, authRouter);
app.use('/admin', adminRouter);





app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
