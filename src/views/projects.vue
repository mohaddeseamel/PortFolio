<template>
  <div class="showVueProject">
   
     <div class="card-container">
        <div class="card" v-for="project in getCurrentProject " :key="project.id">
              <div class="card-title">
                <h2>{{project.name}}</h2>
              </div>
             <div class="card-body">
               <h3>{{project.description}}</h3>
               <div class="btn">
                 <a :href="project.fileUrl">ShowProject</a>
               </div>
              </div>
          </div>
     </div>
  </div>
</template>

<script>

export default {
  name: "projects",

  computed:{
    getCurrentProject() {
      return Object.values(this.$store.state.projects)[this.$route.params.id - 1]
    }, 
  }
};
</script>

<style lang="scss">
  .card-container{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 50px;
    

    .card{
       box-shadow: 0 4px 8px 0 rgba(83, 25, 25, 0.2);
       transition: 0.3s;
       width: 20%;
       height: 140px;
       padding: 10px 20px;
       margin-left: 15px;
       margin-top: 15px;
       background-color: #FFFAFA;
       line-height: 28px;

        @include media(large){
          height: 170px;
          width: 25%;
        }
         @include media(medium){
          height: 200px;
          width: 25%;
        }
        @include media(small){
          height: 200px;
          width: 40%;
        }
        @include media(xsmall){
          height: 200px;
          width: 100%;
          margin-left:0;
        }

       .card-title{
         h2{
           text-align: center;
           @include text-style(22px, 500 , rgb(24, 24, 24));
            text-shadow: 1px 1px 1px red;

            @include media(xsmall){
               margin-top: 15px;
             }
         }
       }
         .card-body{
           h3{
             @include text-style(16px, 500 , rgb(14, 14, 14));
             margin-top: 10px;

             @include media(small){
               margin-top: 20px;
             }
              @include media(xsmall){
               margin-top: 30px;
             }
           }
           .btn{
             margin-top: 15px;

             @include media(medium){
               margin-top: 20px;
             }
              @include media(small){
               margin-top: 30px;
             }
              @include media(xsmall){
               margin-top: 35px;
             }
             a{
             text-decoration: none;
             background-color: #E9967A;
             color:$white-color;
             padding: 10px 15px;
             border-radius: 35px;
             
             &:hover{
               background-color: #fa8e6a;
             }
           }
           }
         }
       
    }
   

  }
</style>
