import express from 'express';
import { saveResponse, allResponses, deleteResponse } from '../controllers/userController';

const router = express.Router();

router.post('/save', saveResponse);

router.get('/all', allResponses)

router.delete('/delete/:id', deleteResponse)

export default router;