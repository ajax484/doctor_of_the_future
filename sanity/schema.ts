import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import comment from './schemas/comment'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, comment],
}
