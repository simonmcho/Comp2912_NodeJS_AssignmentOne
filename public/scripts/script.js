$(function(){
    
    //Create dropdown for quantity
    if($("select").hasClass("pizza-quantity")) {
        var $quantityDropdown = $(".pizza-quantity");
        
        for(let i = 1; i <= 12; i++){
            $quantityDropdown.append($('<option></option>').val(i).html(i));
        }
    }

    if($("form").hasClass("confirmOrder")){
        $("#confirmPizzaOrder").click(function(){
            window.location.href = "localhost:3000";
        });
    }

    
});