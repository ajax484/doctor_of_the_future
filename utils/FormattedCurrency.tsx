// export function formatPriceToNaira(price:number) {
//     const formattedPrice = price?.toLocaleString("en-NG", {
//       style: "currency",
//       currency: "NGN",
//     });
//     return formattedPrice;
//   }
  
export function formatPriceToNaira(price: number | undefined | null) {
  // Check if price is undefined, null, or not a number
  if (price === undefined || price === null || isNaN(price)) {
    return "Invalid Price"; // or any other suitable error message
  }

  // Check if the price is a whole number (has no decimal part)
  const isWholeNumber = price % 1 === 0;

  // Format the price as currency using the toLocaleString method
  const formattedPrice = price.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: isWholeNumber ? 0 : 2, // Set minimumFractionDigits to 0 for whole numbers
    maximumFractionDigits: 2, // Always show up to 2 decimal places
  });

  return formattedPrice;
}

