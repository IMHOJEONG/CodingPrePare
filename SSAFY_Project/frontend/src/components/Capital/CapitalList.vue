<template>
<v-container>
  <!-- <div v-if="this.$store.state.lostitem.lostitems && this.$store.state.lostitem.lostitems.length !=0 ">
    <lostitem v-for="(lostitem,index) in this.$store.state.lostitem.lostitems" :key="index" :lostitem="lostitem"/>
  </div>
  <div v-else>
    <div>유실물 목록이 없습니다.</div>
  </div> -->
  <v-layout justify-center>
    <v-data-table 
            style="width: 50%"
            :headers="headers"
            :items="this.$store.state.capital.capitals"
            :items-per-page="10"
            :page.sync="page"
            @click:row="openDialog"
            hide-default-footer
    ></v-data-table>
  </v-layout>
  <v-container>
    <v-pagination
      v-model="page"
      :length="(this.$store.state.capital.capitals.length % 10) == 0? parseInt(this.$store.state.capital.capitals.length / 10) : parseInt(this.$store.state.capital.capitals.length / 10) + 1"
      :total-visible="10"
      next-icon="mdi-menu-right"
      prev-icon="mdi-menu-left"></v-pagination>
  </v-container>

  <v-dialog v-model="dialog"  max-width="900px">
      <v-card>
        <v-card-title>{{this.$store.state.capital.capital.fin_prdt_nm}}</v-card-title>
        <div></div>
        <v-card-subtitle>{{this.$store.state.capital.capital.kor_co_nm}}</v-card-subtitle>
        <v-divider class="mx-4" style="padding: 0px; margin: 0px"></v-divider>
        <v-card-text style="padding: 30px; color: black">
        <v-row>
          대출한도 : {{this.$store.state.capital.capital.loan_lmt}}
        </v-row>
        <v-row>
          대출금리 : {{this.$store.state.capital.capital.lend_rate_min}}
        </v-row>
        <v-row>
          가입방법 : {{this.$store.state.capital.capital.join_way}}
        </v-row>
        <v-row>
          중도상환 수수료 : {{this.$store.state.capital.capital.erly_rpay_fee}}
        </v-row>
        <v-row>
          연체 이자율 : {{this.$store.state.capital.capital.dly_rate}}
        </v-row>
        <v-row style="color:red">
          *대출금리는 상환방법에 따라 상이하므로 반드시 해당 은행에 문의해보시기 바랍니다.
        </v-row>

        </v-card-text>
        <v-col align-center>
          <v-btn color="primary" @click="closeDialog()">close</v-btn>
        </v-col>
      </v-card>
    </v-dialog>

  
</v-container>
</template>

<script>
import { mapState } from 'vuex';
// import Lostitem from '@/components/LostItem/LostItem.vue';

export default {
  name: 'CapitalList',
  components: {
    // Lostitem,
  },
  data() {
    return{
      capitals : this.$store.state.capital.capitals,
      page: 1,
      headers: [
        // { text: 'NO', value: 'rnum' },
        { text: '상품', value: 'fin_prdt_nm' },
        { text: '은행', value: 'kor_co_nm' },
      ],
      dialog: false,
    }
  },
  computed: {
    ...mapState('capital',['capitals']),
  },
  methods: {
    movePage() {
      this.$store.state.capital.page = this.page;
      console.log(this.$store.state.capital.page);
      console.log(this.page);
    },
    openDialog(value) {
      console.log(value);
      let capital = {
        fin_co_no: value.fin_co_no,
        fin_prdt_nm: value.fin_prdt_nm,
        fin_prdt_cd: value.fin_prdt_cd,
        kor_co_nm: value.kor_co_nm,
        join_way: value.join_way,
        loan_inci_expn: value.loan_inci_expn,
        erly_rpay_fee: value.erly_rpay_fee,
        dly_rate: value.dly_rate,
        loan_lmt: value.loan_lmt,
        lend_rate_min: '',
      }
      for(const option of this.$store.state.capital.options) {
        if(capital.fin_prdt_cd == option.fin_prdt_cd) {
          capital.lend_rate_min = option.lend_rate_min;
          break;
        }
      }
      this.$store.state.capital.capital = capital;
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
    },
  },
  created() {
    let item = {
        itemName: '',
        sortofcapital:'020000',
      }
      this.$store.dispatch('capital/getCapitalList',item);
      this.itemName = '';
      console.log('---------------',item);
  }
};
</script>

