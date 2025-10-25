sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("student.com.sap.training.advancedsapui5.fullscreen.controller.Carrier", {
            onInit: function () {

            },

            getRouter: function () {
                return sap.ui.core.UIComponent.getRouterFor(this);
            },

            onPress: function (oEvent) {
                var sCarrid = oEvent.getSource().getBindingContext().getProperty("Carrid");
                this.getRouter().navTo("flights", {
                    carrid: sCarrid
                }, false);
            }
        });
    });
