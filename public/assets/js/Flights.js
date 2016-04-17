
    var app = angular.module('flightApp', []);
        app.controller('FlightListController', function(){
           this.flights = list;
           this.ingoing = list2;
            });
            var list2 = [
                {
                    num : 123,
                    from: "Egypt",
                    in:"France",
                    stat:"Arrived"
                },{
                    num : 303,
                    from: "France",
                    in:"Egypt",
                    stat:"not Arrived" 
                },{
                    num : 404,
                    from: "England",
                    in:"France",
                    stat:"not Arrived" 
                },{
                     num : 596,
                    from: "Egypt",
                    in:"England",
                    stat:"Arrived"
                },
                ]
            var list = [
    {
        num: 598,
        dep: "4/4/2016",
        from: "France",
        to: "egypt",
        slots: 100
    },
    {
        num: 668,
        dep: "4/4/2016",
        from: "england",
        to: "egypt",
        slots: 100
    },{
        num: 808,
        dep: "11/02/2016",
        from: "england",
        to: "France",
        slots: 100
    },{
        num: 598,
        dep: "4/4/2016",
        from: "england",
        to: "egypt",
        slots: 100
    },{
        num: 603,
        dep: "4/4/2016",
        from: "england",
        to: "egypt",
        slots: 100
    },{
        num: 555,
        dep: "4/4/2016",
        from: "england",
        to: "egypt",
        slots: 100
    },
]
            

