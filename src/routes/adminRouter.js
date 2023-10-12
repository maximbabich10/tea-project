import { Router } from 'express';

const adminRouter = Router();

adminRouter.get('/', async (req, res) => {
    res.render('Layout', {})
})

export default adminRouter;
