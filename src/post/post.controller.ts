import { Controller, Delete, Get, Param, Post, Put, Body } from '@nestjs/common';

@Controller('post')
export class PostController {

    @Get()
    getMany(){
        return `Devuelvelo Todo`;
    }

    @Get(':id')
    getOne(@Param('id')id:number){        
        return { message: 'getOne' }
    }

    @Post()
    createOne(@Body('title') title:any, @Body('content') content:any){
        
    }

    @Put(':id')
    editOne(@Param('id')id:number){}


    @Delete(':id')
    deleteOne(@Param('id')id:number){}
}
