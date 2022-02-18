function validate()
{

    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(username=="admin"&& password=="admin")
    {

        
        window.open('login1.html','_self');

        
    }
    else{

        alert("login failed pls retry")
    }

    


}