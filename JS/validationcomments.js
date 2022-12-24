var express=require('express');
const mongoose=require('mongoose');
  const Person=require('../model/personschema');
    const topicuser=require('../model/topicschms');
  const Articleuser=require('../model/articleschema')



function validation(id,typeuser,email)
{
   
  


     const email1=email;
    const id1=id
    const typeuser1=typeuser;
    Articleuser.find({_id:id1},function(err, response){
        const data =response;
        console.log(data);
       
        if(typeruser1 == "premiumuser")
        {
            document.getElementById("commentlabel").style.display="block";
            document.getElementById("comments").style.display="block";
            document.getElementById("ratinglabel").style.display="block";
            document.getElementById("rating").style.display="block";
            return true;

            
        }
        if(typeruser1 == "basicuser" && email1==data[0].email)
        {
            document.getElementById("commentlabel").style.display="block";
            document.getElementById("comments").style.display="block";
            return true;

        }

    });
   
}