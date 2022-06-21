import { IsString, IsBoolean } from 'class-validator';
import { PostCategory } from '../enums'

export class CreatePostDto{

  @IsString()
  title:string;

  @IsString()
  slug:string;

  @IsString()
  excerpt:string;

  @IsString()
  content:string;

  category:PostCategory;
  
  @IsString()
  tags:string[];

  @IsBoolean()
  status:boolean;  
}