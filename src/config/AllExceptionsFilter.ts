import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    constructor() { }

    async catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        
        const statusCode =
            exception instanceof HttpException
                ? exception.getStatus()
                : HttpStatus.INTERNAL_SERVER_ERROR;

        let message = exception instanceof HttpException
        ? exception.getResponse() as {
            key: string;
            args: Record<string, any>;
        }
        : exception["message"];

        if(exception instanceof HttpException)
            response.status(statusCode).json(message);
        else
            response.status(statusCode).json({ statusCode, message });

    }
}