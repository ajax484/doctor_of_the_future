import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url';
import { apiVersion, dataset, projectId, useCdn } from '../env'

console.log(apiVersion, dataset, projectId, useCdn);


export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

const builder = imageUrlBuilder(client);

export const urlFor = (source: string) => builder.image(source);