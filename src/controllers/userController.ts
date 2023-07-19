import { Request, Response } from 'express';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { dynamoDB } from '../utils/awsConfig';

const uuid = require('uuid')

export const saveResponse = async (req: Request, res: Response) => {
  try {
    const { responses, ubication } = req.body;

    console.log(responses, ubication)
    if (!responses || !ubication) {
      return res.status(400).json({ message: 'Faltan datos requeridos' });
    }

    const params: DocumentClient.PutItemInput = {
      TableName: process.env.DYNAMODB_TABLE_NAME || '',
      Item: {
        id: uuid.v4(),
        responses,
        ubication,
        createdAt: new Date().toISOString()
      }
    };

    await dynamoDB.put(params).promise();

    res.status(200).json({ message: 'Datos almacenados correctamente' });
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    res.status(500).json({ message: 'Error al procesar la solicitud' });
  }
};


export const allResponses = async (_req: Request, res: Response) => {
  try {
    const params: DocumentClient.ScanInput = {
      TableName: process.env.DYNAMODB_TABLE_NAME || ''
    };

    const data = await dynamoDB.scan(params).promise();
    const respuestas = data.Items;

    res.status(200).json(respuestas);
  } catch (error) {
    console.error('Error al obtener las respuestas:', error);
    res.status(500).json({ message: 'Error al obtener las respuestas' });
  }
};