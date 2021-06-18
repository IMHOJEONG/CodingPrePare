<template>
  <div>
   <!-- <div>번호: {{this.$store.state.qna.qna.no}}</div> 
    <div>제목: {{this.$store.state.qna.qna.title}}</div>
    <div>질문: {{this.$store.state.qna.qna.question}}</div>
    <div>답변: {{this.$store.state.qna.qna.answer}}</div>
    <button @click="isList">목록</button>
    <button @click="removeQna">삭제</button>
    <button @click="modifyQna">수정</button>
    <button @click="answerQna">답변</button> -->

    <v-container>
   <!-- <div>번호: {{this.$store.state.notice.notice.no}}</div>
   <div>번호: {{notice.no}} </div> 
    <div>제목: {{notice.title}}</div>
    <div>내용: {{notice.content}}</div> -->
        <v-card
        width="100%"
        height="100%"
        elevation="2"
        class="mx-auto my-12" 
        max-width="1000px"
        max-height="1000px"
        >
            <v-spacer></v-spacer>
            <v-card-title>
                <v-text-field readonly :value="qna.title">
                </v-text-field>  
            </v-card-title>
            <v-card-subtitle>
                작성자 {{qna.id}}
            </v-card-subtitle>
            <v-card-text>
            <v-col class="red--text">Q</v-col>
            <v-textarea outlined readonly :value="qna.question" >
            </v-textarea>
            <v-col class="blue--text">A</v-col>
            <v-textarea outlined readonly :value="qna.answer" >
            </v-textarea>
            </v-card-text>
            <v-col align-center>
            <v-btn depressed color="primary" @click="isList" style="margin: 10px">목록</v-btn>
            <v-btn depressed color="primary" @click="removeQna" v-show="user.username == 'ssafy' || user.username == qna.id" style="margin: 10px">삭제</v-btn>
            <v-btn depressed color="primary" @click="modifyQna" v-show="user.username == 'ssafy' || user.username == qna.id" style="margin: 10px">수정</v-btn>
            <v-btn depressed color="primary" @click="answerQna" v-show="user.username == qna.id" style="margin: 10px">답변</v-btn>
            </v-col>
        </v-card>

    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "QnaDetail",
  computed: {
      ...mapState('qna',['qna']),
      ...mapState('auth',['user']),
  },
  
  methods: {
      isList() {
          this.$store.commit("qna/CHANGE_TO_LIST")
      },
      removeQna() {
          this.$store.dispatch("qna/deleteQna",this.$store.state.qna.qna);
      },
      modifyQna() {
          this.$store.commit("qna/CHANGE_TO_MODIFY");
      },
      answerQna() {
          this.$store.commit("qna/CHANGE_TO_ANSWER");
      },
  },
  
};
</script>
