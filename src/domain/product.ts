export type ProductTitle = string;
export type Cookie = {
  id: UniqueId;
  title: ProductTitle;
  price: PriceCents;
  toppings: Ingredient[];
};

export const ingredients: Record<Ingredient, string> = {
  chocolate: "Шоколад",
  cocoa: "Какао",
  cherry: "Вишня",
  marshmallow: "Маршмеллоу",
  peanuts: "Арахис",
};

export function totalPrice(products: Cookie[]): PriceCents {
  return products.reduce((total, { price }) => total + price, 0);
}
