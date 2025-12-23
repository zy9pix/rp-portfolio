import { pgTable, text, timestamp, uuid, pgEnum } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const ownerEnum = pgEnum('owner', ['oliver', 'hana']);

export const projects = pgTable("projects", {
    id: uuid("id").defaultRandom().primaryKey(),
    slug: text("slug").unique().notNull(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    content: text("content").notNull(),
    image_url: text("image_url"),
    link: text("link"),
    tags: text("tags").array(),
    owner: ownerEnum('owner').notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});
