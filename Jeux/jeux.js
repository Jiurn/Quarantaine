function Sarcasme() {
    $mettre_en_sarcasme = $('#mettre_en_sacasme').val()
    $cpt = 0
    $cpt_finir = 0
    $('#resultat_sarcasme').text("")
    while(true){
        if ($mettre_en_sarcasme.charAt($cpt_finir) === " "){
            $('#resultat_sarcasme').append(" ")
            $cpt_finir += 1
        }
        else if ($mettre_en_sarcasme.charAt($cpt) === ""){
            break
        }
        else if ($cpt%2==0){
           $('#resultat_sarcasme').append($mettre_en_sarcasme.charAt($cpt_finir).toUpperCase())
            $cpt_finir += 1
            $cpt += 1
        }
        else if ($cpt%2!=0){
            $('#resultat_sarcasme').append($mettre_en_sarcasme.charAt($cpt_finir).toLowerCase())
            $cpt_finir += 1
            $cpt += 1
        }
    }
    $('#clipboard_sarcasme').css({display:"inline-block"})
    content = document.getElementById('div_content_sarcasme')
    content.style.maxHeight = content.scrollHeight + "px";

}

var input_sarcasme = document.getElementById("mettre_en_sacasme");
input_sarcasme.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btn_sarcasme").click();
    }
});


$nbr_1 = Math.floor(Math.random()*(50-15+1))+15;
$nbr_2 = Math.floor(Math.random()*(50-15+1))+15;

$resultat = $nbr_1*$nbr_2

$('#nbr_1').text($nbr_1)
$('#nbr_2').text($nbr_2)

$('#btn_collapsible_calcul_mental').click(function () {
    $d_1_now_milliseconde = Date.now()
})

$tentative = 0;
function Calcul_mental() {
        $reponse_calcul_mental = $('#reponse_calcul_mental').val()
        if($('#reponse_calcul_mental').val() == $resultat){

            $d_2_now_milliseconde = Date.now()

            $d_milliseconde = $d_2_now_milliseconde - $d_1_now_milliseconde

            $minute = $d_milliseconde%60000;
            if ($minute==$d_milliseconde) {
                $minute=0;
                $seconde = Math.floor(($d_milliseconde-(60000*$minute))/1000)
                $milliseconde = $d_milliseconde-60000*$minute-$seconde*1000
            }
            else{
                $minute= Math.floor($d_milliseconde/60000);
                $seconde = Math.floor(($d_milliseconde%60000)/1000)
                $milliseconde = $d_milliseconde%1000
            }


            console.log($minute);
            console.log($seconde);
            console.log($milliseconde);
            console.log($d_milliseconde);

            if ($minute===1){
                if ($seconde===0 || $seconde===1){
                    $('#temps_calcul_mental').text($minute+" minute "+$seconde+" seconde "+$milliseconde+" millisecondes")
                }
                else {
                    $('#temps_calcul_mental').text($minute+" minute "+$seconde+" secondes "+$milliseconde+" millisecondes")
                }
            }

            else if ($minute===!0 && $minute===! 1){
                if ($seconde===0 || $seconde===1){
                    $('#temps_calcul_mental').text($minute+" minutes "+$seconde+" seconde "+$milliseconde+" millisecondes")
                }
                else{
                    $('#temps_calcul_mental').text($minute+" minutes "+$seconde+" secondes "+$milliseconde+" millisecondes")
                }
            }
            else if ($minute===0){
                $('#temps_calcul_mental').text($seconde+" secondes "+$milliseconde+" millisecondes")
            }

            $('#recommencer_calcul_mental').css({display:"inline-block"})
            $('#div_content_calcul_mental').css({"max-height":"400px"})
        }
        else if ($('#reponse_calcul_mental').val() !== $resultat){
            $tentative += 1
            if ($tentative ==1){
                $('#tentative_calcul_mental').text($tentative+"ère")
                $('#text_tentative').text(" tentative")
            }
            if ($tentative>1){
                $('#tentative_calcul_mental').text($tentative+"e ")
                $('#text_tentative').text(" tentative")
            }
        }
}
function Recommencer_Calcul_mental() {
    $nbr_1 = Math.floor(Math.random()*(50-15+1))+15;
    $nbr_2 = Math.floor(Math.random()*(50-15+1))+15;

    $resultat = $nbr_1*$nbr_2

    $('#nbr_1').text($nbr_1)
    $('#nbr_2').text($nbr_2)

    $('#recommencer_calcul_mental').css({display:"none"})
    $('#div_content_calcul_mental').css({"max-height":"280px"})
    $('#temps_calcul_mental').text("")
    $('#reponse_calcul_mental').val("")

    $('#tentative_calcul_mental').text("")
    $('#text_tentative').text("")
    $tentative = 0;

    $d_1_now_milliseconde = Date.now()
}
var input_calcul_mental = document.getElementById("reponse_calcul_mental");
input_calcul_mental.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btn_calcul_mental").click();
    }
});

$(document).ready(function() {
    $('#clipboard_sarcasme').click(function () {

        var text = $("#resultat_sarcasme").get(0)
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
        //add to clipboard.
        document.execCommand('copy');
    })
})