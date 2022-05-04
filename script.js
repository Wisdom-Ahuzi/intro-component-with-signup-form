const submit = document.querySelector('.submission')
const one1 = document.querySelector('#one-1');
const one2 = document.querySelector('#one-2');
const two1 = document.querySelector('#two-1');
const two2 = document.querySelector('#two-2');
const three1 = document.querySelector('#three-1');
const three2 = document.querySelector('#three-2');
const four1 = document.querySelector('#four-1');
const four2 = document.querySelector('#four-2');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
submit.addEventListener('submit', (e)=>{
    e.preventDefault();
    let firstName = one.value;
    if (firstName === ''){
        one1.style.display = 'block';
        one2.style.display = 'block';
        one.style.outlineColor = 'hsl(0, 100%, 74%)';
        one.style.border = ' 2px solid hsl(0, 100%, 74%)';
    }else{
        one1.style.display = 'none'; 
        one2.style.display = 'none'; 
        one.style.outlineColor = 'rgba(209, 201, 201, 0.83)';
        one.style.border = ' .001px solid rgba(209, 201, 201, 0.83) '; 
    };
    let lastName = two.value;
    if (lastName === '') {
        two1.style.display = 'block';
        two2.style.display = 'block';
        two.style.outlineColor = 'hsl(0, 100%, 74%)';
        two.style.border = ' 2px solid hsl(0, 100%, 74%)';
    }else{
        two1.style.display = 'none'; 
        two2.style.display = 'none'; 
        two.style.outlineColor = 'rgba(209, 201, 201, 0.83)';
        two.style.border = ' .001px solid rgba(209, 201, 201, 0.83) '; 
    };
    let mail = three.value;
    const standard = mail.includes('@');
    const standarde = mail.includes('com');
    const standarder = mail.includes('.');
    const stand = standard && standarde && standarder;
    if (stand) {
        three1.style.display = 'none'; 
        three2.style.display = 'none';
        three.style.outlineColor = 'rgba(209, 201, 201, 0.83)';
        three.style.border = ' .001px solid rgba(209, 201, 201, 0.83) '; 
    }else{
        three1.style.display = 'block'; 
        three2.style.display = 'block';
        three.style.outlineColor = 'hsl(0, 100%, 74%)';
        three.style.border = ' 2px solid hsl(0, 100%, 74%)';
    };
    let password = four.value;
    if (password === '') {
        four1.style.display = 'block';
        four2.style.display = 'block';
        four.style.outlineColor = 'hsl(0, 100%, 74%)';
        four.style.border = ' 2px solid hsl(0, 100%, 74%)';
    }else{
        four1.style.display = 'none'; 
        four2.style.display = 'none';
        four.style.outlineColor = 'rgba(209, 201, 201, 0.83)';
        four.style.border = ' .001px solid rgba(209, 201, 201, 0.83) '; 
    };
});