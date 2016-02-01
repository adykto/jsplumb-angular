'use strict';

require('jsplumb');
require('jquery');

jsPlumb.bind("ready", function() {
    var firstInstance = jsPlumb.getInstance();

    firstInstance.importDefaults({
        Connector : [ "Bezier", { curviness: 150 } ],
        Anchors : [ "TopCenter", "BottomCenter" ]
    });

    firstInstance.connect({
        source:"element1",
        target:"element2",
        scope:"someScope"
    });

    //firstInstance.setId('rootID');

    firstInstance.setContainer($("body"));

    console.log('its working!', firstInstance);

});