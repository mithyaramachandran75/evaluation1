function append(){
    let data =JSON.parse(localStorage.getItem("products")) || [];

    let all_products=document.getElementById("all_products");

   

    data.forEach(function(el,index){
        let div =document.createElement("div");
        let img= document.createElement("img");
        img.src=el.image;
        let type=document.createElement("type");
        type.innerText=el.type;
        let description=document.createElement("description");
        description.innerText=el.desc;
        let price=document.createElement("price");
        price.innerText=el.price;
        let btn=document.createElement("button");
        btn.innerText="Remove";
        btn.addEventListener("click",function(){
            this.remove(index);
        });
        div.append(p,h,m, img,btn);
        all_products.append(div);
    });
}





