templates.homeView = '<div id="homeView"> <div id="wrapper"> <div class="well"> <h1> Welcome! </h1> <p>Walkable Restaurants is the easiest way to find a great cup of coffee or a bite to eat that is within a reasonable walking distance from your current location.  <% if ((typeof(isTablet) != "undefined") && isTablet) { %> Either select a cuisine or enter a search phase, and you\'ll be where you want to be, before you know it!  <% } %> </p> <div style="text-align: center;"> <p> <button id="selectCuisine" class="btn btn-info">Select A Cuisine </button> </p> <h4 style="text-align: center">--OR--</h4> <p> <form > <div class="input-append" style="max-width: 90%;"> <input type="text" id="searchString" placeholder="Enter A Search Phrase…"> <button id="search" type="submit"  class="btn btn-info"><i class="icon-search icon-white"></i> </button> </div> </form> </p> <p style="text-align: left;"> <strong>Search for anything...</strong> A restaurant name (<a href="#" class="searchlink">Starbucks</a>, <a href="#" class="searchlink">McDonald\'s</a>), a type of location (<a href="#" class="searchlink">pub</a>, <a href="#" class="searchlink">deli</a>, <a href="#" class="searchlink">bakery</a>), a type food (<a href="#" class="searchlink">pizza</a>, <a href="#" class="searchlink">subs</a>, or <a href="#" class="searchlink">sushi</a>), part of a street address (<a href="#" class="searchlink">Main Street</a>, <a href="#" class="searchlink">Union Square</a>), etc...  </p> </div> <p class="alert alert-info" style="font-weight: bold; margin:0px -20px;">Walking time calculations are only available for CA, FL, &amp; NY.  All other locations will display distance in miles.</p> </div> </div> </div>';

window.HomeView = Backbone.View.extend({

    title: "Walkable Restaurants",
    destructionPolicy:'never',

    initialize: function(options) {
        this.render();
        this.view = this.$el;
    },

    events:{
        "click #search":"performSearch",
        "click #selectCuisine":"selectCuisine",
        "click .searchlink":"performSearchForLink"
    },

    render:function (eventName) {
        var template = _.template(templates.homeView);
        var model = {isTablet:NativeUtil.isTablet()};
        console.log('template:', _.template(templates.homeView)(model));
        this.$el.html(template(model));

        if ( model.isTablet ) {
            this.$el.css("height", "100%");
            this.$el.css("margin", "0px");
            this.$el.css("padding", "0px");
            this.$el.find("#homeView").css("height", "100%");


            var wrapper = this.$el.find("#wrapper");
            wrapper.css("margin", "0px");
            wrapper.css("padding", "0px");

            var well = this.$el.find(".well");
            well.css("width", "460px");
            well.css("margin", "0px");
            well.css("padding", "30px");
            well.find(".input-append").css("max-width", "101%");

            well.css("position", "absolute");
            var hOffset = ($(window).width() - well.width())-70;

            hOffset = hOffset/2;
            /*
            if ( $(window).width() > 700) {
            	hOffset = hOffset/3;
            }
            else {
            	hOffset = hOffset/4;
            }*/

            well.css("left", hOffset+"px");
            well.css("top", "180px");
        }

        this.headerActions = $("<li class='btn btn-inverse' style='padding: 5px 5px;'><i class='icon-info-sign icon-white'></i></li>");

        var self = this;
        this.headerActions.on( "click", function(event){
            self.headerButtonClick(event);
        } )

        return this;
    },

    performSearch:function () {

    	if ( !this.lastTimestamp || (new Date().getTime()-this.lastTimestamp) > 500) {
	        var searchString = $("#searchString").val();

	        //todo: add error checking?
	        var view = new SearchView( {searchString:searchString} );
	        window.viewNavigator.pushView( view );
    	}
        this.lastTimestamp = new Date().getTime();
    },

    selectCuisine:function () {

        var view = new CuisineView();
        window.viewNavigator.pushView( view );
    },

    performSearchForLink:function (event) {

        var target = $( event.target )
        var searchString = target.text();
        $("#searchString").val(searchString);

        this.performSearch();
    },

    headerButtonClick: function (event) {

        var view = new AboutView();
        window.viewNavigator.pushView( view );
    }
});
