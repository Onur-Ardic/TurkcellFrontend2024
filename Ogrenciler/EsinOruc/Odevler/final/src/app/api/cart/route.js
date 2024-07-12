import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.resolve(process.cwd(), "src/db/product.json");
export async function POST(request) {
  const { userId, productId, quantity, color, size } = await request.json();
  if (!userId || !productId || !quantity || !color || !size) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }
  const fileData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileData);
  let userCart = data.boxes.find((cart) => cart.user_id === userId);
  if (userCart) {
    const existingItem = userCart.items.find(
      (item) =>
        item.product_id === productId &&
        item.color === color &&
        item.size === size
    );
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      userCart.items.push({ product_id: productId, quantity, color, size });
    }
  } else {
    data.boxes.push({
      user_id: userId,
      items: [{ product_id: productId, quantity, color, size }],
    });
  }
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  return NextResponse.json({ message: "Cart updated" });
}

export async function DELETE(request) {
  const { userId, productId, color, size } = await request.json();
  if (!userId || !productId || !color || !size) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }
  const fileData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileData);
  let userCart = data.boxes.find((cart) => cart.user_id === userId);
  if (userCart) {
    const itemIndex = userCart.items.findIndex(
      (item) =>
        item.product_id === productId &&
        item.color === color &&
        item.size === size
    );
    if (itemIndex > -1) {
      userCart.items.splice(itemIndex, 1);
      if (userCart.items.length === 0) {
        data.boxes = data.boxes.filter((cart) => cart.user_id !== userId);
      }
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      return NextResponse.json({ message: "Sepeten ürün kaldırıldı" });
    } else {
      return NextResponse.json({ error: "Sepet bulunamadı" }, { status: 404 });
    }
  } else {
    return NextResponse.json(
      { error: "Kullanıcının sepeti bulunamadır" },
      { status: 404 }
    );
  }
}
