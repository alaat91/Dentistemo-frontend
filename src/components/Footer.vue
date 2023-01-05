<template>
    <div class="footer">
            <div class="container">     
                <div class="row">                       
                    <div class="col-lg-4 col-sm-4 col-xs-12">
                        <div class="single_footer">
                            <h4>Contact Us</h4>
                            <ul> 
                                <li><a href="#">Email: dentistimo@hotmail.com</a></li>
                                <li><a href="#">Phone: +467778888</a></li>
                            </ul>

                        </div>
                    </div>
                         
                </div>
                <div class="row">
                    <div class="col-lg-12 col-sm-12 col-xs-12">
                        <p class="copyright">Copyright © 2023 Dentistimo.</p>
                    </div>                
                </div>               
            </div>
        </div>
</template>

<script>
</script>


<style scoped>
 h1,
        h2,
        h3,
        h4,
        h5,
        h6 {}
        a,
        a:hover,
        a:focus,
        a:active {
            text-decoration: none;
            outline: none;
        }
        
        a,
        a:active,
        a:focus {
            color: #333;
            text-decoration: none;
            transition-timing-function: ease-in-out;
            -ms-transition-timing-function: ease-in-out;
            -moz-transition-timing-function: ease-in-out;
            -webkit-transition-timing-function: ease-in-out;
            -o-transition-timing-function: ease-in-out;
            transition-duration: .2s;
            -ms-transition-duration: .2s;
            -moz-transition-duration: .2s;
            -webkit-transition-duration: .2s;
            -o-transition-duration: .2s;
        }
        
        ul {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        img {
    max-width: 100%;
    height: auto;
}
        section {
            padding: 60px 0;
           /* min-height: 100vh;*/
        }
.footer {
    background: linear-gradient(105deg, skyblue,dodgerblue );
}

.single_footer{}
@media only screen and (max-width:768px) { 
.single_footer{margin-bottom:30px;}
}
.single_footer h4 {
    color: black;
    margin-top: 0;
    padding-top: 25px;
    margin-bottom: 25px;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
}
.single_footer h4::after {
    content: "";
    display: block;
    height: 2px;
    width: 40px;
    background: #fff;
    margin-top: 20px;
}
.single_footer p{color:#fff;}
.single_footer ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
.single_footer ul li{}
.single_footer ul li a {
    color: black;
    -webkit-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    line-height: 36px;
    font-size: 15px;
    text-transform: capitalize;
}
.single_footer ul li a:hover { color: white; } 

.single_footer_address{}
.single_footer_address ul{}
.single_footer_address ul li{color:#fff;}
.single_footer_address ul li span {
    font-weight: 400;
    color: #fff;
    line-height: 28px;
}
.contact_social ul {
    list-style: outside none none;
    margin: 0;
    padding: 0;
}
.copyright {

    color:#fff;
    font-size: 15px;
    border-top: 1px solid rgba(255,255,255,0.4);
    text-align: center;
}
.copyright a{color:#47838e;transition: all 0.2s ease 0s;}
.copyright a:hover{color:black;}
</style>