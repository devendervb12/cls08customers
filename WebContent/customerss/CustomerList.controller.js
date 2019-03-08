sap.ui.controller("customerss.CustomerList", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf customerss.CustomerList
*/
	onInit: function() {
			var url = "proxy/https/services.odata.org/Northwind/Northwind.svc/";
			var oModel = new sap.ui.model.odata.v2.ODataModel(url);
			
			this.getView().setModel(oModel, "m2");
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf customerss.CustomerList
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf customerss.CustomerList
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf customerss.CustomerList
*/
//	onExit: function() {
//
//	}
	
	onPress : function(){
		// get a List, and post the data
		this.getView().byId("idList").setVisible(true);
		
	},
	onItemPress : function(oEvent){
		//oEvent === Event  == press
		/*var relaventCustomerListItem = oEvent.getSource();
		
		var relaventVBox = relaventCustomerListItem.getContent()[0];
		var relaventTitle = relaventVBox.getItems()[0];
		
		var custID = relaventTitle.getText();*/
		
		var custID = oEvent.getSource().getContent()[0].getItems()[0].getText();
		
		//var custID = 'ALFKI';
		this.getView().byId("SimpleFormDisplay354").bindElement("m2>/Customers('"+custID+"')");
		
		
	}

});