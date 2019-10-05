import { loadConfig } from '@buynomics/bn-config'
import bunyan from 'bunyan'
import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { Config } from './lib/config'
import { server } from './routes'

const config = loadConfig(Config)
const logger = bunyan.createLogger(config.logger)
export default logger

createConnection()
  .then(async _connection => {
    server.listen(config.server.port, () => {
      logger.info(`Started server on port ${config.server.port}`)
    })
  })
  .catch(err => logger.info(`TypeORM error ${err}`))
