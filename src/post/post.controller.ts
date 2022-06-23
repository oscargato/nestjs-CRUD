import { Controller, Delete, Get, Param, Post, Put, Body, ParseIntPipe } from '@nestjs/common';
import { CreatePostDto } from './dtos';
import { PostService } from './post.service';
import { EditPostDto } from './dtos/edit-post.dto';

@Controller('post')
export class PostController {

    constructor(private readonly postService:PostService){

    }

    @Get()
    getMany(){
        return this.postService.getMany();
    }

    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id:number){        
        return this.postService.getOne(id);
    }

    @Post()
    createOne(@Body() dto:CreatePostDto){
        return this.postService.createOne();    
    }

    @Put(':id')
    editOne(@Param('id')id:number, @Body() dto:EditPostDto){
        return this.postService.editOne(id);
    }


    @Delete(':id')
    deleteOne(@Param('id')id:number){
        return this.postService.deleteOne(id);
    }
}
