angular.module('myApp')
.component('owlCarousel', {
        templateUrl : 'components/owl-carousel/owl-carousel.html',
        bindings : {
            items1 : '<',
            items2 : '<',
            itemSrc : '<'
        },
    controller: ['$scope', '$element','$timeout', function (scope,element, $timeout) {
            this.inita = function(elem) {
                elem = $(elem).find('.owl-carousel');
                $(elem).owlCarousel();
                this.car = $(elem).data('owl.carousel');
            };

            this.$onChanges = function (change) {
                if(change.itemSrc && typeof change.itemSrc.currentValue !== 'undefined') {
                    if(change.itemSrc.currentValue){
                        this.car && this.car.destroy();
                        this.itemc = [...this.items2];
                        $timeout(() => {this.inita(element)},0);
                    }else {
                        this.car && this.car.destroy();
                        this.itemc = [...this.items1];
                        $timeout(() => {this.inita(element)},0);
                    }

                }
        };

    }]
});
