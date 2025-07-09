CREATE TABLE "blog_comments" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "blog_comments_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"article_id" integer NOT NULL,
	"author" varchar(255) NOT NULL,
	"comment_content" text NOT NULL,
	"published_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"likes" integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE "blog_article" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "blog_article_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"title" varchar(255) NOT NULL,
	"slug" varchar(50) NOT NULL,
	"blog_content" text NOT NULL,
	"is_published" boolean DEFAULT false NOT NULL,
	"published_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"read_minutes" integer,
	"likes" integer DEFAULT 0,
	"metadata" jsonb,
	CONSTRAINT "blog_article_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
ALTER TABLE "blog_comments" ADD CONSTRAINT "blog_comments_article_id_blog_article_id_fk" FOREIGN KEY ("article_id") REFERENCES "public"."blog_article"("id") ON DELETE no action ON UPDATE no action;