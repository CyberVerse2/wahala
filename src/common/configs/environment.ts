import * as dotenv from 'dotenv';
dotenv.config();

export interface IEnvironment {
  APP: {
    NAME: string;
    PORT: number
    ENV: string;
  };
  DB: {
    URL:string
  };
  JWT: {
    SECRET: string
  };
}

export const ENVIRONMENT: IEnvironment = {
  APP: {
    NAME: process.env.APP_NAME,
    PORT: Number(process.env.PORT),
    ENV: process.env.APP_ENV,
  },
  DB: {
    URL: process.env.DB_URL
  },
  JWT: {
    SECRET: process.env.JWT_SECRET
  }
};
