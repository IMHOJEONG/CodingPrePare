
<template>
  
  <div>

  <Spinner class="spinner" size="massive" message="Loading..." v-show="loading || isNotUser"></Spinner>
    
  <div v-show="!loading && !isNotUser">
    
    <Header></Header>

    <v-main class="main">

      <!-- <v-row>
        <v-col>
          <v-expand-x-transition>
            <v-card
              v-show="expand2"
              height="400"
              width="400"
              class="mx-auto secondary"
            ></v-card>
          </v-expand-x-transition>
        </v-col>
        <v-col>
          <v-expand-x-transition>
            <v-card
              v-show="expand2"
              height="400"
              width="400"
              class="mx-auto secondary"
            ></v-card>
          </v-expand-x-transition>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col>
          <v-expand-x-transition>
            <v-card
              v-show="expand2"
              height="400"
              width="400"
              class="mx-auto secondary"
            ></v-card>
          </v-expand-x-transition>
        </v-col>
        <v-col>
          <v-expand-x-transition>
            <v-card
              v-show="expand2"
              height="400"
              width="400"
              class="mx-auto secondary"
            ></v-card>
          </v-expand-x-transition>
        </v-col>
      </v-row>
       -->
<video class="video" ref="myvideo" muted autoplay loop>
    <source src="..\assets\homebackground\mountains.mp4" type="video/mp4">
    <strong>Your browser does not support the video tag.</strong>
  </video>

      <transition name="" enter-active-class="animated tada">
      <h3 v-if="show" class="header">HappyHouse</h3>
      </transition>
 
       <v-row>
      <!-- <v-col>
          <v-expand-x-transition>
            <v-card
              v-show="expand2"
              height="400"
              width="400"
              class="mx-auto secondary"
            >
              <particles-bg type="fountain" :num="5" :bg="true"/>
            </v-card>
          </v-expand-x-transition>
        </v-col> -->
        <!-- <video-background 
    src=""
    style="max-height: 400px; height: 100vh;"
 >
    <h1 style="color: white;">Hello welcome!</h1>
 </video-background> -->
      </v-row>
       

    </v-main>

    <Footer></Footer>

  </div>
  

  </div>
</template>

<script>
/* eslint-disable */ 
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import UserService from '../services/user.service';
import Spinner from 'vue-simple-spinner';

export default {
  name: "Home",
  components: {
    Footer,
    Header,
    Spinner
  },
  data: () => ({ 
    
    show: false,
    loading: true,
    isNotUser: true,

  }),
  created() {
    },
  mounted() {
    this.loading = false;
    this.show = true;
    this.$refs.myvideo.play();
     UserService.getPublicContent().then(
      () => {
        this.isNotUser = false;
      },
      error => {
        console.log(
          (error.response && error.response.data) ||
          error.message ||
          error.toString() );
        this.isNotUser = true;
      }
    );
  },
};
</script>

<style>
  .video{
    position: absolute;
    z-index: 1;
  }
  .header{
    position: absolute;
    top: 10rem;
    left: 20rem;
    z-index: 2;
    font-size: 50px;
    background: lightgray;
    opacity: 0.7;
    border-radius: 10px ;
    padding: 20px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .spinner{
    position: relative;
    top: 15rem;
  }
</style>
