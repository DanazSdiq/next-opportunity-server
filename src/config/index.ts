import dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

export const config = {
  NODE_ENV: process.env.NODE_ENV,

  PORT: process.env.PORT || ""
};
