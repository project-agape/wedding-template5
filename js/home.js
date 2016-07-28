var main = {} || "";

main.init = function () {
    main.onFormSubmit();
}

main.onFormSubmit = function () {
    $("#form-content").submit(function () {
        $("#ss-submit").attr("disabled", true);
        setTimeout(function () {
            $("#ss-submit").attr("disabled", false);
        }, 1000);
    });

    $("#hidden_iframe").on('load', function () {
        $("#myModal").modal('show');
        $("#form-content")[0].reset();
        setTimeout(function () {
            $("#myModal").modal('hide');
        }, 2000);
    });
}

$(function () {
    main.init();
});