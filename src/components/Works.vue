<template>
  <div class="workSample">
    <div class="title">
      <h1>Works</h1>
    </div>
    <div class="cards">
      <div class="card">
        <div class="img">
            <img src="../assets/imgs/xa7en7o59vtxdhgte92u.jpeg" alt="vuejs" />
        </div>
        <div class="content">
            <h2>Mini Projects Vuejs</h2>
            <button type="button"><router-link to="/projects/1">...more information</router-link></button>
            
        </div>
      </div>

      <div class="card">
        <div class="img">
            <img src="../assets/imgs/Javascript-programming-language.jpg" alt="javascript" />
        </div>
        <div class="content">
            <h2>Mini Projects Javascript</h2>
           <button type="button"><router-link to="/projects/2">...more information</router-link></button>
        </div>
      </div>

      <div class="card">
        <div class="img">
            <img src="../assets/imgs/whatis-sass.png" alt="sass" />
        </div>
        <div class="content">
            <h2>Mini Projects Sass</h2>
           <button type="button"><router-link to="/projects/3">...more information</router-link></button>
        </div>
      </div>

      <div class="card">
        <div class="img">
            <img src="../assets/imgs/FVH4C9505-png.png" alt="html-css" />
        </div>
        <div class="content">
            <h2>Mini Projects Html&css</h2>
            <button type="button"><router-link to="/projects/4">...more information</router-link></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Works",

};
</script>

<style lang="scss">

.workSample {
  width: 100%;
  height: 430px;

  @include media(medium){
       height: 800px;
    }
    @include media(small){
       height: 1530px;
    }
     @include media(xsmall){
       height: 1530px;
    }
  .title {
    h1 {
      color: $secondary-color;
      position: relative;
      letter-spacing: 2px;
      top: 15px;
      text-shadow: 0 0 3px #ff0000;
      font-size: 35px;
      font-family: Nunito;
    }
  }
  .cards {
    width: 100%;
    @include baseStyle;
    margin-top: 30px;
    flex-wrap: wrap;
    .card {
      width: 23%;
      box-shadow: 0 4px 8px 0 $third-color;
      transition: 0.3s;
      margin-right: 15px;
      background-color: $white-color;
      padding: 10px 5px;
      height: 320px;

      @include media(xlarge){
        width: 23%;
      }

      @include media(large){
        width: 19%;
      }

      @include media(medium){
        width: 40%;
        margin-top: 15px;
      }
      @include media(small){
        width: 60%;
        margin-top: 15px;
      }
      @include media(xsmall){
        width: 80%;
        margin-top: 15px;
      }
      .img{
          width: 100%;

          img{
              width: 100%;
              height: 200px;
          }
      }
      .content{
          padding: 2px 16px;

          h2{
              margin-top: 10px;
              margin-bottom: 8px;
              @include text-style(20px , 500 , $secondary-color);
          }
          button{
      
              padding: 10px 15px;
              border-radius: 20px;
              margin-top: 10px;
              cursor: pointer;
              border: none;
              outline: none;
              background: $primary-color;
              
              font-size: 15px;
            

               &:hover{
                background-color:$secondary-color;
                transition: all 0.2s ease-in;
              } 
          }
          button a{
              text-decoration: none;
              color: $white-color;
            }
      }
    }
  }
}
</style>
