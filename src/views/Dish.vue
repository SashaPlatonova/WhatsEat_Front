<template>
<section>
  <div class="wrapper">
  <div class="main">
        <div class="main-block">
            <div class="main-block__upper">
                <h1>Пободрать блюдо на ужин</h1>
                <div class="nav">
                    <a href="#">Книга рецептов</a>
                </div>
                <div class="info-block">
                    <div class="flex-container">
                        <div class="search-panel">
                            <label class="search__label" for="search__input">Введите названия продуктов которые имеются у вас:</label>
                            <div class="search">
                                <input type="text" id="search__input">
                                <v-btn color="#e7b400" @click="search">
                                  Подобрать рецепт</v-btn>
                            </div>
                        </div>
                        <div class="block-recipes">
                              <v-row class="dish">
                                <DishCard
                                    v-for="dishItem in dishItems"
                                    :key="dishItem.id"
                                    :dish-item="dishItem"
                                    class="my-2"
                                  />
                              </v-row>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer">

            </div>
        </div>
    </div>
  </div>
</section>
</template>

<script>
import DishCard from '../components/DishCard'
const apiURl = 'http://localhost:8080/products'
export default {
  components: {
    DishCard
  },
  name: 'Dish',
  data: () => ({
    dishItems: []
  }),
  methods: {
    async getDish () {
      await this.axios.get(apiURl)
        .then(res => {
          this.dishItems = res.data
          console.log(res.data)
        })
        .catch(err => {
          console.log('error displaying subdivisionItems', err)
        })
    },
    async search () {
      var input = document.querySelector('input')
      await this.axios.get(apiURl + '?products=' + input.value)
        .then(res => {
          this.dishItems = res.data
          console.log(res.data)
        })
        .catch(err => {
          console.log('error displaying subdivisionItems', err)
        })
    }
  },
  created () {
    this.getDish()
  }
}

</script>

<style scoped>
* {
    box-sizing: border-box;
}

body {
    margin: 0;
}

a {
    text-decoration: none;
}

.wrapper {
    display: flex;
    width: 100%;
    min-height: 100vh;
    margin: 0;
    background: #2c2c2c;
}

.main {
    max-width: 1440px;
    margin: 0 auto;
    background: #2c2c2c;
    min-height: 100vh;
}

.main-block {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 24px 64px 64px 148px;
    color: #fff;
    justify-content: space-around;
}

h1 {
    color: #fff;
    font-family: 'Jost', sans-serif;
    font-weight: Bold;
    font-size: 36px;
    line-height: 52px;
    margin: 0 0 26px 0;
    padding: 0;
}

.nav {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
}

.nav a {
    flex-grow: 1;
}

.nav a {
    font-family: 'Jost', sans-serif;
    padding: 16px 0 41px 30px;
    display: block;
    color: #fff;
    font-weight: 400;
    font-size: 24px;
    line-height: 35px;
    border-top: 6px solid #e7b400;
    text-decoration: none;
}

.info-block {
    position: relative;
    max-width: 1220px;
    margin: 0;
    padding: 32px 32px 0 32px;
    color: #fff;
    border-radius: 30px;
}

.flex-container {
    display: flex;
    flex-wrap: wrap;

    align-items: flex-start;
    justify-content: space-between;
}

.search-panel {
    display: flex;
    flex-direction: column;
    font-family: Jost sans-serif;
    font-size: 24px;
    font-weight: normal;
    border-radius: 20px;
    background: #383838;
    padding: 16px;
    width: 100%;
    margin-bottom: 32px;
}

.search__label {
    display: inline-block;
    font-size: 24px;
    font-family: Jost sans-serif;
    font-weight: 500;
    line-height: 32px;
    margin-bottom: 16px;
}

.search {
    display: flex;
}

#search__input {
    border-radius: 10px 0 0 10px;
    border: #2c2c2c 1px solid;
    height: 32px;
    flex-grow: 1;
    font-family: Jost sans-serif;
    font-size: 24px;
    font-weight: normal;
    line-height: 32px;
    background-color: aliceblue;
}

.search__button {
    width: 200px;
    background: #e7b400;
    border-radius: 0 10px 10px 0;
    border: #2c2c2c 1px solid;
    font-family: Jost sans-serif;
    font-size: 18px;
    font-weight: 500;
}

.block-recipes {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.recipe {
    width: 350px;
    border-radius: 20px;
    background: #383838;
    padding: 16px 16px 32px 16px;
    margin-bottom: 32px;
}
.dish {
  justify-content: space-between;
}
.recipe__image img {
    width: 100%;
    margin-bottom: 16px;
}

</style>
