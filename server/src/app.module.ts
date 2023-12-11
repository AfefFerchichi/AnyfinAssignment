import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountryModule } from './modules/country/country.module';

@Module({
  imports: [CountryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
