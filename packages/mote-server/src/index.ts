import Hapi from 'hapi';

const server = Hapi.server({
  port: 5678
});

const init = async  () => {
  await server.start();
}

init();
