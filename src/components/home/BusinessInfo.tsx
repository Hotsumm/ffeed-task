import classes from './BusinessInfo.module.css';

export default function BusinessInfo() {
  return (
    <div className={classes.businessInfo}>
      <div className={classes.bodyFrame}>
        <p>브랜드 가구</p>
        <p>중고거래는 ffeed</p>
        <p>우리에게 진짜 이야기가 더해지는 시간</p>
      </div>
      <div className={classes.infoFrame}>
        <p>상호명 : (주)알파벳에이</p>
        <p>사업자등록번호 : 250-81-02543</p>
        <p>통신판매업신고번호 : 제 2022-서울강남-04773 호</p>
        <p>대표자명 : 박래원</p>
        <p>개인정보보호책임자 : 박래원</p>
        <p>주소 : 서울시 강남구 테헤란로8길 22, 202동 143호</p>
        <p>이메일 : admin@ffeed.me</p>
      </div>
    </div>
  );
}
