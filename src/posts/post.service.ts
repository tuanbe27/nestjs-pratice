import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IPostService, Posts } from '@Posts/post.interface';
import { CreatePostDto } from '@Posts/dto/createPost.dto';
import { UpdatePostDto } from '@Posts/dto/updatePost.dto';

@Injectable()
export default class PostService implements IPostService {
  private lastPostId = 0;
  private posts: Posts[] = [];

  constructor() {
    console.log('PostService To Be Implemented');
  }

  async getAllPosts(): Promise<Posts[]> {
    return this.posts;
  }
  async getPostById(id: number): Promise<Posts> {
    const post: Posts = this.posts.find((post) => post.id === id);
    if (post) {
      return post;
    }
    throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
  }

  async createPost(post: CreatePostDto): Promise<Posts> {
    const newPost: Posts = {
      id: ++this.lastPostId,
      ...post,
    };
    this.posts.push(newPost);
    return newPost;
  }

  async replacePost(id: number, post: UpdatePostDto): Promise<Posts> {
    const postIndex = this.posts.findIndex((post) => post.id === id);

    if (postIndex > -1) {
      this.posts[postIndex] = post;
      return post;
    }
    throw new HttpException('Posts not found', HttpStatus.NOT_FOUND);
  }

  async deletePost(id: number): Promise<void> {
    const postIndex = this.posts.findIndex((post) => post.id === id);
    if (postIndex > -1) {
      this.posts.splice(postIndex, 1);
      return;
    }
    throw new HttpException('Posts not found', HttpStatus.NOT_FOUND);
  }
}
