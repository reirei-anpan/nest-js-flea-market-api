import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Item } from './item.model';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Item[]{
    return this.itemsService.findAll();
  }

  //可変パラメータとして認識する
  @Get(':id')
  findById(@Param('id') id:string): Item{
    return this.itemsService.findById(id);
  }

  @Post()
  create(
    // 変数名, 型
    @Body() createItemDto: CreateItemDto
    //キー, 変数名, 型
    // @Body('id') id: string,
    // @Body('name') name: string,
    // @Body('price') price: number,
    // @Body('description') description: string,
  ): Item{
    return this.itemsService.create(createItemDto);
  }

  @Patch(':id')
  updateStatus(@Param('id') id:string): Item{
    return this.itemsService.updateStatus(id);
  }

  @Delete(':id')
  delete(@Param('id') id:string): void{
    return this.itemsService.delete(id);
  }
}
