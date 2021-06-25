$(document).ready(function () {

    //    dashboard sidebar fix
    if ($('#sidebar').length) {
        $("#sidebar").mCustomScrollbar({
            theme: "minimal"
        });

        $('#dismiss, .overlay').on('click', function () {
            $('#sidebar').removeClass('active');
            $('.overlay').removeClass('active');
        });

        $('#sidebarCollapse').on('click', function () {

            console.log("hi");
            $('#sidebar').toggleClass('active');
            $('.overlay').toggleClass('active');
            $('body').toggleClass('body-overflow');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');

        });
    }


})


document.getElementById('copy').addEventListener('click', copyFunction);

function copyFunction() {
    /* Get the text field */
    var copyText = document.getElementById("linkInput");
    /* Select the text field */
    linkInput.select();
    /* Copy the text inside the text field */
    document.execCommand("copy");

    var tooltip = document.getElementById('myTooltip');
    tooltip.innerHTML = "Copied " + linkInput.value;
    /* Alert the copied text */
    //  alert("Link copied: " + linkInput.value);
}
