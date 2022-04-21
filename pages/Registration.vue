<template>
  <div>
    <RegisterHeader />
    <div class="wrapper">
      <h2 id="hid">Registration Form</h2>
      <div id="success" class="suc"></div>
      <div id="error_message"></div>
      <form @submit.prevent="register">
        <div class="input_field">
          <input
            v-model="full_name"
            type="text"
            placeholder="Fullname"
            id="name"
          />
        </div>
        <div class="input_field">
          <input v-model="email" type="text" placeholder="Email" id="email" />
        </div>
        <div class="input_field">
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            id="pass"
          />
        </div>

        <input type="submit" value="submit" onclick="return val()" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'registration',

  data() {
    return {
      full_name: '',
      email: '',
      password: '',
    }
  },
  methods: {
    async register() {
      console.log(this.full_name)
      console.log(this.email)
      console.log(this.password)
      await this.$store.dispatch('registerUser', {
        full_name: this.full_name,
        email: this.email,
        password: this.password,
      })
      await this.$router.push('/')
    },
  },
}
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap'); */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  font-family: 'Josefin Sans', sans-serif;
}

body {
  background-color: orange;
}

.wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 350px;
  width: 100%;
  background-color: rgb(101, 114, 234);
  padding: 25px;
  border-radius: 0%;
  box-sizing: 4px 4px 2px rgb(106, 126, 224);
}

.wrapper h2 {
  text-align: center;
  margin-bottom: 20px;
  letter-spacing: 3px;
}

.wrapper .input_field {
  margin-bottom: 10px;
}

.wrapper .input_field input[type='text'],
.wrapper .input_field input[type='password'] {
  width: 100%;
  padding: 10px;
}

.wrapper input[type='submit'] {
  border: 0px;
  margin-top: 15px;
  padding: 10px;
  width: 100%;
  background: #0c0c0c;
  color: #f8f7f1;
  text-transform: uppercase;
  font-weight: 1000;
  border-radius: 25px;
  cursor: pointer;
}

.wrapper #error_message {
  margin-bottom: 20px;
  padding: 0px;
  background: #fe8b8e;
  text-align: center;
  font-size: 14px;
  transition: all 0.5s ease;
}

#success {
  display: none;
}

.creds {
  background-color: #ffd151;
  width: 100%;
  height: 30px;
  text-align: center;
  padding: 10px;
  text-transform: uppercase;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>