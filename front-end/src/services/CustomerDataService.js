// 목적  : axios 로 CRUD를 하는 공통 함수들 정의
import http from "../http-common";


class CustomerDataService {
    //모든 부서 정보 조회 함수
    // dname : 부서명
    // page : 현재페이지
    // size : 페이지당 화면에 보여질 개수
    getAll(email, page, size) {
        // get 방식 통신 요청 -> @GatMapping("/api/customer")
        // 1) 전체 조회
        // 2) 부서명 조회 같이 하는 함수
        return http.get(`/customer?email=${email}&page=${page}&size=${size}`); 
    }

    // 부서 번호로 조회 요청 함수
    // get 방식 통신 요청 -> @GatMapping("/api/customer/{dno}") , @PathVariable
    get(cid) {
        return http.get(`/customer/${cid}`);
    }

    // 부서정보 생성(insert) 요청 함수
    // Post 방식 통신 요청 -> @PostMapping("/api/customer")
    create(data) {
        return http.post("/customer", data);
    }

    // 부서정보 수정(update) 요청 함수
    //  put 방식 통신 요청 -> @PutMapping("/api/customer/{dno}")
    //                       @PathVariable
    update(cid,data) {
        return http.put(`/customer/${cid}`,data);
    }

    // 부서정보 삭제(delete) 요청 함수
    // delete 방식 통신 요청 -> @DeleteMapping("/api/customer/deletion/{dno}")
    //                        ,@PathVariable
    delete(cid) {
        return http.delete(`/customer/deletion/${cid}`);
    }


}

export default new CustomerDataService();