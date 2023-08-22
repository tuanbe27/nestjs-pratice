import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePostDto } from './dto/createPost.dto';
import { UpdatePostDto } from './dto/updatePost.dto';
import { IPostController, IPostService, Posts } from './post.interface';
import PostService from './post.service';

@Controller('posts')
export default class PostController implements IPostController {
  private readonly postService: IPostService;
  constructor() {
    console.log('PostController To Be Implemented');
    this.postService = new PostService();
  }

  @Get()
  async getAllPosts(): Promise<Posts[]> {
    return this.postService.getAllPosts();
  }

  @Get(':id')
  async getPostById(@Param('id') id: string): Promise<Posts> {
    return this.postService.getPostById(Number(id));
  }

  @Post()
  async createPost(@Body() post: CreatePostDto): Promise<Posts> {
    console.log(post);

    return this.postService.createPost(post);
  }

  @Put(':id')
  async replacePost(
    @Param('id') id: string,
    @Body() post: UpdatePostDto,
  ): Promise<Posts> {
    return this.postService.replacePost(Number(id), post);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string): Promise<void> {
    return this.postService.deletePost(Number(id));
  }
}
