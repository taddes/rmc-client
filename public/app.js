// Standard Input Fields
const navColor = document.querySelector('#nav-color');
const navFontColor = document.querySelector('#nav-font-color');
const navBtnColor = document.querySelector('#nav-btn-color');
const navBtnHoverColor = document.querySelector('#nav-btn-hover-color');
const btnColor = document.querySelector('#btn-color');
const btnHoverColor = document.querySelector('#btn-hover-color');
const btnFontColor = document.querySelector('#btn-font-color');
const btnHoverFontColor = document.querySelector('#btn-hover-font-color');
const panelColor = document.querySelector('#panel-color');
const logo = document.querySelector('#logo');
const submitBtn = document.querySelector('#submit-btn');

const params = {}
// Function to determine if valid hex code
isHexColor = (hexCode, element) => {
  console.log(element)
  let result = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hexCode);

  if (!result) {
    console.log('INVALID');
    console.log(element.target.value)
    // let field = document.querySelector(`#${element}`).textContent
    element.target.value = 'Invalid Hex code'
    document.querySelector('#' + element.target.id).style.backgroundColor = 'red';
  } else {
    console.log('valid');
    console.log(element)
    displayColorSample(hexCode, element)
    // displayColorSample(hexCode);
  }
}


// Function to generate sample color on adjacent icon
displayColorSample = (color, element) => {
  console.log(color)
  console.log(element)
  let icon = '#' + element.target.id + '-icon';
  console.log(icon)
  document.querySelector(icon).style.color = color;
}

// navColor
navColor.addEventListener('click', (e) => {
  e.target.value = '#';
  navColor.style.backgroundColor = 'white'
});

navColor.addEventListener('blur', (e) => {
  console.log(e)
  let hexCode = e.target.value.trim();
  let element = e
  isHexColor(hexCode, element);
});

// navFontColor
navFontColor.addEventListener('click', (e) => {
  e.target.value = '#';
  navFontColor.style.backgroundColor = 'white'
});

navFontColor.addEventListener('blur', (e) => {
  console.log(e)
  let hexCode = e.target.value.trim();
  let element = e
  isHexColor(hexCode, element);
});

// navBtnColor
navBtnColor.addEventListener('click', (e) => {
  e.target.value = '#';
  navBtnColor.style.backgroundColor = 'white'
});

navBtnColor.addEventListener('blur', (e) => {
  console.log(e)
  let hexCode = e.target.value.trim();
  let element = e
  isHexColor(hexCode, element);
});

// navBtnHoverColor
navBtnHoverColor.addEventListener('click', (e) => {
  e.target.value = '#';
  navBtnHoverColor.style.backgroundColor = 'white'
});

navBtnHoverColor.addEventListener('blur', (e) => {
  console.log(e)
  let hexCode = e.target.value.trim();
  let element = e
  isHexColor(hexCode, element);
});

// btnColor
btnColor.addEventListener('click', (e) => {
  e.target.value = '#';
  btnColor.style.backgroundColor = 'white'
});

btnColor.addEventListener('blur', (e) => {
  console.log(e)
  let hexCode = e.target.value.trim();
  let element = e
  isHexColor(hexCode, element);
});
// btnHoverColor
btnHoverColor.addEventListener('click', (e) => {
  e.target.value = '#';
  btnHoverColor.style.backgroundColor = 'white'
});

btnHoverColor.addEventListener('blur', (e) => {
  console.log(e)
  let hexCode = e.target.value.trim();
  let element = e
  isHexColor(hexCode, element);
});

// btnFontColor
btnFontColor.addEventListener('click', (e) => {
  e.target.value = '#';
  btnFontColor.style.backgroundColor = 'white'
});

btnFontColor.addEventListener('blur', (e) => {
  console.log(e)
  let hexCode = e.target.value.trim();
  let element = e
  isHexColor(hexCode, element);
});

// btnHoverFontColor
btnHoverFontColor.addEventListener('click', (e) => {
  e.target.value = '#';
  btnHoverFontColor.style.backgroundColor = 'white'
});

btnHoverFontColor.addEventListener('blur', (e) => {
  console.log(e)
  let hexCode = e.target.value.trim();
  let element = e
  isHexColor(hexCode, element);
});

// panelColor
panelColor.addEventListener('click', (e) => {
  e.target.value = '#';
  panelColor.style.backgroundColor = 'white'
});

panelColor.addEventListener('blur', (e) => {
  console.log(e)
  let hexCode = e.target.value.trim();
  let element = e
  isHexColor(hexCode, element);
});


submit = () => {
  document.getElementById('form').submit();
}


// Test click handler
// document.addEventListener('click', (e) => {
//   console.log(e.target);
// })

// Submit 
// document.addEventListener('click', (e) => {
//   e.target.value = '#';
//   e.target.style.backgroundColor = 'white'
// })

// document.addEventListener('blur', (e) => {
//   console.log('fuq')
//   console.log(e)
//   let hexCode = e.target.value.trim();
//   console.log(hexCode)
//   let element = e.target
//   console.log(element)
//   console.log('fuq')
//   isHexColor(hexCode, element);
// });