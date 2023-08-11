import React, { useState } from "react";
import ReactDOM from "react-dom";
import shareicon from '../Assets/shareicon.png';

    const Product = () => {

        const [count, setCount] = useState(0);

    const Subtract = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }    
    const Add = () => {
        if(count < 10){
            setCount(count + 1);
        }
    }


    return (<>
    <section class='productDetails'>
        <div class='productDetailsImg' ><img src="https://cdn.shopify.com/s/files/1/0745/3953/2586/products/20210927-152300-_1-283625.jpg" /></div>
        <div class='productDetailsInfo' >
            <span class='productDetailsTitle' style={{ marginTop:'2.5%' , display:'flex' , justifyContent:'space-between' }} ><l style={{ fontSize:'1.6rem', fontWeight: '600'}} >Ajrakh Rust Neo Stole</l><l style={{ backgroundColor:'rgb(212, 168, 20)' , height:'30px' , width:'30px' , display:'flex' , alignItems:'center' , justifyContent:'center' , borderRadius:'15px' }} ><img src={shareicon} style={{ height: '17px' }} /></l></span>
            <span class='productDetailsPrice' ><span class='displayPrice' >₹1,900 </span><span class='crossedPrice' >₹2,000 </span><span class='priceDiscount' >(5% OFF)</span></span>
            <span class='productDetailsAddToCart' > 
                <button class='cartAddLess' onClick={Subtract} >-</button>
                <l class='noInCart' >{count}</l>
                <button class='cartAddLess' onClick={Add} >+</button>
                <button class='addToCart' id='cartButton' >Add to Cart</button> 
            </span>
            <span class='productDetailsSize'><span class='Label' >Size</span><br /><span class='labelDescription' >220*50 cms</span></span>
            <span class='productDetailsMaterial'><span class='Label' >Material</span><br /><span class='labelDescription' >Modal</span></span>
            <span class='productDetailsColour'><span class='Label' >Colour</span><br /><span class='labelDescription' >The colours seen in this image may vary from the actual product due to photographic lighting source, different computer screen resolutions and displays.</span></span>
        </div>
    </section>
    <section class='productDescription'>
    <hr style={{ backgroundColor:'black' , height:'1px' }} />
        <p style={{ color:'rgb(212, 168, 20)' , fontWeight:'bold' , fontSize:'12px' }} >DESCRIPTION</p>
        <hr style={{ backgroundColor:'black' , height:'1px' }} />
        <p class='Description' >
        A striking, contemporarised, printed, stole in the traditional Ajrakh printing technique that is said to be nearly 4,500 years old. Ajrakh is an ancient vegetable dyeing and resist block-printing technique done on cloth . The process of 'Ajrakh' is a long drawn process involving many stages of printing. Each layer of visible colour is printed after a gap of time so the cloth has time to to cure for the day,giving it it's unique name (aaj-rakh). Originating in Sindh, Pakistan, and presently crafted by artisans in Kutch, Ajrakh block printing uses motifs inspired by nature.<br /><br />
         Kutch Craft Collective is a collaborative platform of 5 organizations from Kutch and was formed to revive the old crafts of Kutch, while creating livelihood opportunities for the artisan families. Amongst the five organizations of KCC, VRDI (Vivekananda Rural Development Institute) was established in 1988 with the mission of skill enhancement of Kutchi artisans and develop craft enterprises. It undertakes training, production, market support, and capacity building of craft enterprises in Mandvi \u0026 Mundra. Peepul Tree is proud to join hands with KCC in presenting Kutch 's most authentic art and craft forms.<br /><br />
         Quantity:1 Piece<br /><br />
         Care Instructions: Professional Dry Clean Only.<br /><br />
         Ships within 7-15days.<br /><br />
         Disclaimer:This product is lovingly hand printed by our artisans and may have slight irregularities that are a natural outcome of the human involvement in the process. Naturally dyed fabrics and threads may bleed.<br /><br />
         The colours seen in the image may vary from the actual product due to photographic lighting source, different computer screen resolutions and displays.
        </p>

    </section>
    </>)
    }

export default Product;
