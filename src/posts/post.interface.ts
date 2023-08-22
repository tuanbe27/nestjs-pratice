import { CreatePostDto } from './dto/createPost.dto';
import { UpdatePostDto } from './dto/updatePost.dto';

export interface Posts {
  id: number;
  title: string;
  content: string;
}

export interface IPostService {
  getAllPosts(): Promise<Posts[]>;
  getPostById(id: number): Promise<Posts>;
  createPost(Posts: CreatePostDto): Promise<Posts>;
  replacePost(id: number, Posts: UpdatePostDto): Promise<Posts>;
  deletePost(id: number): Promise<void>;
}

export interface IPostController {
  getAllPosts(): Promise<Posts[]>;
  getPostById(id: string): Promise<Posts>;
  createPost(Posts: CreatePostDto): Promise<Posts>;
  replacePost(id: string, Posts: UpdatePostDto): Promise<Posts>;
  deletePost(id: string): Promise<void>;
}
