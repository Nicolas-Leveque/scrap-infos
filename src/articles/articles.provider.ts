import { Connection } from 'mongoose';
import { ArticleSchema } from './schema/article.schema';
import { CONSTANTS } from '../constants';

export const ArticlesProvider = [
  {
    provide: CONSTANTS.ARTICLE_MODEL,
    useFactory: (connection: Connection) =>
      connection.model(CONSTANTS.ARTICLES, ArticleSchema),
  },
];
