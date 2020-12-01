import app from './app';

app.listen(process.env.PORT, () => {
  console.log(`Escutando nessa porta: ${process.env.PORT}`);
  console.log(`CTRL + Clique em http://localhost:${process.env.PORT}`);
});
