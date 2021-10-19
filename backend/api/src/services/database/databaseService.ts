import databaseConfig from './databaseConfig';
import { connect, connection } from 'mongoose';

function logConnectionState() {
    const connectionStates =  [
        'disconnected',
        'connected',
        'connecting',
        'disconnecting'
    ]

    const stateMessage = connectionStates[connection.readyState]
    
    console.log(`database is ${stateMessage}`)
}

async function init(): Promise<void> {
    const databaseUrl = `${databaseConfig.host}:${databaseConfig.port}/${databaseConfig.name}`
    console.log(`connecting to database at ${databaseUrl}`)
    await connect(`mongodb://${databaseUrl}`);
    logConnectionState()
}

const databaseService = {
    init
};

export default databaseService