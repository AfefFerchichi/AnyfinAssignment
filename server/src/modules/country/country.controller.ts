import { Controller, Get, Query } from '@nestjs/common';
import { CountryService } from './country.service';
import { Country, SEKCurrencyRate } from './country.dto';

@Controller('/country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  getCountries(@Query('name') name: string): Promise<Country[]> {
    if (!name) return this.countryService.getAllCountries();
    return this.countryService.getCountriesByName(name);
  }

  @Get('/currencies')
  getAllCurrenciesExcahngeRate(): Promise<SEKCurrencyRate> {
    return this.countryService.getAllCurrenciesExcahngeRate();
  }
}
