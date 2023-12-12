import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountryModule } from './modules/country/country.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [CountryModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
