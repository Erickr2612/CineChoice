import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {UniqueConstraintInterceptor} from './system/interceptor-error';
import { Sequelize } from 'sequelize-typescript'; // Importando o Sequelize do sequelize-typescript


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new UniqueConstraintInterceptor());

  const sequelize = app.get<Sequelize>(Sequelize); // Obtenha a instância do Sequelize

  // Sincronize o banco de dados
  await sequelize.sync({ alter: true }) // Use { force: true } para recriar as tabelas
    .then(() => {
      console.log('Banco de dados sincronizado!');
    })
    .catch((error) => {
      console.error('Erro ao sincronizar o banco de dados:', error);
    });

  await app.listen(3000);
}
bootstrap();
