<template>
    <section>
    <h1>SignIn</h1>
        <v-card
  elevation="10"
  class = "mx-auto"
  max-width="50%"
  >
  <v-form
    ref="form"
    :style="{'padding':'20px'}"
  >
  <v-text-field
      v-model="login"
      label="Login"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      type="password"
      label="Password"
      required
    ></v-text-field>
    <v-btn
      color="success"
      class="mr-4"
      @click="pushUser('http://localhost:8080/login')"
    >
      Submit
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset
    </v-btn>
    <a href='/signup'>Sign Up</a>
  </v-form>
  <v-card-text text-color="error">
      {{ message }}
  </v-card-text>
        </v-card>
    </section>
</template>
<script>
export default {
  name: 'SignIn',
  data: () => ({
    login: '',
    password: '',
    message: ''
  }),
  methods: {
    async pushUser (url) {
      await this.axios.post(url, {
        password: this.password,
        login: this.login,
        message: ''
      })
        .then(response => {
          console.log(response)
          this.message = 'Ok'
          this.$router.push('/dishes')
          this.$router.go()
        })
        .catch(error => {
          console.log(error)
        })
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>
