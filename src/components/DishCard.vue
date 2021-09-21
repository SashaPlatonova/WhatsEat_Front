<template>
<v-card
    class="recipe"
    min-width="344"
  >
   <img :src="require('../assets/dish.png')"
        class="my-3 img"
          contain
          height="200">

    <v-card-title class="recipe__name">
      {{ dishItem.title }}
    </v-card-title>

    <v-card-actions>
      <v-btn
        color="#e7b400"
        text
        @click="show = !show"
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

        <v-card-text class="desc">
          <ol>
           Описание: {{ dishItem.description }}
          </ol>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: 'DishCard',
  data: () => ({
    show: false
  }),
  props: {
    dishItem: Object
  }
}
</script>

<style scoped>
.recipe__name {
    font-size: 32px;
    color: aliceblue;
    margin-bottom: 16px;
}
.recipe {
    width: 350px;
    border-radius: 20px;
    background: #383838;
    padding: 16px 16px 32px 16px;
    margin-bottom: 32px;
}
.desc {
  color: aliceblue;
}

</style>
