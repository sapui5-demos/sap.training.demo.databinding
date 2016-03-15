sap.ui.define([
	"sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("sap.training.controller.ElementBinding", {

		onInit: function() {
			var oModel = new JSONModel();
			oModel.loadData("json/data_3.json");

			this.getView().setModel(oModel);
		},

		onChange: function(oEvent) {
			var oItem = oEvent.getParameter("selectedItem");
			var sPath = oItem.getBindingContext().getPath();

			var oListBox = this.getView().byId("idListBox");
			oListBox.bindElement(sPath);
		}

	});

});