import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { CountryService } from './country.service';
import { Country, SEKCurrencyRate } from './country.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('/country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  @UseGuards(AuthGuard)
  getCountries(@Query('name') name: string): Promise<Country[]> {
    if (!name) return this.countryService.getAllCountries();
    return this.countryService.getCountriesByName(name);
  }

  @Get('/currencies')
  @UseGuards(AuthGuard)
  @UseGuards(AuthGuard)
  getAllCurrenciesExcahngeRate(): Promise<SEKCurrencyRate> {
    return this.countryService.getAllCurrenciesExcahngeRate();
  }
}
