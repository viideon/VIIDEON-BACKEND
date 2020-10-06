import * as express from 'express';
import controller from '../controllers/interActiveController';
export default express
  .Router()
  .post('/', controller.save)