import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import responsesRouter from './routes/userRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors());

app.use(express.json());

app.use('/api/v1', responsesRouter);

app.get('/ping', (_req: Request, res: Response) => {
    return res.send('pong 🏓')
  })

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})


export default app;