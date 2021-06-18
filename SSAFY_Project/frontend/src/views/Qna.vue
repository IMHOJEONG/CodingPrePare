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

    </v-icon> QNA
    </v-col>
  </v-row>
  <v-container v-if="this.$store.state.qna.isList">
    <qnalist></qnalist>
    <v-col style="text-align: center">
    <v-btn depressed color="primary" v-show="this.$store.state.auth.user.username=='ssafy'" @click="writeState" >글작성</v-btn>
    </v-col>
  </v-container>
  <v-container v-show="this.$store.state.qna.isWrite">
    <qnawrite></qnawrite>
  </v-container>
  <v-container v-show="this.$store.state.qna.isDetail">
    <qnadetail></qnadetail>
  </v-container>
  <v-container v-show="this.$store.state.qna.isModify">
     <qnamodify></qnamodify>
  </v-container>
  <v-container v-show="this.$store.state.qna.isAnswer">
     <qnaanswer></qnaanswer>
  </v-container>
    <div>
        <Footer></Footer>
    </div>

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
import qnalist from "@/components/Qna/QnaList.vue";
import qnawrite from "@/components/Qna/QnaWrite.vue";
import qnadetail from "@/components/Qna/QnaDetail.vue";
import qnamodify from "@/components/Qna/QnaModify.vue";
import qnaanswer from "@/components/Qna/QnaAnswer.vue";
import Header from "@/components/Header.vue";
import Footer from '../components/Footer.vue';

export default {
  name: "Notice",
  components: {
    Header,
    qnawrite,
    qnalist,
    qnadetail,
    qnamodify,
    qnaanswer,
    Footer,
  },
  data() {
    return {};
  },
  methods: {
    writeState() {
      this.$store.commit(
        "qna/CHANGE_TO_WRITE"
      );
      
    },
  },
};
</script>
<style scoped>
  .image-banner{
    height : 500px;
    overflow : hidden;
  }
</style>
