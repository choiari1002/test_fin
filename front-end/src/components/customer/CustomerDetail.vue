<template>
  <div v-if="currentCustomer">
    <div class="mb-3">
      <label for="firstName" class="form-label">First Name</label>
      <input type="text" class="form-control" id="firstName" required name="firstName"
             v-model="currentCustomer.firstName">
    </div>
    <div class="mb-3">
      <label for="lastName" class="form-label">Last Name</label>
      <input type="text" class="form-control" id="lastName" required name="lastName" v-model="currentCustomer.lastName">
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input type="email" class="form-control" id="email" required name="email" v-model="currentCustomer.email">
    </div>
    <div class="mb-3">
      <label for="phone" class="form-label">Phone</label>
      <input type="text" class="form-control" id="phone" required name="phone" v-model="currentCustomer.phone">
    </div>
    <div class="mb-3">
      <button @click="updateCustomer" class="btn btn-primary me-3">Update</button>
      <button @click="deleteCustomer" class="btn btn-danger">Delete</button>
    </div>
    <div class="alert alert-success" role="alert" v-if="message">
      {{ message }}
    </div>
  </div>
</template>

<script>
import CustomerDataService from '@/services/CustomerDataService';

export default {
  data() {
    return {
      currentCustomer : null,
      message: ""
    }
  },
  methods: {
    getCustomer(cid) {
      CustomerDataService.get(cid)
      .then(response => {
        this.currentCustomer = response.data;
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      })
    },
    // 부서정보를 수정 요청하는 함수
    updateCustomer() {
      CustomerDataService.update(this.currentCustomer.cid,this.currentCustomer)
      .then(response => {
        // 콘솔 로그 출력
        console.log(response.data);
        this.message = "The Customer was updated successfully!"
      })
      .catch(e => {
        console.log(e);
      })
    }
    ,deleteCustomer() {
      CustomerDataService.delete(this.$route.params.cid)
      .then(response => {
        // 콘솔 로그 출력
        console.log(response.data);
        // 첫페이지 강제 이동  $router.push("이동시키고 싶은 주소") : 다른 페이지로 강제 이동 하고 싶을때 씀
        this.$router.push("/customer");
      })
      .catch(e => {
        console.log(e);
      })
    }
  },
  mounted() {


    this.message = "";

    this.getCustomer(this.$route.params.cid);
  },
}
</script>

<style>
.edit-form{
  max-width: 300px;
  margin: auto;
}
</style>