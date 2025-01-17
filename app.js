let con = document.querySelector('#container');
let loveIcon = document.querySelector('i');

con.addEventListener('dblclick' , function() {
    loveIcon.style.transform = 'translate(-50% , -50%) scale(1)';
    loveIcon.style.opacity = 0.8;

    setTimeout(() => {
        loveIcon.style.opacity = 0;
    },1000);

    setTimeout(() => {
        loveIcon.style.transform = 'translate(-50% , -50%) scale(0)';
    },2000);
});
        
    
    


