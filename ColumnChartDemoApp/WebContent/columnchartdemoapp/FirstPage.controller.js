sap.ui.controller("columnchartdemoapp.FirstPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf columnchartdemoapp.FirstPage
*/
	
	 press : function (evt) {
		    sap.m.MessageToast.show("The column microchart is pressed.");
		  },

onInit: function(oEvent) {
    var oVizFrame = this.getView().byId("idVizFrameBar");
    var oPopOver = this.getView().byId("idPopOver");
    var serviceUrl = "proxy/sap/opu/odata/IWFND/RMTSAMPLEFLIGHT/";  
    var oModel = new sap.ui.model.odata.ODataModel(serviceUrl,false,"p1794163851","Anjali1#", null,null, null,false);				
    sap.ui.getCore().setModel(oModel);

    var oDataset = new sap.viz.ui5.data.FlattenedDataset({
        dimensions: [{
            name: "CarrierCollection",
            value: "{CarrierCollection/carrid}"
        }],
        measures: [{
            name: 'TravelAgencies',
            value: '{TravelAgencies/agencynum}'
        }],
        data: {
            path: "/CarrierCollection"
        }
    });

    oVizFrame.setDataset(oDataset);
    oVizFrame.setModel(oModel);

   /* var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
            'uid': "valueAxis",
            'type': "Measure",
            'values': ["Profit"]
        }),
        feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
            'uid': "categoryAxis",
            'type': "Dimension",
            'values': ["Year"]
        }),
        feedColor = new sap.viz.ui5.controls.common.feeds.FeedItem({
            'uid': "color",
            'type': "Dimension",
            'values': ["City"]
        });

    oVizFrame.setVizProperties({
        plotArea: {
            dataLabel: {
                visible: true,
                formatString: "#,##0"
            }
        },
        legend: {
            title: {
                visible: false
            }
        },

        title: {
            visible: true,
            text: 'Profit by City and Year'
        }
    });

    oVizFrame.addFeed(feedValueAxis);
    oVizFrame.addFeed(feedCategoryAxis);
    oVizFrame.addFeed(feedColor);
    oPopOver.connect(oVizFrame.getVizUid());*/
}

	
	
	
	


/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf columnchartdemoapp.FirstPage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf columnchartdemoapp.FirstPage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf columnchartdemoapp.FirstPage
*/
//	onExit: function() {
//
//	}

});