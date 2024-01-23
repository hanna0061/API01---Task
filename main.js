async function getproduct(){
    const response= await fetch("https://dummyjson.com/products")
    const data  = await response.json();
    const products = data.products
    console.log(products);

    const result = products.map(function(ele){

        return`
        <div class="product">
        <h2> Phone Model :${ele.title}</h2>
        <img src=${ele.thumbnail} />
        <h2> Price : ${ele.price}</h2>
        </div>
        `;


    });

    document.querySelector(".product").innerHTML=result;
}
getproduct();