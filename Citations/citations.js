$.ajax({
    url: "../json/citation.json",
    dataType: "json"
})
    .done((citations)=>{

        for(let citation of citations)
        {
            $("#citation").append($("blockquote").first().clone().html("<p><strong>Citation du "+citation.Day+"e du mois</strong></p><p><span>&laquo; </span>"+citation.Citation+"<span> &raquo;</span></p><hr id=\"hr_citation\">"+
                    "<cite>&#8212; "+citation.Auteur+"</cite>"));

        }
        $("#citation blockquote").first().remove();
    })

    .fail(function(response){
        $("#citation p").first().text("Erreur"+response.status)
    });