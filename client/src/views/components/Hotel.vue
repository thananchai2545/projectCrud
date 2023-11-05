<template>
  <form @submit.prevent="Seach" style="margin: 0" class="mt-2">
    <div class="row">
      <div class="col-md-3">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            v-model="seach"
            aria-describedby="helpId"
            placeholder="Search"
          />
        </div>
      </div>
      <div class="col-md-1">
        <button type="submit" class="btn btn-primary btn-block">Seach</button>
      </div>
    </div>
  </form>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>ชื่อโรงแรม</th>
          <th>ราคา</th>
          <th>ห้องสูบบุหรี่</th>
          <th>ห้องน้ำ</th>
          <th>เลขที่</th>
          <th>ถนน</th>
          <th>ตำบล</th>
          <th>อำเภอ</th>
          <th>จังหวัด</th>
          <th>ประเทศ</th>
          <th>ไปรษณีย์</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="hotels.length > 0" v-for="(user, index) in hotels" v-bind:key="user.id">
          <th>{{ index + 1 }}</th>
          <td>{{ user.hotel_name }}</td>
          <td>{{ user.hotel_price }}</td>
          <td>{{ user.hotel_smoking }}</td>
          <td>{{ user.hotel_badroom }}</td>
          <td>{{ user.number_house }}</td>
          <td>{{ user.street }}</td>
          <td>{{ user.Sub_Dristict }}</td>
          <td>{{ user.Dristict }}</td>
          <td>{{ user.Provice }}</td>
          <td>{{ user.Country  }}</td>
          <td>{{ user.Past_Code }}</td>
          <td>
            <button
              v-on:click="navigateTo('/EditHotel/' + user.id)"
              class="btn btn-warning mr-2"
            >
              แก้ไขข้อมูล
            </button>
            <button v-on:click="deleteHotel(user)" type="button" class="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
        <tr v-else>
          <td colspan="13" align="center">
            <p>ไม่พบข้อมูล</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
// import HotelServices  from '../../services/hotel.service.js'
import HotelServices from "../../services/hotel.service.js";
export default {
  data() {
    return {
      hotels: [],
      count: 0,
      seach: "",
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteHotel(user) {
      let result = confirm("Want to delete?");
      if (result) {
        try {
          await HotelServices.delete(user);
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.hotels = (await HotelServices.getAllHotel()).data;
    },
    async Seach() {
      this.hotels = (await HotelServices.getAllHotel(this.seach)).data;
    },
  },
  async created() {
    this.hotels = (await HotelServices.getAllHotel()).data;
  },
};
</script>
<style></style>
