<template>
<div>
  <!-- <div>
      <div>
        <input v-model.trim="inputTitle"/>
      </div>
      <div>
        <textarea v-model.trim="inputQuestion"/>
      </div>
      <button @click="modifyQna">수정</button>
  </div> -->

  <!-- <div>
      <div>
        <v-text-field v-model.trim="inputTitle" label="제목" placeholder="제목을 입력하세요." :value="qna.title"/>
      </div>
      <div>
        <v-text-field v-model.trim="inputQuestion" label="내용" placeholder="내용을 입력하세요." :value="qna.question"/>
      </div>
      <v-btn depressed color="primary" @click="modifyQna">수정</v-btn>
  </div> -->
        <v-card
                width="100%"
                height="100%"
                elevation="2"
                class="mx-auto my-12" 
                max-width="1000px"
                max-height="1000px"
                >
                    <v-card-title style="text-align: center; color: green">
                    QNA 수정
                    </v-card-title>
                    <v-card-title>
                        <v-text-field v-model.trim="inputTitle" label="제목" placeholder="제목을 입력하세요." />
                    </v-card-title>
                    <v-card-text>
                      <v-textarea v-model.trim="inputQuestion" label="내용" placeholder="내용을 입력하세요."  outlined>
                    </v-textarea>
                    </v-card-text>
                    <v-col>
                    <v-btn depressed color="primary" @click="modifyQna" style="margin: 10px">수정</v-btn>
                    <v-btn depressed color="primary" @click="isList" style="margin: 10px">목록</v-btn>
                    </v-col>
        </v-card>
</div>

</template>

<script>
import { mapState } from "vuex";

export default {
  name: "QnaModify",
  data: function() {
    return {
      inputTitle: '',
      inputQuestion: ''
    }
  },
  computed: {
    ...mapState('qna',["qna"]),
  },
  methods: {
      modifyQna() {
          if(this.inputTitle =="") {
          alert('제목을 입력해 주세요!');
          return;
          }
          if(this.inputQuestion =="") {
          alert('질문을 입력해 주세요!');
          return;
          }
          let qna = {
              title: this.inputTitle,
              question: this.inputQuestion,
              answer: this.$store.state.qna.qna.answer,
              id: this.$store.state.auth.user.username,
              // no: this.$store.state.qna.qna.no
              no: this.qna.no
          }
          console.log(this.$store.state.auth.user);
          this.$store.dispatch('qna/modifyQna',qna);
      },
      isList() {
          this.$store.commit("qna/CHANGE_TO_LIST")
      },
  }
};
</script>
