<template>
 <div class="footer">
 <div class="container">     
 <div class="row">                       
 <div class="col-lg-4 col-sm-4 col-xs-12">
 <div class="single_footer">
 <h4>Contact Us</h4>
<ul> 
    <li><h6>Email: dentistimo@hotmail.com</h6></li>
      <li><h6>Phone: +467778888</h6></li>
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

        
        section {
            padding: 60px 0;
           /* min-height: 100vh;*/
        }
.footer {
    background: linear-gradient(105deg, skyblue,dodgerblue );
}

.single_footer{
@media only screen and (max-width:768px) { 
.single_footer{margin-bottom:30px;}
}
}
.single_footer h4 {
    color: black;
    margin-top: 0;
    padding-top: 25px;
    margin-bottom: 25px;
    font-weight: 700;
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

.single_footer ul li a {
    color: black;
    line-height: 36px;
    font-size: 15px;
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