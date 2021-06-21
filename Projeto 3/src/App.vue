<template>
  <div class="header-site">
    <div class="test">
      <!-- Nav Bar Menu 1 -->

      <quick-menu
        :menu-count="getCount"
        :icon-class="icons"
        :menu-url-list="list"
        :background-color="backgroundColor"
        :color="color"
        :position="position"
        :is-open-new-tab="getIsOpenNewTab"
        @process="print"
      ></quick-menu>

      <div>
        <!-- Nav Bar Menu 2 -->

        <form action="/Login">
          <button class="button1"><a class="FAQ">Login</a></button>
        </form>
        <button class="button2"><i class="fa fa-user fa-2x"></i></button>

        <!-- caixa de pesquisa -->
        <search>
          <div class="buscar-caixa">
            <input
              type="text"
              name=""
              class="buscar-txt"
              placeholder="Search..."
            />
            <a class="buscar-btn">
              <i class="fa fa-search"></i>
            </a>
          </div>
        </search>

        <!-- <button class="search"><i class="fa fa-search fa-2x"></i></button> -->

        <!-- <body>

        </body> -->
        <!-- <HelloWorld></HelloWorld> -->
      </div>
    </div>
    <router-view />
<!--
   <div id="container">
    <div id="contacts">
      <div id="contacts--contact">
        <p>{{ mail }}</p>
        <p>{{ phone }}</p>
      </div>
      <div id="contacts--social">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div id="mentions">
      <p>{{ mention }}</p>
    </div>
   </div> -->


<div class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-xs-8 col-md-3">
            <h6>HTML CSS JS</h6>
            <img height="60px" src="@/assets/html5.png"/>    
            
          </div>

          <div class="col-xs-8 col-md-3">
            <h6>Vue</h6>
              <img height="60px" src="@/assets/vue_logo.png"/>    

          </div>

          <div class="col-xs-8 col-md-3">
            <h6>Vuetify</h6>
            <img height="60px" src="@/assets/vuetify_logo.png"/>    

          </div>
        </div>
        <p class="copyright-text">Projecto feito por: Gonçalo e Marcelo.
        <hr>
      </div><!--
      <div class="container" >
        
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Projecto feito por: Gonçalo e Marcelo.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div> -->
</div>



  </div>
  


</template>

<script>
import quickMenu from "vue-quick-menu";
//import HelloWorld from '@components/HelloWorld';
// Nav Bar Menu 1

export default {
  name: "demo",

  data() {
    return {
      count: 4,
      icons: ["fa fa-home", "fa fa-upload", "fa fa-star", "fa fa-cog"],
      list: [
        { isLink: true, url: "/" },
        { isLink: true, url: "/Upload" },
        { isLink: true, url: "/Favorites" },
        { isLink: true, url: "/Definitions" },
      ],
      backgroundColor: "#404040",
      color: "#ffffff",
      position: "top-left",
      isOpenNewTab: false,

      mail : 'xavier.seignard+drangies@gmail.com',
      phone : '06.00.00.00.00',
      mention : '2018 | mentions légales'
    };
  },

  components: {
    quickMenu: quickMenu,
    //'HelloWorld':HelloWorld
  },
};
</script>

<style scoped>



/*
 */
body {
  margin: 0;
  padding: 0;
  background-color: #ffffff;
}

.button2 {
  background-color: #404040;
  color: #ffffff;
  box-shadow: 0 3px 10px rgb(0 0 0 / 23%), 0 3px 10px rgb(0 0 0 / 16%);
  height: 60px;
  width: 60px;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  border: 3px solid #404040;
  margin-bottom: 2px;

  top: 30px;
  left: 90%;
}

.button1 {
  background-color: #808080;
  position: absolute;
  text-align: right;
  width: 140px;
  padding: 12.5px;
  size: 15px;
  color: #ffffff;
  font-family: arial;
  font-weight: 400;
  cursor: pointer;
  border-radius: 100px;
  letter-spacing: 2px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 23%), 0 3px 10px rgb(0 0 0 / 16%);
  float: left;

  top: 38px;
  left: 90%;

  transition-duration: 0.4s;
  overflow: auto;
}

.button1:hover {
  background-color: #404040;
  width: 151px;
}

/* ------------------search------------------- */

.buscar-caixa {
  position: absolute;
  top: 30px;
  left: 88%;
  transform: translate(-100%, 0);
  background: #404040;
  height: 60px;
  border-radius: 100px;
  padding: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 23%), 0 3px 10px rgb(0 0 0 / 16%);
}

.buscar-caixa:hover > .buscar-txt {
  width: 150px;
  padding: 0 6px;
}

.buscar-caixa:hover > .buscar-btn {
  background: white;
  color: #404040;
}

.buscar-btn {
  color: #ffffff;
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #404040;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  color: white;
  cursor: pointer;
}

.buscar-btn > i {
  font-size: 30px;
}

.buscar-txt {
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0;
  color: white;
  font-size: 16px;
  transition: 0.4s;
  line-height: 40px;
  width: 0px;
  font-weight: bold;
  font-family: verdana;
}

/* erro */

.FAQ {
  vertical-align: top;
  height: auto !important;
}

.header-site {
  top: 0;
  width: 100%;
  align-items: center;
  padding: 0;
  box-sizing: border-box;
}

.test {
  height: 100px;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0)
  );
}

@import url('https://fonts.googleapis.com/css?family=Open+Sans');


#container{

  background-color:#26272b;
  padding:45px 0 20px;
  font-size:15px;
  line-height:24px;
  /*color:#737373;*/
  height: 200px;


}
#contacts{
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;
}
#contacts--contact{
  text-align:right;
}
#contacts--social{
  width:20%;
  display : flex;
  justify-content : space-between;
}
#contacts--social div{
  height:30px;
  width:30px;
  background-color:white;
  border-radius:50%;
}
#mentions p {
  font-size:0.5em;
}


/* ------------------footer------------------ */

.site-footer
{
  background-color:#26272b;
  padding:45px 0 20px;
  font-size:15px;
  line-height:24px;
  color:#737373;
  height: 200px;
 
}
.site-footer hr
{
  border-top-color:#bbb;
  opacity:0.5
}
.site-footer hr.small
{
  margin:20px 0
}
.site-footer h6
{
  color:#fff;
  font-size:16px;
  text-transform:uppercase;
  margin-top:5px;
  letter-spacing:2px
}
.site-footer a
{
  color:#737373;
}
.site-footer a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links
{
  padding-left:0;
  list-style:none
}
.footer-links li
{
  display:block
}
.footer-links a
{
  color:#737373
}
.footer-links a:active,.footer-links a:focus,.footer-links a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links.inline li
{
  display:inline-block
}
.site-footer .social-icons
{
  text-align:right
}
.site-footer .social-icons a
{
  width:40px;
  height:40px;
  line-height:40px;
  margin-left:6px;
  margin-right:0;
  border-radius:100%;
  background-color:#33353d
}
.copyright-text
{
  margin:0
}
@media (max-width:991px)
{
  .site-footer [class^=col-]
  {
    /*margin-bottom:30px*/
  }
}
@media (max-width:767px)
{
  .site-footer
  {
    padding-bottom:0
  }
  .site-footer .copyright-text,.site-footer .social-icons
  {
    text-align:center
  }
}
.social-icons
{
  padding-left:0;
  margin-bottom:0;
  list-style:none
}
.social-icons li
{
  display:inline-block;
  margin-bottom:4px
}
.social-icons li.title
{
  margin-right:15px;
  text-transform:uppercase;
  color:#96a2b2;
  font-weight:700;
  font-size:13px
}
.social-icons a{
  background-color:#eceeef;
  color:#818a91;
  font-size:16px;
  display:inline-block;
  line-height:44px;
  width:44px;
  height:44px;
  text-align:center;
  margin-right:8px;
  border-radius:100%;
  -webkit-transition:all .2s linear;
  -o-transition:all .2s linear;
  transition:all .2s linear
}
.social-icons a:active,.social-icons a:focus,.social-icons a:hover
{
  color:#fff;
  background-color:#29aafe
}
.social-icons.size-sm a
{
  line-height:34px;
  height:34px;
  width:34px;
  font-size:14px
}
.social-icons a.facebook:hover
{
  background-color:#3b5998
}
.social-icons a.twitter:hover
{
  background-color:#00aced
}
.social-icons a.linkedin:hover
{
  background-color:#007bb6
}
.social-icons a.dribbble:hover
{
  background-color:#ea4c89
}
@media (max-width:767px)
{
  .social-icons li.title
  {
    display:block;
    margin-right:0;
    font-weight:600
  }
}
</style>
