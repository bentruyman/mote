import App from './';

const HOST = '0.0.0.0';
const PORT = Number(process.env.PORT) || 3001;

const app = new App();

app.server.listen(
  PORT,
  HOST,
  () => {
    console.log(`Server running at: http://${HOST}:${PORT}`);
  }
);
