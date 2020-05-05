$cbx_categorie = $("input:checkbox[name^='categorie']");
$cbx_secteur = $("input:checkbox[name^='secteur']");

$cbx_categorie.change(function(){
    if($cbx_categorie.is(':checked')) {
        $cbx_categorie.removeAttr('required');
    } else if ($cbx_categorie.not(':checked')){
        $cbx_categorie.attr('required', 'required');
    }
    if($cbx_secteur.is(':checked')) {
        $cbx_secteur.removeAttr('required');
    } else if ($cbx_secteur.not(':checked')) {
        $cbx_secteur.attr('required', 'required');
    }

});

$cbx_secteur.change(function(){
    if($cbx_secteur.is(':checked')) {
        $cbx_secteur.removeAttr('required');
    } else if ($cbx_secteur.not(':checked')) {
        $cbx_secteur.attr('required', 'required');
    }
    if($cbx_categorie.is(':checked')) {
        $cbx_categorie.removeAttr('required');
    } else if ($cbx_categorie.not(':checked')){
        $cbx_categorie.attr('required', 'required');
    }
});

function Checkbox() {
    if($cbx_secteur.is(':checked')) {
        $cbx_secteur.removeAttr('required');
    } else if ($cbx_secteur.not(':checked')) {
        $cbx_secteur.attr('required', 'required');
    }
    if($cbx_categorie.is(':checked')) {
        $cbx_categorie.removeAttr('required');
    } else if ($cbx_categorie.not(':checked')){
        $cbx_categorie.attr('required', 'required');
    }
}