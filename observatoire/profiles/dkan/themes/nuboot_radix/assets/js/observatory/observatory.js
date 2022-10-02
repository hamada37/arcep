(function () {
    window.odometerOptions = {
        auto: false
    };
    var elements = document.querySelectorAll('.KPI-data');

    if (elements.length > 0)
        for (var index = 0; index < elements.length; index++) {
            
            var data = elements[index].innerHTML;

            var odometer = new Odometer({
                el: elements[index],
                value: 0.0,
                format: '(ddd).dd',
                animation: 'count',
                duration: 3000
            });

            odometer.update(data + 'M');
        }
})();