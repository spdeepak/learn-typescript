import { LoggerOptions } from 'bunyan'
import { Type } from 'class-transformer'
import { IsDefined, IsNumber, Max, Min, ValidateNested } from 'class-validator'
class Server {
  @IsDefined()
  @IsNumber()
  @Min(1024)
  @Max(65536)
  public port: number
}
export class Config {
  @IsDefined()
  @ValidateNested()
  @Type(() => Server)
  public server: Server

  @IsDefined()
  public logger: LoggerOptions
}
