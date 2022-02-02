<template>
  <div class="container">
    <div class="title">
      <h2>About Me</h2>
    </div>
    <div class="description">
      <p>
        I'm a graduate of Imam Reza International University and I'm interested
        in Front-End programming In 2020, I participated in a roshdana
        intership, and i went through the front path and completed my University
        internship in part Company I'm really looking for a job at a programming
        company as an intern or junior
      </p>
    </div>
    <div class="Icon-skill">
      <div class="git">
        <i class="fab fa-github"></i>
      </div>
      <div class="vuejs">
        <i class="fab fa-vuejs"></i>
      </div>
      <div class="javaScript">
        <i class="fab fa-js"></i>
      </div>

      <div class="html">
        <i class="fab fa-html5"></i>
      </div>
      <div class="css">
        <i class="fab fa-css3-alt"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style lang="scss">
.container {
  background-image: url("../assets/imgs/5-dots.png");
  background-position: 50% 50%;
  height: 320px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  line-height: 20px;

  .title {
    z-index: 100;
    margin-bottom: 22px;
    h2 {
      color: $white-color;
      letter-spacing: 3px;
      font-size: 32px;
      text-shadow: 2px 2px 5px red;
      font-family: Nunito;
    }
  }
  .description {
    margin-top: 30px;
    width: 60%;
    justify-content: center;
    align-items: center;

    @include media(medium) {
      width: 80%;
    }

    @include media(small) {
      width: 90%;
    }

    @include media(xsmall) {
      width: 95%;
    }

    p {
      @include text-style(17px, 500, $white-color);
      text-align: center;
      font-family: Roboto;

      @include media(xsmall){
         @include text-style(15px, 500, $white-color);
      }
    }
  }
  .Icon-skill {
    color: blanchedalmond;
    display: flex;
    margin-top: 30px;

    .git {
      i {
        color: $brown-color;
        @include IconSkills-style;

        @include media(medium){
          font-size: 45px;
        }

         @include media(small){
          font-size: 40px;
        }
      }
    }
    .vuejs {
      i {
        color: $green-color;
        @include IconSkills-style;

        @include media(medium){
          font-size: 45px;
        }

        @include media(small){
          font-size: 40px;
        }
      }
    }
    .javaScript {
      i {
        color: $yellow-color;
        @include IconSkills-style;

        @include media(medium){
          font-size: 45px;
        }
        @include media(small){
          font-size: 40px;
        }
      }
    }
    .html {
      i {
        color: $oranged-color;
        @include IconSkills-style;

        @include media(medium){
          font-size: 45px;
        }
        @include media(small){
          font-size: 40px;
        }
      }
    }
    .css {
      i {
        color: $blue-color;
        font-size: 50px;

        @include media(medium){
          font-size: 45px;
        }
        @include media(small){
          font-size: 40px;
        }
      }
    }
  }
}
</style>
