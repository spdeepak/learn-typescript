import { loadConfig } from '@buynomics/bn-config'
import bunyan from 'bunyan'
import 'reflect-metadata'
import { Config } from './lib/config'
import { server } from './routes'
const config = loadConfig(Config)
const logger = bunyan.createLogger(config.logger)

const start = () => {
  server.listen(config.server.port, () => {
    logger.info(`Started server on port ${config.server.port}`)
  })
}

start()
