import express from 'express';
const router = express.Router();

import {
  taskCreateController,
  taskDeleteController,
  taskLookupController,
  taskUpdateController,
} from './task.controller';
import { validationMiddleware } from './task.middleware';

router.use('/', validationMiddleware);

router.get('/', taskLookupController);
router.post('/', taskCreateController);
router.patch('/', taskUpdateController);
router.delete('/', taskDeleteController);

export default router;
