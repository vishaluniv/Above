const devices = JSON.parse(localStorage.getItem('devices')) || [];
devices.push({user: 'Vishal', pass: '123'});
devices.push({user: "Max", pass: "456"});
devices.push({user: "John", pass: "321"});
localStorage.setItem('devices', JSON.stringify(devices));
localStorage.href="login.html";
let logi = false;

$('#login').on('click', function () {
   console.log("button lick");
   localStorage.href="login.html";
   const user = $('#user').val();
   const pass = $('#pass').val();
   devices.forEach(function(usr){
    if(usr.user==user && logi == false) {
        if (usr.pass==pass) {
            console.log("successful log");
            document.getElementById("lbl_log").innerText="Successful Login";
            document.getElementById("lbl_log").style.visibility="visible";
            logi = true;
            if (user=="Vishal") {
                location.reload();
                location.href="car1.html";
            }
            else if (user=="Max") {
                location.reload();
                location.href="car2.html";
            }
            else if (user=="John") {
                location.reload();
                location.href="car3.html";
            }
        }
        else{
            document.getElementById("lbl_log").innerText="Wrong Password";
            document.getElementById("lbl_log").style.visibility="visible";
            logi=false;
            
        }
        localStorage.href="login.html";
    }
    else if(logi == false){
        document.getElementById("lbl_log").innerText="Wrong Username";
        document.getElementById("lbl_log").style.visibility="visible";
    }

    localStorage.href="login.html";
    
   });

});


 

