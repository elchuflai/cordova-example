templates.cuisineView = $('#cuisine-view-template').html();

window.CuisineView = Backbone.View.extend({

    destructionPolicy:'never',
    title: "Select A Cuisine",
    backLabel: "Back",
    //cuisines:[ "Afghan", "American", "Argentine", "Asian", "Austrian", "Bagels", "Bakery", "Barbecue", "Belgian", "Bistro", "Brazilian", "British", "Buffet", "Burgers", "Cafe", "Cajun", "Californian", "Calzones", "Cambodian", "Caribbean", "Catering", "Cheesesteaks", "Chicken", "Chinese", "Chowder", "Coffee", "Colombian", "Contemporary", "Continental", "Creole", "Crepes", "Cuban", "Cuban", "Czech", "Deli", "Dim Sum", "Diner", "Dominican", "Donuts", "Eastern European", "Eclectic", "English", "Ethiopian", "European", "Fast Food", "Filipino", "Fish and Chips", "Fondue", "French", "Frozen Yogurt", "Fusion", "Gastropub", "German", "Greek", "Grill", "Gyros", "Haitian", "Halal", "Hawaiian", "Healthy", "Hookah Bar", "Hot Dogs", "Ice Cream", "Indian", "Indonesian", "International", "Irish", "Israeli", "Italian", "Japanese", "Juices", "Korean", "Korean Barbeque", "Kosher", "Latin", "Latin American", "Lebanese", "Malaysian", "Mediterranean", "Mexican", "Middle Eastern", "Mongolian", "Moroccan", "Nepalese", "Noodle Bar", "Norwegian", "Organic", "Oysters", "Pacific Rim", "Pakistani", "Pan Asian", "Pasta", "Pasteries", "Persian", "Peruvian", "Pho", "Pizza", "Polish", "Polynesian", "Portuguese", "Pub Food", "Puerto Rican", "Ribs", "Salad", "Salvadoran", "Sandwiches", "Seafood", "Singaporean", "Smoothies", "Soul Food", "Soup", "South American", "South Pacific", "Southern", "Southwestern", "Spanish", "Steak", "Subs", "Sushi", "Taiwanese", "Tapas", "Tea", "Tex Mex", "Thai", "Tibetan", "Traditional", "Turkish", "Ukrainian", "Vegan", "Vegetarian", "Venezuelan", "Venusian", "Vietnamese", "Wings", "Wraps" ],


    initialize: function(options) {

        //this.model = options.result;

        this.render();
        this.view = this.$el;
    },

    events:{
        "click ul":"listItemClick"
    },

    render:function (eventName) {
        this.$el.html('<div class="header"> <h1>Cuisines</h1> </div> <ul class="data-list-lightweight" id="list"> <li>Afghan</li> <li>American</li> <li>Argentine</li> <li>Asian</li> <li>Austrian</li> <li>Bagels</li> <li>Bakery</li> <li>Barbecue</li> <li>Belgian</li> <li>Bistro</li> <li>Brazilian</li> <li>British</li> <li>Buffet</li> <li>Burgers</li> <li>Cafe</li> <li>Cajun</li> <li>Californian</li> <li>Calzones</li> <li>Cambodian</li> <li>Caribbean</li> <li>Catering</li> <li>Cheesesteaks</li> <li>Chicken</li> <li>Chinese</li> <li>Chowder</li> <li>Coffee</li> <li>Colombian</li> <li>Contemporary</li> <li>Continental</li> <li>Creole</li> <li>Crepes</li> <li>Cuban</li> <li>Cuban</li> <li>Czech</li> <li>Deli</li> <li>Dim Sum</li> <li>Diner</li> <li>Dominican</li> <li>Donuts</li> <li>Eastern European</li> <li>Eclectic</li> <li>English</li> <li>Ethiopian</li> <li>European</li> <li>Fast Food</li> <li>Filipino</li> <li>Fish and Chips</li> <li>Fondue</li> <li>French</li> <li>Frozen Yogurt</li> <li>Fusion</li> <li>Gastropub</li> <li>German</li> <li>Greek</li> <li>Grill</li> <li>Gyros</li> <li>Haitian</li> <li>Halal</li> <li>Hawaiian</li> <li>Healthy</li> <li>Hookah Bar</li> <li>Hot Dogs</li> <li>Ice Cream</li> <li>Indian</li> <li>Indonesian</li> <li>International</li> <li>Irish</li> <li>Israeli</li> <li>Italian</li> <li>Japanese</li> <li>Juices</li> <li>Korean</li> <li>Korean Barbeque</li> <li>Kosher</li> <li>Latin</li> <li>Latin American</li> <li>Lebanese</li> <li>Malaysian</li> <li>Mediterranean</li> <li>Mexican</li> <li>Middle Eastern</li> <li>Mongolian</li> <li>Moroccan</li> <li>Nepalese</li> <li>Noodle Bar</li> <li>Norwegian</li> <li>Organic</li> <li>Oysters</li> <li>Pacific Rim</li> <li>Pakistani</li> <li>Pan Asian</li> <li>Pasta</li> <li>Pasteries</li> <li>Persian</li> <li>Peruvian</li> <li>Pho</li> <li>Pizza</li> <li>Polish</li> <li>Polynesian</li> <li>Portuguese</li> <li>Pub Food</li> <li>Puerto Rican</li> <li>Ribs</li> <li>Salad</li> <li>Salvadoran</li> <li>Sandwiches</li> <li>Seafood</li> <li>Singaporean</li> <li>Smoothies</li> <li>Soul Food</li> <li>Soup</li> <li>South American</li> <li>South Pacific</li> <li>Southern</li> <li>Southwestern</li> <li>Spanish</li> <li>Steak</li> <li>Subs</li> <li>Sushi</li> <li>Taiwanese</li> <li>Tapas</li> <li>Tea</li> <li>Tex Mex</li> <li>Thai</li> <li>Tibetan</li> <li>Traditional</li> <li>Turkish</li> <li>Ukrainian</li> <li>Vegan</li> <li>Vegetarian</li> <li>Venezuelan</li> <li>Venusian</li> <li>Vietnamese</li> <li>Wings</li> <li>Wraps</li> </ul>');
        return this;
    },

    listItemClick: function( event ) {

        this.$el.find( "li" ).removeClass( "listSelected" );
        var target = $( event.target )
        if (target.get(0).nodeName.toUpperCase() != "LI") {
            target=target.parent();
        }

        target.addClass( "listSelected" );


        var view = new SearchView( {searchString:target.text()} );
        window.viewNavigator.pushView( view );
    }
});
