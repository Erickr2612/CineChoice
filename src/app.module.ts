import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ConfigDb from './config'
import {SequelizeModule} from '@nestjs/sequelize'
import { UserModule } from './user/user.module';

@Module({
  imports: [SequelizeModule.forRoot(ConfigDb), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
