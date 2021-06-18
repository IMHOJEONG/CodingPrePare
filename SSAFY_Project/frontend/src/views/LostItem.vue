<template>
<div>
  <v-row>
    <Header></Header>
  </v-row>
  
  <div class="image-banner">
    <img
      src="../assets/banner.png"
      width="100%"
      height="100%"
      overflow="hidden"
      object-fit="cover"
    />
  </div>
  <v-row justify-center style="height: 150px;">
    <v-col style="font-size : 100px; text-align : center">
      <v-icon
      x-large
      color="blue darken-2"
      style="font-size : 100px"
    >
      mdi-message-text

    </v-icon> LOST & FOUND
    </v-col>
  </v-row>
    <v-container justify-center>
      
        <lostitemsearchbar></lostitemsearchbar>
        <lostitemlist></lostitemlist>
    </v-container>
    <v-row>
        <Footer></Footer>
    </v-row>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
</div>
</template>

<script>
import lostitemlist from "@/components/LostItem/LostItemList.vue";
import Header from "@/components/Header.vue";
import Footer from '../components/Footer.vue';
import lostitemsearchbar from '../components/LostItem/LostItemSearchBar.vue';

export default {
  name: "Notice",
  components: {
    Header,
    lostitemlist,
    lostitemsearchbar,
    Footer,
  },
  data() {
    return {};
  },
  methods: {
    
  },
};
</script>
<style scoped>
  .image-banner{
    height : 500px;
    overflow : hidden;
  }
</style>
