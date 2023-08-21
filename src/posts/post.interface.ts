import { CreatePostDto } from './dto/createPost.dto';
import { UpdatePostDto } from './dto/updatePost.dto';

export interface Post {
  id: number;
  title: string;
  content: string;
}

export interface IPostService {
  getAllPosts(): Promise<Post[]>;
  getPostById(id: number): Promise<Post>;
  createPost(post: CreatePostDto): Promise<Post>;
  replacePost(id: number, post: UpdatePostDto): Promise<Post>;
  deletePost(id: number): Promise<string>;
}
