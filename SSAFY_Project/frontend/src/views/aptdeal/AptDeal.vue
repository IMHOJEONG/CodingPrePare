<template>
  <div>
    <Spinner class="spinner" size="massive" message="Loading..." v-show="loading || isNotUser"></Spinner>  
    <div v-show="!loading && !isNotUser">
      <Header></Header>
      <Selector></Selector>
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
import Selector from '@/components/Selector.vue';
import UserService from '../../services/user.service';
import Spinner from 'vue-simple-spinner';

export default {
  name: "AptDeal",
  components: {
    Footer,
    Header,
    Spinner,
    Selector,
  },
  data: () => ({ 
    show: false,
    loading: true,
    isNotUser: true,
  }),
  mounted() {
    this.loading = false;
    this.show = true;
    UserService.getPublicContent().then(
      () => {
        this.isNotUser = false;
      },
      error => {
        console.log((error.response && error.response.data) || error.message || error.toString());
        this.isNotUser = true;
      }
    );
  },
};     
</script>

<style>
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
