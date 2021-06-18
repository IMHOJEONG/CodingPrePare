<template>
    <v-card
                    class="mx-auto cardBox"
                    max-width="344"
                    
                >
                    <a :href="data.link" target="_blank">
                    <v-img
                    v-bind:src="require(`@/assets/news/cardimg${idx}.jpg`)"
                    height="200px"
                    class="imgBox"
                    ></v-img>
                    </a>

                    <v-card-title v-html="data.title">
                        
                    </v-card-title>

                    <v-card-subtitle>
                    {{ data.pubDate }}
                    </v-card-subtitle>

                    <v-card-actions>
                    <v-btn
                        color="orange lighten-2"
                        text
                    >
                        Explore
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn
                        icon
                        @click="show = !show"
                    >
                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                    <div v-show="show">
                        <v-divider></v-divider>

                        <v-card-text v-html="data.description">
                        
                        </v-card-text>
                    </div>
                    </v-expand-transition>
                </v-card>    
</template>

<script>
  export default {
    data: () => ({
      show: false,
      
    }),
    props: {
        data: Object,
        idx: Number,
    }
  }
</script>

<style>
.cardBox {
    border-radius: 20px  !important; 
}
.imgBox {
    border-radius: 20px;
}
</style>