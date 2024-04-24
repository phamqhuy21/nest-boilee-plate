import { DBConfig } from 'src/config/database.config';
import { DataSource } from 'typeorm';

const DBDataSource = new DataSource(DBConfig);

export default DBDataSource;
