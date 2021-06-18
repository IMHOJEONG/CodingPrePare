<template>
  <div>
      <!-- <div>
        제목: {{this.$store.state.qna.qna.title}}
      </div>
      <div>
        질문: {{this.$store.state.qna.qna.question}}
      </div>
      <div>
        <textarea v-model.trim="inputAnswer"/>
      </div>
      <button @click="modifyQna">답변</button> -->

      <!-- <div>
      <div>
        <v-text-field readonly label="제목" :value="qna.title"/>
      </div>
      <div>
        <v-text-field readonly label="질문" :value="qna.question"/>
      </div>
      <div>
        <v-textarea v-model.trim="inputAnswer" label="답변" placeholder="답변을 입력하세요."/>
      </div>
      <v-btn depressed color="primary" @click="modifyQna">답변</v-btn>
  </div> -->
        <v-card
          width="100%"
          height="100%"
          elevation="2"
          class="mx-auto my-12" 
          max-width="1000px"
          max-height="1000px"
          >
              <v-spacer></v-spacer>
              <v-card-title style="text-align: center; color: purple">
                    QNA 답변
              </v-card-title>
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
              <v-textarea outlined v-model.trim="inputAnswer" placeholder="답변을 입력하세요." >
              </v-textarea>
              </v-card-text>
              <v-col align-center>
              <v-btn depressed color="primary" @click="modifyQna" style="margin: 10px">답변</v-btn>
              <v-btn depressed color="primary" @click="isList" style="margin: 10px">목록</v-btn>
              </v-col>
        </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "QnaAnswer",
  data: function() {
    return {
      inputAnswer: ''
    }
  },
  computed: {
      ...mapState('qna',['qna']),
  },
  methods: {
      modifyQna() {
          if(this.inputAnswer =="") {
          alert('답변을 입력해 주세요!');
          return;
        }
          let qna = {
              title: this.qna.title,
              question: this.qna.question,
              answer: this.inputAnswer,
              id: this.qna.id,
              no: this.qna.no
          };
          this.$store.dispatch('qna/modifyQna',qna);
      },
      isList() {
          this.$store.commit("qna/CHANGE_TO_LIST")
      },
  }
};
</script>
