document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("form1");
  const makeButton = document.getElementById("make");

  makeButton.addEventListener("click", function(event) {
    event.preventDefault(); // 기본 동작(페이지 새로고침) 방지

    // 사용자가 입력한 정보 가져오기
    const userName = document.getElementById("user_name").value;
    const userID = document.getElementById("id").value;
    const password = document.getElementById("password").value;
    const rptPassword = document.getElementById("rptpass").value;

    // 비밀번호 확인
    if (password !== rptPassword) {
      alert("비밀번호가 일치하지 않습니다. 다시 확인해주세요.");
      return; // 함수 종료
    }

    alert("회원가입이 완료되었습니다.");

    // 입력 필드 초기화
    form.reset();
  });
});