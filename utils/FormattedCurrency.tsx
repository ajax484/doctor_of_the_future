export function formatPriceToNaira(price:number) {
    const formattedPrice = price?.toLocaleString("en-NG", {
      style: "currency",
      currency: "NGN",
    });
    return formattedPrice;
  }
  
