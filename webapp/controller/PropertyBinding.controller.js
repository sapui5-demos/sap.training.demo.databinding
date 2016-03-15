sap.ui.define([
	"sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("sap.training.controller.PropertyBinding", {

		onInit: function() {
			var oModel = new JSONModel();
			oModel.loadData("json/data_1.json");

			this.getView().setModel(oModel);
		}

	});

});