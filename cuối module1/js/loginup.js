
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});
function singupUser(e) {
    e.preventDefault();
    let nameUp = document.getElementById("nameSingup").value;
    let emailUp = document.getElementById("emailSingup").value;
    let passwordUp = document.getElementById("passwordSingup").value;
    let getLocal = JSON.parse(localStorage.getItem("saveUp"));

    if (getLocal == null) {
        getLocal = [];
    }
    

    let flagExist = true;
    for (let i = 0; i < getLocal.length; i++) {
        if (getLocal[i].emailUp == emailUp) {
            flagExist = false;
            break;
        }
    }
    //let objSignUp = {
     //   nameUp: nameUp,
     //   emailUp: emailUp,
    //    passwordUp: passwordUp,
   // }
    //getLocal.push(objSignUp);
    
    let flagNull = true; 
    if (emailUp == "") {
        flagNull = false;
    }
    if (!flagExist) {
        document.getElementById("thongbao").innerHTML = "Email already exists"
    } else if (!flagNull) {
        document.getElementById("thongbao").innerHTML =  "Please enter your email"
    } else {
        let newObjSignUp = {
            nameUp: nameUp,
            emailUp: emailUp,
            passwordUp: passwordUp,
        }
        getLocal.push(newObjSignUp);
        localStorage.setItem("saveUp", JSON.stringify(getLocal));
        document.getElementById("thongbao").innerHTML = "Sign Up Success"
        window.location.href = "dangki.html"
    }

}














function signInUser(event) {
    event.preventDefault();
    let dataLogin = JSON.parse(localStorage.getItem("saveUp"));
    if (dataLogin == null) {
        dataLogin = [];
    }
    let emailSingIn = document.getElementById("emailSignIn").value;
    let passwordSingIn = document.getElementById("passwordSignIn").value;
    let flag = true;
    for (let i = 0; i < dataLogin.length; i++) {
        if (dataLogin[i].emailUp == emailSingIn && dataLogin[i].passwordUp == passwordSingIn) {
            flag = false;
            break;
        } else {
            flag = true;
        }

    }
    let flagdangnhap;
    for (let i = 0 ;i<dataLogin.length ; i++){
        if (!flag) {
            flagdangnhap=dataLogin[i].nameUp
            localStorage.setItem("flagdangnhap",flagdangnhap);
            window.location.href = "index.html";
        } else {
            document.getElementById("thongbaolognin").innerHTML ="Account does not exist"
        }
    }    
}

