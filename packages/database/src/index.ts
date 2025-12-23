import 'server-only';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from "./schema";

// Lazy initialization for build-time safety
let sql: ReturnType<typeof neon>;
let dbInstance: ReturnType<typeof drizzle>;

export const db = new Proxy({} as ReturnType<typeof drizzle>, {
    get: (target, prop) => {
        if (!process.env.DATABASE_URL) {
            // Build time check bypass? Or just throw when accessed?
            // If we are building and not using the DB, this is safe.
            // If we access it, we crash.
            throw new Error("DATABASE_URL is not defined");
        }

        if (!sql) {
            sql = neon(process.env.DATABASE_URL);
            dbInstance = drizzle(sql, { schema });
        }

        return Reflect.get(dbInstance, prop);
    }
});

export * from "./schema";
export { eq, desc, and } from "drizzle-orm";
