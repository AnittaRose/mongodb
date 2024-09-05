async function adduser(event){
    event.preventDefault();
    console.log("reached here")

    let name = document.getElementById('name').value;
    console.log('name',name);

    let email  = document.getElementById('email').value;
    console.log('email',email);

    let password = document.getElementById('password').value;
    console.log('passowrd: ',password)

    //validation
    let nameRegex =/^[a-zA-Z0-9]+([._]?[a-zA-Z]+)*$/;
    let nameerror = document.getElementById('name-error')
    if(!name){
        
        nameerror.innerHTML = 'name is required'
    }else if(!nameRegex.test(name)){
        nameerror.innerHTML = "invalid name"
    }
    let emailRegex = /^[a-zA-Z0-9_-]+@[a-zA-Z]+\.[a-zA-Z]{3,}$/;
    //anittanelson40@gmail.com


    let emailerror =document.getElementById('email-error')
    if(!email){
        emailerror.innerHTML = ' email is required'
    }else if(!emailRegex.test(email)){
        emailerror.innerHTML = "Invalid email";
    }


    let passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let passworderror = document.getElementById('password-error')
    if(!password){
        passworderror.innerHTML = 'password is required'
    }else if(!passwordRegexp.test(password)){
        passworderror.innerHTML = "Invalid password"
    }

    let data =  {
        name,
        email,
        password,
    }
    console.log('data',data);
    
    let json_data = JSON.stringify(data);
    console.log('json_data',json_data);

    let response = await fetch('/submit',{
        method :'POST',
        headers : {
            'Content-Type':'application/json',
        },
        body : json_data,
    });
    console.log('response',response)
   

}