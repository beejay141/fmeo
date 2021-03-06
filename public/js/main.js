$(window).load(function(){
    //Welcome Message (not for login page)
    // $('.main-menu li a').click(function(e) {
    //
    //     $('.main-menu li').removeClass('active');
    //
    //     var $parent = $(this).parent();
    //     if (!$parent.hasClass('active')) {
    //         $parent.addClass('active');
    //     }
    //     e.preventDefault();
    // });

    function notify(message, type){
        $.growl({
            message: message
        },{
            type: type,
            allow_dismiss: false,
            label: 'Cancel',
            className: 'btn-xs btn-inverse',
            placement: {
                from: 'bottom',
                align: 'right'
            },
            delay: 2500,
            animate: {
                    enter: 'animated fadeInRight',
                    exit: 'animated fadeOutRight'
            },
            offset: {
                x: 30,
                y: 30
            }
        });
    };
  var display = $('.display-welcome').val();
    if (display != 'no') {
       /*  notify('Welcome back Mallinda Hollaway', 'inverse'); */
    }
});

$(document).ready(function() {
    /*--------------------------------------
        Header Color
    ---------------------------------------*/
    $('body').on('click', '.hc-trigger', function() {
        $(this).parent().toggleClass('toggled');
    });
    
    $('body').on('click', '.hc-item', function() {
        var v = $(this).data('ma-header-value');

        $('.hc-item').removeClass('selected');
        $(this).addClass('selected');


        $('body').attr('data-ma-header', v);
    });

    /*--------------------------------------
        Animation
     ---------------------------------------*/
    $('body').on('click', '.animation-demo .btn', function(){
        var animation = $(this).text();
        var cardImg = $(this).closest('.card').find('img');
        if (animation === "hinge") {
            animationDuration = 2100;
        }
        else {
            animationDuration = 1200;
        }

        cardImg.removeAttr('class');
        cardImg.addClass('animated '+animation);

        setTimeout(function(){
            cardImg.removeClass(animation);
        }, animationDuration);
    });


    /*--------------------------------------
         Notifications & Dialogs
     ---------------------------------------*/
    /*
     * Notifications
     */
    function notify(from, align, icon, type, animIn, animOut, title, message){
        $.growl({
            icon: icon,
            title: ' '+title+' ',
            message: message,
            url: ''
        },{
            element: 'body',
            type: type,
            allow_dismiss: true,
            placement: {
                from: from,
                align: align
            },
            offset: {
                x: 30,
                y: 30
            },
            spacing: 10,
            z_index: 1031,
            delay: 2500,
            timer: 1000,
            url_target: '_blank',
            mouse_over: false,
            animate: {
                enter: animIn,
                exit: animOut
            },
            icon_type: 'class',
            template: '<div data-growl="container" class="alert" role="alert">' +
            '<button type="button" class="close" data-growl="dismiss">' +
            '<span aria-hidden="true">&times;</span>' +
            '<span class="sr-only">Close</span>' +
            '</button>' +
            '<span data-growl="icon"></span>' +
            '<span data-growl="title"></span>' +
            '<span data-growl="message"></span>' +
            '<a href="#" data-growl="url"></a>' +
            '</div>'
        });
    };

    $('.notifications > div > .btn').click(function(e){
        e.preventDefault();
        var nFrom = $(this).attr('data-from');
        var nAlign = $(this).attr('data-align');
        var nIcons = $(this).attr('data-icon');
        var nType = $(this).attr('data-type');
        var nAnimIn = $(this).attr('data-animation-in');
        var nAnimOut = $(this).attr('data-animation-out');

        notify(nFrom, nAlign, nIcons, nType, nAnimIn, nAnimOut);
    });


    /*
     * Dialogs
     */

    //Basic
    $('#sa-basic').click(function(){
        swal("Here's a message!");
    });

    //A title with a text under
    $('#sa-title').click(function(){
        swal("Here's a message!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat, tincidunt vitae ipsum et, pellentesque maximus enim. Mauris eleifend ex semper, lobortis purus sed, pharetra felis")
    });

    //Success Message
    $('#sa-success').click(function(){
        swal("Good job!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat, tincidunt vitae ipsum et, pellentesque maximus enim. Mauris eleifend ex semper, lobortis purus sed, pharetra felis", "success")
    });

    //Warning Message
    $('#sa-warning').click(function(){
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false
        }, function(){
            swal("Deleted!", "Your imaginary file has been deleted.", "success");
        });
    });

    //Parameter
    $('#sa-params').click(function(){
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel plx!",
            closeOnConfirm: false,
            closeOnCancel: false
        }, function(isConfirm){
            if (isConfirm) {
                swal("Deleted!", "Your imaginary file has been deleted.", "success");
            } else {
                swal("Cancelled", "Your imaginary file is safe :)", "error");
            }
        });
    });

    //Custom Image
    $('#sa-image').click(function(){
        swal({
            title: "Sweet!",
            text: "Here's a custom image.",
            imageUrl: "img/thumbs-up.png"
        });
    });

    //Auto Close Timer
    $('#sa-close').click(function(){
        swal({
            title: "Auto close alert!",
            text: "I will close in 2 seconds.",
            timer: 2000,
            showConfirmButton: false
        });
    });

    /*--------------------------------------
        Components
     ---------------------------------------*/
    $('body').on('click', '#btn-color-targets > .btn', function(){
        var color = $(this).data('target-color');
        $('#modalColor').attr('data-modal-color', color);
    });

    $('#search-btn').on('click',function (e) {

        e.preventDefault;
        var input = $('#search-input').val();
        if(input == ''){
            var type="info" ;
            var animation_in="animated fadeInDown" ;
            var animation_out ="animated fadeOutDown";
            var from="top";
            var align="center";
            var icon="fa fa-check";
            var title = 'ERROR: ';
            var message = "Who are you looking for?, supply his/her name in the input box.";
            notify(from, align, icon, type, animation_in, animation_out,title,message);
            return;
        }
        $('#search-form').submit();
    });

    /*--------------------------------------
     load-more
     ---------------------------------------*/
    var ele= 0;
    $('.load-more').on('click','a',function (e) {
        e.preventDefault();
        ele = (e.target.parentNode.parentNode.childNodes[3].childNodes[1].childElementCount);
        var target = e.target.parentNode.parentNode.childNodes[3].childNodes[1];
        var _event_id = e.target.dataset['event_id'];

        var option = {
            url: _url,
            method: 'post',
            data:{
                _token: token,
                event_id: _event_id,
                curIndex:ele
            }

        }
        $.ajax(option).done(function (data) {
            // console.log(JSON.stringify(data.rem));
            $(target).append(data);

            var rem = $('#rem').val();
            if(rem <= (ele+6)){
                $(e.target).hide();
            }
        })
    });

        var order_type = '';
        var match = '';
    $('.show_detail').on('click',function (e) {
         order_type = e.target.dataset['order'];
         match = e.target.dataset['match'];

    });

    $('#showDetail').on('shown.bs.modal', function (e) {
        // do something...
        var option = {
            url: _url,
            method: 'post',
            data:{
                _token: token,
                id: match,
                order: order_type
            }}
            $.ajax(option).done(function (data) {
              //console.log(JSON.stringify(data));
             $('#_target').replaceWith(data);
        })
            
    })

    $('#showDetail').on('hidden.bs.modal', function (e) {
        // do something...
            $('#_target').replaceWith("<div id=\"_target\" style=\"text-align: center\">\n <div class=\"preloader pl-lg pls-white\">\n <svg class=\"pl-circular\" viewBox=\"25 25 50 50\">\n <circle class=\"plc-path\" cx=\"50\" cy=\"50\" r=\"20\"></circle>\n </svg>\n </div> \n</div>");

    });

    $('#btnGhDone').on('click',function () {
        var inp = $(document.getElementsByName('gh_amount'));
        var gh_amount = inp.val();
        var balance = inp.data('balance');
        // alert(balance);
        if (check(balance,gh_amount)){
            $('#form_gh').submit();
        }else {
            $('#ghParen').addClass('has-error');
        }

    });

    // var pgurl = window.location.href.substr(window.location.href
    //         .lastIndexOf("/")+1);
    // $("#nav ul li a").each(function(){
    //     if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
    //         $(this).addClass("active");
    // })

    $('.user').on('click',function (e) {
        e.preventDefault();
        var a = $(this);
            var option = {
                method:'POST',
                url: a.data('url'),
                data:{'id':a.data('id'),_token:token}
            };
            $.ajax(option).done(function (data) {
                // console.log(JSON.stringify(data));
                $('#_target').replaceWith(data);
            })
    });

    //  var order_id = '';
    // $('.show_detail').on('click',function (e) {
    //     order_id = e.target.dataset['id'];
    //
    // });

    // $('#modal-mat').on('show.bs.modal', function () {
    //     alert('sfsgdd');
    // })

    // $('#modal-mat').on('show.bs.modal', function (e) {
    //     e.preventDefault();
    //     // do something...
    //     alert('show');
    //     // var option = {
    //     //     url: _url,
    //     //     method: 'post',
    //     //     data:{
    //     //         _token: token,
    //     //         id: order_id,
    //     //     }}
    //     // $.ajax(option).done(function (data) {
    //     //     //console.log(JSON.stringify(data));
    //     //     $('#_target').replaceWith(data);
    //     // })
    //
    // })



});

 var check = function (gh_balance, gh) {
     var bal = gh_balance - gh;
     if(bal>=0){
         return true;
     }
     else {
         return false;
     }
 }

