FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        type: 'column2d',
        renderAt: 'chart-container',
        width: '500',
        height: '350',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Monthly revenue for last year",
                    "subCaption": "Harry's SuperMart",
                    "xAxisName": "Month",
                    "yAxisName": "Revenue (In USD)",
                    "numberPrefix": "$",
                    "paletteColors": "#0075c2",
                    "bgColor": "#ffffff",
                    "borderAlpha": "20",
                    "canvasBorderAlpha": "0",
                    "usePlotGradientColor": "0",
                    "plotBorderAlpha": "10",
                    "placevaluesInside": "1",
                    "rotatevalues": "1",
                    "valueFontColor": "#ffffff",
                    "showXAxisLine": "1",
                    "xAxisLineColor": "#999999",
                    "divlineColor": "#999999",
                    "divLineIsDashed": "1",
                    "showAlternateHGridColor": "0",
                    "subcaptionFontBold": "0",
                    "subcaptionFontSize": "14",
                // This is a demo URL. In real life cases, this URL can point to any valid URL like http://www.fusioncharts.com
                "clickURL": "#!/demoURL"
            },
                "data": [{
                "label": "Jan",
                    "value": "420000"
            }, {
                "label": "Feb",
                    "value": "810000"
            }, {
                "label": "Mar",
                    "value": "720000"
            }, {
                "label": "Apr",
                    "value": "550000"
            }, {
                "label": "May",
                    "value": "910000"
            }, {
                "label": "Jun",
                    "value": "510000"
            }, {
                "label": "Jul",
                    "value": "680000"
            }, {
                "label": "Aug",
                    "value": "620000"
            }, {
                "label": "Sep",
                    "value": "610000"
            }, {
                "label": "Oct",
                    "value": "490000"
            }, {
                "label": "Nov",
                    "value": "900000"
            }, {
                "label": "Dec",
                    "value": "730000"
            }]
        },
            "events": {

            /**
             * @description
             * Triggered when any chart element made clickable, by configuring a link, is clicked.
             *
             * @param {Object} eventObj: An object containing all the details related to this event like eventId, sender, etc.
             * @param {Object} dataObj: An object containing all the details related to chart data, such as link invoked, and so on.
             */

                "linkClicked": function (eventObj, dataObj) {
                console.log(eventObj);
                eventObj.stopPropagation();
                eventObj.prevented = true;
                eventObj.cancelled = true;
                var header = document.getElementById('header');
                header.style.display = 'block';

                var tempDiv = document.createElement('div');
                var attrsTable = document.getElementById('attrs-table');
                var titleDiv, valueDiv;
                for (var prop in dataObj) {
                    titleDiv = document.createElement('div');
                    titleDiv.className = 'title';
                    titleDiv.innerHTML = prop;

                    valueDiv = document.createElement('div');
                    valueDiv.className = 'value';
                    valueDiv.innerHTML = dataObj[prop];

                    tempDiv.appendChild(titleDiv);
                    tempDiv.appendChild(valueDiv);
                }
                attrsTable.innerHTML = '';
                attrsTable.appendChild(tempDiv);
            }
        }
    }).render();
});