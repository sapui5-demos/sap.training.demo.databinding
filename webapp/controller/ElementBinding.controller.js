sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device",
	"sap/ui/model/json/JSONModel"
], function(Controller, Device, JSONModel) {
	"use strict";

	return Controller.extend("sap.training.controller.ElementBinding", {

		onInit: function() {
			// apply compact density for desktop, the standard cozy design otherwise
			var sClass = Device.system.desktop ? "sapUiSizeCompact" : "sapUiSizeCozy";
			this.getView().addStyleClass(sClass);
			

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