import { SequelizeModuleOptions } from '@nestjs/sequelize';

const config: SequelizeModuleOptions = {
    dialect: 'postgres',
    host: 'localhost', // ou o host onde o PostgreSQL está rodando
    port: 5432, // porta padrão do PostgreSQL
    username: 'postgres', // substitua pelo seu usuário do PostgreSQL
    password: 'senha133', // substitua pela sua senha do PostgreSQL
    database: 'choiceFilm', // substitua pelo nome do banco de dados
    autoLoadModels: true,
    synchronize: true, // somente para desenvolvimento, não usar em produção
};

export default config;