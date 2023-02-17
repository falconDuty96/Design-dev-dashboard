$(document).ready(function () {
    $('.sidebar-link').each(function(){
        $(this).on("click", (e) => {
            e.preventDefault();
            $.get($(this).attr("href"),
                (data, textStatus, jqXHR) =>  {
                    $(".content").html(data);
                    $('.sidebar-link').removeClass('active')

                    $(this).addClass('active')
                },
            );
        })
        
    })
});

function togglePassword(elem){
    var input = $(elem).next("input");
    var show = $(elem).data("show");

    console.log(show);

    if(show){
        $(input).prop('type','text');
        $(elem).html('<i class="fa-regular fa-eye"></i>')
    }else{
        $(input).prop('type','password');
        $(elem).html('<i class="fa-regular fa-eye-slash"></i>')
    }
    $(elem).data("show",!show);
}

function browseFile(idInput) {
    $(idInput).click();
}

function previewIconCategorie(elem) {
    const file = elem.files[0];
    const preview = $("#categorie-icon-preview");
    $("#categorie-icon").val(file.name);
    loadImage(file, base64 => {
        $(preview).prop("src",base64);
        $(preview).parent().removeClass('d-none');
    })
}





function createFiche() {
    $("#open-modal-fiche").click();
}

function createAbonnement() {
    $("#open-modal-abonnement").click();
}