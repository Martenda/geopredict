import { config } from 'dotenv'
config()

import databaseService from './services/database/databaseService'
import serverService from './services/server/serverService'

databaseService.init()
serverService.init()
