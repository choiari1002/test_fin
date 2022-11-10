<template>
  <!-- EmpDetail.vue -->
  <div>
    <!-- 수정 양식 폼 시작 -->
    <div v-if="currentFaq" class="edit-form">
      <h4>Faq</h4>
      <form>
        <div class="form-group">
          <label for="no">No</label>
          <input
            type="text"
            class="form-control"
            id="no"
            v-model="currentFaq.no"
          />
        </div>
        <div class="mt-3 form-group">
          <label for="title">title</label>
          <input
            type="text"
            class="form-control"
            id="title"
            v-model="currentFaq.title"
          />
        </div>
        <div class="mt-3 form-group">
          <label for="content">Content</label>
          <input
            type="text"
            class="form-control"
            id="content"
            v-model="currentFaq.content"
          />
        </div>
      </form>

      <button class="mt-3 btn btn-danger" @click="deleteFaq">Delete</button>

      <button
        type="submit"
        class="ms-3 mt-3 btn btn-success"
        @click="updateFaq"
      >
        Update
      </button>
      <p>{{ message }}</p>
    </div>
    <!-- 수정 양식 폼 끝 -->
    <div v-else>
      <br />
      <p>Please click on a Faq…</p>
    </div>
  </div>
</template>

<script>
import FaqDataService from "../../services/FaqDataService";


export default {
  data() {
    return {
      message : "",
      currentFaq : null
    }
  },
  methods: {
    getFaq(no) {
    // axios 공통 함수 호출
      FaqDataService.get(no)
      .then(response => {
        // springboot 결과를 리턴함(부서 객체)
        this.currentFaq = response.data;
        // 콘솔 로그 출력
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      })
    },
    // 정보를 수정 요청하는 함수
    updateFaq() {
      // axios 공통함수 호출
      FaqDataService.update(this.currentFaq.no,this.currentFaq)
      .then(response => {
        // 콘솔 로그 출력
        console.log(response.data);
        this.message = "The Faq was updated successfully!"
      })
      .catch(e => {
        console.log(e);
      })
    },
    deleteFaq() {
      FaqDataService.delete(this.$route.params.no)
      .then(response => {
        // 콘솔 로그 출력
        console.log(response.data);
        this.$router.push("/faq");

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
    this.getFaq(this.$route.params.no);
  }

};
</script>

<style>

.edit-form{
  max-width: 300px;
  margin: auto;
}
</style>