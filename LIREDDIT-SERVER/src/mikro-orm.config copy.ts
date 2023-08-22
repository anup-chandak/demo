import { _prod_ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";

export default {
        entities: [Post],
        dbName: 'lireddit',
        type: 'postgresql',
        debug: !_prod_,
        //user: '',
        //password: ''
    } as Parameters<typeof MikroORM.init>[0] ;