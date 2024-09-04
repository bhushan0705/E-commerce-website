const wrapper= document.querySelector(".sliderWrapper");
const menuItems=document.querySelectorAll(".menuItems");

//------ product arrays----
const products=[
    {
        id:1,
        title:"Air Force",
        price:119,
        colors:[
            {
                code:"black",
                img:"/img/air.png",
            },
            {
                code:"darkblue",
                img:"/img/air2.png",
            },
        ],
    },
    {
        id:2,
        title:"BLAZER",
        price:210,
        colors:[
            {
                code:"white",
                img:"/img/blazer.png",
            },
            {
                code:"green",
                img:"/img/blazer2.png",
            },
        ],
    },
    {
        id:3,
        title:"JORDAN",
        price:300,
        colors:[
            {
                code:"grey",
                img:"/img/jordan.png",
            },
            {
                code:"darkblue",
                img:"/img/jordan2.png",
            },
        ],
    },
    {
        id:4,
        title:"CRATER",
        price:100,
        colors:[
            {
                code:"white",
                img:"/img/crater2.png",
            },
            {
                code:"darkblue",
                img:"/img/NoImg2.png",
            },
        ],
    },
    {
        id:5,
        title:"HIPPE",
        price:99,
        colors:[
            {
                code:"black",
                img:"/img/hippie2.png",
            },
            {
                code:"grey",
                img:"/img/hippie.png",
            },
        ],
    },

]



const choosenProduct=products[0];
const currentProductImg=document.querySelector(".productImg");
const currentProductTitle=document.querySelector(".productTitle");
const currentProductColor=document.querySelectorAll(".color");
const currentProductSizes=document.querySelectorAll(".size");
const currentProductPrice =document.querySelector(".productPrice");

menuItems.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        //to change the slider
        wrapper.style.transform=`translateX(${-100 * index}vw)`;

        //to change the choosen product
        let choosenProduct=products[index];
        currentProductImg.src=choosenProduct.colors[0].img;

        //to change the title of the product--
        currentProductTitle.textContent = choosenProduct.title;

        //to change the price of the product--
        currentProductPrice.textContent=  "$" +choosenProduct.price;
        
        //changing the color box of the product--
        currentProductColor.forEach((color,index)=>{
        color.style.background = choosenProduct.colors[index].code;

        })
    });
});


//colors---
currentProductColor.forEach((color, index) => {
    color.addEventListener("click", () => {

            // Getting the current product   ---this line of code i get from chat gpt 
        let currentProduct = products.find(product => product.title === currentProductTitle.textContent);

            // Update the product image with the corresponding color image
        currentProductImg.src = currentProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor="white";
            size.style.color="black";
        })
        size.style.backgroundColor="black";
        size.style.color="white";
    }
    );
});

// ----payment---
const productButton = document.querySelector(".productButton");
const payments = document.querySelectorAll(".payment");
const close = document.querySelector(".close");

productButton.addEventListener('click', () => {
    console.log("clicked");
    payments.forEach(payment => {
    payment.style.display = "flex";
    });
});

close.addEventListener('click', () => {
    payments.forEach(payment => {
    payment.style.display = "none";
    });
});