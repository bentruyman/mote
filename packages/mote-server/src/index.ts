import * as Hapi from 'hapi';

const server = new Hapi.Server({
  port: 5678
});

const init = async (): Promise<void> => {
  await server.start();
};

init()
  .then(console.log)
  .catch(console.error);
