import {config}  from "dotenv";
import {resolve} from "node:path"

const NODE_ENV = process.env.NODE_ENV || "dev" // development or production
const envPath = {
    dev :".env.development",
    prod : ".env.production"
}
config({path:resolve(`./src/config/${envPath[NODE_ENV]}`)});

export const port = process.env.PORT || 8000;