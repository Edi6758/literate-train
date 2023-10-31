import { Body, Controller, Get, Post, HttpCode } from '@nestjs/common';
import { ValuesService } from './values.service';

@Controller('values')
export class ValuesController {
  constructor(private readonly valuesService: ValuesService) {}

  @Post()
  @HttpCode(201)  // HTTP 201 Created
  create(@Body() valueObject: { value: any }): { message: string, data: { value: any } } {
    this.valuesService.create(valueObject);
    return {
      message: 'Value added successfully!',
      data: valueObject
    };
  }

  @Get()
  findAll(): { value: any }[] {
    return this.valuesService.findAll();
  }
}
