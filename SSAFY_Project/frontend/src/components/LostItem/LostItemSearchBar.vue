<template>
  <v-container style="width: 50%">
    <v-row column >
      <v-col >
      <v-text-field
        v-model.trim="itemName"
        placeholder="유실물 종류 입력"
      ></v-text-field>
      <v-text-field
        v-model.trim="roadAddress"
        placeholder="도로명 주소 입력...(예 : 인천광역시 부평구 안남로)"
        @keypress.enter="sendKeyword"
      ></v-text-field>
      <v-btn depressed color="primary" @click="sendKeyword">검색</v-btn>
      </v-col>
    </v-row>
    <v-layout>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'SearchBar',
  data() {
    return {
      itemName: '',
      roadAddress: '',
    };
  },
  methods: {
    sendKeyword() {
      let item = {
        itemName: this.itemName,
        roadAddress: this.roadAddress,
      }
      if (this.roadAddress) {this.$store.dispatch('lostitem/getLostItemList',item);}
      else alert('도로명 주소를 입력하세요');
      this.itemName = '';
      this.roadAddress = '';
      console.log('---------------',item);
    },
  },
};
</script>

