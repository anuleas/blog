function validate()
{
  let testvalue,addressvalue,hobbyvalue,gendervalue,passwordvalue,agevalue;
   



    testvalue=document.getElementById("textcheck").value;
    addressvalue=document.getElementById("addresscheckcheck").value;
    
    //gendervalue=document.getElementById("gender").checked;
    gendervalue=radiovalidation();
    agevalue=document.getElementById("age").value;
    passwordvalue=document.getElementById("passswordcheck").value;
    hobbyvalue=chkboxvalidation();
   
    


    if(testvalue=="")
    {
       document.getElementById("validationwrite").innerHTML="Please enter your name";
       document.getElementById("validationwrite").style.display="block";
       return false;
    }
    else if(addressvalue=="")
    {
        document.getElementById("validationwrite").innerHTML="Please enter your address";
        document.getElementById("validationwrite").style.display="block";
        return false;

    }
   else if(hobbyvalue=="")
   {
    
       document.getElementById("validationwrite").innerHTML="Please select atleast one hobby";
        document.getElementById("validationwrite").style.display="block";
        return false;

   }
   else if(gendervalue=="")
   {
    
       document.getElementById("validationwrite").innerHTML="Please select gender";
        document.getElementById("validationwrite").style.display="block";
        return false;

   }
    else if(agevalue=="")
    {
        document.getElementById("validationwrite").innerHTML="Please select age";
        document.getElementById("validationwrite").style.display="block";
        return false;
    }
    else if(passwordvalue=="")
    {
      document.getElementById("validationwrite").innerHTML="Please type password";
        document.getElementById("validationwrite").style.display="block";
        return false;

    }

    else
    {

        document.getElementById("formsubmit").submit();
   
    document.getElementById("validationwrite").style.display="none";
   
    return true;

    
    }



}
function chkboxvalidation()
 {
    var list,index;
    let chkcount=0;
     list = document.getElementsByTagName('input');
      for (index = 0; index < list.length; ++index)
      {
        item = list[index];
      if (item.getAttribute('type') === "checkbox" && item.checked && item.name === "hobbies[]") 
        {
        ++chkcount;
        }
     }
     return chkcount;
   }

     function radiovalidation()
 {
    var list,index;
    let radiocount=0;
     list = document.getElementsByTagName('input');
      for (index = 0; index < list.length; ++index)
      {
        item = list[index];
      if (item.getAttribute('type') === "radio" && item.checked && item.name === "gender") 
        {
        ++radiocount;
        }
     }
     return radiocount;

 }
 