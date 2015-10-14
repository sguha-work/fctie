FusionCharts.ready(function () {
    var salesMap = new FusionCharts({
        type: 'usa',
        renderAt: 'chart-container',
        width: '500',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Annual Sales by State",
                    "subcaption": "Last year",
                    "entityFillHoverColor": "#cccccc",
                    "numberPrefix": "$",
                    "showLabels": "1",
                    "theme": "fint"
            },
                "colorrange": {
                "minvalue": "920000",
                    "startlabel": "Low",
                    "endlabel": "High",
                    "code": "#e44a00",
                    "gradient": "1",
                    "color": [{
                    "maxvalue": "56580000",
                        "displayvalue": "Average",
                        "code": "#f8bd19"
                }, {
                    "maxvalue": "97400000",
                        "code": "#6baa01"
                }]
            },
                "data": [{
                "id": "HI",
                    "value": "3189000"
            }, {
                "id": "DC",
                    "value": "2879000"
            }, {
                "id": "MD",
                    "value": "33592000"
            }, {
                "id": "DE",
                    "value": "4607000"
            }, {
                "id": "RI",
                    "value": "4890000"
            }, {
                "id": "WA",
                    "value": "34927000"
            }, {
                "id": "OR",
                    "value": "65798000"
            }, {
                "id": "CA",
                    "value": "61861000"
            }, {
                "id": "AK",
                    "value": "58911000"
            }, {
                "id": "ID",
                    "value": "42662000"
            }, {
                "id": "NV",
                    "value": "78041000"
            }, {
                "id": "AZ",
                    "value": "41558000"
            }, {
                "id": "MT",
                    "value": "62942000"
            }, {
                "id": "WY",
                    "value": "78834000"
            }, {
                "id": "UT",
                    "value": "50512000"
            }, {
                "id": "CO",
                    "value": "73026000"
            }, {
                "id": "NM",
                    "value": "78865000"
            }, {
                "id": "ND",
                    "value": "50554000"
            }, {
                "id": "SD",
                    "value": "35922000"
            }, {
                "id": "NE",
                    "value": "43736000"
            }, {
                "id": "KS",
                    "value": "32681000"
            }, {
                "id": "OK",
                    "value": "79038000"
            }, {
                "id": "TX",
                    "value": "97344000",
                    "fillHoverColor": "#2d8701",
                    "fontBold": "1",
                    "tooltext": "Highest sale for last year. Texas $97.34M"
            }, {
                "id": "MN",
                    "value": "43485000"
            }, {
                "id": "IA",
                    "value": "46515000"
            }, {
                "id": "MO",
                    "value": "63715000"
            }, {
                "id": "AR",
                    "value": "34497000"
            }, {
                "id": "LA",
                    "value": "70706000"
            }, {
                "id": "WI",
                    "value": "42382000"
            }, {
                "id": "IL",
                    "value": "73202000"
            }, {
                "id": "KY",
                    "value": "79118000"
            }, {
                "id": "TN",
                    "value": "44657000"
            }, {
                "id": "MS",
                    "value": "66205000"
            }, {
                "id": "AL",
                    "value": "75873000"
            }, {
                "id": "GA",
                    "value": "76895000"
            }, {
                "id": "MI",
                    "value": "67695000"
            }, {
                "id": "IN",
                    "value": "920000",
                    "fillHoverColor": "#cc0000",
                    "fontBold": "1",
                    "tooltext": "Lowest sale for last year. Indiana $920K"
            }, {
                "id": "OH",
                    "value": "32960000"
            }, {
                "id": "PA",
                    "value": "54346000"
            }, {
                "id": "NY",
                    "value": "42828000"
            }, {
                "id": "VT",
                    "value": "77411000"
            }, {
                "id": "NH",
                    "value": "51403000"
            }, {
                "id": "ME",
                    "value": "64636000"
            }, {
                "id": "MA",
                    "value": "51767000"
            }, {
                "id": "CT",
                    "value": "57353000"
            }, {
                "id": "NJ",
                    "value": "80788000"
            }, {
                "id": "WV",
                    "value": "95890000"
            }, {
                "id": "VA",
                    "value": "83140000"
            }, {
                "id": "NC",
                    "value": "75425000"
            }, {
                "id": "SC",
                    "value": "88234000"
            }, {
                "id": "FL",
                    "value": "88234000"
            }],
                "markers": {
                "application": [{
                    "id": "low-state-origin",
                        "shapeId": "circle",
                        "radius": "1"
                }, {
                    "id": "low-state-label",
                        "shapeId": "circle",
                        "radius": "1"
                }, {
                    "id": "high-state-origin",
                        "shapeId": "circle",
                        "radius": "1"
                }, {
                    "id": "high-state-label",
                        "shapeId": "circle",
                        "radius": "1"
                }],
                    "definition": [{
                    "id": "low-state-origin",
                        "x": "490",
                        "y": "160"
                }, {
                    "id": "low-state-Label",
                        "label": "Indiana{br}Lowest sale.{br}$920K",
                        "labelcolor": "#e44a00",
                        "labelPosition": "top",
                        "x": "600",
                        "y": "70"
                }, {
                    "id": "high-state-origin",
                        "x": "340",
                        "y": "320"
                }, {
                    "id": "high-state-Label",
                        "label": "Texas{br}Highest sale.{br}$97.34M",
                        "labelcolor": "#6baa01",
                        "labelPosition": "bottom",
                        "x": "430",
                        "y": "400"
                }],
                    "connectors": [{
                    "from": "low-state-origin",
                        "to": "low-state-label",
                        "color": "#9b59b6"
                }, {
                    "from": "high-state-origin",
                        "to": "high-state-label",
                        "color": "#9b59b6"
                }]
            }
        },
            "events": {

            /**
             * @description
             * Triggered when the mouse pointer is rolled out from over an entity on a map.
             *
             * @param {Object} eventObj: An object containing all the details related to this event like eventId, sender, etc.
             * @param {Object} dataObj: An object containing all the details related to the entity, such as the entity label, entity value, and so on.
             */

                "entityRollOut": function (eventObj, dataObj) {
                console.log(eventObj);
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