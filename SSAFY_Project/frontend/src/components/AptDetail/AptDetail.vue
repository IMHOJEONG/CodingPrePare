<template>
  <div>
    <br>
    <br>    
    <br>
    <v-img
      max-height="300"
      max-width="100vw"
      :src= "require('../../assets/apartImage/' + imageSrc)" 
    ></v-img>
    <v-toolbar
      class="mb-2"
      color="indigo darken-5"
      dark
      flat
    >
      <v-toolbar-title style="font-size: 28px">{{ item[0] ? item[0].aptname : "" }}</v-toolbar-title>
    </v-toolbar>
    
    <v-list-item>
      <v-list-item-content>대지면적:</v-list-item-content>
      <v-list-item-content class="align-end"> {{ item[0] ? item[0].area : "" }} m² </v-list-item-content>
    </v-list-item>
    
    <v-list-item>
      <v-list-item-content>건설년도:</v-list-item-content>
      <v-list-item-content class="align-end"> {{ item[0] ? item[0].buildyear : "" }} 년</v-list-item-content>
    </v-list-item>

    <v-list-item>
      <v-list-item-content>주소 :</v-list-item-content>
      <v-list-item-content class="align-end"> {{ item[0] ? item[0].dong : "" }} {{ item[0] ? item[0].jibun : "" }} 번지 </v-list-item-content>
    </v-list-item>
        <v-data-table v-if="type == `aptdeal`"
          dense
          :items-per-page="5"
          :headers="headers_aptdeal"
          :items="this.$store.state.selector.dealItem"
          class="elevation-1"
        ></v-data-table>
        <v-data-table v-if="type == `aptrent`"
          dense
          :items-per-page="5"
          :headers="headers_aptrent"
          :items="this.$store.state.selector.dealItem"
          class="elevation-1"
        ></v-data-table>
  </div>
</template>

<script scoped>
  export default {
    props: {
      imageSrc: String
    },
    data() {
      return {
        headers_aptdeal: [{ text: '거래가격', value: 'dealamount'},
                  { text: '계약년도', value: 'dealyear'},
                  { text: '층수', value: 'floor'},
        ],
        headers_aptrent: [{ text: '보증금', value: 'deposit'},
                  { text: '월세', value: 'rent'},
                  { text: '계약년도', value: 'dealyear'},
                  { text: '층수', value: 'floor'}
        ],
      }
    },
    computed: {
      item() {
        return this.$store.state.selector.item;
      },
      dealItem() {
        return this.$store.state.selector.dealItem;
      },
      type() {
        return this.$store.state.selector.type;
      },
    },
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
* {
  font-family: 'Nanum Gothic', sans-serif;
}
</style>