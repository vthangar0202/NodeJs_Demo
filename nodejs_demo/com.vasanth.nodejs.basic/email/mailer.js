var nodeMailer=require('nodemailer');

//Note: your Gmail account should allow less secure apps
var transporter=nodeMailer.createTransport({
    service:'gmail',
    auth:{
        user:'vasanthu.ala@gmail.com',
        pass:'xxx'
    }
});

var mailOptions={
    from:'vasanthu.ala@gmail.com',
    to:'vthangar.aws@gmail.com',
    subject:'Test mail from node js',
    text:'Hello , this mail is triggered from nodejs !!!'
};

transporter.sendMail(mailOptions,function (err,info){
    if(err){
        console.log(err);
    }else{
        console.log('Mail sent '+info.response)
    }
});