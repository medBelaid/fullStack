/**
 * Created by Mohamed on 15/06/2016.
 */
//Change nav main Tab
$('.mainnav .first ul').css('display','block');
$(document).on('click', '.mainnav .title', function(){
    $(this).parent().addClass('active').siblings().removeClass('active');
    $(this).parent().find('ul').css('display','block');
    $(this).parent().siblings().find('ul').css('display','none');
});
