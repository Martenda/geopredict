declare namespace NodeJS {
  interface ProcessEnv {
    SERVER_PORT: string,
    SERVER_HOST: string,
    DATABASE_NAME: string,
    DATABASE_USERNAME: string,
    DATABASE_PASSWORD: string,
    DATABASE_HOST: string,
    DATABASE_PORT: string
  }
}