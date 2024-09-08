

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
    // let nameRegex =/^[a-zA-Z0-9]+([._]?[a-zA-Z]+)*$/;
    // let nameerror = document.getElementById('name-error')
    // if(!name){
        
    //     nameerror.innerHTML = 'name is required'
    // }else if(!nameRegex.test(name)){
    //     nameerror.innerHTML = "invalid name"
    // }
    // let emailRegex = /^[a-zA-Z0-9_-]+@[a-zA-Z]+\.[a-zA-Z]{3,}$/;
    // //anittanelson40@gmail.com


    // let emailerror =document.getElementById('email-error')
    // if(!email){
    //     emailerror.innerHTML = ' email is required'
    // }else if(!emailRegex.test(email)){
    //     emailerror.innerHTML = "Invalid email";
    // }


    // let passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    // let passworderror = document.getElementById('password-error')
    // if(!password){
    //     passworderror.innerHTML = 'password is required'
    // }else if(!passwordRegexp.test(password)){
    //     passworderror.innerHTML = "Invalid password"
    // }

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

async function Data(){
    try {
        const view = await fetch ('/submit',{
            method :'GET',
    
        })
        const package = await view.json();
        console.log("package : ",package);
        const anitta = document.getElementById('tab');
        let row=''
       for(i=0;i<package.length;i++){
            
        row +=`
            <div class="gap">
            <tr class="shadow mb-5 bg-body rounded ">
            <td class="p-4"><i class="fa fa-user-circle" style="font-size:40px;"></i></td>
            <td class="p-4">${package._id}</td>
            <td class="p-4">${package.name}</td>
            <td class="p-4">${package.email}</td>
            <td class="p-4">${package.password}</td>
            <td class="p-4" ><i class="fa fa-eye" style="font-size:30px" onClick ="handleClick('${package._id}')"></td>
            <td class="p-4"><i class="fa fa-trash-o" style="font-size:30px"onClick ="deleteusers('${package._id}')">
            </tr>
            </div>
        `
        anitta.innerHTML=row;
       }
        // table.appendChild(row)
      
        
    } catch (error) {
        console.log("error : ",error);
    }

}
Data()
function handleClick(id) {
    console.log("id reached.... : ", id);
    window.location=`view-detailspage.html?id=${id}`;
}

async function viewusers() {
    let params=new URLSearchParams(window.location.search)
    let id = params.get('id');
    console.log('id',id)
    

    try {
        let response = await fetch(`/submits?id=${id}`);
        // console.log("response", response);
        let userdata = await response.json();
        console.log("userdata", userdata);

        let single = document.getElementById('single-container')
        let rows=`
            <div>${userdata.name}</div>
            <div>${userdata.email}</div>
            <div>${userdata.password}</div>
        `
        single.innerHTML=rows


    } catch (error) {
        console.log("error", error);
    }
}
//  async function deleteusers(){
//     try {
//         const response = await fetch(`/submits?id=${id}`, {
//             method: 'DELETE',
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         await response.json();

//         Data();
//     } catch (error) {
//         console.error('Delete error:', error);
//     }
// }



