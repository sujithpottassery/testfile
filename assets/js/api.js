function getCourses(){
    $.ajax({
        url: 'https://leads.gyanvitaranam.media/api/main_api/shashib_course_web',
        method: 'GET',
        dataType: 'json',
        data: {'web' : '4'},
        success: function (res) 
        {
            if (res.code == 200) {
                var dataItems = "<option value=''> Select Your Course </option>";
                    $.each(res.course, function (index, itemData) {
                        //dataItems += index + ": " + itemData + "\n";
                        dataItems +=  "<option value="+itemData['id']+"> "+itemData['course_name']+" </option>";
                    });
                    //console.log(dataItems);
                $("#course1").html(dataItems);
                $("#course2").html(dataItems);
                $("#course3").html(dataItems);
            }else if(res.code==202){
                             
            } else {
                var dataItems = "<option value=''> Select Your Course </option>"
                $("#course1").html(dataItems);
                $("#course2").html(dataItems);
                $("#course3").html(dataItems);
            }
        }

    });
}


function getQualification(){
    $.ajax({
        url: 'https://leads.gyanvitaranam.media/api/main_api/shashib_qualification',
        method: 'GET',
        dataType: 'json',
        data: {},
        success: function (res) 
        {
            if (res.code == 200) {
                var dataItems = "<option value=''> Select Your Qualification </option>";
                    $.each(res.quali, function (index, itemData) {
                        //dataItems += index + ": " + itemData + "\n";
                        dataItems +=  "<option value="+itemData['id']+"> "+itemData['qualification_name']+" </option>";
                    });
                    //console.log(dataItems);
                $("#qua1").html(dataItems);
                $("#qua2").html(dataItems);
                $("#qua3").html(dataItems);

            }else if(res.code==202){
                             
            } else {
              
            }
        }

    });
}




function getStates(){
    $.ajax({
        url: 'https://leads.gyanvitaranam.media/api/main_api/shashib_state',
        method: 'GET',
        dataType: 'json',
        data: {},
        success: function (res) 
        {
            if (res.code == 200) {
                var dataItems = "<option value=''> Select Your State </option>";
                    $.each(res.state, function (index, itemData) {
                        //dataItems += index + ": " + itemData + "\n";
                        dataItems +=  "<option value="+itemData['id']+"> "+itemData['state']+" </option>";
                    });
                    //console.log(dataItems);
                $("#state1").html(dataItems);
                $("#state2").html(dataItems);
                $("#state3").html(dataItems);

            }else if(res.code==202){
                             
            } else {
              
            }
        }

    });
}


$('#submitBtnOne').click(function (e) {
    e.preventDefault();
    submit_lead_form('#response1', $('#frm1'), '.required', $('#email1'), $('#phone1'),'modal');
});


function submit_lead_form(error, form, required, email, phone) {
    var domain = window.location.hostname;

    var errorCounter = validateForm(required);
    var email_validate = validateEmail(email.val());
    var phone_validate = checkMobile(phone.val());
    // var email_validate = validateEmail($('#email').val());
    $(error).removeClass("alert-warning");
    if (errorCounter > 0) {
        $(error).removeClass("alert-success").addClass("alert-warning").fadeIn();
        $(error + " .message1").html("<strong>Error</strong>: Missing something are we? check and try again!");
       // $("html, body").animate({scrollTop: $(error).offset().top}, 1000);
    } else if (email_validate > 0) {
        $(error).removeClass("alert-success").addClass("alert-warning").fadeIn();
        $(error + " .message1").html("<strong>Error</strong>: Please provide a valid email address");
        $("html, body").animate({scrollTop: $(error).offset().top}, 1000);
        email.addClass("form-control-error");
    } else if (phone_validate > 0) {
        $(error).removeClass("alert-success").addClass("alert-warning").fadeIn();
        $(error + " .message1").html("<strong>Error</strong>: Please provide a valid mobile number");
        $("html, body").animate({scrollTop: $(error).offset().top}, 1000);
        phone.addClass("form-control-error");
    } else {
        $.ajax({
            url: 'https://leads.gyanvitaranam.media/api/main_api/create_gyan_leadss',
            method: 'post',
            dataType: 'json',
            data: { name_of_user: $("#sname1").val(), user_phone: $("#phone1").val(), user_email: $("#email1").val(), qualification: $("#qua1").val(),course: $("#course1").val(), location: $("#state1").val(), domain: domain, source: '6' },
            success: function (res) {
                emailId = $("#email1").val();
                if (res.code == 200) {
                   /* $(error).removeClass("alert-danger alert-warning").addClass("alert-info").fadeIn();
                   var msgg = "Thank you! We will get back to you at "+ emailId;
                   $(error + " .message").html( msgg);
                    form.trigger('reset');
                    sessionStorage.clear();
                    sessionStorage.setItem('email',emailId);*/
                    
                    window.location.replace('https://www.saegurugram.com/success.html')

                }else if(res.code==202){
                    $(error).removeClass("alert-danger alert-warning").addClass("alert-info").fadeIn();
                    $(error + " .message1").html( res.msg);
                    form.trigger('reset');
                } else {
                    $(error).removeClass("alert-success").addClass("alert-danger").fadeIn();
                    $(error + " .message1").html( res.msg);

                }
            }

        });
    }
}

$('#submitBtnTwo').click(function (e) {
    e.preventDefault();
    submit_lead_form_two('#response2', $('#frm2'), '.required2', $('#email2'), $('#phone2'),'modal');
});

function submit_lead_form_two(error, form, required, email, phone) {
    var domain = window.location.hostname;
    var errorCounter = validateForm(required);
    var email_validate = validateEmail(email.val());
    var phone_validate = checkMobile(phone.val());
    // var email_validate = validateEmail($('#email').val());
    $(error).removeClass("alert-warning");
    if (errorCounter > 0) {
        $(error).removeClass("alert-success").addClass("alert-warning").fadeIn();
        $(error + " .message2").html("<strong>Error</strong>: Missing something are we? check and try again!");
        $("html, body").animate({scrollTop: $(error).offset().top}, 1000);
    } else if (email_validate > 0) {
        alert("Please provide a valid email address")
        $(error).removeClass("alert-success").addClass("alert-warning").fadeIn();
        $(error + " .message2").html("<strong>Error</strong>: Please provide a valid email address");
        //$("html, body").animate({scrollTop: $(error).offset().top}, 1000);
        //email.addClass("form-control-error");
    } else if (phone_validate > 0) {
        $(error).removeClass("alert-success").addClass("alert-warning").fadeIn();
        $(error + " .message2").html("<strong>Error</strong>: Please provide a valid mobile number");
        $("html, body").animate({scrollTop: $(error).offset().top}, 1000);
        //phone.addClass("form-control-error");
    } else {
        $.ajax({
            url: 'https://leads.gyanvitaranam.media/api/main_api/create_gyan_leadss',
            method: 'post',
            dataType: 'json',
            data: { name_of_user: $("#sname2").val(), user_phone: $("#phone2").val(), user_email: $("#email2").val(), qualification: $("#qua2").val(),course: $("#course2").val(), location: $("#state2").val(), domain: domain, source: '6' },
            success: function (res) {
                emailId = $("#email2").val();
                if (res.code == 200) {
                   /* $(error).removeClass("alert-danger alert-warning").addClass("alert-info").fadeIn();
                   var msgg = "Thank you! We will get back to you at "+ emailId;
                   $(error + " .message").html( msgg);
                    form.trigger('reset');
                    sessionStorage.clear();
                    sessionStorage.setItem('email',emailId);*/
                    
                    window.location.replace('https://www.saegurugram.com/success.html')

                }else if(res.code==202){
                    $(error).removeClass("alert-danger alert-warning").addClass("alert-info").fadeIn();
                    $(error + " .message2").html( res.msg);
                    form.trigger('reset');
                } else {
                    $(error).removeClass("alert-success").addClass("alert-danger").fadeIn();
                    $(error + " .message2").html( res.msg);

                }
            }

        });
    }
}

$('#submitBtnThree').click(function (e) {
    e.preventDefault();
    submit_lead_form_three('#response3', $('#frm3'), '.required3', $('#email3'), $('#phone3'),'modal');
});

function submit_lead_form_three(error, form, required, email, phone) {
    var domain = window.location.hostname;
    var errorCounter = validateForm(required);
    var email_validate = validateEmail(email.val());
    var phone_validate = checkMobile(phone.val());
    // var email_validate = validateEmail($('#email').val());
    if (errorCounter > 0) {
        $(error).removeClass("alert-success").addClass("alert-warning").fadeIn();
        $(error + " .message3").html("<strong>Error</strong>: Missing something are we? check and try again!");
        $("html, body").animate({scrollTop: $(error).offset().top}, 1000);
    } else if (email_validate > 0) {
        $(error).removeClass("alert-success").addClass("alert-warning").fadeIn();
        $(error + " .message3").html("<strong>Error</strong>: Please provide a valid email address");
        $("html, body").animate({scrollTop: $(error).offset().top}, 1000);
        email.addClass("form-control-error");
    } else if (phone_validate > 0) {
        $(error).removeClass("alert-success").addClass("alert-warning").fadeIn();
        $(error + " .message3").html("<strong>Error</strong>: Please provide a valid mobile number");
        $("html, body").animate({scrollTop: $(error).offset().top}, 1000);
        phone.addClass("form-control-error");
    } else {
        $.ajax({
            url: 'https://leads.gyanvitaranam.media/api/main_api/create_gyan_leadss',
            method: 'post',
            dataType: 'json',
            data: { name_of_user: $("#sname3").val(), user_phone: $("#phone3").val(), user_email: $("#email3").val(), qualification: $("#qua3").val(),course: $("#course3").val(), location: $("#state3").val(), domain: domain, source: '6' },
            success: function (res) {
                emailId = $("#email3").val();
                if (res.code == 200) {
                   /* $(error).removeClass("alert-danger alert-warning").addClass("alert-info").fadeIn();
                   var msgg = "Thank you! We will get back to you at "+ emailId;
                   $(error + " .message").html( msgg);
                    form.trigger('reset');
                    sessionStorage.clear();
                    sessionStorage.setItem('email',emailId);*/
                    
                    window.location.replace('https://www.saegurugram.com/success.html')

                }else if(res.code==202){
                    $(error).removeClass("alert-danger alert-warning").addClass("alert-info").fadeIn();
                    $(error + " .message3").html( res.msg);
                    form.trigger('reset');
                } else {
                    $(error).removeClass("alert-success").addClass("alert-danger").fadeIn();
                    $(error + " .message3").html( res.msg);

                }
            }

        });
    }
}


function validateForm(required) {
    // error handling
    var errorCounter = 0;
    $(required).each(function (i, obj) {
        if ($(this).val() === '') {
            $(this).addClass("form-control-error");
            errorCounter++;
        } else {
            $(this).removeClass("form-control-error");
        }
    });

    return errorCounter;
}

function validateEmail(sEmail) {
    count = 0;
    var reEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (!sEmail.match(reEmail)) {
        count = 1;
        //return false;
    } else {
        count = 0;
    }
    return count;
}

function checkMobile(mobile) {
    count = 0;
    var reMobile = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;

    if (!mobile.match(reMobile)) {
        count = 1;

        //return false;
    } else {
        count = 0;
    }
    return count;
}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;

}



