import { relations } from "drizzle-orm";
import { articleCommentsTable,blogArticleTable } from "./schema";

export const articleCommentRelation = relations(articleCommentsTable,({one})=>({
      article:one(blogArticleTable,{
        fields:[articleCommentsTable.articleId],
        references:[blogArticleTable.id]
    })
}));

export const blogArticleRelations = relations(blogArticleTable, ({ many }) => ({
  comments: many(articleCommentsTable),
}));