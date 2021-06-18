<template>
  <div>
    <br>
    <br>    
    <br>
    <v-img
      max-height="300"
      max-width="100vw"
      :src= "require('../../assets/multigenerationimage/'+imageSrc)"
      lazy-src= "require('../../assets/happyhouse.jpg')"
    ></v-img>
    
    <v-toolbar
      class="mb-2"
      color="indigo darken-5"
      dark
      flat
    >
      <v-toolbar-title style="font-size: 28px">{{  item[0] ? item[0].housename : "" }}</v-toolbar-title>
    </v-toolbar>
    
    <v-list-item v-if="type== `mulgendeal`">
      <v-list-item-content>대지면적:</v-list-item-content>
      <v-list-item-content class="align-end"> {{ item[0] ? item[0].groundarea : "" }} m² </v-list-item-content>
    </v-list-item>
    
    <v-list-item>
      <v-list-item-content>건설년도:</v-list-item-content>
      <v-list-item-content class="align-end"> {{ item[0] ? item[0].buildyear : "" }} 년</v-list-item-content>
    </v-list-item>

    <v-list-item>
      <v-list-item-content>주소 :</v-list-item-content>
      <v-list-item-content class="align-end"> {{ item[0] ? item[0].dong : "" }} {{ item[0] ? item[0].jibun : "" }} 번지 </v-list-item-content>
    </v-list-item>
        <v-data-table v-if="type == `mulgendeal`"
          dense
          :items-per-page="5"
          :headers="headers_mulgendeal"
          :items="dealItem"
          class="elevation-1"
        ></v-data-table>
        <v-data-table v-if="type == `mulgenrent`"
          dense
          :items-per-page="5"
          :headers="headers_mulgenrent"
          :items="dealItem"
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
        headers_mulgendeal: [{ text: '거래금액', value: 'dealamount'},
                  { text: '계약일시', value: 'dealyear'},
                  { text: '층수', value: 'floor'},
                  { text: '연면적', value: 'housearea'},
        ],
        headers_mulgenrent: [{ text: '보증금', value: 'deposit'},
                  { text: '월세', value: 'rent'},
                  { text: '계약일시', value: 'dealyear'},
                  { text: '층수', value: 'floor'},
                  { text: '연면적', value: 'area'},
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