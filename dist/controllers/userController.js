"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteResponse = exports.allResponses = exports.saveResponse = void 0;
const awsConfig_1 = require("../utils/awsConfig");
const uuid = require('uuid');
const saveResponse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { responses, ubication } = req.body;
        console.log(responses, ubication);
        if (!responses || !ubication) {
            return res.status(400).json({ message: 'Faltan datos requeridos' });
        }
        const params = {
            TableName: process.env.DYNAMODB_TABLE_NAME || '',
            Item: {
                id: uuid.v4(),
                responses,
                ubication,
                createdAt: new Date().toISOString()
            }
        };
        yield awsConfig_1.dynamoDB.put(params).promise();
        res.status(200).json({ message: 'Datos almacenados correctamente' });
    }
    catch (error) {
        console.error('Error al procesar la solicitud:', error);
        res.status(500).json({ message: 'Error al procesar la solicitud' });
    }
});
exports.saveResponse = saveResponse;
const allResponses = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = {
            TableName: process.env.DYNAMODB_TABLE_NAME || ''
        };
        const data = yield awsConfig_1.dynamoDB.scan(params).promise();
        const respuestas = data.Items;
        res.status(200).json(respuestas);
    }
    catch (error) {
        console.error('Error al obtener las respuestas:', error);
        res.status(500).json({ message: 'Error al obtener las respuestas' });
    }
});
exports.allResponses = allResponses;
const deleteResponse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const params = {
            TableName: process.env.DYNAMODB_TABLE_NAME || '',
            Key: {
                id: id
            }
        };
        yield awsConfig_1.dynamoDB.delete(params).promise();
        res.status(200).json({ message: 'Respuesta eliminada con éxito' });
    }
    catch (error) {
        console.error('Error al eliminar la respuesta:', error);
        res.status(500).json({ message: 'Error al eliminar la respuesta' });
    }
});
exports.deleteResponse = deleteResponse;
//# sourceMappingURL=userController.js.map