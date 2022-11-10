// 목적  : axios 로 CRUD를 하는 공통 함수들 정의
import http from "../http-common";


class DeptDataService {
    //모든 부서 정보 조회 함수
    // dname : 부서명
    // page : 현재페이지
    // size : 페이지당 화면에 보여질 개수
    getAll(dname, page, size) {
        // get 방식 통신 요청 -> @GatMapping("/api/dept")
        // 1) 전체 조회
        // 2) 부서명 조회 같이 하는 함수
        return http.get(`/dept?danme=${dname}&page=${page}&size=${size}`); 
    }

    // 부서 번호로 조회 요청 함수
    // get 방식 통신 요청 -> @GatMapping("/api/dept/{dno}") , @PathVariable
    get(dno) {
        return http.get(`/dept/${dno}`);
    }

    // 부서정보 생성(insert) 요청 함수
    // Post 방식 통신 요청 -> @PostMapping("/api/dept")
    create(data) {
        return http.post("/dept", data);
    }

    // 부서정보 수정(update) 요청 함수
    //  put 방식 통신 요청 -> @PutMapping("/api/dept/{dno}")
    //                       @PathVariable
    update(dno,data) {
        return http.put(`/dept/${dno}`,data);
    }

    // 부서정보 삭제(delete) 요청 함수
    // delete 방식 통신 요청 -> @DeleteMapping("/api/dept/deletion/{dno}")
    //                        ,@PathVariable
    delete(dno) {
        return http.delete(`/dept/deletion/${dno}`);
    }

    // 부서정보 전체 삭제 요청 함수
    // delete 방식 통신 요청 -> @DeleteMapping("/api/dept/all")
    deleteAll() {
        return http.delete("/dept/all");
    }

    // 위에것들은 파라미터 방식
    // 부서명 검색 요청 함수
    // 쿼리 스트링 방식 URL :  ?변수명=값&변수명2=값2...
    // get 방식 통신 요청 -> @GetMapping("/api/dept") , @RequestParam
    // findByDname(dname) {
    //     return http.get(`/dept?dname=${dname}`);
    // }



}

export default new DeptDataService();