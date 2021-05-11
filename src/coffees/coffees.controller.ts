import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {

    constructor(private readonly coffeeService: CoffeesService){}

    @Get()
    findAll(@Query() paginationQuery){
      //const { limit,offset } = paginationQuery;  
      return this.coffeeService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: number){
        console.log(typeof id)
        return this.coffeeService.findOne('' + id)
    }

    @Post()
    create(@Body() createCoffeDto: CreateCoffeeDto){
        console.log(createCoffeDto instanceof CreateCoffeeDto);
        return this.coffeeService.create(createCoffeDto);
    }

    @Patch(':id')
    update(@Param('id') id:string,@Body() updateCoffeeDto: UpdateCoffeeDto){
        return this.coffeeService.update(id,updateCoffeeDto);
    }
    
    @Delete(':id')
    remove(@Param('id') id:string){
        return this.coffeeService.remove(id);
    }    
    
}
