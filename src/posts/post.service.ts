import { CreatePostDto } from './dto/createPost.dto';
import { IPostService } from './post.interface';

export default class PostService implements IPostService {
  async getAllPosts() {
    return;
  }
  async getPostById(id: number) {
    console.log(id);
    return;
  }
  async createPost(post: CreatePostDto) {
    console.log(post);
    return;
  }
  async replacePost(id: number, post: CreatePostDto) {
    console.log(id, post);
    return;
  }
  async deletePost(id: number) {
    console.log(id);
    return;
  }
}
