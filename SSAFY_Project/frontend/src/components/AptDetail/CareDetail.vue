<template>
  <div>
    <br>
    <br>    
    <br>
    <v-img
      max-height="300"
      max-width="100vw"
      :src= "require('../../assets/hospitalimage/'+imageSrc)"
    ></v-img>
    <v-toolbar
      class="mb-2"
      color="indigo darken-5"
      dark
      flat
    >
      <v-toolbar-title style="font-size: 28px">{{ item ? item.name : "" }}</v-toolbar-title>
    </v-toolbar>
    
    <v-list-item>
      <v-list-item-content>주소:</v-list-item-content>
      <v-list-item-content class="align-end"> {{ item ? item.address : "" }} </v-list-item-content>
    </v-list-item>
    
    <v-list-item>
      <v-list-item-content>전화번호:</v-list-item-content>
      <v-list-item-content class="align-end"> {{ item ? item.tel : "" }}</v-list-item-content>
    </v-list-item>

    <v-list-item v-if="type == `hospital`">
      <v-list-item-content>진료형태 :</v-list-item-content>
      <v-list-item-content class="align-end" v-if="item.type == `A`"> 외래진료 가능 </v-list-item-content>
      <v-list-item-content class="align-end" v-else> 외래진료 및 입원 가능 </v-list-item-content>
    </v-list-item>

    <v-list-item v-if="type == `clinic`">
      <v-list-item-content>평일 진료시간:</v-list-item-content>
      <v-list-item-content class="align-end"> {{ item ? item.week_opertime : "" }}</v-list-item-content>
    </v-list-item>
    <v-list-item v-if="type == `clinic`">
      <v-list-item-content>토요일 진료시간:</v-list-item-content>
      <v-list-item-content class="align-end"> {{ item ? item.sat_opertime : "" }}</v-list-item-content>
    </v-list-item>
    <v-list-item v-if="type == `clinic`">
      <v-list-item-content>일요일 진료시간:</v-list-item-content>
      <v-list-item-content class="align-end"> {{ item ? item.sun_opertime : "" }}</v-list-item-content>
    </v-list-item>

  </div>
</template>

<script scoped>
export default {
  props: {
    imageSrc: String
  },
  computed: {
    item() {
      return this.$store.state.selector.item;
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