const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

function calculate(n1, operator, n2) {
  let result = 0;
  if(operator==='+') {
    result = parseFloat(n1)+parseFloat(n2)
  } else if(operator==='-') {
    result = parseFloat(n1)-parseFloat(n2)
  } else if(operator==='*') {
    result = parseFloat(n1)*parseFloat(n2)
  } else if(operator==='/') {
    result = parseFloat(n1)/parseFloat(n2)
  }
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  return String(result);
}

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.

  if (target.matches('button')) {
    // 클릭된 HTML 엘리먼트가 button이면
    if (action === 'number') {
      // 그리고 버튼의 클레스가 number이면
      // 아래 코드가 작동됩니다.
      if(firstOperend.textContent==='0') {
        firstOperend.textContent = buttonContent;
        console.log('숫자 ' + buttonContent + ' 버튼');
          } else {secondOperend.textContent = buttonContent
        }

      }
    }
  
    if (action === 'operator') {
      operator.textContent = buttonContent;
      console.log('연산자 ' + buttonContent + ' 버튼');
    }

    if (action === 'decimal') {
      console.log('소수점 버튼');
    }

    if (action === 'clear') {
      firstOperend.textContent = '0';
      operator.textContent = '+';
      secondOperend.textContent = '0';
      calculatedResult.textContent = '0';
      // window.location.reload();
      console.log('초기화 버튼');
    }

    if (action === 'calculate') {
      calculatedResult.textContent = calculate(firstOperend.textContent,operator.textContent,secondOperend.textContent);
      console.log('계산 버튼');
    }
});

const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum, firstRespond;

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.

  if (target.matches('button')) {
    
    if (action === 'number') {
      if(display.textContent ==='0') {
      display.textContent = buttonContent;
    } else if(previousKey === 'operator') {
      display.textContent = buttonContent;
      firstRespond = true;
    } else if(previousKey === 'decimal') {
      display.textContent = display.textContent + buttonContent;
    }
      else {
      display.textContent = display.textContent + buttonContent;
    } previousKey = 'number';
  }
    
    if (action === 'operator') {
      if(firstRespond === true) {
        previousNum = display.textContent;
        display.textContent = calculate(firstNum,operatorForAdvanced,previousNum);
        firstRespond = false;
      }
      operatorForAdvanced = buttonContent;
      previousKey = 'operator'
      firstNum = display.textContent;
    }
    
    if (action === 'decimal') {
      if(previousKey === 'decimal') {
        display.textContent = display.textContent;
    } else{
      if(previousKey === 'number') {
        display.textContent = display.textContent + buttonContent;
        previousKey = 'decimal'
      } else if(display.textContent === '0') {
        display.textContent = '0.';
        previousKey = 'decimal'
      } else {
        display.textContent = display.textContent;  //연산자가 앞에 있을 경우
      }
    }
    }
    
    if (action === 'clear') {
      // firstNum = undefined;
      // operatorForAdvanced = undefined;
      // previousNum = undefined;
      // display.textContent = '0';
      window.location.reload();
      previousKey = 'clear';
    }
    
    if (action === 'calculate') {
      previousNum = display.textContent;
      display.textContent = calculate(firstNum,operatorForAdvanced,previousNum);
      previousKey = 'calculate';
    }
  }

});