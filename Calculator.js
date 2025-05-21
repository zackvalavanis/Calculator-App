function add(a, b) { 
  return a + b
}

function subtract(a, b) { 
  return a - b 
}

function multiply(a, b) { 
  return a * b
}

function divide(a, b) { 
  return a / b
}

function operate(o, a, b) { 
  if(o === '/'){ 
    return divide(a, b)
  } else if (o === '+'){ 
    return add(a, b)
  } else if (o === '-'){ 
    return subtract(a, b)
  } else if(o === '*'){ 
    return multiply(a, b)
  } else { 
    return null
  }
}
  document.addEventListener('DOMContentLoaded', function () { 

  let currentInput = '';
  let firstOperand = null;
  let secondOperand = null;
  let currentOperator = null;
  let shouldResetScreen = false;

  
  const buttonValues = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', 'C', '=', '+'
  ]
  
  const mainDiv = document.querySelector('.container-all');

  const screenDiv = document.createElement('div')
  screenDiv.className='screen'
  
  const div1 = document.createElement('div');
  div1.className = 'main-calc-div';
  
  mainDiv.append(screenDiv, div1);

  //here are all the buttons, I will need divs & buttons inside them

  buttonValues.forEach(value => { 
    const btn = document.createElement('button')
    btn.textContent = value
    btn.className='calc-btn'
    div1.appendChild(btn)

    btn.addEventListener('click', () => { 
      const value = btn.textContent

      if(!isNaN(value)) { 
        if(shouldResetScreen) { 
          currentInput = value;
          shouldResetScreen = false;
        } else { 
          currentInput += value
        }
        screenDiv.textContent = currentInput
      } else if(value === 'C') { 
        currentInput = '';
        firstOperand = null;
        secondOperand = null;
        currentOperator = null;
        screenDiv.textContent = '';
      } else if (value === '='){ 
        if(firstOperand !== null && currentOperator !== null && currentInput !== '') { 
          secondOperand = parseFloat(currentInput);
          const result = operate(currentOperator, firstOperand, secondOperand)
          screenDiv.textContent = result.toFixed(2)
          currentInput = result.toString()
          firstOperand = result;
          currentOperator = null
          shouldResetScreen = true
        }
      } else { 
        if(currentInput !== ''){
          firstOperand = parseFloat(currentInput)
          currentOperator = value
          shouldResetScreen = true
          screenDiv.textContent = currentInput + ' ' + currentOperator
        }
      }
    })
  })


})

















