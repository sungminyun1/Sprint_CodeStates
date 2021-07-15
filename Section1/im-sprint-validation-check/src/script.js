let elInputUsername = document.querySelector('#username');
let elPassword = document.querySelector('#password');
let elPasswordRetype = document.querySelector('#password-retype');

// 아이디 메시지
let elSuccessMessage = document.querySelector('.success-message');
let elFailureMessage = document.querySelector('.failure-message');
let elOnlyEngNum = document.querySelector('.onlyEngNum');

// 비밀번호 메시지
let elSuccessPassword = document.querySelector('.success-password');
let elShortMessage = document.querySelector('.short-message');
let elWeakMessage = document.querySelector('.weak-message');

// 비밀번호 확인 메시지
let elSuccessPasswordRetype = document.querySelector('.success-password-retype');
let elMismatchMessage = document.querySelector('.mismatch-message');

// 회원가입 버튼
let btn = document.querySelector('#btn');
let rgBtn = document.querySelector('.rgBtn');
let deco = document.querySelector('#deco');
// 버튼 활성화
let idTrue = false;
let passwordTrue = false;
let passwordRetypeTrue = false;

//? 아이디 유효성 검사
elInputUsername.onkeyup = function () {
    if(isMoreThan4Length(elInputUsername.value) && onlyNumberAndEnglish(elInputUsername.value)) {
        elSuccessMessage.classList.remove('hide');
        elFailureMessage.classList.add('hide');
        elOnlyEngNum.classList.add('hide');
        idTrue = true;
    } else if(!onlyNumberAndEnglish(elInputUsername.value)) {
        elFailureMessage.classList.add('hide');
        elSuccessMessage.classList.add('hide');
        elOnlyEngNum.classList.remove('hide');
        idTrue = false;
    } else if(!isMoreThan4Length(elInputUsername.value)) {
        elSuccessMessage.classList.add('hide');
        elFailureMessage.classList.remove('hide');
        elOnlyEngNum.classList.add('hide');
        idTrue = false;
    } 
}

//? 비밀번호 유효성 검사
elPassword.onkeyup = function () {
    if(isMoreThan8Length(elPassword.value) && strongPassword(elPassword.value)) {
        elSuccessPassword.classList.remove('hide');
        elShortMessage.classList.add('hide');
        elWeakMessage.classList.add('hide');
        passwordTrue = true;
    } else if(!isMoreThan8Length(elPassword.value)) {
        elSuccessPassword.classList.add('hide');
        elShortMessage.classList.remove('hide');
        elWeakMessage.classList.add('hide');
        passwordTrue = false;
    } else if(!strongPassword(elPassword.value)) {
        elSuccessPassword.classList.add('hide');
        elShortMessage.classList.add('hide');
        elWeakMessage.classList.remove('hide');
        passwordTrue = false;
    } 
}

//? 비밀번호 확인 유효성 검사
elPasswordRetype.onkeyup = function () {
    if(isMatch(elPassword.value, elPasswordRetype.value)) {
        elSuccessPasswordRetype.classList.remove('hide');
        elMismatchMessage.classList.add('hide');
        passwordRetypeTrue = true;
    } else {
        elSuccessPasswordRetype.classList.add('hide');
        elMismatchMessage.classList.remove('hide');
        passwordRetypeTrue = false;
    }
    //? 회원가입 버튼
    if(idTrue && passwordTrue && passwordRetypeTrue) {
        btn.classList.remove('rgBtn');
        deco.classList.add('hide')
    } else {
        btn.classList.add('rgBtn');
        deco.classList.remove('hide');
    }
}

rgBtn.addEventListener('click', function() {
    alert('회원가입이 완료되었습니다!');
    window.location.reload();
})

// btn.onclick = function() {
//     alert('회원가입이 완료되었습니다!');
//     window.location.reload();
// }


//! ###########################  validator function ##########################

function isMoreThan4Length(value) {
    return value.length >= 4;
}

function isMatch(password1, password2) {
    return password1 === password2;
}

function isMoreThan8Length(value) {
    return value.length >= 8;
}

// [유효성 검증 함수]: 영어 또는 숫자만 가능
function onlyNumberAndEnglish(str) {
    return /^[A-Za-z][A-Za-z0-9]*$/.test(str);
  }

// [유효성 검증 함수]: 최소 8자 이상하면서, 알파벳과 숫자 및 특수문자(@$!%*#?&) 는 하나 이상 포함
function strongPassword(str) {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str);
  }