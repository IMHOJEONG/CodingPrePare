<template>
  <v-container style="width: 50%">
    <v-row column >
      <v-col >
      <v-select
        :items="sort"
        label="금융기관 종류" 
        v-model="sortofcapital"
      ></v-select>
      <v-text-field
        v-model.trim="itemName"
        placeholder="은행 이름 입력"
      ></v-text-field>
      <!-- <v-text-field
        v-model.trim="roadAddress"
        placeholder="도로명 주소 입력...(예 : 인천광역시 부평구 안남로)"
        @keypress.enter="sendKeyword"
      ></v-text-field> -->
      <v-btn depressed color="primary" @click="sendKeyword">검색</v-btn>
      </v-col>
    </v-row>
    <v-layout>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'CapitalSearchBar',
  data() {
    return {
      itemName: '',
      // roadAddress: '',
      sort: ['은행','저축은행','여신전문','보험','금융투자'],
      sortofcapital:''
    };
  },
  methods: {
    sendKeyword() {
      let sortofcapital='';
      if(this.sortofcapital == '') {
        alert('금융기관 종류를 선택해 주세요.')
        return;
      } else if(this.sortofcapital == '은행') {
        sortofcapital = '020000';
      } else if(this.sortofcapital == '여신전문') {
        sortofcapital = '030200';
      } else if(this.sortofcapital == '저축은행') {
        sortofcapital = '030300';
      } else if(this.sortofcapital == '보험') {
        sortofcapital = '050000';
      } else if(this.sortofcapital == '금융투자') {
        sortofcapital = '060000';
      }
      console.log(sortofcapital);
      let item = {
        itemName: this.itemName,
        sortofcapital: sortofcapital,
        // roadAddress: this.roadAddress,
      }
      this.$store.dispatch('capital/getCapitalList',item);
      // for(const capital of this.$store.state.capital.capitals) {
      //   if(capital.kor_co_nm.includes(this.itemName)) newcapitals.push(capital);
      // }
      // this.$store.state.capital.capitals = newcapitals;
      // console.log(this.$store.state.capital.capitals);
      this.itemName = '';
    },
  },
};
</script>

