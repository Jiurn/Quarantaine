var date = new Date();
var day = date.getDate();
var month = (1+date.getMonth());
var tab_mois=["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

$.ajax({
    url: "../json/citation.json",
    dataType: "json"
})
    .done((citations)=>{

        for(let citation of citations)
        {
            let valide_day = false;
            if (day.toString() === citation.Day){
                valide_day = true;
            }


            let valide_month = false;
            if (month.toString() === citation.Month){
                valide_month = true;
            }

            if (valide_day===true/* && valide_month===true*/){
                 $("#citation").append($("blockquote").first().clone().html("<p><strong>Citation du jour ("+citation.Day+" "+tab_mois[month-1]+" "
                 + date.getFullYear()+")</strong></p><p><span>&laquo; </span>"+citation.Citation+"<span><a href='../Citations/citations.html' style='color: #1b203d; " +
                     "text-decoration: none; cursor: auto'> &raquo;</a> </span></p><hr id=\"hr_citation\">"+
                     "<cite>&#8212; "+citation.Auteur+"</cite>"));
            }
        }
        $("#citation blockquote").first().remove(); //<i style="font-size:24px" class="fa">&#xf10d;</i> pour pouvoir selectionner les guillemets
    })

    .fail(function(response){
        $("#citation p").first().text("Erreur"+response.status)
    });

/*Site pour les citations: https://citation-celebre.leparisien.fr/liste-citation?page=54*/