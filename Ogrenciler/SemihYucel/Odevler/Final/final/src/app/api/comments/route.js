import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.resolve(process.cwd(), 'src/db/product.json');

export async function POST(request) {
  try {
    const { userId, productId, comment, rating } = await request.json();

    if (!userId || !productId || !comment || !rating) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }

    const fileData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileData);

    let userComments = data.comments.find(comment => comment.user_id === userId);

    if (userComments) {
      userComments.items.push({ product_id: productId, comment, rating });
    } else {
      data.comments.push({ user_id: userId, items: [{ product_id: productId, comment, rating }] });
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return NextResponse.json({ message: 'Comment added successfully' });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
