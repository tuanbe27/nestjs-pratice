import { LoggerMiddleware } from '@Middlewares/logger.middleware';
import { PostModule } from '@Posts/post.module';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { RouterModule } from '@nestjs/core/router';

@Module({
  imports: [
    PostModule,
    RouterModule.register([{ path: '/', module: PostModule }]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
