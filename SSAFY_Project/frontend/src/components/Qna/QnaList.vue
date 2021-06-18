<template>
<div>
  <!-- <div v-if="this.$store.state.qna.qnas.length != 0">
      <qnaitem v-for="(qna, index) in this.$store.state.qna.qnas" :key="index" :qna="qna"/>
  </div>
  <div v-else>
      qna가 없습니다.
  </div> -->

  <v-container justify-center>
  <v-layout justify-center>
    <v-data-table
            style="width: 50%"
            :headers="headers"
            :items="qnas"
            :items-per-page="10"
            @click:row="handleClick"
            :page.sync="page"
            hide-default-footer
    ></v-data-table>
  </v-layout>
  <v-container>
    <v-pagination
      v-model="page"
      :length="(qnas.length) % 10 == 0 ? parseInt(qnas.length / 10) : parseInt(qnas.length / 10) + 1"
      :total-visible="10"
      next-icon="mdi-menu-right"
      prev-icon="mdi-menu-left"></v-pagination>
  </v-container>
</v-container>
</div>
</template>

<script>
import { mapState } from "vuex";
// import qnaitem from '@/components/Qna/QnaItem';

export default {
  name: "QnaList",
  components: {
      // qnaitem
  },
  data: () => ({
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'TITLE', value: 'title' },
        { text: 'NO', value: 'no' },
      ],
      page: 1,
    }),
  computed: {
    ...mapState('qna',["qnas"]),
  },
  created() {
    this.$store.dispatch("qna/getQnaList");
    console.log(this.$store.state.qna.qnas);
  },
  methods: {
    handleClick(value) {
      console.log(value);
      let qna = {
        title: value.title,
        id: value.id,
        question: value.question,
        answer: value.answer,
        no: value.no
      }
      this.$store.dispatch("qna/selectQna", qna);
      this.$store.commit("qna/CHANGE_TO_DETAIL");
    }
  }
};
</script>
