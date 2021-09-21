<template>
  <div class="main">
  <v-card
    class="mx-auto"
    max-width="500"
    tile
  >
    <v-list rounded>
      <v-subheader class="start-title">Start</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="#e7b400"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="start-title" @click="$router.push(item.path)"
              v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
  </div>
</template>

<script>
export default {
  name: 'Start.vue',
  data: () => ({
    selectedItem: 1,
    items: [
      { text: 'Sign In', icon: 'mdi-account-check-outline', path: '/signin' },
      { text: 'Sign Up', icon: 'mdi-account', path: '/signup' },
      { text: 'As guest', icon: 'mdi-account-question-outline', path: '/dishes' }
    ]
  })
}
</script>

<style scoped>
.main{
  margin-top: 200px;
}

.start-title {
  font-size: 24px;
}
</style>
