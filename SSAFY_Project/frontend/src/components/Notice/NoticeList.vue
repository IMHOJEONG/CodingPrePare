<template>
<v-container justify-center>
  <!-- <v-layout column justify-center v-if="this.$store.state.notice.notices.length != 0">
    <noticeitem v-for="(notice, index) in this.$store.state.notice.notices" :key="index" :notice="notice"/>
  </v-layout>
  <div v-else>
      notice가 없습니다.
  </div> -->
  <v-layout justify-center>
    <v-data-table
            style="width: 50%"
            :headers="headers"
            :items="notices"
            :items-per-page="10"
            @click:row="handleClick"
            :page.sync="page"
            hide-default-footer
    ></v-data-table>
  </v-layout>
  <v-container>
    <v-pagination
      v-model="page"
      :length="(notices.length) % 10 == 0 ? parseInt(notices.length / 10) : parseInt(notices.length / 10) + 1"
      :total-visible="10"
      next-icon="mdi-menu-right"
      prev-icon="mdi-menu-left"></v-pagination>
  </v-container>
</v-container>
</template>

<script>
import { mapState } from "vuex";
// import noticeitem from '@/components/Notice/NoticeItem';

export default {
  name: "NoticeList",
  data: () => ({
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'TITLE', value: 'title' },
        { text: 'NO', value: 'no' },
      ],
      page: 1,
    }),
    computed: {
      ...mapState('notice',['notices']),
  },
  components: {
      // noticeitem
  },
  created() {
    this.$store.dispatch("notice/getNoticeList");
    console.log(this.$store.state.notice);
  },
  methods: {
    handleClick(value) {
      console.log(value);
      let notice = {
        title: value.title,
        id: value.id,
        content: value.content,
        no: value.no
      }
      this.$store.dispatch("notice/selectNotice", notice);
      this.$store.commit("notice/CHANGE_TO_DETAIL");
    }
  }
};
</script>
