import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({children}) => {

    const [user , setUser] =useState([]) ;

    const [userForm , setUserForm] = useState({
        username:"",
        password:"",
        email:"",
        number:""
      })

    const handleLog = () =>{

    }
    const handleSetUserLog = (value,argu) =>{

    }



    

    const [theme , setTheme] = useState(true);
    const [cart , setCart] =useState([]);
    

    const theStringHome = "You Will Be highest In the room ...      ";
    const theStringWomen = "Comfort style identity quality & Yourself ... ";

    const HeroCardImgMen =[
        "./MenTshirt/card/aquaman.png",
        "./MenTshirt/card/batman.png",
        "./MenTshirt/card/spiderman.png",
        "./MenTshirt/card/superman.png",
        "./MenTshirt/card/hitler.png",
        "./MenTshirt/card/blank.png"
    ]

    const heroCardTextHome = theStringHome.split(" ");
    const heroCardTextWomen = theStringWomen.split(" ");


    // handling theme
    const handleTheme = () =>{
        setTheme(!theme);
    }


    //handling cart 
    function handleCarItem(newItem, ro, name, selectSize , quan) {
        let present = false;
        let newCartItem;
    
        if (ro == "WTshirt") {
            // Use find instead of filter
            newCartItem = WTshirt.find((curr) => curr.id === newItem);
            if (newCartItem) {
                newCartItem.selectedSize = selectSize;
                newCartItem.quantity = quan;
            }
        } else if (ro == "MTshirt") {
            newCartItem = MTshirt.find((curr) => curr.id === newItem);
            if (newCartItem) {
                newCartItem.selectedSize = selectSize;
                newCartItem.quantity = quan;
            }
        }
    
        // Check if the item is already in the cart (comparing by id)
        if (cart.some(item =>item.id === newCartItem.id && item.selectedSize === newCartItem.selectedSize )){
            present = true;    
        }
    
        // Debugging logs
        if (!present) {
            setCart((prev) => [...prev, newCartItem]);
        }
    
        // alert(`Your product name ${name} is added to the cart`);
    }
    

    
    
    



    // tshirt for the mens array or you can call it stock 
    const MTshirt = [
        { 
            images:{
                ImgMain:[
                    "./MenTshirt/black t shirt.png",
                    "./MenTshirt/black t shirt.png"
                ],

            },
            type:"T Shirt",
            name:"Classic Edge",
            price:"699",
            ActualPrice:"799",
            color:"black",
            brand:"abibas",
            description:"A perfect blend of timeless style and modern fit. The Classic Edge T-shirt offers a versatile look for any occasion, keeping you sharp and comfortable all day.",
            id:"1",
            ImSrc:"./MenTshirt/black t shirt.png",
            sizes:["S","M","XL","2XL"],
            liked:false,
            rating:4.3,
            root:"men",
            selectedSize:"",
            quantity:1

        },
        {
            images:{
                ImgMain:[
                    "./MenTshirt/blue t shirt.png",
                    "./MenTshirt/black t shirt.png",
                ],
            },
            type:"T Shirt",
            name:"Street Mode",
            price:"690",
            ActualPrice:"1000",
            color:"blue",
            brand:"puma",
            description:"Inspired by urban culture, the Street Mode T-shirt is your go-to for casual days. It brings together a relaxed fit with edgy streetwear vibes.",
            id:"3",
            ImSrc:"./MenTshirt/blue t shirt.png",
            sizes:["S","M","L","XL","2XL" ,"LG"],
            liked:false,
            rating:3.9,
            root:"men",
            selectedSize:"",
            quantity:1

        },
        {
            images:{
                ImgMain:[
                    "./MenTshirt/fef534kkltc.png",
                    "./MenTshirt/fef534kkltc.png",
                    "./MenTshirt/black t shirt.png"
                ],
            },
            type:"T Shirt",
            name:"Bold Threads",
            price:"590",
            ActualPrice:"890",
            color:"Green",
            brand:"puma",
            description:"Stand out with Bold Threads. This T-shirt is designed for those who aren't afraid to make a statement, combining bold graphics with a strong, confident fit.",
            id:"4",
            ImSrc:"./MenTshirt/fef534kkltc.png",
            sizes:["M","L","XL",],
            liked:false,
            rating:3.5,
            root:"men",
            selectedSize:"",
            quantity:1

        },
        {
            images:{
                ImgMain:[
                    "./MenTshirt/hdagflaafshdfyte.png",
                    "./MenTshirt/hdagflaafshdfyte.png",
                    "./MenTshirt/black t shirt.png",
                ],
            },
            type:"T Shirt",
            name:"Minimalist Fit",
            price:"769",
            ActualPrice:"899",
            color:"red",
            brand:"rasna",
            description:"Less is more. The Minimalist Fit T-shirt is all about simplicity and clean lines, making it an essential wardrobe piece for a sleek, effortless look.",
            id:"5",
            ImSrc:"./MenTshirt/hdagflaafshdfyte.png",
            sizes:["S","L","XL","2XL"],
            liked:false,
            rating:4.3,
            root:"men",
            selectedSize:"",
            quantity:1

        },
        {
            images:{
                ImgMain:[
                    "./MenTshirt/mareooonbran.png",
                    "./MenTshirt/mareooonbran.png"
                ],
            },
            type:"T Shirt",
            name:"Urban Essential",
            price:"1190",
            ActualPrice:"1800",
            color:"maroon",
            brand:"rasna",
            description:"For the modern man on the go, the Urban Essential T-shirt provides comfort and style in equal measure. This piece is perfect for everyday wear, whether you're in the city or on the move.",
            id:"7",
            ImSrc:"./MenTshirt/mareooonbran.png",
            sizes:["S","M","L",],
            liked:false,
            rating:3.5,
            root:"men",
            selectedSize:"",
            quantity:1

        },
        {
            images:{
                ImgMain:[
                    "./MenTshirt/wteyqtwr.png",
                    "./MenTshirt/wteyqtwr.png"
                ],
            },
            type:"T Shirt",
            name:"Alpha Vibe",
            price:"457",
            ActualPrice:"500",
            color:"grey",
            brand:"rasna",
            description:"Elevate your wardrobe with Alpha Vibe. Designed with a premium cut and feel, this T-shirt exudes confidence and power, making it a top choice for those who lead the pack.",
            id:"8",
            ImSrc:"./MenTshirt/wteyqtwr.png",
            sizes:["S","M","L",],
            liked:false,
            rating:8,
            root:"men",
            selectedSize:"",
            quantity:1

        },
        {
            images:{
                ImgMain:[
                    "./MenTshirt/e7rafdtaewf.png",
                    "./MenTshirt/e7rafdtaewf.png"
                ]
            },
            type:"T Shirt",
            name:"Prime Cut",
            price:"1100",
            ActualPrice:"1400",
            color:"orange",
            brand:"abibas",
            description:"Crafted with precision, the Prime Cut T-shirt offers a superior fit and finish. This premium piece is made for those who appreciate high-quality fabric and design.",
            id:"2",
            ImSrc:"./MenTshirt/e7rafdtaewf.png",
            sizes:["S","XL","2XL"],
            liked:false,
            rating:3.5,
            root:"men",
            selectedSize:"",
            quantity:1

        },
        {
            images:{
                ImgMain:[
                    "./MenTshirt/yreloewer.png",
                    "./MenTshirt/yreloewer.png"
                ],
            },
            type:"T Shirt",
            name:"Everyday Comfort",
            price:"1290",
            ActualPrice:"1490",
            color:"yellow",
            brand:"rasna",
            description:"Your go-to T-shirt for everyday wear. With its soft fabric and relaxed fit, Everyday Comfort is designed to keep you feeling great from morning till night.",
            id:"7fad",
            ImSrc:"./MenTshirt/yreloewer.png",
            sizes:["S","M","L",],
            liked:false,
            rating:5,
            root:"men",
            selectedSize:"",
            quantity:1

        },
    ]


    // tshirt for the women array or you can call it stock 
    const WTshirt = [
        { 
            images:{
                ImgMain:[
                    "./WomenTshirt/875wrh.png",
                    "./WomenTshirt/875wrh.png"
                ],

            },
            type:"Jacket",
            name:"Graceful Vibe",
            price:"1289",
            ActualPrice:"1999",
            color:"Green",
            brand:"abibas",
            description:"The Graceful Vibe T-shirt combines comfort with understated elegance. Its flattering silhouette and smooth fabric make it an ideal choice for a relaxed yet sophisticated look.",
            id:"875wrh",
            ImSrc:"./WomenTshirt/875wrh.png",
            sizes:["S","M","XL","2XL"],
            liked:false,
            rating:4.9,
            root:"women",
            selectedSize:"",
            quantity:1

        },
        {
            images:{
                ImgMain:[
                    "./WomenTshirt/bangerye.png",
                    "./WomenTshirt/bangerye.png"
                ],
            },
            type:"T Shirt",
            name:"Effortless Glam",
            price:"890",
            ActualPrice:"1500",
            color:"white",
            brand:"puma",
            description:"Elevate your casual wardrobe with the Effortless Glam T-shirt. Featuring a flattering cut and a subtle sparkle, it’s designed to add a hint of glamour to your everyday look.",
            id:"bangerye",
            ImSrc:"./WomenTshirt/bangerye.png",
            sizes:["S","M","L","XL","2XL" ,"LG"],
            liked:false,
            rating:3.5,
            root:"women",
            selectedSize:"",
            quantity:1

        },
        {
            images:{
                ImgMain:[
                    "./WomenTshirt/dfagf.png",
                    "./WomenTshirt/dfagf.png"
                ],
            },
            type:"T Shirt",
            name:"Serene Style",
            price:"900",
            ActualPrice:"1000",
            color:"grey",
            brand:"puma",
            description:"Embrace tranquility with the Serene Style T-shirt. Its soft, flowing fabric and relaxed fit make it perfect for unwinding while maintaining a polished appearance.",
            id:"dfagf",
            ImSrc:"./WomenTshirt/dfagf.png",
            sizes:["M","L","XL",],
            liked:false,
            rating:3.5,
            root:"women",
            selectedSize:"",
            quantity:1

        },
        {
            images:{
                ImgMain:[
                    "./WomenTshirt/etaobdfoag.png",
                    "./WomenTshirt/etaobdfoag.png"
                ],
            },
            type:"Jacket",
            name:"Modern Muse",
            price:"599",
            ActualPrice:"799",
            color:"white",
            brand:"rasna",
            description:"The Modern Muse T-shirt is designed for the woman who leads with style and grace. With its sleek design and flattering silhouette, it’s a perfect match for a modern, fashion-forward wardrobe.",
            id:"etaobdfoag",
            ImSrc:"./WomenTshirt/etaobdfoag.png",
            sizes:["S","L","XL","2XL"],
            liked:false,
            rating:3.5,
            root:"women",
            selectedSize:"",
            quantity:1

        },
        {
            images:{
                ImgMain:[
                    "./WomenTshirt/mynaluv.png",
                    "./WomenTshirt/mynaluv.png"
                ],
            },
            type:"Dress",
            name:"Chic Comfort",
            price:"1290",
            ActualPrice:"1400",
            color:"red",
            brand:"rasna",
            description:"Look chic while staying comfortable. The Chic Comfort Dress offers a perfect balance of style and ease, making it your go-to for casual outings or cozy days in. With its relaxed fit and versatile design, it's perfect for any occasion where you want to feel effortlessly stylish.",
            id:"mynaluv",
            ImSrc:"./WomenTshirt/mynaluv.png",
            sizes:["S","M","L",],
            liked:false,
            rating:3.5,
            root:"women",
            selectedSize:"",
            quantity:1

        },
        {
            images:{
                ImgMain:[
                    "./WomenTshirt/tyepntner.png",
                    "./WomenTshirt/tyepntner.png"
                ],
            },
            type:"T Shirt",
            name:"Simple Grace",
            price:"1490",
            ActualPrice:"1680",
            color:"pink",
            brand:"rasna",
            description:"The Simple Grace T-shirt is all about minimalism and beauty. This elegant tee provides a clean, refined look, perfect for those who appreciate a subtle yet stylish appearance.",
            id:"tyepntner",
            ImSrc:"./WomenTshirt/tyepntner.png",
            sizes:["S","M","L",],
            liked:false,
            rating:4.6,
            root:"women",
            selectedSize:"",
            quantity:1

        },
        {
            images:{
                ImgMain:[
                    "./WomenTshirt/unaa.png",
                    "./WomenTshirt/unaa.png"
                ]
            },
            type:"T Shirt",
            name:"Effortless Style",
            price:"1100",
            ActualPrice:"1400",
            color:"blue",
            brand:"abibas",
            description:"Achieve style without trying too hard. The Effortless Style Dress offers a laid-back vibe with a refined look, making it an essential piece for the modern woman’s wardrobe. Perfect for any occasion, this dress delivers comfort and elegance with minimal effort.",
            id:"unaa",
            ImSrc:"./WomenTshirt/unaa.png",
            sizes:["S","XL","2XL"],
            liked:false,
            rating:3.5,
            root:"women",
            selectedSize:"",
            quantity:1

        },
    ]


    const Home =[
        {
            ImSrc:"./MenTshirt/mareooonbran.png",
            id:"3q8y3rp"
        },
        {
            ImSrc:"./WomenTshirt/etaobdfoag.png",
            id:"iohasfd"
        },
        {
            ImSrc:"./WomenTshirt/mynaluv.png",
            id:"uqwery"
        },
        {
            ImSrc:"./MenTshirt/e7rafdtaewf.png",
            id:"thogtf"
        },
        {
            ImSrc:"./MenTshirt/yreloewer.png",
            id:"homlanddfa"
        },
        {
            ImSrc:"./WomenTshirt/bangerye.png",
            id:"nluoweb"
        },
        {
            ImSrc:"./WomenTshirt/dfagf.png",
            id:"8qafhua"
        },
        
        
        
    ];
    const MTShirtImg =[
        {
            ImSrc:"./MenTshirt/yreloewer.png",
            id:"homlanddfa"
        },
        {
            ImSrc:"./MenTshirt/fef534kkltc.png",
            id:"thogtaerf"
        },
        {
            ImSrc:"./MenTshirt/black t shirt.png",
            id:"dfa"
        },
        
        {
            ImSrc:"./MenTshirt/mareooonbran.png",
            id:"3q8y3rp"
        },
        {
            ImSrc:"./MenTshirt/e7rafdtaewf.png",
            id:"thogtf"
        },
        
    ];
    const WShirtImg =[
        {
            ImSrc:"./WomenTshirt/dfagf.png",
            id:"8qafhua"
        },
        {
            ImSrc:"./WomenTshirt/mynaluv.png",
            id:"uqwery"
        },
        
        {
            ImSrc:"./WomenTshirt/875wrh.png",
            id:"uhefug"
        },
        {
            ImSrc:"./WomenTshirt/bangerye.png",
            id:"nluoweb"
        },
        
        {
            ImSrc:"./WomenTshirt/unaa.png",
            id:"huadf"
        },
        
    ];
    
    

    const handleLiked = (event) =>{
        const {liked} = MTshirt[event-1];
        
        if(liked == true){
            MTshirt[event-1].liked = false;

        }
        else{
            MTshirt[event-1].liked = true;
        }
        
        
    }



    return (
        <DataContext.Provider value={{theme,handleTheme , WTshirt , MTshirt, WShirtImg, MTShirtImg , heroCardTextHome ,heroCardTextWomen , handleCarItem , cart,handleLiked , Home,HeroCardImgMen , user ,setUserForm , setUser,userForm}}>
            {children}
        </DataContext.Provider>
    );
};



