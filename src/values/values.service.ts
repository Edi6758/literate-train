import { Injectable } from '@nestjs/common';

@Injectable()
export class ValuesService {
  private readonly values: { value: any }[] = [];

  create(valueObject: { value: any }): void {
    this.values.push(valueObject);
  }

  findAll(): { value: any }[] {
    return this.values;
  }
}
