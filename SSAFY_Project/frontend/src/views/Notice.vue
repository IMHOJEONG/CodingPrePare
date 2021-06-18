<template>
<div>
  <div>
    <Header></Header>
  </div>
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

    </v-icon> NOTICE
    </v-col>
  </v-row>
  <v-container justify-center v-if="this.$store.state.notice.isList">
    <noticelist></noticelist>
    <v-layout justify-center>
    <v-btn depressed color="primary" v-show="this.$store.state.auth.user.username =='ssafy'" @click="writeState">글작성</v-btn>
    </v-layout>
  </v-container>
  <v-container justify-center v-show="this.$store.state.notice.isWrite">
    <noticewrite></noticewrite>
  </v-container>
  <v-container justify-center v-show="this.$store.state.notice.isDetail">
    <noticedetail></noticedetail>
  </v-container>
  <v-container justify-center v-show="this.$store.state.notice.isModify">
     <noticemodify></noticemodify>
  </v-container>

  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
    <div>
        <Footer></Footer>
    </div>
</div>
</template>

<script>
import noticelist from "@/components/Notice/NoticeList.vue";
import noticewrite from "@/components/Notice/NoticeWrite.vue";
import noticedetail from "@/components/Notice/NoticeDetail.vue";
import noticemodify from "@/components/Notice/NoticeModify.vue";
import Header from "@/components/Header.vue";
import Footer from '../components/Footer.vue';

export default {
  name: "Notice",
  components: {
    Header,
    noticewrite,
    noticelist,
    noticedetail,
    noticemodify,
    Footer,
  },
  data() {
    return {};
  },
  methods: {
    writeState() {
      this.$store.commit(
        "notice/CHANGE_TO_WRITE"
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

