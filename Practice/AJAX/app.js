const uname=document.getElementById("name");
const email=document.getElementById("email");
const gender=document.getElementById("gender");
const rollno=document.getElementById("rollno");
const branch=document.getElementById("branch");

const get=()=>{
    const req=new XMLHttpRequest();
    req.onreadystatechange=function(){
        if(this.status===200 && this.readyState===4){
            const p=document.getElementById("file-data");
            p.innerHTML=this.responseText;
        }
    }
    req.open("GET", 'data.txt', true);
    req.send();
}

const post=()=>{
    const user={
        name: uname.value,
        email:email.value,
        gender: gender.value,
        rollno:rollno.value,
        branch:branch.value
    }

    const req=new XMLHttpRequest();
    req.onreadystatechange=function(){
        localStorage.setItem('name',uname.value);
        localStorage.setItem('email',email.value);
        localStorage.setItem('gender', gender.value);
        localStorage.setItem('rollno', rollno.value),
        localStorage.setItem('branch', branch.value)
        window.location.href="result.html"
    };

    req.open("POST", "http://127.0.0.1:5500/AJAX/index.html", true);
    req.send();
}