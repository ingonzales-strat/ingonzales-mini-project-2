ALTER TABLE "blog_comments" DROP CONSTRAINT "blog_comments_article_id_blog_article_id_fk";
--> statement-breakpoint
ALTER TABLE "blog_comments" ADD CONSTRAINT "blog_comments_article_id_blog_article_id_fk" FOREIGN KEY ("article_id") REFERENCES "public"."blog_article"("id") ON DELETE cascade ON UPDATE no action;