var showForTicks=1;
var showEverySec=5;

Module.register("MMM-jumpScare", {



    start: function() {
        var self = this;

        Log.info("Starting module: " + this.name);

        overlayBlack = document.createElement("div");
        overlayBlack.id = "overlayBlack";
        overlayBlack.innerHTML="<div></div>"
        document.body.insertBefore(overlayBlack, document.body.firstChild);

        setInterval(function() {
            self.updateDom();
        }, 200);
    },

    getStyles: function () {
        return ["MMM-jumpScare.css"];
    },

    getDom: function() {

      var wrapper = document.createElement("div");
      var date = new Date()

      if (Math.floor(date.getSeconds()/1)%(showEverySec+0)==0) {

        var overlayBlack = document.getElementById("overlayBlack");
        if (overlayBlack!==undefined) {
          overlayBlack.innerHTML="<div class=\"imgScare1\"><img src=\"/modules/MMM-jumpScare/scary.png\"> </div>"
        }


      } else {
        var overlayBlack = document.getElementById("overlayBlack");
        if (overlayBlack!==undefined) {
          overlayBlack.innerHTML="<div></div>"
        }

      }
      return wrapper;




    }
});
