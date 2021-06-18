<template>
  <v-footer app padless class="footer" v-bind:light="false">
    <v-bottom-navigation
      v-model="value"
      :input-value="footer"
      color="rgba(66,66,66,1)"
      class="footer"
    >
      <v-tooltip v-for="(link, index) in links" :key="link" top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-if="index == 0"
            :key="link"
            color=" accent-4"
            v-bind="attrs"
            v-on="on"
            class="my-2"
            text
            @click="goHome"
          >
            <span> {{ link }}</span>

            <v-icon>mdi-home</v-icon>
          </v-btn>
          <v-btn
            v-else
            :key="link"
            color=" accent-4"
            v-bind="attrs"
            v-on="on"
            class="my-2"
            text
            @click.stop="dialog[index] = true"
          >
            <span> {{ link }}</span>

            <v-icon v-if="index == 1">mdi-information-outline</v-icon>
            <v-icon v-if="index == 2">mdi-account-group-outline</v-icon>
            <v-icon v-if="index == 3">mdi-sitemap</v-icon>
            <v-icon v-if="index == 4">mdi-blogger</v-icon>
            <v-icon v-if="index == 5">mdi-account-box</v-icon>
            <v-icon v-if="index == 6">mdi-bug</v-icon>
          </v-btn>

          <v-dialog v-model="dialog[index]" max-width="500">
            <v-card v-if="index == 1">
              <v-card-title class="headline"> Teams </v-card-title>

              <hojeong />
              <kimsunwoo />
              <seongjayong />
            </v-card>
            <v-card v-if="index == 2">
              <v-card-title class="headline"> Vue:tiful house </v-card-title>
              <v-card-text>
                Our team consists of 3 people imhojeong, kimsunwoo, seungjayong
              </v-card-text>
            </v-card>
            <v-card v-if="index == 3">
              <v-card-title class="headline"> Site Map </v-card-title>
              <v-card-text>
                <a href="https://rt.molit.go.kr/" target="_blank"
                  >국토 교통부 실거래가</a
                >
                <br />
                <a
                  href="https://www.code.go.kr/stdcode/regCodeL.do"
                  target="_blank"
                  >법정동 코드 조회</a
                >
              </v-card-text>
            </v-card>
            <v-card v-if="index == 4">
              <v-card-title class="headline"> Blogs </v-card-title>
              <v-card-text>
                <a href="https://ruler-dd.tistory.com/" target="_blank"
                  >자용 블로그</a
                >
                <br />
                <a href="https://39ghwjd1.gitlab.io/" target="_blank"
                  >호정 블로그</a
                >
              </v-card-text>
            </v-card>
            <v-card v-if="index == 5">
              <v-card-title class="headline"> Contact Us </v-card-title>
              <v-card-text>
                Email : 39ghwjd@naver.com
                <br />
                Phone Number : 010-9209-4996
                <hr />
                Email : wkdyd2677@naver.com
                <br />
                Phone Number : 010-9215-4438
                <br />
                Kakao ID : wkdyd2677
                <hr />
                Email : rlatjsd0603@naver.com
                <br />
                Phone Number : 01097049733
                <br />
                Kakao ID : tjsdnflrm
              </v-card-text>
            </v-card>
            <v-card v-if="index == 6" width="500px">
              <v-card-title class="headline">Corona Status</v-card-title>
              <footerChart />
            </v-card>
          </v-dialog>
        </template>
        <span>{{ link }}</span>
      </v-tooltip>
    </v-bottom-navigation>
  </v-footer>
</template>

<script>
import { mapState } from "vuex";
import hojeong from "./footer/hojeong.vue";
import kimsunwoo from "./footer/kimsunwoo.vue";
import seongjayong from "./footer/seongjayong.vue";
import footerChart from "./footer/footerChart.vue";

export default {
  name: "Footer",
  components: {
    hojeong,
    kimsunwoo,
    seongjayong,
    footerChart,
  },
  data: () => ({
    links: [
      "Home",
      "About Us",
      "Team",
      "Site Map",
      "Blog",
      "Contact Us",
      "Corona",
    ],
    active: true,
    value: 0,
    dialog: [false, false, false, false, false, false, false],
  }),

  created() {},
  mounted() {
    let footer = document.getElementsByClassName("footer");
    footer.forEach((item, idx) => {
      let change = footer[idx]
        .getAttribute("class")
        .replace("theme--light", "");
      footer[idx].setAttribute("class", change);
    });
  },

  computed: {
    ...mapState(["footer"]),
  },
  methods: {
    goHome() {
      this.$router.push("/home");
    },
  },
};
// https://picsum.photos/1920/1080?random
</script>

<style scoped>
.vcol-bg {
  background: rgba(66, 66, 66, 1);
}
.footer {
  display: flex;
  flex-direction: row;
}
#areaChart {
  width: 100%;
}
</style>