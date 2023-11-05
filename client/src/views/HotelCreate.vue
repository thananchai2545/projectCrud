<template>
  <div class="m-5 pl-5">
    <h2>Create Hotel</h2>
    <div class="d-flex justify-content-between">
      <div>
        <button v-on:click="$router.push('/profile')" class="btn btn-primary m-3">
          หน้าหลัก
        </button>
      </div>
    </div>
    <hr />
    <!-- table -->
    <form @submit.prevent="Createhotel">
      <div class="row justify-content-center">
        <div class="col-9">
          <div class="row">
            <div class="col-7">
              <label for="exampleFormControlInput1" class="form-label">hotel name</label>
              <input
                v-model="hotel_name"
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                required
              />
            </div>
            <div class="col-5">
              <label for="exampleFormControlInput1" class="form-label">Price</label>
              <input
                v-model="hotel_price"
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                required
              />
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-6">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01"
                    >Smorking</label
                  >
                </div>
                <select
                :required="true"
                  v-model="hotel_smoking"
                  class="custom-select"
                  id="inputGroupSelect01"
                >
                  <option v-bind:value="1">No - Smorking</option>
                  <option v-bind:value="2">Smorking</option>
                </select>
              </div>
            </div>

            <div class="col-6">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">Badroom</label>
                </div>
                <select
                  v-model="hotel_badroom"
                  class="custom-select"
                  id="inputGroupSelect01"
                >
                  <option v-bind:value="1">1 room</option>
                  <option v-bind:value="2">2 room</option>
                </select>
              </div>
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-12">
              <label for="exampleFormControlInput1" class="form-label">No./moo</label>
              <input
                v-model="number_house"
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="e.g 123/45"
                required
              />
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-6">
              <label for="exampleFormControlInput1" class="form-label">Street</label>
              <input
                v-model="street"
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>

            <div class="col-6">
              <label for="exampleFormControlInput1" class="form-label"
                >Sub-Dristict</label
              >
              <input
                v-model="Sub_Dristict"
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-6">
              <label for="exampleFormControlInput1" class="form-label">Dristict</label>
              <input
                v-model="Dristict"
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>

            <div class="col-6">
              <label for="exampleFormControlInput1" class="form-label">Provice</label>
              <input
                v-model="Provice"
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-3">
              <label for="exampleFormControlInput1" class="form-label">Country</label>
              <input
                v-model="Country"
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>

            <div class="col-9">
              <label for="exampleFormControlInput1" class="form-label">Past Code</label>
              <input
                v-model="Past_Code"
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
          </div>

          <div class="row m-3 d-flex justify-content-end">
            <button type="submit" class="btn btn-success">Save</button>
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
      hotel_name: "",
      hotel_price: "",
      hotel_smoking: "",
      hotel_badroom: "",
      number_house: "",
      street: "",
      Sub_Dristict: "",
      Dristict: "",
      Provice: "",
      Country: "",
      Past_Code: "",
      message: "",
      error: false,
    };
  },
  methods: {
    Createhotel(e) {
      this.loading = true;
      if (this.hotel_name) {
        let payload = {
          hotel_name: this.hotel_name,
          hotel_price: this.hotel_price,
          hotel_smoking: this.hotel_smoking,
          hotel_badroom: this.hotel_badroom,
          number_house: this.number_house,
          street: this.street,
          Sub_Dristict: this.Sub_Dristict,
          Dristict: this.Dristict,
          Country: this.Country,
          Provice: this.Provice,
          Past_Code: this.Past_Code,
        };
        this.$store
          .dispatch("user/createHotel", {
            payload
          })
          .then(() => {
            this.$router.push({ name: "profile" });
            // console.log("sfsdf");
          })
          .catch((error) => {
            this.error = true;
            this.message = error.message;
          });
        // console.log(payload);
      }
    },
  },
};
</script>
<style></style>
