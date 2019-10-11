import { Get, JsonController, Param } from 'routing-controllers'

@JsonController('/greet')
export class GreetController {
  @Get('/')
  public greet() {
    return {
      message: 'Hello World',
    }
  }

  @Get('/:name')
  public greetName(@Param('name') name: string) {
    return {
      message: `Hello ${name}`,
    }
  }
}
