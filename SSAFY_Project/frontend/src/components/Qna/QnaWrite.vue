<template>
  <div>
      <!-- <div>
        <input v-model.trim="inputTitle"/>
      </div>
      <div>
        <textarea v-model.trim="inputQuestion"/>
      </div>
      <button @click="addQna">등록</button>
      <button @click="isList">목록</button> -->

      <!-- <div>
        <v-text-field v-model.trim="inputTitle" label="제목" placeholder="제목을 입력해 주세요" outlined></v-text-field>
      </div>
      <div>
        <v-text-field v-model.trim="inputQuestion" label="내용" placeholder="질문을 입력해 주세요" ></v-text-field>
      </div>
      <v-btn depressed color="primary" @click="addQna">등록</v-btn>
      <v-btn depressed color="primary" @click="isList">목록</v-btn> -->
      
      <v-card
          width="100%"
          height="100%"
          elevation="2"
          class="mx-auto my-12" 
          max-width="1000px"
          max-height="1000px"
          >
              <v-spacer></v-spacer>
              <v-card-title style="text-align: center; color: blue">
                    QNA 작성
              </v-card-title>
              <v-card-title>
                  <v-text-field v-model.trim="inputTitle" placeholder="제목을 입력해 주세요" outlined>
                  </v-text-field>  
              </v-card-title>
              <v-card-text>
              <v-col class="red--text">Q</v-col>
              <v-textarea outlined v-model.trim="inputQuestion" placeholder="질문을 입력해 주세요" >
              </v-textarea>
              </v-card-text>
              <v-col align-center>
              <v-btn depressed color="primary" @click="addQna" style="margin: 10px">등록</v-btn>
              <v-btn depressed color="primary" @click="isList" style="margin: 10px">목록</v-btn>
              </v-col>
        </v-card>
  </div>

</template>

<script>
import { mapState } from "vuex";

export default {
  name: "QnaWrite",
  data: function() {
    return {
      inputTitle: '',
      inputQuestion: ''
    }
  },
  computed: {
    ...mapState('qna',["qna"]),
    ...mapState('auth',["user"]),
  },
  methods: {
      addQna() {
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
              answer:'',
              id: this.user.username
          }
          // console.log(this.$store.state.auth.user);
          this.$store.dispatch('qna/addQna',qna);
      },
      isList() {
          this.$store.commit("qna/CHANGE_TO_LIST")
      },
  }
};
</script>
