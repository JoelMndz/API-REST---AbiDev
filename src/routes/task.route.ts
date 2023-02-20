import {Router} from 'express';

import {taskController} from '../controllers'

const router = Router();

router.get('/',taskController.getAllTask);

router.post('/',taskController.create);

router.patch('/:id',taskController.update);

router.delete('/:id', taskController.delete);

export default router;