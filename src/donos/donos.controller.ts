import { Controller, Get, Post, Body, Patch, Param, Delete, Query, NotFoundException } from '@nestjs/common';
import { DonosService } from './donos.service';
import { DonoDto } from './dto/dono.dto';

@Controller('donos')
export class DonosController {
  constructor(private readonly donosService: DonosService) {}

  @Get()
  findAll(@Query() query:object):Promise<NotFoundException | object> {
    return this.donosService.findAllTemp(query);
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.donosService.findOne({id});
  }

  @Post()
  create(@Body() createDonoDto: DonoDto):Promise<Error | object> {
    return this.donosService.criarDono(createDonoDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDonoDto: DonoDto) {
    return this.donosService.update(id, updateDonoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.donosService.remove(id);
  }

  @Delete()
  removeAll() {
    return this.donosService.removeAll();
  }
}
