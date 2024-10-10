import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UniqueConstraintInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (error.name === 'SequelizeUniqueConstraintError') {
          return throwError(() => new HttpException(`${Object.keys(error.fields)[0]} informado já existe.`, HttpStatus.BAD_REQUEST));
        }
        return throwError(() => new HttpException(error.message || 'Erro ao criar registro.', HttpStatus.INTERNAL_SERVER_ERROR));
      }),
    );
  }
}
