const FULL_PRICE = 10000
const scalbar = document.querySelector('.fullness_scale')
const full_bar = document.querySelector('.full_bar')
const for_sale = document.querySelector('.for_sale')
const client_sum = document.querySelector('.client_sum')
const for_sale_price = for_sale.querySelector('span')
const calculatingLength = (sale) =>{
   
    let sum = parseInt(client_sum.textContent, 10)
 let finish = sum*100/sale
 client_sum.style.width =  `${finish}%`
 for_sale_price.textContent = `${sale-sum}`
 if(finish >=100){
     client_sum.style =  "border-radius: 10px"
     client_sum.style.width =  `100%`
     full_bar.style.display = "none"
 }
 return client_sum.style.width
 
}

   calculatingLength(FULL_PRICE)

 





