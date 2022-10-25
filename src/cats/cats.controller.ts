/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  Query,
  Param,
  Post,
  Put,
  Req,
  Res,
  HttpStatus,
  UseInterceptors,
} from '@nestjs/common';
import { query, Request, Response } from 'express';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './Interfaces/cat.interface';
import { LoggingInterceptor } from './logging.interceptor';

@UseInterceptors(LoggingInterceptor)
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  create(@Body() creatCatDto: CreateCatDto) {
    this.catsService.create(creatCatDto);
  }

  // //Provides full control to the response object and should be used carefully//
  // @Post()
  // create(@Res({ passthrough: true }) res: Response) {
  //   res.status(HttpStatus.CREATED).send();
  // }

  // @Get()
  // findAll(@Res({ passthrough: true }) res: Response) {
  //   res.status(HttpStatus.OK);
  // }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This returns a #${params.id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param(':id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
