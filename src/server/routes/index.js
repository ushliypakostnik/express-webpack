import { Router } from 'express';
import path from 'path';
import fs from 'fs';
import toJSON from 'plain-text-data-to-json';

import config from '../../config';

const router = Router();

// API

router.get('/gettest', (req, res, next) => {
  if (fs.existsSync(path.resolve(__dirname, './test.txt'))) {
    console.log('Found test file');
    const TEST_FILE = toJSON(fs.readFileSync(path.resolve(__dirname, './test.txt'), 'utf8'));
    fs.writeFileSync(path.resolve(__dirname, './hello.txt'), JSON.stringify(TEST_FILE));
    return res.json(TEST_FILE);
  } else {
    console.log('Not found test file');
    return res.sendStatus(400);
  }
});

router.get('/posttest', (req, res, next) => {
  // fs.writeFileSync(path.resolve(__dirname, './hello.txt'), JSON.stringify(TEST_FILE));
});

// Others
router.use((req, res) => {
  res.status(404);
  res.send('Page not found!!!');
});

export default router;
