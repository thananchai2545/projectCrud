<script setup></script>
<template>
  <div class="m-5">
    <h2>Hotel CRUD</h2>
    <div class="d-flex align-items-center justify-content-between">
      <div>
        <!-- <button type="submit" class="btn btn-primary"><router-link v-on:click="" to="/profile/Hotel" class="btn">Hotel</router-link></button> -->
        <button v-on:click="$router.push('/profile')" class="btn btn-primary">
          โรงแรม
        </button>
        <router-link v-on:click="" to="/profile/Admin" class="btn btn-secondary m-2"
          >แอดมิน</router-link
        >
        <button
          @click="handleLogout"
          :disabled="loading"
          type="button"
          class="btn btn-secondary"
        >
          Logout
        </button>
      </div>
      <div class="d-flex align-items-center">
        <!-- <button type="button" class="btn btn-primary m-2">+</button> -->

        <div class="ml-4">
          <router-link to="/createhotel" class="btn btn-success">เพิ่มโรงแรม</router-link>
          <router-link to="/CreateAdmin" class="btn btn-success m-2"
            >เพิ่มแอดมิน</router-link
          >
        </div>
      </div>
    </div>
    <!-- table -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: "btn-primary",
      loading: false,
      message: "",
      error: false,
    };
  },
  methods: {
    handleLogout() {
      this.loading = true;
      this.$store
        .dispatch("auth/logout")
        .then(() => {
          this.$router.push({ name: "Login" });
        })
        .catch((error) => {
          this.loading = false;
        });
    },
    myFunction(e) {
      console.log(e.keyup);
    },
  },
};
</script>
<style></style>
