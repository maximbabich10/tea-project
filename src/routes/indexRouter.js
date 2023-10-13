import express from 'express';
import {Tea} from '../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  const initState = { hello: 'world' };
  res.render('Layout', initState);
});

router.get('/:id', async (req, res) => {
  const tea = await Tea.findOne({
      where: {id: req.params.id}
  })
  const initState = {tea};
  res.render('Layout', initState)

})

export default router;
