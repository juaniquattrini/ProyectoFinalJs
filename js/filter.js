
// FILTRANDO PRODUCTOS 
$ ( ()=>{
    $('.filter[category="Urbana"]').click( ()=>{
        
        function hideProduct(){
            $('.card[category="Urbana"]').css('transform', 'scale(0)');
            $('.card').hide();
        }setTimeout(hideProduct,400);
        
        function showProduct(){
            $('.card[category="Urbana"]').show();
            $('.card[category="Urbana"]').css('transform', 'scale(1)');
        }setTimeout(showProduct,400);
        

    });
    $('.filter[category="Deportiva"]').click( ()=>{
        function hideProduct(){
            $('.card[category="Deportiva"]').css('transform', 'scale(0)');
            $('.card').hide();
        }setTimeout(hideProduct,400);
        
        function showProduct(){
            $('.card[category="Deportiva"]').show();
            $('.card[category="Deportiva"]').css('transform', 'scale(1)');
        }setTimeout(showProduct,400);
    });
    $('.filter[category="all"]').click( ()=>{
        $('.card').show();
    })
})