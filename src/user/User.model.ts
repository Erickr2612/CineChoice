import { Column, DataType, Model, Table, Default } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
import { IsEmail } from 'class-validator';

@Table
export class User extends Model {
    @Default(uuidv4)
    @Column({ primaryKey: true, type: DataType.UUID })
    id: string;

    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @IsEmail({}, { message: 'Email deve ser um endereço de email válido.' })
    @Column({ unique: true, type: DataType.STRING, allowNull: false })
    email: string;
}