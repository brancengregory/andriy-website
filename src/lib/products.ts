import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Product } from '@/types';

const productsDirectory = path.join(process.cwd(), 'products');

export function getSortedProductsData(): Product[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(productsDirectory);
  const allProductsData = fileNames.map((fileName) => {
    // TODO: Use json instead of md
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(productsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as Omit<Product, 'id'>),
    } as Product;
  });
  // Sort posts by date
  return allProductsData.sort((a, b) => {
    if (a.price < b.price) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllProductIds(): { params: { id: string } }[] {
  const fileNames = fs.readdirSync(productsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        // Todo: Use json instead of md 
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getProductData(id: string): Promise<Product> {
  const fullPath = path.join(productsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...(matterResult.data as Omit<Product, 'id' | 'contentHtml'>),
  } as Product;
}
