<template>
  <div class="FindPerson">
    <div class="title">
      <h1>Find Me</h1>
    </div>
    <div class="relation-container">
      <div class="relations">
        <div>
          <div class="linkdin">
            <span>Mohaddese Amel</span>
            <i class="fab fa-linkedin"></i>
            
          </div>
          <div class="telegram">
            <span>Mohaddese_Amel@</span>
            <i class="fab fa-telegram-plane"></i>
          </div>

          <div class="phone">
            <span>09015033247</span>
            <i class="fas fa-phone"></i>
          </div>
        </div>
        <div>
          <div class="email">
            <span>mohaddese.computer@gmail.com</span>
            <i class="fas fa-envelope"></i>
          </div>
          <div class="github">
            <span>https://github.com/mohaddeseamel</span>
            <i class="fab fa-github"></i>
          </div>
          <div class="instagram">
            <span>mohaddese.amel</span>
            <i class="fab fa-instagram"></i> 
          </div>
        </div>
      </div>
      <div class="picMe">
        <img src="../assets/imgs/IMG_20211231_200105.jpg" alt="img-me" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FindMe",
};
</script>

<style lang="scss">
.FindPerson {
  background-image: url("../assets/imgs/istockphoto-1208213390-612x612.jpg");
  height: 370px;

  .title {
    h1 {
      color: $white-color;
      position: relative;
      top: 10px;
      text-shadow: 2px 2px 5px red;
      font-family: Nunito;
    }
  }
  .relation-container {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .relations {
      display: flex;
      width: 60%;
      margin-right: 18px;


      @include media(medium){
        width: 68%;
      }

      @include media(small) {
        width: 100%;
        display: flex;
        justify-content: center;
      }

      @include media(xsmall) {
        width: 100%;
        display: flex;
        justify-content: center;
      }

      div {
        @include media(small) {
            margin-left: 8px;
          }

        .linkdin {
          @include findMe-style;
          @include text-style(0.85rem, 600, $white-color);
          text-align: left;
       

          @include media(xlarge){
             @include text-style(1rem, 600, $white-color);
           }

          @include media(small) {
            @include text-style(0.8rem, 600, $white-color);
            width: 80%;
          }

          @include media(xsmall) {
             @include text-style(0.8rem, 600, $white-color);
             width: 75%;

        
          }

          &:hover {
            @include hover-findMe;
          }

          i {
            @include findIcon;

            @include media(small) {
              font-size: 15px;
            }
            @include media(xsmall) {
              font-size: 10px;
            }
          }
        }
        .telegram {
          @include findMe-style;
          @include text-style(0.85rem, 600, $white-color);
          text-align: left;
     
          @include media(xlarge){
             @include text-style(1rem, 600, $white-color);
           }

          @include media(small) {
             @include text-style(0.8rem, 600, $white-color);
             width: 80%;
          }
          @include media(xsmall) {
             @include text-style(0.8rem, 600, $white-color);
             width: 75%;
          }

          &:hover {
            @include hover-findMe;
          }

          i {
            @include findIcon;

            @include media(small) {
              font-size: 15px;
            }
            @include media(xsmall) {
              font-size: 10px;
            }
          }
        }
        .phone {
          @include findMe-style;
          @include text-style(0.85rem, 600, $white-color);
          text-align: left;

          @include media(xlarge){
             @include text-style(1rem, 600, $white-color);
           }

          @include media(small) {
             @include text-style(0.8rem, 600, $white-color);
             width: 80%;
          }
          @include media(xsmall) {
             @include text-style(0.8rem, 600, $white-color);
             width: 75%;
          }

          &:hover {
            @include hover-findMe;
          }

          i {
            @include findIcon;

            @include media(small) {
              font-size: 15px;
            }
            @include media(xsmall) {
              font-size: 10px;
            }
          }
        }
      }

      div {
        .email {
          @include findMe-style;
          @include text-style(0.85rem, 600, $white-color);
          text-align: left;

          @include media(xlarge){
             @include text-style(1rem, 600, $white-color);
           }

          @include media(small) {
             @include text-style(0.8rem, 600, $white-color);
             width: 85%;
          }
          @include media(xsmall) {
             @include text-style(0.8rem, 600, $white-color);
             width: 82%;
          }

          &:hover {
            @include hover-findMe;
          }

          i {
            @include findIcon;

            @include media(small) {
              font-size: 15px;
            }
            @include media(xsmall) {
              font-size: 10px;
            }
          }
        }
        .github {
          
          @include findMe-style;
          @include text-style(0.85rem, 600, $white-color);
          text-align: left;

          @include media(xlarge){
             @include text-style(1rem, 600, $white-color);
           }

          @include media(small) {
             @include text-style(0.8rem, 600, $white-color);
             width: 85%;
          }
          @include media(xsmall) {
             @include text-style(0.7rem, 600, $white-color);
             width: 82%;
          }

          &:hover {
            @include hover-findMe;
          }

          i {
            @include findIcon;

            @include media(small) {
              font-size: 15px;
            }
            @include media(xsmall) {
              font-size: 10px;
            }
          }
        }
        .instagram {
         
          @include findMe-style;
          @include text-style(0.85rem, 600, $white-color);
          text-align: left;

          @include media(xlarge){
             @include text-style(1rem, 600, $white-color);
           }

          @include media(small) {
             @include text-style(0.8rem, 600, $white-color);
             width: 85%;
          }
          @include media(xsmall) {
             @include text-style(0.8rem, 600, $white-color);
             width: 82%;
             
          }

          &:hover {
            @include hover-findMe;
          }
          i {
            @include findIcon;

            @include media(small) {
              font-size: 15px;
            }
            @include media(xsmall) {
              font-size: 10px;
              
            }
          }
        }
      }
    }
    .picMe {
      width: 30%;

      img {
        width: 230px;
        height: 230px;
        border-radius: 50%;
        object-fit: cover;
        border: 4px solid $white-color;

        @include media(medium) {
          width: 200px;
          height: 200px;
          margin-right: 20px;
        }
        @include media(small) {
          display: none;
        }
        @include media(xsmall) {
          display: none;
        }
      }
    }
  }
}
</style>
