import { Router } from 'express';

const adminRouter = Router();

adminRouter.get('/page', async (req, res) => {
    res.render('Layout', {})
})

export default adminRouter;
