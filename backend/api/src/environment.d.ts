declare namespace NodeJS {
  interface ProcessEnv {
    SERVER_PORT: string
    DATABASE_NAME: string
    DATABASE_HOST: string
    DATABASE_PORT: string
  }
}