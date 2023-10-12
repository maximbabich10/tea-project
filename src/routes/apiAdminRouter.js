import { Router } from 'express';

const apiAdminRouter = Router();

apiAdminRouter.post('/', async (req, res) => {
    res.render('Layout', {})
})


export default apiAdminRouter;
