import { Router } from 'express';
import { Tea } from '../../db/models';

const apiAdminRouter = Router();

apiAdminRouter.post('/page', async (req, res) => {
    try{
   const allTeas = await Tea.findAll();
   console.log("===================================", allTeas) // map
} catch (error) {
  return res.sendStatus(400);
}
});


export default apiAdminRouter;
