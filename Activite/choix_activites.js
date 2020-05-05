/*https://www.poftut.com/get-query-string-url-javascript/*/
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

const secteur_g = getUrlParameter('secteur_g');
const secteur_o= getUrlParameter('secteur_o');
const secteur_h = getUrlParameter('secteur_h');
const secteur_a = getUrlParameter('secteur_a');
const secteur_m = getUrlParameter('secteur_m');

//const age = getUrlParameter('age');
const genre_activite = getUrlParameter('genre_activite');

const categorie_r = getUrlParameter('categorie_r');
const categorie_ff = getUrlParameter('categorie_ff');
const categorie_b = getUrlParameter('categorie_b');
const categorie_as = getUrlParameter('categorie_as');
const categorie_m = getUrlParameter('categorie_m');
const categorie_c = getUrlParameter('categorie_c');

const saison = getUrlParameter('saison');

$.ajax({
    url: "../json/activite.json",
    dataType: "json"
})
    .done((msg) => {
        let $nbr_random = 0;
        let $ls_nbr = [];

        while ($ls_nbr.length!=msg.length){

            while (true){
                $nbr_random = Math.floor(Math.random() * (msg.length));
                if (!($ls_nbr.includes($nbr_random)))
                    break
            }

            $ls_nbr.push($nbr_random)


        let activite = msg [$nbr_random]
            let valide_categorie = false;

            let valide_type = false;
            for(let type of activite.Type) {
                if (genre_activite === type){
                    valide_type=true
                }
            }/*
            let valide_age = false;
            for(let p_age of activite.Majeurlegalement) {
                if (age === p_age){
                    valide_age=true
                }
            }*/
            let valide_saison = false;
            for(let p_saison of activite.Saison) {
                if (saison === p_saison){
                    valide_saison=true
                }
            }

            for(let p_categorie of activite.Categorie) {
                if (categorie_r === p_categorie || categorie_ff === p_categorie || categorie_b === p_categorie || categorie_as === p_categorie || categorie_m === p_categorie || categorie_c === p_categorie){
                    valide_categorie=true
                }
            }
            let valide_secteur=false;
            if(secteur_g === activite.Secteur || secteur_o === activite.Secteur || secteur_h === activite.Secteur || secteur_a === activite.Secteur || secteur_m === activite.Secteur){
                valide_secteur=true;
            }
            if (valide_secteur===true && valide_type===true && valide_saison===true && valide_categorie===true){
                $("#activite").append($("article").first().clone().addClass('article_activite').html("<h2 class='grandir'>"+ activite.id +"</h2>"+"<img src=\""+ activite.photo +"\" alt='photo de " + activite.id +"' title='"+ activite.id +"' >"))
            }
        }

        $total = ($('article').length)-1;
        if ($total === 0){
            $("#activite").append($("article").first().clone().addClass('pas_activite').html("<h2 class='grandir'>Pas d'activités trouvés :/</h2><h2 class='grandir'>N'hésitez pas à m'envoyez vos propositions à mon courriel: </h2> " +
                "<a class='grandir' href='mailto:c.r.dupont@hotmail.com' style='color: white; text-decoration: none; font-size: 3.5rem'>c.r.dupont@hotmail.com</a>"))
            $('#div_buttons').css({display: "none"})
            $('#p_pages').css({display: "none"})
            $('#retour_au_formulaire').css({"margin-top":"5rem", "display":"inline-block"})
        }

        $("#activite article").first().remove();


        $('#page').html($total)

        $("#activite article").addClass('hidden');
        $("#activite article").first().removeClass('hidden')
        $("#activite article").first().addClass('show')

    })

    .fail(function(response){
        $("#activite article").first().text("Erreur"+ response.status)
    });
/* Comment faire en sorte de prendre plusieurs éléments des fichiers json (exemple les promenades c un endroit pour chill et pour magasiner donc comment faire en sorte qu'il soit les deux?

essayer de comprendre le code en haut et de comment le faire avec un seul
 */