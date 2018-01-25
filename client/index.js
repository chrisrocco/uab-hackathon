$("#mailingListForm").on('submit', function(e){
    e.preventDefault();
    var body = $("#mailingListForm").serialize();
    console.log("Submitting...", body);
    $.post(env.api + '/join-mailing-list', body)
        .then(function( res ){
            swal("You've been added to our mailing list!", "We look forward to seeing you at the event!", "success");
        }, function( res ){
            swal("Oops.. something went wrong", "We're looking into it!", "error");
        });
});