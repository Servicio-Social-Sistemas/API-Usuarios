import express from 'express';
import { saveSurvey, allResponses, deleteResponse } from '../controllers/userController';

const router = express.Router();

router.post('/save', saveSurvey);

router.get('/all', allResponses)

router.delete('/delete/:id', deleteResponse)


export default router;