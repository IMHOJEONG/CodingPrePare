<template>
  <div>
    <Spinner
      class="spinner"
      size="massive"
      message="Loading..."
      v-show="loading || isNotUser"
    ></Spinner>

    <div v-show="!loading && !isNotUser" class="newsbackground">
      <Header></Header>

      <v-container>
        <v-sheet class="pa-12 px-12" color="grey lighten-3">
          <v-sheet :elevation="18" class="mx-12" height="100" width="500">
            <div id="title">News Today</div>
          </v-sheet>
        </v-sheet>
      </v-container>

      <iframe
        width="740"
        height="416"
        src="https://www.youtube.com/embed/GoXPbGQl-uQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <v-container> </v-container>

      <v-container class="grey lighten-5 cardPage">
        <v-row>
          <template v-for="(n, idx) in items">
            <v-col :key="idx">
              <CardItem :data="n" :idx="idx"></CardItem>
            </v-col>
            <v-responsive
              v-if="n === 2"
              :key="`width-${n}`"
              width="100%"
            ></v-responsive>
          </template>
        </v-row>
      </v-container>

      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Spinner from "vue-simple-spinner";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import UserService from "@/services/user.service";
import CardItem from "@/views/news/cardItem.vue";
import axios from "axios";

export default {
  name: "NewsPage",
  components: {
    Spinner,
    Header,
    Footer,
    CardItem,
  },
  data() {
    return {
      show: false,
      loading: true,
      isNotUser: true,
      items: [],
    };
  },
  mounted() {
    this.loading = false;
    UserService.getPublicContent().then(
      () => {
        this.isNotUser = false;
      },
      (error) => {
        console.log(
          (error.response && error.response.data) ||
            error.message ||
            error.toString()
        );
        this.isNotUser = false;
      }
    );
    this.callData();
  },
  mutations: {
    CHANGE_ITEM(state, payload) {
      state.carditems = payload;
    },
  },

  methods: {
    async callData() {
      // console.log()
      let data = await axios.get("http://localhost:3000");
      //    if(data.items)
      let val = await data.data.items;
      this.items = val;
      console.log(this.items);
      //    return data.items;
    },
    async callImg() {},
  },
};
</script>

<style scoped>
.spinner {
  position: relative;
  top: 15rem;
}
#title {
  font-size: 3rem;
  text-align: center;
  padding: 15px;
}
.newsbackground {
  background: radial-gradient(#e66465, #9198e5);
}
.newsbackground::after {
  opacity: 0.5;
}
iframe {
  width: 100%;
}
.cardPage {
  border-radius: 20px;
}
</style>