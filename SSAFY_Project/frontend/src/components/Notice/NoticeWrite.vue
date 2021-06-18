<template>
  <div>
      <!-- <div>
        <v-text-field v-model.trim="inputTitle" label="제목" placeholder="제목을 입력해 주세요" outlined></v-text-field>
      </div>
      <div>
        <v-text-field v-model.trim="inputContent" label="내용" placeholder="내용을 입력해 주세요" ></v-text-field>
      </div>
      <v-btn depressed color="primary" @click="addNotice">등록</v-btn> -->

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
                    공지사항 작성
              </v-card-title>
              <v-card-title>
                  <v-text-field v-model.trim="inputTitle"  outlined placeholder="제목을 입력하세요">
                  </v-text-field>  
              </v-card-title>
              <v-card-text>
              <v-textarea outlined v-model.trim="inputContent" placeholder="내용을 입력하세요" >
              </v-textarea>
              </v-card-text>
              <v-col align-center>
              <v-btn depressed color="primary" @click="addNotice" style="margin: 10px">등록</v-btn>
              <v-btn depressed color="primary" @click="isList" style="margin: 10px">목록</v-btn>
              </v-col>
        </v-card>
  </div>
</template>

<script>
export default {
  name: "NoticeWrite",
  data: function() {
    return {
      inputTitle: '',
      inputContent: ''
    }
  },
  methods: {
      addNotice() {
          if(this.inputTitle =="") {
          alert('제목을 입력해 주세요!');
          return;
          }
          if(this.inputContent =="") {
          alert('내용을 입력해 주세요!');
          return;
          }
          let notice = {
              title: this.inputTitle,
              content: this.inputContent,
              id: this.$store.state.auth.user.username,
              no: this.$store.state.notice.notices.length
          }
          console.log(this.$store.state.auth.user);
          this.$store.dispatch('notice/addNotice',notice);
      },
      isList() {
          this.$store.commit("notice/CHANGE_TO_LIST")
      },
  }
};
</script>
