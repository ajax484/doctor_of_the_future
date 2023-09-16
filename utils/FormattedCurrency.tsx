// export function formatPriceToNaira(price:number) {
//     const formattedPrice = price?.toLocaleString("en-NG", {
//       style: "currency",
//       currency: "NGN",
//     });
//     return formattedPrice;
//   }
  
export function formatPriceToNaira(price: number) {
  // Check if the price is a whole number (has no decimal part)
  const isWholeNumber = price % 1 === 0;

  // Format the price as currency using the toLocaleString method
  const formattedPrice = price.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: isWholeNumber ? 0 : 2, 
    maximumFractionDigits: 2, 
  });

  return formattedPrice;
}
