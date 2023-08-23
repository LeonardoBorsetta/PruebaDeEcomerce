export function formatPrice(price){

  const priceToUse = parseInt(price)

  const price1 = priceToUse.toString().slice(-9,-6)
  const price2 = priceToUse.toString().slice(-6,-3) 
  const price3 = priceToUse.toString().slice(-3) 

  if(price1 === ""){
    return price2+"."+price3
  }
  if(price1 != ""){
    return price1 + "." + price2+"."+price3
  }
}