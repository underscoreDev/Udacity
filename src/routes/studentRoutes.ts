/* eslint-disable import/extensions */
import express from 'express';
// eslint-disable-next-line import/no-unresolved
import { getAllStudent, getOneStudent } from '../controllers/studentController';

const router = express.Router();

router.route('/').get(getAllStudent);
router.route('/:id').get(getOneStudent);

export default router;
