define(function (require) {

    "use strict";

    var $           = require('jquery'),
        Handlebars  = require('handlebars'),
        Backbone    = require('backbone'),
        tplText     = require('text!tpl/Product.html'),
        template = Handlebars.compile(tplText);

    return Backbone.View.extend({

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(template(this.model.toJSON()));
            return this;
        },

        events: {
            "click .small-pic": "showLargePic",
            "click .large-pic": "hideLargePic",
            "click .camera-button": "addPicture"
        },

        showLargePic: function() {
            $(".large-pic-bg", this.$el).show();
            $(".large-pic", this.$el).show();
        },

        hideLargePic: function() {
            $(".large-pic-bg", this.$el).hide();
            $(".large-pic", this.$el).hide();
        },

        addPicture: function (e) {
            console.log("add picture");
            if(!navigator.camera) {
                alert("Camera not supported");
                return;
            }

            var self = this,
                fileName,
                $target = $(e.target),
                options = {   quality: 45,
                    targetWidth: 1000,
                    targetHeight: 1000,
                    destinationType: Camera.DestinationType.FILE_URI,
                    encodingType: Camera.EncodingType.JPEG };

            if ($target.is($(".album-button"))) {
                options.sourceType = Camera.PictureSourceType.SAVEDPHOTOALBUM;
                options.saveToPhotoAlbum = false;
            } else if ($target.is($(".library-button"))) {
                options.sourceType = Camera.PictureSourceType.PHOTOLIBRARY;
                options.saveToPhotoAlbum = false;
            } else {
                options.sourceType = Camera.PictureSourceType.CAMERA;
                options.saveToPhotoAlbum = true;
            }

            navigator.camera.getPicture(
                function (imageURI) {
                    // without setTimeout(), the code below seems to be executed twice.
                    setTimeout(function () {
                        $(".thumb-scroller2", self.el).append("<div class='thumb'><img src='" + imageURI + "'/></div>");
//                        fileName = self.model.get("userName") + "-" + new Date().getTime() + ".jpg";
//                        fileName = uuid.generate() + ".jpg";
//                        uploader.upload(imageURI, fileName).done(function () {
//                            self.pictures.push({path: fileName});
//                        });
//                        self.pictures.push({path: fileName});
                    });
                },
                function (message) {
//                    We typically get here because the use canceled the photo operation. Seems better to fail silently.
//                    setTimeout(function () {
//                        alert("Error taking picture");
//                    });
                }, options);
            return false;
        }


    });

});