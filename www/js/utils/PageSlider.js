define(function (require) {

    "use strict";

    var $ = require('jquery');

    return function PageSlider(container) {

        var $container = container,
            currentPage,
            stateHistory = [];

        $container.on("click", ".menu-button", function (event) {
            event.preventDefault();
            if ($container.hasClass("offset")) {
                $container.attr("class", "center transition");
            } else {
                $container.attr("class", "offset transition");
            }
        });

        this.back = function () {
            location.hash = stateHistory[stateHistory.length - 2];
        }

        // Use this function if you want PageSlider to automatically determine the sliding direction based on the state history
        this.slidePage = function (page) {

            var l = stateHistory.length,
                state = window.location.hash;

            if (l === 0) {
                stateHistory.push(state);
                this.slidePageFrom(page);
                return;
            }

            if ($container.hasClass("offset")) {
                stateHistory.push(state);
                if (currentPage.attr('data-persistent') !== 'true') {
                    currentPage.remove();
                }
                $container.append(page);
                page.attr("class", "page page-center");
                $container[0].offsetWidth;
                $container.attr("class", "center transition");
                currentPage = page;
                return;
            }

            if (state === stateHistory[l - 2]) {
                stateHistory.pop();
                this.slidePageFrom(page, 'page-left');
            } else {
                stateHistory.push(state);
                this.slidePageFrom(page, 'page-right');
            }

        }

        // Use this function directly if you want to control the sliding direction outside PageSlider
        this.slidePageFrom = function (page, from) {

            if (page.attr('data-persistent') !== 'true') {
                $container.append(page);
            }

            if (!currentPage || !from) {
                page.attr("class", "page page-center");
                currentPage = page;
                return;
            }

            // Position the page at the starting position of the animation
            page.attr("class", "page " + from);

            currentPage.one('webkitTransitionEnd', function (e) {
                var page = $(e.target);
                if (page.attr('data-persistent') !== 'true') {
                    page.remove();
                }
            });

            // Force reflow. More information here: http://www.phpied.com/rendering-repaint-reflowrelayout-restyle/
            $container[0].offsetWidth;

            // Position the new page and the current page at the ending position of their animation with a transition class indicating the duration of the animation
            page.attr("class", "page transition page-center");
            currentPage.attr("class", "page transition " + (from === "page-left" ? "page-right" : "page-left"));
            currentPage = page;
            console.log(currentPage);
        }

        this.getCurrentState = function () {
            return stateHistory[(stateHistory.length - 1)];
        },

        this.getCurrentPage = function () {
            return currentPage;
        },

        this.closeMenu = function() {
            $container.attr("class", "center transition");
        }

    }

});