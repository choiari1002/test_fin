<template>
  <div class="submit-form">
    <!-- 새 양식 폼 시작 -->
    <!-- 부서명 -->
    <div v-if="!submitted">
      <div class="form-group">
        <label for="ename">Ename</label>
        <input
          type="text"
          class="form-control"
          id="ename"
          required
          v-model="emp.ename"
          name="ename"
        />
      </div>

      <!-- 직업정보 -->
      <div class="form-group">
        <label for="job">Job</label>
        <input
          class="form-control"
          id="job"
          required
          v-model="emp.job"
          name="job"
        />
      </div>

      <!-- 급여정보 -->
      <div class="form-group">
        <label for="salary">Salary</label>
        <input
          class="form-control"
          id="salary"
          required
          v-model="emp.salary"
          name="salary"
        />
      </div>

      <button @click="saveEmp" class="btn btn-success">Submit</button>
    </div>
    <!-- 새 양식 폼 끝 -->

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newEmp">Add</button>
    </div>
  </div>
</template>

<script>
import EmpDataService from "../../services/EmpDataService";


export default {
  data() {
    return {
      emp : {
        eno : null,
        ename : "",
        job : "",
        salary : null
      },
      // submit 버튼을 클릭하면 true 가 되고 , You submitted successfully! 화면에 출력됨
      submitted : false
    }
  },
  methods: {
    newEmp() {
      // 새 양식 다시 보여주기 함수, 변수 초기화
      this.submitted = false;
      this.emp = {}
    },
    saveEmp() {
      // 임시 격체 변수 -> springboot로 전송
      // 사원번호는 (eno) 자동생성 되므로 빼고 전송함
      let data = {
        ename : this.emp.ename,
        job : this.emp.job,
        salary : this.emp.salary
      };
      // insert 요청 함수 호출
      EmpDataService.create(data)
      // 성공하면 then() 결과가 전송됨
      .then(response =>{  
        this.emp.eno = response.data.eno;
        console.log(response.data);
        // 변수 submitted
        this.submitted = true;
      })  
      // 실패하면 .catch() 실행됨
      .catch(e => {
        console.log(e);
      })
    
      
    }
  },
};
</script>

<style>
  .submit-form {
    max-width: 300px;
    margin: auto;
  }
</style>