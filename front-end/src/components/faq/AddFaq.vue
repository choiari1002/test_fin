<template>
  <div class="submit-form">
    <!-- 새 양식 폼 시작 -->
    <!-- 부서명 -->
    <div v-if="!submitted">
      

      <!-- 제목 정보 -->
      <div class="form-group">
        <label for="title">Title</label>
        <input
          class="form-control"
          id="title"
          required
          v-model="faq.title"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="content">Content</label>
        <input
          class="form-control"
          id="content"
          required
          v-model="faq.content"
          name="content"
        />
      </div>
      <button @click="saveFaq" class="btn btn-success">Submit</button>
    </div>
    <!-- 새 양식 폼 끝 -->

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newFaq">Add</button>
    </div>

  </div>
</template>

<script>
import faqDataService from "../../services/FaqDataService";


export default {
  data() {
    return {
      faq : {
        no : null,
        title : "",
        content : ""
    
      },
      // submit 버튼을 클릭하면 true 가 되고 , You submitted successfully! 화면에 출력됨
      submitted : false
    }
  },
  methods: {
    newFaq() {
      // 새 양식 다시 보여주기 함수, 변수 초기화
      this.submitted = false;
      this.faq = {}
    },
    saveFaq() {
      // 임시 격체 변수 -> springboot로 전송
      // 사원번호는 (eno) 자동생성 되므로 빼고 전송함
      let data = {
        title : this.faq.title,
        content : this.faq.content
      };
      // insert 요청 함수 호출
      faqDataService.create(data)
      // 성공하면 then() 결과가 전송됨
      .then(response =>{  
        this.faq.no = response.data.no;
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