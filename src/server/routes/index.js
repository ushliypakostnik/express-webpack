import { Router } from 'express';
import path from 'path';
import fs from 'fs';
import toJSON from 'plain-text-data-to-json';
import bodyParser from 'body-parser';

import config from '../../config';

const router = Router();
const jsonParser = bodyParser.json();

let json = {};

// API

// GET test txt file
router.get('/get', (req, res, next) => {
  if (fs.existsSync(path.resolve(__dirname, './test.txt'))) {
    console.log('Found test file');
    const file = toJSON(fs.readFileSync(path.resolve(__dirname, './test.txt'), 'utf8'));
    return res.json(file);
  } else {
    console.log('Not found test file');
    return res.sendStatus(400);
  }
});

// POST test txt file
router.post('/post', jsonParser, (req, res, next) => {
  const { data } = req.body;
  let post = '';
  Object.entries(data).forEach(([key, value]) => post = `${post}${key}: ${value}\n`);
  fs.writeFileSync(path.resolve(__dirname, './test.txt'), post);
  return res.sendStatus(200);
});

// POST test json
router.post('/test', jsonParser, (req, res, next) => {
  json = req.body.data;
  return res.status(200);
});

// GET test json
router.get('/json', (req, res, next) => {
  return res.json(json);
});


export default router;
