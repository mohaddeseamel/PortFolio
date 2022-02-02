<template>
  <div id="sidemenu">
    <button
      class="sidemenu__btn"
      :class="{ active: navOpen }"
      @click="navOpen = !navOpen"
    >
      <span class="top"></span>
      <span class="mid"></span>
      <span class="bottom"></span>
    </button>

    <transition name="translateX">
      <nav v-show="navOpen">
        <div class="sidemenu__wrapper">
          <ul class="sidemenu__list">
            <div class="home">
              <li class="sidemenu__item">
                <router-link to="/">Home</router-link>
              </li>
            </div>
            <div class="about">
              <li class="sidemenu__item">
                <router-link to="/about">About Me</router-link>
              </li>
            </div>
            <div class="work">
              <li class="sidemenu__item"><a href="">Work</a></li>
            </div>

            <div class="find">
              
              <li class="sidemenu__item"><a href="">Find Me</a></li>
            </div>
          </ul>
        </div>
      </nav>
    </transition>
  </div>
</template>

<script>
export default {
  name: "humbergerMenu",

  data() {
    return {
      navOpen: false,
    };
  },
};
</script>

 <style lang="scss">

#sidemenu {
  display: none;

  @include media(small){
    display: block;
    position: relative;
    left: 30px;
  }
  @include media(xsmall){
    display: block;
    position: relative;
    bottom: 30px;
  }

  @media screen and (max-width: 650px) and (min-width: 500px) {
    left: 20px;
    bottom: 10px;
  }
  nav {
    width: 200px;
    background: $grey-color;
    position: fixed;
    top: 25px;
    right: 10px;
    
  }
  .sidemenu {
    &__btn {
      display: block;
      width: 40px;
      height: 40px;
      background: $grey-color;
      border: none;
      position: relative;
      z-index: 100;
      appearance: none;
      cursor: pointer;
      outline: none;
      margin-top: -170px;
      z-index: 100;
      position: fixed;

      span {
        display: block;
        background: $white-color;
        width: 20px;
        height: 2px;
        margin: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        transition: all 0.4s ease;

        &.top {
          transform: translateY(-8px);
        }

        &.bottom {
          transform: translateY(8px);
        }
         
      }
      &.active {
        .top {
          transform: rotate(-45deg);
        }
        .mid {
          transform: translateX(-20px) rotate(360deg);
          opacity: 0;
        }
        .bottom {
          transform: rotate(45deg);
        }
      }
       
    }
    &__wrapper {
      padding-top: 50px;
    }
    &__list {
      padding-top: 50px;
      list-style: none;
      padding: 0;
      margin: 0;

      .home {
       @include baseStyle;

        &:hover {
          background: $lightgray-color;
          color: $dimgrey-color;
        }

      }
      .about{
        @include baseStyle;

         &:hover {
          background: $lightgray-color;
          color: $dimgrey-color;
        }

      }
      .work{
        @include baseStyle;

         &:hover {
          background: $lightgray-color;
          color: $dimgrey-color;
        }

      }
      .resume{
        @include baseStyle;

        &:hover {
          background: $lightgray-color;
          color: $dimgrey-color;
        }
      }
       .find{
        @include baseStyle;

         &:hover {
          background: $lightgray-color;
          color: $dimgrey-color;
        }
      }
    }

    &__item {
      a {
        text-decoration: none;
        line-height: 1.6em;
        font-size: 1.4em;
        padding: 0.5em;
        display: block;
        color: $white-color;
        transition: 0.4s ease;
        margin-bottom: 8px;

       &:hover{
         font-size: 1.8em;
       }
      }
    }
  }
}
.translateX-enter {
  transform: translateX(-200px);
  opacity: 0;
}
.translateX-enter-active,
.translateX-leave-active {
  transform-origin: top left 0;
  transition: 0.2s ease;
}

.translateX-leave-to {
  transform: translateX(-200px);
  opacity: 0;
}
</style>
