header.hero .hero-image{
    position:absolute;
    top:-40px;
    right:40px;
}

section{
    padding:4rem 0;
}
section.top-products{
    background:var(--light);
}

.section-heading{
    font-family:"Raleway-bold";
    text-align:center;
    Position:relative;
    margin-bottom:6rem;
}
.section-heading:after{
    content:'';
    display:block;
    width: 100%;
    height:30px;
    background-image:url(../icons/hr.svg);
    background-repeat: no-repeat;
    background-position: center;
    position:absolute;
    bottom:-40px;
}
section.top-products .food-slider .food-card{
    background:var(--heaven);
    padding:1.5rem 0;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
}
section.top-products .food-slider .food-card .product-image img{
    width:80%;
    height:200px;
    object-fit:contain;
    padding-bottom:1rem;
}
hr{
    border:1px solid var(--light);
    opacity: 0.8;
    margin:1rem 0;
}
section.top-products .food-slider .food-card h2{
    font-family:"Raleway-bold";
    font-size:1.3rem;
    margin-bottom:0.25rem;
}
.text-center{
    text-align: center;
}
section.top-products .food-slider .food-card .stars{
    margin-bottom:0.5rem;
}
section.top-products .food-slider .food-card .stars img{
    margin-right:0.25rem;
}
section.top-products .food-slider .food-card .price{
    font-family:"Raleway-medium";
    color:var(--danger);
    margin-bottom: 1rem;
}
section.top-products .food-slider .food-card button{
    font-family:"Raleway-medium";
    color:var(--secondary);
    background:var(--heaven);
    border:2px solid var(--primary);
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    display:flex;
    align-items: center;
    width:50%;
    font-size:1rem;
    cursor: pointer;
    transition:all .3s ease;
    -webkit-transition:all .3s ease;
    -moz-transition:all .3s ease;
    -ms-transition:all .3s ease;
    -o-transition:all .3s ease;
}
section.top-products .food-slider .food-card button:hover{
    background:var(--primary);
    color:var(--heaven);
}
.food-slider .food-card button img{
    background:var(--primary);
    padding:0.50rem;
    height:32px;
    margin-right:1.2rem;
}

.slick-slide{
    margin:0 27px;
}
.slick-list{
    margin:0 -27px;
}
.top-products .slider-btn{
    width: 30px;
    height:30px;
    border: none;
    background:var(--primary);
    border-radius:4px;
    -webkit-border-radius:4px;
    -moz-border-radius:4px;
    -ms-border-radius:4px;
    -o-border-radius:4px;
    cursor:pointer;
    outline:none;
}

.prev-btn{
    position:absolute;
    top:46%;
    left:-3rem;
    z-index: 1;
}
.next-btn{
    position:absolute;
    top:46%;
    right:-3rem;
    z-index: 1;
}
.top-products .slider{
    position: relative;
}
.top-products .btn-wrapper{
    margin-top:2rem;
}
.slick-track{
    padding:1rem 0;
}
section.about-meal img{
    width:85%;
}
.flex-1{
    flex:1;
}
section.about-meal h2{
    font-family: "Raleway-bold";
    font-size:1.4rem;
    color:var(--secondary);
    margin-bottom:2rem;
    line-height:1.3;
}
section.about-meal p{
    line-height: 1.7;
    margin-bottom:4rem;
}

section.our-services{
    background:var(--light);
    position:relative;
    z-index:0;
}
section.our-services .card-wrapper{
    margin-right:-2rem;
    margin-top:8rem;
}
section.our-services .service-card{
    background:var(--heaven);
    text-align: center;
    padding:2rem;
    padding-top:4rem;
    margin-right:2rem;
    position: relative;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
}
section.our-services .service-card .icon{
    position: absolute;
    top:-45px;
    left:50%;
    transform:translateX(-50%);
    -webkit-transform:translateX(-50%);
    -moz-transform:translateX(-50%);
    -ms-transform:translateX(-50%);
    -o-transform:translateX(-50%);
} 
section.our-services .service-card h2{
    font-family: "Raleway-bold";
    font-size: 1.3rem;
    margin-bottom:1rem;
}
section.our-services .service-card p{
    line-height: 1.6;
    margin-bottom:1rem;
}
.text-primary{
    color:var(--primary);
}

section.big-deal {
    background: linear-gradient(
        rgba(35,43,56,0.9),
        rgba(35,43,56,0.9)
    ), url(../images/food-table.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
}
section.big-deal .timer{
    display:flex;
    align-items: center;
    justify-content: center;
    margin-right:-2rem;
    margin-bottom:2rem;
}
section.big-deal .timer div{
    margin-right:2rem;
    background: var(--primary);
    width:150px;
    height:150px;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
section.big-deal .timer div span:first-child{
    font-family: "Raleway-semibold";
    font-size:2.5rem;
    color:var(--heaven);
    margin-bottom:0.05rem;
}
section.big-deal .timer div span:last-child{
    font-family: "Raleway-medium";
    color:var(--heaven);
}
.text-pure{
    color:var(--pure);
}

section.latest-news{
    background:var(--light);
    position:relative;
    z-index:0;
}
section.latest-news .article-wrapper{
    display:flex;
    margin-right:-2rem;

}
.latest-news .article-wrapper .card {
    margin-right:2rem;
    background:var(--heaven);
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
}
.latest-news .article-wrapper .card img{
    width:100%;
}
.latest-news .article-wrapper .card .card-content{
    padding:2rem;
}
.latest-news .article-wrapper .card .card-content .post-meta{
    margin-bottom: 1rem;
}
.latest-news .article-wrapper .card .card-content .post-meta .comment-count{
    margin-left:1rem;
}
.latest-news .article-wrapper .card .card-content h2{
    font-family: "Raleway-bold";
    font-size: 1.3rem;
    margin-bottom:1rem;
}
.latest-news .article-wrapper .card .card-content p{
    line-height: 1.6;
}
.latest-news .btn-wrapper{
    margin-top:2rem;
}
section.subscribe{
    background:var(--primary);
}
section.subscribe .container > div:first-child img{
    width:90%;
}
section.subscribe .container div:first-child{
    flex:1;
}
section.subscribe .container div:last-child{
    flex:1;
}

section.subscribe h1{
    font-family:"Raleway-bold";
    font-size: 1.5rem;
    margin-bottom:1.5rem;
}
section.subscribe p{
    font-family:"Raleway-medium"; 
    font-size: 1rem;
    margin-bottom:1.5rem;
    line-height: 1.5;
}
section.subscribe .input-wrap{
    background:var(--heaven);
    display:flex;
    padding:0.3rem;
    border-radius:4px;
    -webkit-border-radius:4px;
    -moz-border-radius:4px;
    -ms-border-radius:4px;
    -o-border-radius:4px;
}
section.subscribe .input-wrap input{
    width:100%;
    border:none;
    padding: 0 1rem;
    font-size:1rem;
}
section.subscribe .input-wrap input:focus{
    outline:none;
}
section.subscribe .input-wrap button{
    padding:0.8rem 2rem;
    border:none;
    background:var(--primary);
    color:var(--pure);
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    font-size:1rem;
    cursor:pointer;
    transition: all .3s ease;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    outline:none;
}
section.subscribe .input-wrap button:hover{
    background:var(--secondary);
}
section.contact-us{
    padding-top:0;
    padding-bottom: 0;
}
section.contact-us .contact-info-wrapper {
    padding:4rem 0;
    flex:1;
}
section.contact-us .map{
    flex:1;
    filter:grayscale(100%);
    -webkit-filter:grayscale(100%);
}
section.contact-us .contact-info{
    display:flex;
    justify-content: center;
}
section.contact-us .contact-info > div > div {
    display:flex;
    align-items:center;
    margin-bottom:2rem;
}
section.contact-us .contact-info > div > div img{
    margin-right: 1rem;
}
section.contact-us .contact-info > div > div > div{
    display:flex;
    flex-direction: column;
}
section.contact-us .contact-info > div > div > div span:first-child{
    font-family: "Raleway-bold";
    margin-bottom:0.25rem;
}
footer{
    background:var(--footer);
    padding:4rem 0;
}
footer .container{
    display:flex;
    color:var(--pure);
}

footer .box{
    flex:1;
    margin-right:2rem;
    text-align:center;
}

footer .instagram-api img{
    width:100%;
    height:100%;
    object-fit: cover;
}
footer .instagram-api .post-wrap{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
}
footer .instagram-api .post-wrap > div{
    width: calc(1/3*100% - (1 - 1/3)*10px);
    margin-bottom:10px;
}
footer .box ul{
    list-style-type: none;
}
footer .box ul li a{
    color:var(--pure);
    text-decoration: none;
    transition: all .3s ease;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
}
footer .box ul li a:hover{
    color:var(--primary);
}
footer .box h3{
    border-bottom:1px solid var(--primary);
    padding-bottom:1rem;
    margin-bottom:1rem;
}

footer .box p{
    line-height: 1.6;
    margin-bottom:1rem;
}
footer .box ul li{
    margin-bottom:1rem;
}
footer .box:nth-child(3) > div {
    display:flex;
    justify-content: center;
}
footer .box:nth-child(3){
    text-align: left;
}
footer .box:nth-child(3) h3{
    text-align: center;
}
footer .box:nth-child(3) > div img{
    margin-right:1rem;
}
footer .box:nth-child(3) ul li{
    margin-bottom:1.5rem;
}

footer.copyright{
    padding:1rem 0;
    background: var(--secondary);
    color:var(--pure);
    text-align: center;
    font-size: 0.75rem;
}
footer.copyright a{
    color:var(--primary);
    text-decoration: none;
}

.nav-background .mobile-logo{
    padding:1rem;
}
.nav-background .mobile-nav{
    padding:1rem;
}
.nav-background .mobile-nav ul{
    list-style-type: none;
}
.nav-background .mobile-nav ul li{
    margin-bottom:1rem;
}
.nav-background .mobile-nav ul li a{
    text-decoration: none;
    color:var(--secondary);
    font-family: "Raleway-medium";
}
.nav-background .mobile-nav ul li a:hover{
    color:var(--primary);
}
.nav-background .contact, .nav-background .time{
    padding:1rem;
    padding-left:0;
}
.nav-background .contact img, .nav-background .time img{
    margin-right:1rem;
}
.nav-background .contact h5,.nav-background .time h5{
    font-family:"Raleway-bold";
    margin-bottom:0.25rem;
    font-size:1rem;
}
.nav-background .contact h6, .nav-background .contact h6{
    font-size: 0.75rem;
}
.nav-background .cart{
    margin-bottom:2rem;
}
.nav-background .cart a{
    color:var(--secondary);
    text-decoration: none;
    font-family: "Raleway-bold";
}
.nav-background .cart img{
    margin-right:0.75rem;
    width:20px;
    height:20px;
}

@media (max-width:992px){
    .nav-trigger{
        display:block;
    }
    header.topbar, nav{
        display:none;
    }

    header.hero {
        margin-top:-4rem;
    }
    header.hero .hero-image{
        right:-160px;
        top:100px;
    }
    .top-products .slider-btn{
        display:none!important;
    }
    .latest-news .article-wrapper{
        flex-direction:column;
    }
    .latest-news .article-wrapper .card{
        margin-right:0;
        margin-bottom:4rem;
    }

    footer .instagram-api .post-wrap > div{
        width:calc(1/2*100% - (1 - 1/3)*10px);
    }
}

@media (max-width:768px){
    .about-meal .about-meal-wrap{
        flex-direction: column;
    }
    .about-meal .about-meal-wrap img{
        width:100%;
        margin-bottom: 2rem;
    }

    section.our-services .card-wrapper{
        flex-direction:column;
    }
    section.our-services .card-wrapper .service-card{
        margin-bottom:6rem;
    }
    footer .container{
        flex-direction: column;
    }
    footer .box{
        text-align: left;
        margin-right:0;
        margin-bottom:3rem;
    }
    footer .box:nth-child(3) h3{
        text-align:left;
    }
    footer .box:nth-child(3) > div{
        display:block;
    }
}

@media( max-width:576px){
    header.hero .hero-image{
        right:-235px;
        top:150px;
    }
    header.hero .container{
        padding-left:1rem;
    }
    header.hero{
        margin-top:-3rem;
    }
    section.big-deal .timer > div{
        margin-right:0.50rem;
    }
    section.big-deal .timer{
        margin-right:-0.5rem;
    }

    section.subscribe .container{
        flex-direction: column;
        padding:0.50rem;
    }
   
}


