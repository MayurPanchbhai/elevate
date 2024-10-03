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
                    "./MenTshirt/blue t shirt.png",
                    "./MenTshirt/blue t shirt.png",
                    "./MenTshirt/IMG_20240918_115718_748.jpg"
                ],

            },
            type:"T Shirt",
            name:"Utility J1 ",
            price:"289",
            ActualPrice:"1999",
            color:"black",
            brand:"abibas",
            description:"made with an the love of an each plant",
            id:"1",
            ImSrc:"./MenTshirt/black t shirt.png",
            sizes:["S","M","XL","2XL"],
            liked:false,
            rating:4.9,
            root:"men",
            selectedSize:"",
            quantity:1

        },
        {
            images:{
                ImgMain:[
                    "./MenTshirt/blue t shirt.png",
                    "./MenTshirt/IMG_20240918_115718_748.jpg",
                    "./MenTshirt/black t shirt.png",
                    "./MenTshirt/IMG_20240918_115718_748.jpg"
                ],
            },
            type:"T Shirt",
            name:"Utility J3",
            price:"150",
            ActualPrice:"1400",
            color:"blue",
            brand:"puma",
            description:"made with an the love of an each plant",
            id:"3",
            ImSrc:"./MenTshirt/blue t shirt.png",
            sizes:["S","M","L","XL","2XL" ,"LG"],
            liked:false,
            rating:3.5,
            root:"men",
            selectedSize:"",
            quantity:1

        },
        {
            images:{
                ImgMain:[
                    "./MenTshirt/fef534kkltc.png",
                    "./MenTshirt/black t shirt.png",
                    "./MenTshirt/blue t shirt.png",
                    "./MenTshirt/IMG_20240918_115718_748.jpg"
                ],
            },
            type:"T Shirt",
            name:"Utility J4",
            price:"90",
            ActualPrice:"100",
            color:"Green",
            brand:"puma",
            description:"made with an the love of an each plant",
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
            name:"Utility J5",
            price:"69",
            ActualPrice:"699",
            color:"red",
            brand:"rasna",
            description:"made with an the love of an each po",
            id:"5",
            ImSrc:"./MenTshirt/hdagflaafshdfyte.png",
            sizes:["S","L","XL","2XL"],
            liked:false,
            rating:3.5,
            root:"men",
            selectedSize:"",
            quantity:1

        },
        {
            images:{
                ImgMain:[
                    "./MenTshirt/mareooonbran.png",
                    "./MenTshirt/black t shirt.png",
                    "./MenTshirt/blue t shirt.png",
                    "./MenTshirt/IMG_20240918_115718_748.jpg"
                ],
            },
            type:"T Shirt",
            name:"Utility J7",
            price:"110",
            ActualPrice:"180",
            color:"maroon",
            brand:"rasna",
            description:"made with an the love of an each po",
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
                    "./MenTshirt/black t shirt.png",
                    "./MenTshirt/blue t shirt.png",
                    "./MenTshirt/IMG_20240918_115718_748.jpg"
                ],
            },
            type:"T Shirt",
            name:"Utility J7",
            price:"110",
            ActualPrice:"180",
            color:"grey",
            brand:"rasna",
            description:"made with an the love of an each po",
            id:"8",
            ImSrc:"./MenTshirt/wteyqtwr.png",
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
                    "./MenTshirt/e7rafdtaewf.png",
                    "./MenTshirt/black t shirt.png",
                    "./MenTshirt/blue t shirt.png",
                    "./MenTshirt/IMG_20240918_115718_748.jpg"
                ]
            },
            type:"T Shirt",
            name:"Utility J2",
            price:"1100",
            ActualPrice:"1400",
            color:"orange",
            brand:"abibas",
            description:"made with an the love of an each plant",
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
                    "./MenTshirt/black t shirt.png",
                    "./MenTshirt/blue t shirt.png",
                    "./MenTshirt/IMG_20240918_115718_748.jpg"
                ],
            },
            type:"T Shirt",
            name:"Utility J7",
            price:"110",
            ActualPrice:"180",
            color:"yellow",
            brand:"rasna",
            description:"made with an the love of an each po",
            id:"7fad",
            ImSrc:"./MenTshirt/yreloewer.png",
            sizes:["S","M","L",],
            liked:false,
            rating:3.5,
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
                    "./MenTshirt/blue t shirt.png",
                    "./MenTshirt/blue t shirt.png",
                    "./MenTshirt/IMG_20240918_115718_748.jpg"
                ],

            },
            type:"T Shirt",
            name:"Utility J1 ",
            price:"289",
            ActualPrice:"1999",
            color:"black",
            brand:"abibas",
            description:"made with an the love of an each plant",
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
                    "./MenTshirt/IMG_20240918_115718_748.jpg",
                    "./MenTshirt/black t shirt.png",
                    "./MenTshirt/IMG_20240918_115718_748.jpg"
                ],
            },
            type:"T Shirt",
            name:"Utility J3",
            price:"150",
            ActualPrice:"1400",
            color:"blue",
            brand:"puma",
            description:"made with an the love of an each plant",
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
                    "./MenTshirt/black t shirt.png",
                    "./MenTshirt/blue t shirt.png",
                    "./MenTshirt/IMG_20240918_115718_748.jpg"
                ],
            },
            type:"T Shirt",
            name:"Utility J4",
            price:"90",
            ActualPrice:"100",
            color:"Green",
            brand:"puma",
            description:"made with an the love of an each plant",
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
                    "./WomenTshirt/etaobdfoag.png",
                    "./MenTshirt/black t shirt.png",
                ],
            },
            type:"T Shirt",
            name:"Utility J5",
            price:"69",
            ActualPrice:"699",
            color:"red",
            brand:"rasna",
            description:"made with an the love of an each po",
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
                    "./MenTshirt/black t shirt.png",
                    "./MenTshirt/blue t shirt.png",
                    "./MenTshirt/IMG_20240918_115718_748.jpg"
                ],
            },
            type:"T Shirt",
            name:"Utility J7",
            price:"110",
            ActualPrice:"180",
            color:"maroon",
            brand:"rasna",
            description:"made with an the love of an each po",
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
                    "./MenTshirt/black t shirt.png",
                    "./MenTshirt/blue t shirt.png",
                    "./MenTshirt/IMG_20240918_115718_748.jpg"
                ],
            },
            type:"T Shirt",
            name:"Utility J7",
            price:"110",
            ActualPrice:"180",
            color:"grey",
            brand:"rasna",
            description:"made with an the love of an each po",
            id:"tyepntner",
            ImSrc:"./WomenTshirt/tyepntner.png",
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
                    "./WomenTshirt/unaa.png",
                    "./MenTshirt/black t shirt.png",
                    "./MenTshirt/blue t shirt.png",
                    "./MenTshirt/IMG_20240918_115718_748.jpg"
                ]
            },
            type:"T Shirt",
            name:"Utility J2",
            price:"1100",
            ActualPrice:"1400",
            color:"orange",
            brand:"abibas",
            description:"made with an the love of an each plant",
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



