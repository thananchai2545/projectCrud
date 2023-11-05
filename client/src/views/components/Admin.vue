<template lang="">
  <div> <div class="table-responsive-xxl"> <table class="table mt-3"> <thead> <tr>
  <th></th> <th>email</th> <th>ชื่อ</th> <th>นามสกุล</th> <th>รหัส</th> <th>action</th>
  </tr> </thead> <tbody> <tr v-if="Admins.length > 0" v-for="(Admin,index) in Admins"
  v-bind:key="Admin.id"> <th>{{ index + 1 }}</th> <td>{{ Admin.email }}</td> <td>{{
    Admin.name
  }}</td> <td>{{ Admin.lastname }}</td> <td>{{ Admin.password }}</td> <td> <button
  v-on:click="deleteAdmin(Admin)" type="button" class="btn btn-danger">Delete</button>
  </td> </tr> <tr v-else> <td colspan="13" align="center"> <p>ไม่พบข้อมูล</p> </td> </tr>
  </tbody> </table> </div> </div>
</template>
<script>
import UserServices from "../../services/user.service.js";
export default {
  data() {
    return {
      Admins: [],
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteAdmin(Admin) {
      let result = confirm("Want to delete?");
      if (result) {
        try {
          await UserServices.delete(Admin);
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.Admins = (await UserServices.getAdmin()).data;
    },
  },
  async created() {
    this.Admins = (await UserServices.getAdmin()).data;
  },
};
</script>
