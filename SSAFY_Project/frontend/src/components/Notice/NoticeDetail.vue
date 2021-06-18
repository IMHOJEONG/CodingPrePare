<template>
  <v-container>
   <!-- <div>번호: {{this.$store.state.notice.notice.no}}</div>
   <div>번호: {{notice.no}} </div> 
    <div>제목: {{notice.title}}</div>
    <div>내용: {{notice.content}}</div> -->
  <!-- <v-card
  width="100%"
  height="100%"
  elevation="2"
  :loading="loading"
  class="mx-auto my-12"
  max-width="1000px"
  max-height="1000px"
  >
    <v-card-title>
      <v-text-field readonly outlined :value="notice.title" label="제목">
      </v-text-field>  
    </v-card-title>
    <v-card-text>
      <v-text-field readonly :value="notice.content" label="내용">
      </v-text-field>
    </v-card-text>
    <v-container>
      <v-btn depressed color="primary" @click="isList">목록</v-btn>
      <v-btn depressed color="primary" @click="removeNotice">삭제</v-btn>
      <v-btn depressed color="primary" @click="modifyNotice">수정</v-btn>
    </v-container>
  </v-card> -->

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
                <v-text-field readonly :value="notice.title">
                </v-text-field>  
            </v-card-title>
            <v-card-subtitle>
                작성자 {{notice.id}}
            </v-card-subtitle>
            <v-card-text>
            <v-textarea outlined readonly :value="notice.content" >
            </v-textarea>
            </v-card-text>
            <v-col justify-center>
            <v-btn depressed color="primary" @click="isList" style="margin: 10px">목록</v-btn>
            <v-btn depressed color="primary" @click="removeNotice"  v-show="notice.id == user.username" style="margin: 10px">삭제</v-btn>
            <v-btn depressed color="primary" @click="modifyNotice"  v-show="notice.id == user.username" style="margin: 10px">수정</v-btn>
            </v-col>
        </v-card>
  

  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "NoticeDetail",
  computed: {
      ...mapState('notice',['notice']),
      ...mapState('auth',['user']),
  },
  
  methods: {
      isList() {
          this.$store.commit("notice/CHANGE_TO_LIST")
      },
      removeNotice() {
          this.$store.dispatch("notice/deleteNotice",this.$store.state.notice.notice);
      },
      modifyNotice() {
          this.$store.commit("notice/CHANGE_TO_MODIFY");
      }
  },
  
};
</script>
