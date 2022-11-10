import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
 // 첫페이지 == 전체 목록페이지
 {
  path: '/',
  alias : '/dept', // /dept이렇게 접속해도 됨
  name: 'dept',
  component:  () => import( '../components/dept/DeptList.vue')
},
// 부서 추가 페이지
{
  path: '/add/dept',
  name: 'add-dept',
  component: () => import( '../components/dept/AddDept.vue')
},
// 부서 상세 페이지
{
  path: '/dept/:dno', // 매개변수로 받아와서 입력됨
  name: 'dept-detail',
  component: () => import( '../components/dept/DeptDetail.vue')
},

{
  path: '/emp',
  name: 'emp',
  component:  () => import( '../components/emp/EmpList.vue')
},
{
  path: '/add/emp',
  name: 'add-emp',
  component:  () => import( '../components/emp/AddEmp.vue')
},
{
  path: '/emp/:eno',
  name: 'emp-detali',
  component:  () => import( '../components/emp/EmpDetail.vue')
},


{
  path: '/faq',
  name: 'faq',
  component:  () => import( '../components/faq/FaqList.vue')
},
{
  path: '/add/faq',
  name: 'add-faq',
  component:  () => import( '../components/faq/AddFaq.vue')
},
{
  path: '/faq/:no',
  name: 'faq-detali',
  component:  () => import( '../components/faq/FaqDetail.vue')
},

{
  path: '/customer',
  name: 'customer',
  component:  () => import( '../components/customer/CustomerList.vue')
},
{
  path: '/add/customer',
  name: 'add-customer',
  component:  () => import( '../components/customer/AddCustomer.vue')
},
{
  path: '/customer/:cid',
  name: 'customer-detali',
  component:  () => import( '../components/customer/CustomerDetail.vue')
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
