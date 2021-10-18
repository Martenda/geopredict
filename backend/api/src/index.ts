import { config } from 'dotenv'
config()

import databaseService from './services/database/database'
import serverService from './services/server/server'

// databaseService.init()
serverService.init()

