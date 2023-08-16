import knex, { Knex } from "knex";
import { config } from "../config";

let globalDb: Knex | null = null;

export default (() => {
  if (!globalDb) {
    const db: Knex = knex({
      client: "pg",
      connection: config.PG_CONNECTION_STRING,
      searchPath: ["knex", "public"]
    });
    globalDb = db;

    return db as Knex;
  }

  return globalDb as Knex;
})();
