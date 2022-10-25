import { Inject, Injectable, Optional } from '@nestjs/common';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './Interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
    console.log(`Created entry for cats`);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }
}
export class HttpService<T> {
  constructor(@Optional() @Inject('HTTP_OPTIONS') private httpClient: T) {}
}
