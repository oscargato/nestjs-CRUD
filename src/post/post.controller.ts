import { Controller, Delete, Get, Param, Post, Put, Body, ParseIntPipe } from '@nestjs/common';
import { CreatePostDto } from './dtos';

@Controller('post')
export class PostController {

    @Get()
    getMany(){
        return `Devuelvelo Todo`;
    }

    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id:number){        
        return { message: 'getOne' }
    }

    @Post()
    createOne(@Body() dto:CreatePostDto){
        return dto;    
    }

    @Put(':id')
    editOne(@Param('id')id:number){}


    @Delete(':id')
    deleteOne(@Param('id')id:number){}
}
