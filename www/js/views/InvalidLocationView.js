templates.invalidLocation = '<div class="gpu" style="background: white;"><div class="header"><h1>Invalid Location</h1></div><div style="padding:10px;"><div class="alert alert-error" ><p><strong>Invalid or unrecognized location.</strong></p><p>We were unable to determine your location.  Please ensure that you have "<strong>Location Services</strong>" enabled and try again.</p></div></div><div style="padding:25px; text-align: center;"><img src="assets/images/error.png" /></div></div>';

window.InvalidLocationView = Backbone.View.extend({

    title: "Error",
    backLabel: "Back",
    
    initialize: function(options) {
        this.render();
        this.view = this.$el;
    },  
    
    events:{
    },
    
    render:function (eventName) {
        this.$el.html(templates.invalidLocation);
        return this;
    }
});