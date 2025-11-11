import express from 'express';
import fs from 'fs';
import cors from 'cors';

import produtosRouter from './routes/produtosRoutes.js';

import rotinaEstoque from './routes/rotinaVerificacaoEstoque.js';

import fluxoRoutes from './routes/fluxoRoutes.js';

/** Add arquivo de index.js */
//const html = fs.readFileSync('./src/index/index.html', 'utf8');



const app = express();

/** add o middleware Json */
app.use(express.json());

/** habilita CORS */
app.use(cors({
  origin: '*',
}));

app.use(express.static('./src/index'));


app.get('/', (req, res) => {
  res.status(200).send(html);
});

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: './src/index' });
});

/** Add Rotas */
app.use(produtosRouter);
app.use(rotinaEstoque);
app.use(fluxoRoutes);

export default app;
