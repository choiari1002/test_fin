<template>
  <!-- AddDept.vue -->
  <div class="submit-form">
    <!-- 새 양식 폼 시작 -->
    <!-- 부서명 -->
    <div v-if="!submitted">
      <div class="form-group">
        <label for="dname">Dname</label>
        <input
          type="text"
          class="form-control"
          id="dname"
          required
          v-model="dept.dname"
          name="dname"
        />
      </div>

      <!-- 위치정보 -->
      <div class="form-group">
        <label for="loc">Loc</label>
        <input
          class="form-control"
          id="loc"
          required
          v-model="dept.loc"
          name="loc"
        />
      </div>

      <button @click="saveDept" class="btn btn-success">Submit</button>
    </div>
    <!-- 새 양식 폼 끝 -->

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newDept">Add</button>
    </div>
  </div>
</template>

<script>
// axios 공통 함수 import
import DeptDataService from "../../services/DeptDataService";

export default {
  data() {
    return {
      dept : {
        dno : null,
        dname : "",
        loc : ''
      },
      // submit 버튼을 클릭하면 true 가 되고 , You submitted successfully! 화면에 출력됨
      submitted : false
    }
  },
  methods: {
    newDept() {
      // 새 양식 다시 보여주기 함수, 변수 초기화
      this.submitted = false;
      this.dept = {}
    },
    saveDept() {
      // 임시 격체 변수 -> springboot로 전송
      // 부서번호는 (dno) 자동생성 되므로 빼고 전송함
      let data = {
        dname : this.dept.dname,
        loc : this.dept.loc
      };
      // insert 요청 함수 호출
      DeptDataService.create(data)
      // 성공하면 then() 결과가 전송됨
      .then(response =>{  
        this.dept.dno = response.data.dno;
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