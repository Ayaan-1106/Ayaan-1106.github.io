"use strict";(self["webpackChunkvue_cli"]=self["webpackChunkvue_cli"]||[]).push([[594],{7275:function(e,t,s){s.r(t),s.d(t,{default:function(){return F}});var n=s(6768);const o={class:"my-page"};function a(e,t,s,a,r,i){const l=(0,n.g2)("UserProfile"),u=(0,n.g2)("StudyList");return(0,n.uX)(),(0,n.CE)("div",o,[(0,n.bF)(l,{user:r.user},null,8,["user"]),(0,n.bF)(u,{studies:r.activeStudies,title:"참여중인 스터디 목록",onSelectStudy:i.selectStudy,onGoToStudy:i.goToStudy,"selected-study":r.selectedStudy,showRateButton:!1},null,8,["studies","onSelectStudy","onGoToStudy","selected-study"]),(0,n.bF)(u,{studies:r.completedStudies,title:"종료된 스터디 목록",onSelectStudy:i.selectStudy,onGoToStudy:i.goToStudy,"selected-study":r.selectedStudy,showRateButton:!0},null,8,["studies","onSelectStudy","onGoToStudy","selected-study"])])}s(4114);var r=s(4232);const i={class:"user-profile section"};function l(e,t,s,o,a,l){return(0,n.uX)(),(0,n.CE)("div",i,[(0,n.Lk)("h2",null,(0,r.v_)(a.username)+"의 정보",1),(0,n.Lk)("p",null,[(0,n.eW)("나이: "),(0,n.Lk)("strong",null,(0,r.v_)(a.age),1)]),(0,n.Lk)("p",null,[(0,n.eW)("email: "),(0,n.Lk)("strong",null,(0,r.v_)(a.email),1)]),(0,n.Lk)("p",null,[(0,n.eW)("Rating: "),(0,n.Lk)("strong",null,(0,r.v_)(a.rating),1)])])}var u={name:"UserProfile",data(){return{username:"",rating:3.3,age:10,email:""}},created(){this.getUserInfo()},methods:{getUserInfo(){const e=this.$route.params.userId;this.$axios.get(this.$serverUrl+`/api/userinfo/${e}`).then((e=>{this.username=e.data.username,this.rating=e.data.rating,this.age=e.data.age,this.email=e.data.email})).catch((e=>{console.log(e)}))}}},d=s(1241);const c=(0,d.A)(u,[["render",l],["__scopeId","data-v-3c653cc1"]]);var m=c;const h={class:"study-list section"},g=["onClick"],y=["onClick"],S={key:0,class:"member-list-box"};function b(e,t,s,o,a,i){const l=(0,n.g2)("StudyMemberList");return(0,n.uX)(),(0,n.CE)("div",h,[(0,n.Lk)("h4",null,(0,r.v_)(s.title),1),(0,n.Lk)("ul",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(s.studies,(e=>((0,n.uX)(),(0,n.CE)("li",{key:e.id,class:(0,r.C4)(["study-item",{selected:e.id===s.selectedStudy?.id}])},[(0,n.Lk)("div",{onClick:t=>i.selectStudy(e)},(0,r.v_)(e.name),9,g),(0,n.Lk)("button",{onClick:t=>i.goToStudy(e.id),class:"study-button"},"게시글로 이동",8,y),e.id===s.selectedStudy?.id?((0,n.uX)(),(0,n.CE)("div",S,[(0,n.bF)(l,{members:e.members,showRateButton:s.showRateButton,onSelectMember:i.selectMember},null,8,["members","showRateButton","onSelectMember"])])):(0,n.Q3)("",!0)],2)))),128))])])}var p=s(5130);const v=e=>((0,n.Qi)("data-v-4482fc46"),e=e(),(0,n.jt)(),e),k={class:"study-member-list"},M=["onClick"],C=["onClick"],f={key:0,class:"modal"},L={class:"modal-content"},I=v((()=>(0,n.Lk)("h2",null,"회원 평가",-1)));function $(e,t,s,o,a,i){return(0,n.uX)(),(0,n.CE)("div",k,[(0,n.Lk)("ul",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(s.members,(e=>((0,n.uX)(),(0,n.CE)("li",{key:e.id,class:"member-item"},[(0,n.Lk)("div",{onClick:t=>i.selectMember(e)},(0,r.v_)(e.name),9,M),s.showRateButton?((0,n.uX)(),(0,n.CE)("button",{key:0,onClick:t=>i.openRatingModal(e.id),class:"rate-button"},"평가하기",8,C)):(0,n.Q3)("",!0)])))),128))]),a.showRatingModal?((0,n.uX)(),(0,n.CE)("div",f,[(0,n.Lk)("div",L,[(0,n.Lk)("span",{class:"close",onClick:t[0]||(t[0]=(...e)=>i.closeRatingModal&&i.closeRatingModal(...e))},"×"),I,(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>a.ratingScore=e),type:"number",min:"0",max:"5",placeholder:"점수 (0-5)",onInput:t[2]||(t[2]=(...e)=>i.validateScore&&i.validateScore(...e)),class:"input-field"},null,544),[[p.Jo,a.ratingScore,void 0,{number:!0}]]),(0,n.bo)((0,n.Lk)("textarea",{"onUpdate:modelValue":t[3]||(t[3]=e=>a.ratingContent=e),placeholder:"평가 내용을 입력하세요",class:"input-field"},null,512),[[p.Jo,a.ratingContent]]),(0,n.Lk)("button",{onClick:t[4]||(t[4]=(...e)=>i.rateMember&&i.rateMember(...e)),class:"submit-button"},"제출")])])):(0,n.Q3)("",!0)])}var R=s(8355),_={name:"StudyMemberList",props:{members:{type:Array,required:!0},showRateButton:{type:Boolean,default:!0}},data(){return{showRatingModal:!1,ratingMemberId:null,ratingScore:"",ratingContent:""}},methods:{selectMember(e){this.$emit("select-member",e)},openRatingModal(e){this.ratingMemberId=e,this.showRatingModal=!0},closeRatingModal(){this.showRatingModal=!1,this.ratingScore="",this.ratingContent=""},validateScore(){this.ratingScore<0?this.ratingScore=0:this.ratingScore>5&&(this.ratingScore=5)},rateMember(){if(this.ratingScore<0||this.ratingScore>5)return void alert("점수는 0과 5 사이여야 합니다.");const e=this.$route.params.studyId,t=localStorage.getItem("accessToken"),s={userId:this.ratingMemberId,studyId:e,score:this.ratingScore,content:this.ratingContent};R.A.post(`${this.$serverUrl}/api/user-ratings`,s,{headers:{Authorization:`Bearer ${t}`}}).then((e=>{console.log(e),this.closeRatingModal()})).catch((e=>{console.error("평가 저장 에러 발생:",e)}))}}};const w=(0,d.A)(_,[["render",$],["__scopeId","data-v-4482fc46"]]);var U=w,B={name:"StudyList",components:{StudyMemberList:U},props:{studies:{type:Array,required:!0},title:{type:String,required:!0},selectedStudy:{type:Object,default:null},showRateButton:{type:Boolean,default:!0}},methods:{selectStudy(e){this.$emit("select-study",e)},goToStudy(e){this.$emit("go-to-study",e)},selectMember(e){this.$emit("select-member",e)}}};const E=(0,d.A)(B,[["render",b],["__scopeId","data-v-7a7e1245"]]);var X=E,T={name:"MyPage",components:{UserProfile:m,StudyList:X,StudyMemberList:U},data(){return{user:{id:this.$route.params.userId,name:this.$store.state.userData.username,rating:4.5},activeStudies:[],completedStudies:[],selectedStudy:null,selectedMember:null}},mounted(){this.getUserStudyInfo()},methods:{selectStudy(e){this.selectedStudy=e,this.selectedMember=null},selectMember(e){this.selectedMember=e},goToStudy(e){this.$router.push({path:`/board/${e}`})},getUserStudyInfo(){const e=this.$route.params.userId;this.$axios.get(this.$serverUrl+`/api/userinfo/${e}`).then((e=>{console.log(e),this.activeStudies=[{id:1,name:"예제 스터디 1",available:!0,members:[{id:"user2",name:"임시사용자2"},{id:"user3",name:"임시사용자3"}]}],this.completedStudies=[{id:2,name:"예제 스터디 2",available:!1,members:[{id:"user4",name:"임시사용자4"},{id:"user5",name:"임시사용자5"}]}]})).catch((e=>{console.log(e)}))}}};const A=(0,d.A)(T,[["render",a],["__scopeId","data-v-22a2c80a"]]);var F=A}}]);
//# sourceMappingURL=about.f766dbb8.js.map