/* eslint-disable no-console */
import { promises as fs } from 'fs';
import { Request, Response } from 'express';

export const getAllStudent = (_req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    data: {
      message: 'Students route successful',
    },
  });
};

export const getOneStudent = (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    data: {
      message: `The requested student is ${(req.params.id, req.ip)}`,
    },
  });
};

export const readData = async () => {
  try {
    const myFile: fs.FileHandle = await fs.open('myfile.txt', 'a+');
    await myFile.write('Godswill Edet');
    const readFile = await fs.readFile('myfile.txt', 'utf-8');
    await fs.writeFile('myfile.txt', `The read and re-written file is ${readFile}`);
    await fs.mkdir('gregFiles');
    await fs.rename('myfile.txt', 'gregFiles/myfile.txt');
    await fs.unlink('gregFiles/myfile.txt');
    await fs.rmdir('gregFiles');
    console.log('file system done');
  } catch (error) {
    console.log(error);
  }
};
