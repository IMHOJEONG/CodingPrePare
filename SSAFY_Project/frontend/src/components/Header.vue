<template>

  <div>
    <v-navigation-drawer
      v-model="drawer"
      class=""
      dark
      app
      color="rgba(66,66,66,1)"
    >
      <!--  -->
       <v-list
          dense
          rounded
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            @click="move(item.route)"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>

          </v-list-item>

          <v-divider></v-divider>
        </v-list>

        <template 
        
          v-if="loggedIn"

        >
            <div class="pa-2">
              <v-btn block v-on:click="goMypage"
              color="rgba(0,0,50,1)" >
                마이페이지
              </v-btn>
            </div>
            <div class="pa-2">
              <v-btn block v-on:click="goLogout"
              color="rgba(0,0,50,1)" >
                로그아웃
              </v-btn>
            </div>
        </template>

        <template 
        
          v-else
        >

            <div class="pa-2">
              <v-btn block v-on:click="goRegister"
              color="rgba(0,0,50,1)">
                회원가입
              </v-btn>
            </div>
            <div class="pa-2">
              <v-btn block v-on:click="goLogin"
              color="rgba(0,0,50,1)" >
                로그인
              </v-btn>
            </div>

        </template>

        <v-divider></v-divider>
        
        <div class="pa-2">
          <v-btn
          color
          block
          outlined
          @click="changefooter">
          Toggle Footer
        </v-btn>

        </div>

        


    </v-navigation-drawer>

    <v-app-bar app
    dark
    color="rgba(66,66,66,1)"
    hide-on-scroll
      class="appbar"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-container>
       <v-toolbar-title @click="toHome">HappyHouse</v-toolbar-title>
      </v-container>

      <v-container>
        <v-tooltip v-for="item in items" :key="item.title" bottom>
          <template  v-slot:activator="{ on, attrs }">
            <v-btn        
                :key="item.title"
                text
                v-bind="attrs"
                v-on="on"
                dark
                @click="move(item.route)"
              >
                <v-icon>{{ item.icon }}</v-icon>
            </v-btn>
          </template>
          <span>{{ item.title }}</span>

        </v-tooltip>

        <v-btn dark text @click="openDialog">
         <v-icon
            color="yellow"
          > mdi-message-text
        </v-icon>
        </v-btn>
        
      </v-container>

      <v-menu
        bottom
        min-width="200px"
        rounded
        offset-y
        v-if="userChange"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            x-large
            v-on="on"
          >
            <v-avatar
              color="blue"
              size="45"
            >
              <span class="white--text headline">{{ user.username.slice(0,2) }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar
                color="blue"
              >
                <span class="white--text headline">{{ user.username.slice(0,2) }}</span>
              </v-avatar>
              <h3>{{ user.username }}</h3>
              <p class="caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
                v-on:click="goMypage"
              >
                Edit Account
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
                v-on:click="goLogout"
              >
                Disconnect
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-dialog v-model="dialog"  max-width="400px" max-height="900px" >
      <v-card>
        <v-card-title>
          CHATTING 
        </v-card-title>
        <v-card-text>
        <chat></chat>
        </v-card-text>
      </v-card>
    </v-dialog>

  </div>
  
</template>

<script>
import chat from "@/components/Chat/Chat.vue";
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "Header",
  data: () => ({ 
    dialog: false,
    drawer: false,
    items: [
          { title: '공지사항', icon: 'mdi-bulletin-board' , route: '/notice'},
          { title: '가격정보', icon: 'mdi-cash-100' , route: '/aptdeal'},
          { title: 'QnA', icon: 'mdi-head-question' , route: '/qna'},
          { title: '뉴스 정보', icon: 'mdi-map-marker-radius-outline', route: '/news'},
          { title: '금융 정보', icon: 'mdi-currency-usd', route: '/capital'},
          { title: '유실물정보', icon: 'mdi-card-search', route: '/lostitem'},
          { title: 'About', icon: 'mdi-information' , route: '/'},
          
        ],
    links: [
      '공지사항',
      '가격정보',
      'QnA',
      '유실물정보',
      '뉴스정보',
      'About'
    ],
    user: {
      // initials: 'JD',
      username: 'John Doe',
      email: 'john.doe@doe.com',
    },
    isLogged: false
  }),
  components: {
    chat,
  },
  methods: {
    goRegister() {
      this.$router.push('/register');

    },
    goLogin() {
      this.$router.push('/login');
      
    },
    goLogout() {
      this.$store.dispatch('auth/logout');
      // this.$router.push('/home');
    },
    goMypage() {
      this.$router.push('/profile');
    },
    move(data){
      console.log(data);
      this.$router.push(`${data}`);
    },
    changefooter(){
      this.$store.commit('CHANGE_STATE');
    },
    openDialog() {
      this.dialog = true;
    },
    toHome() {
      this.$router.push('/');
    },
  },
  computed: {
    loggedIn: {
      get: function() {

        return this.$store.state.auth.status.loggedIn;
      }
    },
    userChange: {
      get : function() {
        return (this.$store.state.auth.user != null);
      },
      // set : function(newValue) {
      //   this.user = newValue;
      // }
    },
    

  },
  watch: {
    loggedIn: {
      handler(){
        if(this.$store.state.auth.user){
          
          let user = this.$store.state.auth.user;
          this.user['email'] = user['email'];
          this.user['username'] = user['username'];
        }
      },
      immediate: true
    },

  }
};
</script>

<style scoped>
 
</style>