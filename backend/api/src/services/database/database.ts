import databaseConfig from './databaseConfig';
import { connect } from 'mongoose';

async function init(): Promise<void> {
    await connect(`mongodb://${databaseConfig.host}:${databaseConfig.port}/${databaseConfig.name}`);
}

const databaseService = {
    init
};

export default databaseService