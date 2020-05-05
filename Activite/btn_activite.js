$page_actuel = 1;
$('#pageCourante').text($page_actuel);

$total = $('#page').text();
$('#btn_next').click(function(){
    var $next = $('.article_activite.show').next();

    $next.prev().removeClass('show').addClass('hidden');

    if ($page_actuel<parseInt($total))
        $page_actuel = $page_actuel+ 1;
        $('#pageCourante').text(parseInt($page_actuel));

    $next.addClass('show');
});

$('#btn_prev').click(function(){

    var $prev=  $('.article_activite.show').prev();

    $prev.next().removeClass('show').addClass('hidden');

    if ($page_actuel>1)
        $page_actuel = $page_actuel- 1;
        $('#pageCourante').text(parseInt($page_actuel));

    $prev.addClass('show');
});
