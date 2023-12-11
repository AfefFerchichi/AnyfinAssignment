import { Controller, Get, Param } from '@nestjs/common';
import { CountryService } from './country.service';
import { Country } from './country.dto';

@Controller('/country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get('/all')
  getCountries(): Promise<Country[]> {
    return this.countryService.getAllCountries();
  }

  @Get('/name/:name')
  getCountryByName(@Param('name') name: string): Promise<Country[]> {
    return this.countryService.getCountriesByName(name);
  }
}
