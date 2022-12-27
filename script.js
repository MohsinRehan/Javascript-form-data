function submitform(){
    let firstname =document.getElementById('firs-name').value;
    let lastname = document.getElementById('last-name').value;
    let fathername = document.getElementById('father-name').value;
    let agename = document.getElementById('age').value;
    let imageupload= document.getElementById('image-upload').files[0];
    
    

    var tbody =document.getElementById('datafetch');

    tbody.innerHTML  += 

    `<tr>
        <td>${firstname}</td>
        <td>${lastname}</td>    
        <td>${fathername}</td>
        <td>${agename}</td>
        <td>
            <img src="${URL.createObjectURL(imageupload)}"/>
        </td>
          

    </tr>`

    

    if(!firstname){
        
        alert("First Name must be filled out");
        return false;
    }
    else if(!lastname){
        alert("Last Name must be filled out");
        return false;
    }
    else if(!fathername){
        alert("Father Name must be filled out");
        return false;
    }
    else if(!agename){
        alert("Age must be filled out");
        return false;
    }
    else if(imageupload == "" || imageupload == null){
        alert("Please upload the image");
        return false;
    }
    else{
        alert("Thank You")
    }
}