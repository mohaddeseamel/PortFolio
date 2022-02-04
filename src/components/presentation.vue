<template>
  <div class="present">
    <humbergerMenu />
    <div class="imgPerson">
      <img src="../assets/imgs/IMG_20211231_200105.jpg" alt="picture_me" />
    </div>
    <div class="description">
      <span>Hi I'm</span>
      <h1>Mohaddese Amel</h1>
      <h3>Front-End developer</h3>
    </div>
  </div>
</template>

<script>
// import humbergerMenu from "../components/humbergerMenu.vue";

export default {
  name: "HomePage",
  // components: {
  //   humbergerMenu,
  // },
};
</script>

<style lang="scss">

.present {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $black-color;
  padding: 20px;
  height: 400px;

  @include media(small) {
    height: 350px;
  }

  .imgPerson {
    width: 40%;

    img {
      width: 330px;
      height: 330px;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid $white-color;

      @include media(medium){
        width: 280px;
        height: 280px;
      }

      @include media(small) {
        width: 200px;
        height: 200px;
      }

      @include media (xsmall){
        width: 160px;
        height: 160px;
      }
    }
  }
  .description {
    text-align: left;
    color: $white-color;
    flex-direction: column;
    line-height: 40px;

    span {
      font-size: 20px;
      animation-name: moveInLeft;
      animation-duration: 1s;
      animation-timing-function: ease-out;
      font-family: Nunito;
    }

    h1 {
      font-size: 40px;
      animation: moveInRight 1s ease-out; 
      font-family: Nunito;

       @include media(medium){
        font-size: 35px;
      }

      @include media(small) {
        font-size: 28px;
        margin-right: 35px;
      }
      @include media (xsmall){
        font-size: 20px;
        margin-right: 40px;
      }
    }

    h3 {
      background-color: $white-color;
      font-family: Nunito;
      padding: 3px 2px;
      width: 170px;
      float: left;
      margin-top: 10px;
      @include text-style(18px , 500 , $black-color);
      animation: moveInBottom .5s ease-out .75s;

      &:hover {
        color: $white-color;
        background-color: $grey-color;
      }
    }
  }
}
</style>
