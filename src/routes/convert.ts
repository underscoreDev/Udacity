/* eslint-disable import/no-unresolved */
import { Router } from 'express';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/extensions
import { convertFile } from '../controllers/convert';

const router = Router();

router.route('/').get(convertFile);

export default router;
