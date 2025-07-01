var a = document.getElementById("japan")
var b = document.getElementById("croacia")
var c = document.getElementById("france")

a.style.transition = "background-image 1s ease-in-out";
b.style.transition = "background-image 1s ease-in-out, background-size 1s ease-in-out";
c.style.transition = "background-image 1s ease-in-out, background-size 1s ease-in-out";


a.addEventListener('mouseover', function(){

    setTimeout(function(){
        a.style.backgroundImage = "url('Assets/sakura.gif')";
    }, 200)
})

a.addEventListener('mouseout', function(){
    
    setTimeout(function(){
        a.style.backgroundImage = '';
    }, 200)

})

b.addEventListener('mouseover', function(){
    setTimeout(function(){
        b.style.backgroundImage = "url('Assets/waves.gif')";
        b.style.backgroundColor = 'white';
        b.style.backgroundSize = "cover";
        b.style.backgroundPosition = "center -350px";
        b.style.backgroundRepeat = 'no-repeat';
    }, 200)
})

b.addEventListener('mouseout', function(){
    setTimeout(function(){
        b.style.backgroundImage = '';
        b.style.backgroundSize = '';
    }, 200)
})

c.addEventListener('mouseover', function(){
    setTimeout(function(){
        c.style.backgroundImage = "url('Assets/paris.gif')";
        c.style.backgroundSize = "cover";
        c.style.backgroundPosition = "center -120px";
        c.style.backgroundRepeat = 'no-repeat';
        c.style.color = 'white';
    },200)
})

c.addEventListener('mouseout', function () {
    setTimeout(function () {
        c.style.backgroundImage = '';
        c.style.color = 'black'
    }, 200);
});