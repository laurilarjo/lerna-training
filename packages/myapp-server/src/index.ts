import * as Hapi from '@hapi/hapi';
import { logger } from 'myapp-utils';

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
    logger.info('logging via utils-package');
    
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
