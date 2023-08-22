import { LoggerMiddleware } from '@Middlewares/logger.middleware';
import { PostModule } from '@Posts/post.module';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';

@Module({
  imports: [PostModule],
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
