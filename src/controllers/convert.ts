import { Response } from 'express';
import csv from 'csvtojson';
import { promises as fs } from 'fs';

export const convertFile = async (_: any, res: Response) => {
  const csvFile = await fs.readFile('users.csv', 'utf-8');
  const jsonFile = await csv({
    output: 'json',
  }).fromString(csvFile);
  await fs.writeFile('csv.json', JSON.stringify(jsonFile), 'utf-8');
  await fs.mkdir('output');
  await fs.rename('csv.json', 'output/csv.json');

  res.status(200).json({
    status: 'successful',
    data: jsonFile,
  });
};

export const greg = 'dd';
