/**
 * Created by alexgentry on 10/10/16.
 */

function setBindings() {
    var btnID = '';
    var currentSection = '';

    $("nav a").click(function (e) {
        e.preventDefault();
        btnID = e.currentTarget.id
        currentSection = btnID + "Section";
        $("html,body").animate(
            {
                scrollTop: $("#" + currentSection).offset().top
            }, 2000
        )
    });
}

$(document).ready(function () {
    setBindings();
});

