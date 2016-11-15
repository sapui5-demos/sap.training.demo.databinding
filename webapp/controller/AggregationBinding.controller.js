sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device",
	"sap/ui/model/json/JSONModel"
], function(Controller, Device, JSONModel) {
	"use strict";

	return Controller.extend("sap.training.controller.AggregationBinding", {

		onInit: function() {
			// apply compact density if touch is not supported, the standard cozy design otherwise
			this.getView().addStyleClass(Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");

			var oModel = new JSONModel();
			oModel.loadData("model/data_2.json");

			this.getView().setModel(oModel);
		}

	});

});