const pageMod = require("page-mod");
const data    = require("self").data;
const prefSet = require("simple-prefs");

exports.main = function() {
    pageMod.PageMod({ 
    include: ["*"],
    contentScriptWhen: 'end',
    contentScriptFile: [data.url("jquery.js"),data.url("script.js")],
        onAttach: function(worker) {
        	
        	// Persistent values
            var option1	= prefSet.prefs.option1;
        	var option2	= prefSet.prefs.option2;
        
         	worker.port.emit('get-prefs', [ option1, option2 ]); // sender1
        
            // Listen for changes
			function onPrefChange(prefName) {
                let payload = [prefName, prefSet.prefs[prefName]];
                worker.port.emit('prefchange', payload); // sender2
            }

            prefSet.on("option1", onPrefChange);
            prefSet.on("option2", onPrefChange);
        

        }
    });
}
