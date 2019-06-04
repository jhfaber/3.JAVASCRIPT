var budgetController = (function(){

    //private
    var x = 23
    var add = function(a){
        return x+a;
    }
    //public
    return {
        publicTest: function (b) {
            return add(b);
        }
    }
})();


var UIController = (function(){
    return {
        getinput: function(){

            return{
                type : document.querySelector('.add__type').value, //will be either inc or exp
                description : document.querySelector('.add__description').value,
                value: document.querySelector('.add__value').value
            };
            
        },

        addListItem: function(type){
            var id_type, newHtml, html, id, description, value, element;
            

            if(type == 'inc'){
                id_type= 'income';
                element = '.income__list'
            }else if (type=='exp'){
                id_type= 'expense';
                element = '.expenses__list'
            }
            id='1';
            description = document.querySelector('.add__description').value;
            value = document.querySelector('.add__value').value;
            console.log(description)
            html = `<div class="item clearfix" id="${id_type}-${id}">
                <div class="item__description">${description}</div>
                <div class="right clearfix">
                    <div class="item__value">${value}</div>
                    <div class="item__delete">
                        <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                    </div>
                </div>
            </div>` ;
            

            document.querySelector(element).insertAdjacentHTML('beforeend',html)
        },
       
    };

})();

var controller = (function(budgetController, UICtrl){
    var ctrlAddItem = function(){
        
        var input = UICtrl.getinput();
        console.log(input);
        UICtrl.addListItem('inc');
    }
    
    //add buton
    document.querySelector('.add__btn').addEventListener('click',ctrlAddItem);
    //lissener any press keyboard 
    document.addEventListener('keypress', function(event){
        //console.log(event)
        if(event.keyCode === 13){
            
        }

    });
})(budgetController, UIController);



