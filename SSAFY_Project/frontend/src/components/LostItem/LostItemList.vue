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
            :items="this.$store.state.lostitem.lostitems"
            :items-per-page="10"
            :page.sync="page"
            hide-default-footer
    ></v-data-table>
  </v-layout>
  <v-container>
    <v-pagination
      v-model="page"
      :length="(this.$store.state.lostitem.lostitems.length % 10) == 0? parseInt(this.$store.state.lostitem.lostitems.length / 10) : parseInt(this.$store.state.lostitem.lostitems.length / 10) + 1"
      :total-visible="10"
      next-icon="mdi-menu-right"
      prev-icon="mdi-menu-left"></v-pagination>
  </v-container>
  
</v-container>
</template>

<script>
import { mapState } from 'vuex';
// import Lostitem from '@/components/LostItem/LostItem.vue';

export default {
  name: 'LostItemList',
  components: {
    // Lostitem,
  },
  data() {
    return{
      lostitems : this.$store.state.lostitem.lostitems,
      page: 1,
      headers: [
        { text: 'NO', value: 'rnum' },
        { text: 'NAME', value: 'fdPrdtNm' },
        { text: 'PLACE', value: 'depPlace' },
      ],
    }
  },
  computed: {
    ...mapState('lostitem',['lostitems']),
  },
  methods: {
    movePage() {
      this.$store.state.lostitem.page = this.page;
      console.log(this.$store.state.lostitem.page);
      console.log(this.page);
    }
  },
  created () {
    this.$store.state.lostitem.lostitems = [];
  },
};
</script>

