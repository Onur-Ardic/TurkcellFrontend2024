import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Veritabanı dosyasının yolu
const filePath = path.resolve(process.cwd(), "src/db/product.json");

export async function POST(request) {
  const { userId, productId, quantity, color, size } = await request.json();

  if (!userId || !productId || !quantity || !color || !size) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  // JSON dosyasını oku
  const fileData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileData);

  // Kullanıcıya ait sepeti bul
  let userCart = data.boxes.find((cart) => cart.user_id === userId);

  if (userCart) {
    // Sepette ürün var mı kontrol et
    const existingItem = userCart.items.find(
      (item) =>
        item.product_id === productId &&
        item.color === color &&
        item.size === size
    );

    if (existingItem) {
      // Ürün varsa miktarını güncelle
      existingItem.quantity += quantity;
    } else {
      // Ürün yoksa sepete ekle
      userCart.items.push({ product_id: productId, quantity, color, size });
    }
  } else {
    // Kullanıcıya ait sepet yoksa yeni sepet oluştur
    data.boxes.push({
      user_id: userId,
      items: [{ product_id: productId, quantity, color, size }],
    });
  }

  // JSON dosyasını güncelle
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  return NextResponse.json({ message: "Cart updated" });
}

export async function DELETE(request) {
  const { userId, productId, color, size } = await request.json();

  if (!userId || !productId || !color || !size) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  // JSON dosyasını oku
  const fileData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileData);

  // Kullanıcıya ait sepeti bul
  let userCart = data.boxes.find((cart) => cart.user_id === userId);

  if (userCart) {
    // Sepette ürünü bul ve kaldır
    const itemIndex = userCart.items.findIndex(
      (item) =>
        item.product_id === productId &&
        item.color === color &&
        item.size === size
    );

    if (itemIndex > -1) {
      // Ürünü listeden kaldır
      userCart.items.splice(itemIndex, 1);

      // Kullanıcının sepeti boşsa sepeti kaldır
      if (userCart.items.length === 0) {
        data.boxes = data.boxes.filter((cart) => cart.user_id !== userId);
      }

      // JSON dosyasını güncelle
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

      return NextResponse.json({ message: "Item removed from cart" });
    } else {
      return NextResponse.json(
        { error: "Item not found in cart" },
        { status: 404 }
      );
    }
  } else {
    return NextResponse.json(
      { error: "Cart not found for user" },
      { status: 404 }
    );
  }
}
