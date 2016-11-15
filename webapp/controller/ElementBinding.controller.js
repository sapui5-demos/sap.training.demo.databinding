sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device",
	"sap/ui/model/json/JSONModel"
], function(Controller, Device, JSONModel) {
	"use strict";

	return Controller.extend("sap.training.controller.ElementBinding", {

		onInit: function() {
			// apply compact density if touch is not supported, the standard cozy design otherwise
			this.getView().addStyleClass(Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");
			

			var oModel = new JSONModel();
			oModel.loadData("model/data_3.json");

			this.getView().setModel(oModel);
		},

		onSelectionChange: function(oEvent) {
			var oItem = oEvent.getParameter("selectedItem");
			var sPath = oItem.getBindingContext().getPath();

			var oList = this.getView().byId("idList");
			oList.bindElement(sPath);
		}

	});

});