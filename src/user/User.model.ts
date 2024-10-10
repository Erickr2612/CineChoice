import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
    @Column({ primaryKey: true, type: DataType.UUID })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @Column({ type: DataType.STRING, allowNull: false })
    email: string;
}