import { Options } from "@mikro-orm/core";
import { Migrator } from "@mikro-orm/migrations";
import { MySqlDriver } from "@mikro-orm/mysql";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";

const options: Options = {
     dbName: "defaultDb",
     password: "password",
     entities: ['dist/**/*.entity.js'],
     entitiesTs: ['src/**/*.entity.ts'],
     metadataProvider: TsMorphMetadataProvider,
     debug: true,
     driver: MySqlDriver,
     extensions: [Migrator]
}

export default options