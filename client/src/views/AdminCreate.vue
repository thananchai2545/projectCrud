<template>
  <div class="m-5 pl-5">
    <h2>Create Admin</h2>
    <div class="d-flex justify-content-between">
      <div>
        <button v-on:click="$router.push('/profile')" class="btn btn-primary m-3">
          หน้าหลัก
        </button>
      </div>
    </div>
    <hr />
    <!-- table -->
    <form @submit.prevent="CreateAdmin">
      <div class="row justify-content-center">
        <div class="col-9">
          <div class="row">
            <div class="col-7">
              <label for="exampleFormControlInput1" class="form-label">email</label>
              <input
                v-model="email"
                type="email"
                class="form-control"
                required
              />
            </div>
            <div class="col-5">
              <label for="exampleFormControlInput1" class="form-label">name</label>
              <input
                v-model="name"
                type="text"
                class="form-control"
                required
              />
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-12">
              <label for="exampleFormControlInput1" class="form-label">password</label>
              <input
                v-model="password"
                type="password"
                class="form-control"
                required
              />
            </div>
          </div>

          <div class="row m-3 d-flex justify-content-end">
            <button type="submit" class="btn btn-success">Create Admin</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      name: "",
      password: "",
    };
  },
  methods: {
    CreateAdmin(e) {
      this.loading = true;
      if (this.email) {
       
        let payload = {
          email: this.email,
          name: this.name,
          password: this.password,
        };
        this.$store
          .dispatch("user/createAdmin", {
            payload,
          })
          .then(() => {
            this.$router.push({ name: "profile" });
          })
          .catch((error) => {
            this.error = true;
            this.message = error.message;
          });
      }
    },
  },
};
</script>
<style></style>
