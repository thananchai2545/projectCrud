<script>


export default {
   name: 'Login',
    data() {
        return {
            email: '',
            password: '',
            loading: false,
            message: '',
            error: false
        }
    },
    methods: {
          Login(e) {
            this.loading = true;
            this.$store.dispatch('auth/login', {
                email: this.email,
                password: this.password
            }).then(() => {
                this.$router.push({ name: 'profile' });
            }).catch((error) => {
                this.error = true;
                this.message = error.message;
            });
            this.loading = false;
            e.preventDefault();
        }
    }
}
</script>

<template>
<div class="body_login">
<div class="contact-wrapper">
  <header class="login-cta">
    <h2>Account Login</h2>
  </header>
  <form @submit="Login">
    <div class="form-row">
      <input v-model="email" type="text" required>
      <span>Username or Email</span>
    </div>
    <div class="form-row">
      <input v-model="password" type="password" required>
      <span>Password</span>
    </div>
    <div class="form-row"></div>
    <div class="form-row">
      <button type="submit">Login to your Account!</button>
    </div>
  </form>
</div>
</div>
</template>

<style>

</style>
