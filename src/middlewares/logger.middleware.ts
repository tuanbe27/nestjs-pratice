import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, _: Response, next: NextFunction) {
    const userAgent = req.headers['user-agent'];
    const authorizationToken = req.headers['authorization'];
    const clientIp = req.ip;
    const requestMethod = req.method;
    const requestUrl = req.url;
    const timestamp = new Date().toISOString();
    const body = req.body;
    const headers = req.headers;
    const path = req.path;

    console.log(
      `Request Log - Timestamp: ${timestamp}, User-Agent: ${userAgent}, Authorization: ${authorizationToken}, IP: ${clientIp}, Method: ${requestMethod}, URL: ${requestUrl}`,
    );

    console.log('Request Info: ', {
      path,
      body,
      headers,
      authorizationToken: authorizationToken || 'no authorization token',
    });
    next();
  }
}
