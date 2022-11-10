<template>
  <!-- EmpDetail.vue -->
  <div>
    <!-- 수정 양식 폼 시작 -->
    <div v-if="currentEmp" class="edit-form">
      <h4>Emp</h4>
      <form>
        <div class="form-group">
          <label for="ename">Ename</label>
          <input
            type="text"
            class="form-control"
            id="ename"
            v-model="currentEmp.ename"
          />
        </div>
        <div class="mt-3 form-group">
          <label for="job">Job</label>
          <input
            type="text"
            class="form-control"
            id="job"
            v-model="currentEmp.job"
          />
        </div>
      </form>

      <button class="mt-3 btn btn-danger" @click="deleteEmp">Delete</button>

      <button
        type="submit"
        class="ms-3 mt-3 btn btn-success"
        @click="updateEmp"
      >
        Update
      </button>
      <p>{{ message }}</p>
    </div>
    <!-- 수정 양식 폼 끝 -->
    <div v-else>
      <br />
      <p>Please click on a Emp…</p>
    </div>
  </div>
</template>

<script>
import EmpDataService from "../../services/EmpDataService";


export default {
  data() {
    return {
      message : "",
      currentEmp : null
    }
  },
  methods: {
    getEmp(eno) {
    // axios 공통 함수 호출
      EmpDataService.get(eno)
      .then(response => {
        // springboot 결과를 리턴함(부서 객체)
        this.currentEmp = response.data;
        // 콘솔 로그 출력
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      })
    },
    // 정보를 수정 요청하는 함수
    updateEmp() {
      // axios 공통함수 호출
      EmpDataService.update(this.currentEmp.eno,this.currentEmp)
      .then(response => {
        // 콘솔 로그 출력
        console.log(response.data);
        this.message = "The Emp was updated successfully!"
      })
      .catch(e => {
        console.log(e);
      })
    },
    deleteEmp() {
      EmpDataService.delete(this.$route.params.eno)
      .then(response => {
        // 콘솔 로그 출력
        console.log(response.data);
        this.$router.push("/emp");

      })
      .catch(e => {
        console.log(e);
      })
    }

  },
  // 화면 시작하지마 뜨는 이벤트
  mounted () {
    // 클라이언트 디버깅 하는 방법
    // alert(this.$route.params.dno);


    this.message = "";
    // this.$route.params.eno : 이전페이지에서 전송한 매개변수는 $route.params 안에 있음.
    // $route 객체 : 주로 url 매개변수 정보들이 있음.
    // router/index.js 상세페이지 url의 매개변수명 :  :eno
    this.getEmp(this.$route.params.eno);
  }

};
</script>

<style>

.edit-form{
  max-width: 300px;
  margin: auto;
}
</style>