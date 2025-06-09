export const getTotalPrice = (price: number, vat: number): string => {
  const total = price + (price * vat) / 100;
  return `£${total.toFixed(2)}`;
};
