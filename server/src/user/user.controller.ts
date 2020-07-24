import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { ValidateIdPipe } from '../common/pipe/validate-id.pipe';

@Controller('user')
export class UserController {
  public constructor(private readonly userService: UserService) {}

  @Get('/:Id')
  async getUserById(@Param('Id', ValidateIdPipe) Id: number) {
    const user = await this.userService.findUserById(Id);

    if (!user) {
      throw new NotFoundException(
        `${Id}번 Id를 갖는 회원이 존재하지 않습니다.`,
      );
    }

    return user;
  }
}
