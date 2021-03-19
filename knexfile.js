const { DB_URL } = process.env;
const ENV = process.env.NODE_ENV || "development";

const baseConfig = {
  client: "pg",
  migrations: {
    directory: "./database/migrations"
  },
  seeds: {
    directory: "./database/seeds"
  }
};

const customConfig = {
  test: {
    connection: {
      database: "wedding_be"
    }
  },
  development: {
    connection: {
      database: "wedding_be"
    }
  },
  production: {
    connection: {
      connectionString: DB_URL
    }
  }
};

module.exports = { ...customConfig[ENV], ...baseConfig };
