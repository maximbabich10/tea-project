import { Router } from 'express';
import { Tea } from '../../db/models';


const adminRouter = Router();

adminRouter.get('/page', async (req, res) => {
    try{
        const allTeas = await Tea.findAll()
        // console.log(allTeas)
        const initialState = { allTeas };
        res.render('Layout', initialState);
        // return res.sendStatus(200)
     } catch (error) {
       return res.status(400).json({ message: 'Server error' });
     }
})


export default adminRouter;
