<template>
  <div>
      <!-- <div>
        <v-text-field v-model.trim="inputTitle" label="제목" placeholder="제목을 입력하세요."/>
      </div>
      <div>
        <v-text-field v-model.trim="inputContent" label="내용" placeholder="내용을 입력하세요."/>
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
                    <v-card-title style="text-align: center; color: green">
                    공지사항 수정
                    </v-card-title>
                    <v-card-title>
                        <v-text-field v-model.trim="inputTitle" placeholder="제목을 입력하세요." />
                    </v-card-title>
                    <v-card-text>
                      <v-textarea v-model.trim="inputContent" placeholder="내용을 입력하세요."  outlined>
                    </v-textarea>
                    </v-card-text>
                    <v-col>
                    <v-btn depressed color="primary" @click="addNotice" style="margin: 10px">수정</v-btn>
                    <v-btn depressed color="primary" @click="isList" style="margin: 10px">목록</v-btn>
                    </v-col>
        </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "NoticeModify",
  data: function() {
    return {
      inputTitle: '',
      inputContent: ''
    }
  },
  computed: {
      ...mapState('notice',['notice']),
      ...mapState('auth',['user']),
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
              no: this.$store.state.notice.notice.no
          }
          console.log(this.$store.state.auth.user);
          this.$store.dispatch('notice/modifyNotice',notice);
      },
      isList() {
          this.$store.commit("notice/CHANGE_TO_LIST")
      },
  }
};
</script>
