const box = document.querySelector('.box');
async function fetchUser() {
    try {
        let res = await fetch('https://dummyjson.com/products') 
        let rangename = await res.json()
        let remename__ara = rangename.products
        
        remename__ara.forEach(info => {
            const card = document.createElement('div')
            card.classList.add('card')
          let thumbnail = document.createElement('img');
          let title = document.createElement('h2');
          let price = document.createElement('p');
          let stock = document.createElement('p');
          

        
          thumbnail.innerHTML = `thumbnail: ${info.thumbnail}`
          thumbnail.src = info.thumbnail 
          title.innerHTML =  `Title: ${info.title}`
          price.innerHTML =  `Price: ${info.price}$`               
          stock.innerHTML =  `Stock: ${info.stock}`           
          card.append(title)              
          card.append(price)              
          card.append(stock)              
          card.append(thumbnail)    
          box.append(card)          
          
        }); 


    
    }catch (error) {
        console.log(error);
    }
}
fetchUser()
