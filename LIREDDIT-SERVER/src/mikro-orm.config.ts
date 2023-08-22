import { _prod_ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {


                //var/lib/postgres/package.json

        migrations: {
            path: path.join( __dirname, './migrations'), // path to the folder with migrations
            pathTs: undefined, // path to the folder with TS migrations (if used, we should put path to compiled files in `path`)
            glob: '!(*.d).{js,ts}', // how to match migration files (all .js and .ts files, but not .d.ts)
        },
        entities: [Post],
        dbName: 'lireddit',
        type: 'postgresql',
        debug: !_prod_,
        //user: '',
        //password: ''
    } as Parameters<typeof MikroORM.init>[0] ;