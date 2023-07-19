import express from 'express';
import { saveResponse, allResponses } from '../controllers/userController';

const router = express.Router();

router.post('/save', saveResponse);

router.get('/all', allResponses)

export default router;