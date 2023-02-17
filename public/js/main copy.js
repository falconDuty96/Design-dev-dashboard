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




function submitCategorie(e,form) {
    e.preventDefault();
    $.ajax({
        type: "post",
        url: $(form).attr("action"),
        data: new FormData(form),
        contentType: false,
        cache: false,
        processData: false,
        dataType: 'json',
    })
    .done(res => {
        if(res.success) {
            $("#close-modal-categorie").click();
            $(".content").html(res.page);
        }else {
            $('#form-categorie').html(res.page);
        }
    })
}
function createCategorie() {
    $.get(base_url('admin/categorie/getForm'),
        function (data, textStatus, jqXHR) {
          $("#form-categorie").html(data);
          $("#open-modal-categorie").click();  
        },
    );
}
function updateCategorie(id) {
    $.get(base_url('admin/categorie/show'), {id: id},
        function (data, textStatus, jqXHR) {
          $("#form-categorie").html(data);
          $("#open-modal-categorie").click();  
        },
    );
}
function deleteCategorie(id) {
    const alert = new Alert();
    alert.confirm(() => {
        $.post(base_url('admin/categorie/delete'), {id: id},
            function (data, textStatus, jqXHR) {
                $(".content").html(data);
            }
        );
    })
    
}

function filterCategorie(e,elem) {
    e.preventDefault();
    $.post(base_url('admin/categorie/filter'), {query: $(elem).find("input").val()},
        function (data, textStatus, jqXHR) {
            $(".content").html(data);
        }
    );
}

//========================================================================================//

function createOperateur() {
    $.get(base_url('admin/operateur/getForm'),
        function (data, textStatus, jqXHR) {
          $("#form-operateur").html(data);
          $("#open-modal-operateur").click();  
        },
    );
}
function previewLogoOperateur(elem)
{
    const file = elem.files[0];
    const preview = $("#operateur-logo-preview");
    $("#operateur-logo").val(file.name);
    loadImage(file, base64 => {
        $(preview).prop("src",base64);
        $(preview).parent().removeClass('d-none');
    })
}

function submitOperateur(e,form) {
    e.preventDefault();
    $.ajax({
        type: "post",
        url: $(form).attr("action"),
        data: new FormData(form),
        contentType: false,
        cache: false,
        processData: false,
        dataType: 'json',
    })
    .done(res => {
        if(res.success) {
            $("#close-modal-operateur").click();
            $(".content").html(res.page);
        }else {
            $('#form-operateur').html(res.page);
        }
    })
}

function updateOperateur(id) {
    $.get(base_url('admin/operateur/show'), {id: id},
        function (data, textStatus, jqXHR) {
          $("#form-operateur").html(data);
          $("#open-modal-operateur").click();  
        },
    );
}

function deleteOperateur(id) {
    const alert = new Alert();
    alert.confirm(() => {
        $.post(base_url('admin/operateur/delete'), {id: id},
            function (data, textStatus, jqXHR) {
                $(".content").html(data);
            }
        );
    }) 
}
function filterOperateur(e,elem) {
    e.preventDefault();
    $.post(base_url('admin/operateur/filter'), {query: $(elem).find("input").val()},
        function (data, textStatus, jqXHR) {
            $(".content").html(data);
        }
    );
}




/**
 * 
 * Promotions section
 * 
 * 
 */


function submitPromotion(e,form) {
    e.preventDefault();
    $.ajax({
        type: "post",
        url: $(form).attr("action"),
        data: new FormData(form),
        contentType: false,
        cache: false,
        processData: false,
        dataType: 'json',
    })
    .done(res => {
        if(res.success) {
            $("#close-modal-promotion").click();
            $(".content").html(res.page);
        }else {
            $('#form-operateur').html(res.page);
        }
    })
}

function createPromotions() {
    $.get(base_url('admin/promotion/getForm'),
        function (data, textStatus, jqXHR) {
          $("#form-promotion").html(data);
          $("#open-modal-promotion").click();  
        },
    );
}
function updatePromotions(id) {
    $.get(base_url('admin/promotion/show'), {id: id},
        function (data, textStatus, jqXHR) {
          $("#form-promotion").html(data);
          $("#open-modal-promotion").click();  
        },
    );
}
function deletePromotions(id) {
    const alert = new Alert();
    alert.confirm(() => {
        $.post(base_url('admin/promotion/delete'), {id: id},
            function (data, textStatus, jqXHR) {
                $(".content").html(data);
            }
        );
    })
    
}



/**
 * 
 * Promotions section end
 * 
 * 
 */



/**
 * 
 * HEADER
 *  
 */
function createHeader() {
    $.get(base_url('admin/header/getForm'),
        function (data, textStatus, jqXHR) {
          $("#form-header").html(data);
          $("#open-modal-header").click();  
        },
    );
}

function submitHeader(e,form) {
    e.preventDefault();
    $.ajax({
        type: "post",
        url: $(form).attr("action"),
        data: new FormData(form),
        contentType: false,
        cache: false,
        processData: false,
        dataType: 'json',
    })
    .done(res => {
        if(res.success) {
            $("#close-modal-header").click();
            $(".content").html(res.page);
        }else {
            $('#form-header').html(res.page);
        }
    })
}












////////////////////////////////////////////////////////


/***
 * 
 *  A PROPOS
 * 
 * 
 */
function createPropos() {
    $.get(base_url('admin/propos/getForm'),
        function (data, textStatus, jqXHR) {
          $("#form-propos").html(data);
          $("#open-modal-propos").click();  
        },
    );
}

function submitPropos(e,form) {
    e.preventDefault();
    $.ajax({
        type: "post",
        url: $(form).attr("action"),
        data: new FormData(form),
        contentType: false,
        cache: false,
        processData: false,
        dataType: 'json',
    })
    .done(res => {
        if(res.success) {
            $("#close-modal-propos").click();
            $(".content").html(res.page);
        }else {
            $('#form-propos').html(res.page);
        }
    })
}

//////////////////////////////



/***
 * 
 *  A PROPOS
 * 
 * 
 */
function createFunctionality() {
    $.get(base_url('admin/functionality/getForm'),
        function (data, textStatus, jqXHR) {
          $("#form-functionality").html(data);
          $("#open-modal-functionality").click();  
        },
    );
}

function submitFunctionality(e,form) {
    e.preventDefault();
    $.ajax({
        type: "post",
        url: $(form).attr("action"),
        data: new FormData(form),
        contentType: false,
        cache: false,
        processData: false,
        dataType: 'json',
    })
    .done(res => {
        if(res.success) {
            $("#close-modal-propos").click();
            $(".content").html(res.page);
        }else {
            $('#form-propos').html(res.page);
        }
    })
}




//========================================================================================//

function createDescription() {
    $.get(base_url('admin/description/getForm'),
        function (data, textStatus, jqXHR) {
          $("#form-description").html(data);
          $("#open-modal-description").click();  
        },
    );
}
function previewImageDescription(elem)
{
    const file = elem.files[0];
    const preview = $("#description-logo-preview");
    $("#description-logo").val(file.name);
    loadImage(file, base64 => {
        $(preview).prop("src",base64);
        $(preview).parent().removeClass('d-none');
    })
}

function submitDescription(e,form) {
    e.preventDefault();
    $.ajax({
        type: "post",
        url: $(form).attr("action"),
        data: new FormData(form),
        contentType: false,
        cache: false,
        processData: false,
        dataType: 'json',
    })
    .done(res => {
        if(res.success) {
            $("#close-modal-description").click();
            $(".content").html(res.page);
        }else {
            $('#form-description').html(res.page);
        }
    })
}

function updateDescription(id) {
    $.get(base_url('admin/description/show'), {id: id},
        function (data, textStatus, jqXHR) {
          $("#form-description").html(data);
          $("#open-modal-description").click();  
        },
    );
}

function deleteDescription(id) {
    const alert = new Alert();
    alert.confirm(() => {
        $.post(base_url('admin/description/delete'), {id: id},
            function (data, textStatus, jqXHR) {
                $(".content").html(data);
            }
        );
    }) 
}
function filterDescription(e,elem) {
    e.preventDefault();
    $.post(base_url('admin/description/filter'), {query: $(elem).find("input").val()},
        function (data, textStatus, jqXHR) {
            $(".content").html(data);
        }
    );
}




//////////////////////////

function openMessenger(id) {
    $.get(base_url('admin/messenger/get/'), {id: id},
        function (data, textStatus, jqXHR) {
            $(".messenger").html(data)
            scrollTobottom('.messenger-body');
            $.getJSON(base_url('admin/messenger/getUnreadCount'),
                function (data, textStatus, jqXHR) {
                    $("#unread-message-count").text(data.count)
                }
            );
        },
    );
    $(".messenger").removeClass("d-none")
}

function closeMessenger() {
    $(".messenger").addClass("d-none")
}

function sendMessage(e, form) {
    e.preventDefault();
    const data = combineForm(new FormData(form),new FormData(document.querySelector("#form-service-info")));
    $.ajax({
        type: "post",
        url: $(form).attr("action"),
        data: data,
        contentType: false,
        cache: false,
        processData: false,
        dataType: 'json',
    })
    .done((res) => {
        if(res.success) {
            conn.send(JSON.stringify({
                "type" : "message",
                "to": res.to,
                "idService": res.idService,
            }));

            if(res.message) {
                $('.messenger-body').append(`
                    <div class="message-right">
                        <div class="message-content">
                            ${res.message}
                        </div>
                    </div>
                `)
            }
            if(res.pieceJointe) {
                $('.messenger-body').append(`
                    <div class="message-right">
                        <div class="message-piece-jointe">
                            <img src="${base_url('public/piece_jointe/' + res.pieceJointe) }">
                        </div>
                    </div>
                `)
            }
            scrollTobottom('.messenger-body');
            //Vider la formulaire: 
            form.reset();
        }
    })
}