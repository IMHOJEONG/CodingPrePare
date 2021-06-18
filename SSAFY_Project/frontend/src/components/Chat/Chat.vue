<template>
  <v-container>
    <v-card>
      <v-card-text>
        <v-row v-for="(chat, index) in this.chats" :key="index" :chat="chat">
          [{{ chat.id }}] : {{ chat.content }}
        </v-row>
      </v-card-text>
    </v-card>
    <v-col>
      <v-text-field
        outlined
        v-model="content"
        @keyup.enter="newChat"
      ></v-text-field>
      <v-btn @click="newChat" depressed color="primary">입력</v-btn>
    </v-col>
  </v-container>
</template>

<script>
import Firebase from "firebase";

const database = Firebase.initializeApp({
  // apiKey: 'apiKey',
  // authDomain: 'authDomain',
  // databaseURL: 'databaseURL',
  // projectId: 'projectId',
  // storageBucket: 'storageBucket',
  // messagingSenderId: 'messagingSenderId'
  apiKey: process.env.VUE_APP_KEY,
  authDomain: process.env.VUE_APP_DOMAIN,
  projectId: "chat-b8fa2",
  storageBucket: process.env.VUE_APP_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
  appId: process.env.VUE_APP_APPID,
  measurementId: process.env.VUE_APP_MEASUREMENTID,
  // }).database().ref();
}).database();

export default {
  name: "Chat",
  components: {},
  data: () => ({
    content: "",
    chats: [],
    // chat: {},
    index: 0,
  }),
  mounted() {
    var dbRef = database.ref("chats/");
    dbRef.on("value", (chats) => {
      this.chats = [];
      chats.forEach((chat) => {
        this.chats.push({
          id: chat.child("id").val(),
          content: chat.child("content").val(),
        });
      });
    });
    // dbRef.once('value', (chats) => {
    //     chats.forEach((chat) => {
    //     this.chats.push({
    //         id: chat.child('id').val(),
    //         content: chat.child('content').val()
    //     })
    //     })
    // })
  },
  methods: {
    newChat() {
      this.chats.push({
        id: this.$store.state.auth.user.username,
        content: this.content,
      });
      this.index = this.chats.length - 1;
      let chat = {
        content: this.content,
        id: this.$store.state.auth.user.username,
      };
      this.content = "";
      database.ref("chats/").push(chat);
    },
    // insertNewChat (chat) {
    //     chat.ref = database.push(chat)
    // },
  },
};
</script>