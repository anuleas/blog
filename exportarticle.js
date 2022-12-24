var express=require('express');
var router=express.Router();
const Articleuser=require('./model/articleschema')

const mongoose = require('mongoose');
var router=express.Router();
const topicuser=require('./model/topicschms')


 //topics

 




//aftermanagearticle click -get all the post of that user and add  article option also

router.get('/managearticle', function(req, res){
   /* if(req.session.user)
    {

        Articleuser.find({email:req.session.user.email},function(err, response){
      
            //res.json(response);
            const data=response;
            console.log(4);
            console.log("corresponding email"+ data);
            

                res.render('usereditdeleteaddarticle',{article:data,user:req.session.user.email});
           
               
            });
        //console.log("session" + req.session.user);

        

    //res.render('usereditdeleteaddarticle',{user:req.session.user.email});
    }*/

    //get article from corresponding email
    if(req.session.user)
    {

        Articleuser.find({email:req.session.user.email},function(err, response){
            topicuser.find(function(err2, response2){
              //res.json(response);
              const data=response;
              const topic_data=response2;
              console.log(4);
              console.log("corresponding email"+ data);
              console.log("correspondingtopic"+ topic_data);
              res.render('usereditdeleteaddarticle',{article:data,topic:topic_data,user:req.session.user.email});
            });   
        });
    }
    else
    {
        flaglogin=1;
    res.redirect('/login');
    }
 });







//after click add article get one form to add article
router.get('/addarticle', function(req, res){
    
     
    
      if(req.session.user)
      {
        topicuser.find(function(err, response){
         const data=response;
         console.log(data);
          console.log("session" + req.session.user); 
          res.render('useraddarticleform',{data1:data});
        });
      }
      else
      {
          flaglogin=1;
         res.redirect('/login');
      }
  
   });
  

//save the article in db

 router.post('/articlepost', function(req, res)
 {
    
    var articleInfo = req.body; //Get the parsed information
    console.log(articleInfo);

    var email=req.session.user.email;
    
    if(!articleInfo.article ||!articleInfo.description ||!articleInfo.subject || !articleInfo.title)
    {
        console.log(1);
       res.render('useraddarticleform');
    } 
    else{
    
          var  current_date=Date.now();
            var newarticleinfo = new Articleuser({
            email:email,
            article:articleInfo.article,
            title:articleInfo.title,
            subject:articleInfo.subject,
            description:articleInfo.description,
            current_date:current_date,
            approved:0,
            rating:0,
            
           });
     
         
            newarticleinfo.save(function(err, response){
              
              if(err)
                  //res.render('useraddarticleform', {message: "Database error", type:"error"});
                  res.send(err);
              else
              { 
                  //req.session.user = newPerson
                  res.redirect('/managearticle')
                
                  //  , {message: "New person added", type:"success", person: personInfo});
                  //res.send("Aricleadded")
               }
            });
    }    
       
        
 });



 //edit article


 router.get('/Editarticle/:id',function(req,res)
 {
     console.log(1);
     console.log(req.params.id);
     Articleuser.findById(req.params.id,function(err,response)
     {
            console.log(response);
            const editpersondetails=response;
            console.log(editpersondetails);
            if(err)
             res.render('editarticleform',{message:"Database error"});
 
            else
            {
                 
                 res.render('editarticleform',
                  {id:req.params.id,article:editpersondetails.article,description:editpersondetails.description})
            }
     });
});

//after editing change db also and show edited db
router.post('/Editarticle/:id',function(req,res)
{
   console.log(2);
   console.log(req.params.id);
   console.log(req.body);
   Articleuser.findByIdAndUpdate(req.params.id, req.body, function(err, response){
       if(err) 
       res.send(err);
       else
       {
         console.log(response);
       res.redirect('/managearticle');
       }
    });
 });



 //delete article 

 router.get('/Deletearticle/:id',function(req,res)
 {
     console.log(1);
     console.log(req.params.id);
     Articleuser.findByIdAndRemove(req.params.id,function(err,response)
     
     {
         
            console.log(response);
            const deletearticledetails=response;
            console.log(deletearticledetails);
            if(err)
             res.send('error')
             else
               res.redirect('/managearticle');
            
 
     })
 
     
 })

 //after click home page in sports photo
 router.get('/sportsget',function(req,res)
 {


    Articleuser.find({subject:"sports"},function(err, response){
      
        //res.json(response);
        const data=response;
        console.log(4);
        console.log("corresponding data"+ data);
        res.render('sportsarticleallpost.pug',{article:data});
        //res.render('usereditdeleteaddarticle',{article:data,user:req.session.user.email});
           
        });


 })
 //getdance post in home pae
 router.get('/danceget',function(req,res)
 {


    Articleuser.find({subject:"dance"},function(err, response){
      
        //res.json(response);
        const data=response;
        console.log(4);
        console.log("corresponding data"+ data);
        res.render('dancearticleallpost.pug',{article:data});
        //res.render('usereditdeleteaddarticle',{article:data,user:req.session.user.email});
           
        });


 })

 //getmedicine post in home pae
 router.get('/medicineget',function(req,res)
 {


    Articleuser.find({subject:"medicine"},function(err, response){
      
        //res.json(response);
        const data=response;
        console.log(4);
        console.log("corresponding data"+ data);
        res.render('medicinearticleallpost.pug',{article:data});
        //res.render('usereditdeleteaddarticle',{article:data,user:req.session.user.email});
           
        });
})

//gethome post in home pae
router.get('/homeget',function(req,res)
{


   Articleuser.find({subject:"home"},function(err, response){
     
       //res.json(response);
       const data=response;
       console.log(4);
       console.log("corresponding data"+ data);
       res.render('homearticleallpost.pug',{article:data});
       //res.render('usereditdeleteaddarticle',{article:data,user:req.session.user.email});
          
       });
})



/*//manage topics


router.get('/managetopics',function(req,res)
{
    topicuser.find(function(err, response){
     
        //res.json(response);
        const data=response;
        //console.log(data);
        res.render('admineditdeleteaddtopic',{topic:data})
           
        }); 

});
//edittopics

router.get('/Edittopic/:id',function(req,res)
{
    console.log(1);
    console.log(req.params.id);
    topicuser.findById(req.params.id,function(err,response)
    
    {
        
           console.log(response);
           const topic=response;
           console.log(topic);
           if(err)
            res.render('admineditingtopicform',{message:"Database error"});

            else{
                
            
            res.render('admineditingtopicform',{id:req.params.id,subject:topic.subject});

            }
    });

    
})


//after editing change db also and show edited db
router.post('/Edittopic/:id',function(req,res)
{
   console.log(2);
   console.log(req.params.id);
   console.log(req.body);
   topicuser.findByIdAndUpdate(req.params.id, req.body, function(err, response){
       if(err) 
       res.send(err);
       else
       {
         console.log(response);
       res.redirect('/managetopics');
       }
    });
 });


 //admi deletetopic


 router.get('/Deletetopic/:id',function(req,res)
 {
     console.log(1);
     console.log(req.params.id);
     topicuser.findByIdAndRemove(req.params.id,function(err,response)
     
     {
         
            console.log(response);
            const deletetopicdetails=response;
            console.log(deletetopicdetails);
            if(err)
             res.send('error')
             else
               res.redirect('/managetopics');
            
 
     })
 
     
 })



 //after click add topic get one form to add topic

router.get('/addtopic', function(req, res){
    
     if(req.session.admin)
      {
        

        res.render('adminaddtopic');

      }
      else
      {
        res.redirect('/admin');
      }

       
  
   });


 //save the article in db

 router.post('/topicpost', function(req, res)
 {
    
    var topicInfo = req.body; //Get the parsed information
    console.log(topicInfo);

   
    
    if(!topicInfo.subject)
    {
        console.log(1);
       res.render('adminaddtopic');
    } 
    else
    {
        var newtopic = new topicuser
        ({
            subject:topicInfo.subject

        })
        newtopic.save(function(err, Person){
              
              if(err)
                  //res.render('useraddarticleform', {message: "Database error", type:"error"});
                  res.send(err);
              else
              { 
                  //req.session.user = newPerson
                  res.redirect('/managetopics')
                
                  //  , {message: "New person added", type:"success", person: personInfo});
                  //res.send("Aricleadded")
               }
            });
    }    
       
        
 });*/





module.exports=router;

