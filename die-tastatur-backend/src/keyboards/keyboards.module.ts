import { Module } from '@nestjs/common';
import { KeyboardsController } from './keyboards.controller';
import { KeyboardsService } from './keyboards.service';

@Module({
  controllers: [KeyboardsController],
  providers: [KeyboardsService]
})
export class KeyboardsModule {}
