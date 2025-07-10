import { integer, pgTable, varchar,text,timestamp,boolean,jsonb } from "drizzle-orm/pg-core";


export const blogArticleTable = pgTable("blog_article", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  description:text("description").default("Read this blog post"),
  slug: varchar({ length: 50 }).notNull().unique(),
  content:text("blog_content").notNull(),
  isPublished:boolean("is_published").notNull().default(false),
  publishedAt:timestamp("published_at").notNull().defaultNow(),
  updatedAt:timestamp("updated_at").notNull().defaultNow(),

  readMinutes:integer("read_minutes"),
  likes:integer("likes").default(0),
  metadata: jsonb('metadata'),
});

export const articleCommentsTable = pgTable("blog_comments", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  articleId:integer('article_id').notNull().references(()=>blogArticleTable.id, {onDelete: 'cascade'}),
  author: varchar("author",{ length: 255 }).notNull(),
  content:text("comment_content").notNull(),
  publishedAt:timestamp("published_at").notNull().defaultNow(),
  updatedAt:timestamp("updated_at").notNull().defaultNow(),
  likes:integer("likes").default(0),
});


