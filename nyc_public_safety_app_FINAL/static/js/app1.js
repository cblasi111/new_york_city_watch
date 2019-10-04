var NYC = d3.select(".NYC")
var Manhattan = d3.select(".Manhattan");
var Bronx = d3.select(".Bronx");
var Queens = d3.select(".Queens");
var Brooklyn = d3.select(".Brooklyn");
var SI = d3.select(".SI");


d3.csv("static/data/Manhattan_911.csv", function (error, Mdata) {
    d3.csv("static/data/Bronx_911.csv", function (error, BXdata) {
        d3.csv("static/data/Queens_911.csv", function (error, Qdata) {

            d3.csv("static/data/Brooklyn_911.csv", function (error, BKdata) {
                d3.csv("static/data/SI_911.csv", function (error, SIdata) {
                    d3.csv("static/data/verticalStack.csv", function (error, verticalStack){

                        // Format the data
                        //Manhattan
                        Mdata.forEach(function (data) {
                            data.IncidentsNo = +data.IncidentsNo;
                            data.AvgResponseTimesMinutes = +data.AvgResponseTimesMinutes;
                        });
                    var Month = Mdata.map(data => data.Month);
                    var MIncidentsNo = Mdata.map(data => data.IncidentsNo);
                    console.log("MIncidentsNo", MIncidentsNo);
                    var MAvgResponseTimesMinutes = Mdata.map(data => data.AvgResponseTimesMinutes);
                    console.log("MAvgResponseTimesMinutes", MAvgResponseTimesMinutes);

                    // Bronx
                    BXdata.forEach(function (data) {
                        data.IncidentsNo = +data.IncidentsNo;
                        data.AvgResponseTimesMinutes = +data.AvgResponseTimesMinutes;
                    });
                    var BXIncidentsNo = BXdata.map(data => data.IncidentsNo);
                    console.log("BXIncidentsNo", BXIncidentsNo);
                    var BXAvgResponseTimesMinutes = BXdata.map(data => data.AvgResponseTimesMinutes);
                    console.log("BXAvgResponseTimesMinutes", BXAvgResponseTimesMinutes);

                    //Queens
                    Qdata.forEach(function (data) {
                        data.IncidentsNo = +data.IncidentsNo;
                        data.AvgResponseTimesMinutes = +data.AvgResponseTimesMinutes;
                    });
                    var QIncidentsNo = Qdata.map(data => data.IncidentsNo);
                    console.log("QIncidentsNo", QIncidentsNo);
                    var QAvgResponseTimesMinutes = Qdata.map(data => data.AvgResponseTimesMinutes);
                    console.log("QAvgResponseTimesMinutes", QAvgResponseTimesMinutes);

                    //Brooklyn
                    BKdata.forEach(function (data) {
                        data.IncidentsNo = +data.IncidentsNo;
                        data.AvgResponseTimesMinutes = +data.AvgResponseTimesMinutes;
                    });
                    var BKIncidentsNo = BKdata.map(data => data.IncidentsNo);
                    console.log("BKIncidentsNo", BKIncidentsNo);
                    var BKAvgResponseTimesMinutes = BKdata.map(data => data.AvgResponseTimesMinutes);
                    console.log("BKAvgResponseTimesMinutes", BKAvgResponseTimesMinutes);

                    //SI
                    SIdata.forEach(function (data) {
                        data.IncidentsNo = +data.IncidentsNo;
                        data.AvgResponseTimesMinutes = +data.AvgResponseTimesMinutes;
                    });
                    var SIIncidentsNo = SIdata.map(data => data.IncidentsNo);
                    console.log("SIIncidentsNo", SIIncidentsNo);
                    var SIAvgResponseTimesMinutes = SIdata.map(data => data.AvgResponseTimesMinutes);
                    console.log("SIAvgResponseTimesMinutes", SIAvgResponseTimesMinutes);


                    var trace1 = {
                        x: Month,
                        y: MAvgResponseTimesMinutes,
                        name: 'Manhattan Response Times',
                        mode: 'lines+markers',
                        line: {
                            color: 'rgb(0,133,66)',
                            width: 3,
                            shape: 'spline',
                            dash: '0px 5200px',
                        },
                        marker: {
                            color: 'rgb(0,133,66)',
                            size: 10,
                        },
                    };

                    var trace2 = {
                        x: Month,
                        y: BXAvgResponseTimesMinutes,
                        name: ' Bronx Response Times',
                        mode: 'lines+markers',
                        line: {
                            color: 'rgb(210,50,45)',
                            width: 3,
                            shape: 'spline',
                            dash: '0px 5200px',
                        },
                        marker: {
                            color: 'rgb(210,50,45)',
                            size: 10,
                        },
                    };

                    var trace3 = {
                        x: Month,
                        y: QAvgResponseTimesMinutes,
                        name: ' Queens Response Times',
                        mode: 'lines+markers',
                        line: {
                            color: 'rgb(237,156,40)',
                            width: 3,
                            shape: 'spline',
                            dash: '0px 5200px',
                        },
                        marker: {
                            color: 'rgb(237,156,40)',
                            size: 10,
                        },
                    };

                    var trace4 = {
                        x: Month,
                        y: BKAvgResponseTimesMinutes,
                        name: 'Brooklyn Response Times',
                        mode: 'lines+markers',
                        line: {
                            color: 'rgb(66,139,202)',
                            width: 3,
                            shape: 'spline',
                            dash: '0px 5200px',
                        },
                        marker: {
                            color: 'rgb(66,139,202)',
                            size: 10,
                        },
                    };

                    var trace5 = {
                        x: Month,
                        y: SIAvgResponseTimesMinutes,
                        name: 'Staten Island Response Times',
                        mode: 'lines+markers',
                        line: {
                            color: 'rgb(57,179,215)',
                            width: 3,
                            shape: 'spline',
                            dash: '0px 5200px',
                        },
                        marker: {
                            color: 'rgb(57,179,215)',
                            size: 10,
                        },
                    };

                    var layout = {
                        // autosize = false,
                        // width = 450,
                        // height = 200,
                        // margin: {
                        //     l: 50,
                        //     r: 50,
                        //     b: 100,
                        //     t: 100,
                        //     pad: 4
                        // },
                        title: {
                            text: 'EMS Response Times',
                            font: {
                                size: 14
                            },
                            x: 0.5,
                            y: 1.5,
                            xanchor: 'center',
                            yanchor: 'bottom'
                        },
                        xaxis: {
                            showgrid: true,
                            showline: true,
                            zeroline: true,
                            zerolinecolor: 'rgb(33,33,33)',
                            zerolinewidth: 4,
                            mirror: 'ticks',
                            ticks: 'inside',
                            showticklabels: true,
                            gridcolor: '#bdbdbd',
                            gridwidth: 0.5
                        },
                        yaxis: {
                            title: 'Avg. Response Time (Minutes)',
                            titlefont: { color: 'rgb(33,33,33)' },
                            tickfont: { color: 'rgb(33,33,33)' },
                            overlaying: 'y',
                            side: 'left',
                            showgrid: true,
                            showline: true,
                            zeroline: true,
                            zerolinecolor: 'rgb(33,33,33)',
                            zerolinewidth: 4,
                            mirror: 'ticks',
                            gridcolor: '#bdbdbd',
                            gridwidth: 1,

                        },
                        legend: { x: 0, y: 1, "orientation": "h" },
                        showlegend: false,
                        showgrid: true,

                    };




                    data = [trace1, trace2, trace3, trace4, trace5]
                    Plotly.newPlot('map2', data, layout).then(function () {
                        return Plotly.animate('map2',
                            [{
                                data: [{ 'line.dash': '5200px 0px' },
                                { 'line.dash': '5200px 0px' },
                                { 'line.dash': '5200px 0px' },
                                { 'line.dash': '5200px 0px' },
                                { 'line.dash': '5200px 0px' },]
                            }],
                            {
                                frame: { duration: 5000, redraw: false },
                                transition: { duration: 5000 }
                            }

                        );
                    });



                    console.log(verticalStack);
                    var tableData = verticalStack;
                        d3.select("tbody")
                            .selectAll("tr")
                            .data(tableData)
                            .enter()
                            .append("tr")
                            .html(function (d) {
                                return `<td>${d.Month}</td><td>${d.Borough}</td><td>${d.IncidentsNo}</td><td>${d.AvgResponseTimesMinutes}</td><td>${d.Recommended}</td><td>${d.Description}</td>`;
                            });


                });
            });

        });
    });


    });

});



NYC.on("click", function () {
    console.log("test NYC Button");
    d3.csv("static/data/Manhattan_911.csv", function (error, Mdata) {
        d3.csv("static/data/Bronx_911.csv", function (error, BXdata) {
            d3.csv("static/data/Queens_911.csv", function (error, Qdata) {

                d3.csv("static/data/Brooklyn_911.csv", function (error, BKdata) {
                    d3.csv("static/data/SI_911.csv", function (error, SIdata) {

                        // Format the data
                        //Manhattan
                        Mdata.forEach(function (data) {
                            data.IncidentsNo = +data.IncidentsNo;
                            data.AvgResponseTimesMinutes = +data.AvgResponseTimesMinutes;
                        });
                        var Month = Mdata.map(data => data.Month);
                        var MIncidentsNo = Mdata.map(data => data.IncidentsNo);
                        console.log("MIncidentsNo", MIncidentsNo);
                        var MAvgResponseTimesMinutes = Mdata.map(data => data.AvgResponseTimesMinutes);
                        console.log("MAvgResponseTimesMinutes", MAvgResponseTimesMinutes);

                        // Bronx
                        BXdata.forEach(function (data) {
                            data.IncidentsNo = +data.IncidentsNo;
                            data.AvgResponseTimesMinutes = +data.AvgResponseTimesMinutes;
                        });
                        var BXIncidentsNo = BXdata.map(data => data.IncidentsNo);
                        console.log("BXIncidentsNo", BXIncidentsNo);
                        var BXAvgResponseTimesMinutes = BXdata.map(data => data.AvgResponseTimesMinutes);
                        console.log("BXAvgResponseTimesMinutes", BXAvgResponseTimesMinutes);

                        //Queens
                        Qdata.forEach(function (data) {
                            data.IncidentsNo = +data.IncidentsNo;
                            data.AvgResponseTimesMinutes = +data.AvgResponseTimesMinutes;
                        });
                        var QIncidentsNo = Qdata.map(data => data.IncidentsNo);
                        console.log("QIncidentsNo", QIncidentsNo);
                        var QAvgResponseTimesMinutes = Qdata.map(data => data.AvgResponseTimesMinutes);
                        console.log("QAvgResponseTimesMinutes", QAvgResponseTimesMinutes);

                        //Brooklyn
                        BKdata.forEach(function (data) {
                            data.IncidentsNo = +data.IncidentsNo;
                            data.AvgResponseTimesMinutes = +data.AvgResponseTimesMinutes;
                        });
                        var BKIncidentsNo = BKdata.map(data => data.IncidentsNo);
                        console.log("BKIncidentsNo", BKIncidentsNo);
                        var BKAvgResponseTimesMinutes = BKdata.map(data => data.AvgResponseTimesMinutes);
                        console.log("BKAvgResponseTimesMinutes", BKAvgResponseTimesMinutes);

                        //SI
                        SIdata.forEach(function (data) {
                            data.IncidentsNo = +data.IncidentsNo;
                            data.AvgResponseTimesMinutes = +data.AvgResponseTimesMinutes;
                        });
                        var SIIncidentsNo = SIdata.map(data => data.IncidentsNo);
                        console.log("SIIncidentsNo", SIIncidentsNo);
                        var SIAvgResponseTimesMinutes = SIdata.map(data => data.AvgResponseTimesMinutes);
                        console.log("SIAvgResponseTimesMinutes", SIAvgResponseTimesMinutes);


                        var trace1 = {
                            x: Month,
                            y: MAvgResponseTimesMinutes,
                            name: 'Manhattan Response Times',
                            mode: 'lines+markers',
                            line: {
                                color: 'rgb(0,133,66)',
                                width: 3,
                                shape: 'spline',
                                dash: '0px 5200px',
                            },
                            marker: {
                                color: 'rgb(0,133,66)',
                                size: 10,
                            },
                        };

                        var trace2 = {
                            x: Month,
                            y: BXAvgResponseTimesMinutes,
                            name: ' Bronx Response Times',
                            mode: 'lines+markers',
                            line: {
                                color: 'rgb(210,50,45)',
                                width: 3,
                                shape: 'spline',
                                dash: '0px 5200px',
                            },
                            marker: {
                                color: 'rgb(210,50,45)',
                                size: 10,
                            },
                        };

                        var trace3 = {
                            x: Month,
                            y: QAvgResponseTimesMinutes,
                            name: ' Queens Response Times',
                            mode: 'lines+markers',
                            line: {
                                color: 'rgb(237,156,40)',
                                width: 3,
                                shape: 'spline',
                                dash: '0px 5200px',
                            },
                            marker: {
                                color: 'rgb(237,156,40)',
                                size: 10,
                            },
                        };

                        var trace4 = {
                            x: Month,
                            y: BKAvgResponseTimesMinutes,
                            name: 'Brooklyn Response Times',
                            mode: 'lines+markers',
                            line: {
                                color: 'rgb(66,139,202)',
                                width: 3,
                                shape: 'spline',
                                dash: '0px 5200px',
                            },
                            marker: {
                                color: 'rgb(66,139,202)',
                                size: 10,
                            },
                        };

                        var trace5 = {
                            x: Month,
                            y: SIAvgResponseTimesMinutes,
                            name: 'Staten Island Response Times',
                            mode: 'lines+markers',
                            line: {
                                color: 'rgb(57,179,215)',
                                width: 3,
                                shape: 'spline',
                                dash: '0px 5200px',
                            },
                            marker: {
                                color: 'rgb(57,179,215)',
                                size: 10,
                            },
                        };

                        var layout = {
                            // title: 'NYC Ambulance and Fire Response Times to Life Threatening Emergencies',
                            xaxis: {
                                showgrid: true,
                                showline: true,
                                zeroline: true,
                                zerolinecolor: '#969696',
                                zerolinewidth: 4,
                                mirror: 'ticks',
                                gridcolor: '#bdbdbd',
                                gridwidth: 1
                            },
                            yaxis: {
                                title: 'Avg. Response Time (Minutes)',
                                titlefont: { color: 'rgb(148, 103, 189)' },
                                tickfont: { color: 'rgb(148, 103, 189)' },
                                overlaying: 'y',
                                side: 'left',
                                showgrid: true,
                                showline: true,
                                zeroline: true,
                                zerolinecolor: '#969696',
                                zerolinewidth: 4,
                                mirror: 'ticks',
                                gridcolor: '#bdbdbd',
                                gridwidth: 1,

                            },
                            legend: { x: 0, y: 5, "orientation": "h" },
                            showgrid: true,

                        };



                        document.getElementById("map2").innerHTML = "";
                        data = [trace1, trace2, trace3, trace4, trace5]
                        Plotly.newPlot('map2', data, layout).then(function () {
                            return Plotly.animate('map2',
                                [{
                                    data: [{ 'line.dash': '5200px 0px' },
                                    { 'line.dash': '5200px 0px' },
                                    { 'line.dash': '5200px 0px' },
                                    { 'line.dash': '5200px 0px' },
                                    { 'line.dash': '5200px 0px' },]
                                }],
                                {
                                    frame: { duration: 5000, redraw: false },
                                    transition: { duration: 5000 }
                                }

                            );
                        });


                    });
                });

            });
        });


    });


});


Manhattan.on("click", function () {
    // Select the current count
    console.log("Manhattan");

    d3.csv("static/data/Manhattan_911.csv", function (error, Mdata) {
        if (error) throw error;

        console.log(Mdata)

        // Format the data
        Mdata.forEach(function (data) {
            data.IncidentsNo = +data.IncidentsNo;
            data.AvgResponseTimesMinutes = +data.AvgResponseTimesMinutes;
        });

        var Month = Mdata.map(data => data.Month);
        console.log("Month", Month);
        var IncidentsNo = Mdata.map(data => data.IncidentsNo);
        var MIncidentsNo = Mdata.map(data => data.IncidentsNo);
        console.log("IncentsNo", IncidentsNo);
        var AvgResponseTimesMinutes = Mdata.map(data => data.AvgResponseTimesMinutes);
        var MAvgResponseTimesMinutes = Mdata.map(data => data.AvgResponseTimesMinutes);
        console.log("AvgResponseTimesMinutes", AvgResponseTimesMinutes);
        var stats = [{"Month": Month, "IncidentsNo": IncidentsNo, "AvgResponseTimesMinutes": AvgResponseTimesMinutes}];
        console.log("Stats", stats[0])
        var Mmax = Math.max.apply(null, stats[0].AvgResponseTimesMinutes);
        console.log("Mmax", Mmax);
        var Mmin = Math.min.apply(null, stats[0].AvgResponseTimesMinutes);
        console.log("Mmin", Mmin);
      

      

        var trace1 = {
            x: Month,
            y: IncidentsNo,
            name: 'Incidents No.',
            type: 'bar',
            opacity: .5,
            marker: {
                color: 'rgb(0,133,66)',
            },
        };

        var trace2 = {
            x: Month,
            y: AvgResponseTimesMinutes,
            name: 'Response Times',
            yaxis: 'y2',
            mode: 'lines+markers',
            line: {
                color: 'rgb(0,133,66)',
                width: 3,
                shape: 'spline',
                dash: '0px 5200px',
            },
            marker: {
                color: 'rgb(33,33,33)',
            },
        };

        var data1 = [trace1];
        var data2 = [trace2];
        var data = [trace2, trace1];

        var layout = {
            title: 'NYC Ambulance and Fire Response Times to Life Threatening Emergencies',
            xaxis: {
                showgrid: true,
                showline: true,
                zeroline: true,
                zerolinecolor: '#969696',
                zerolinewidth: 4,
                mirror: 'ticks',
                gridcolor: '#bdbdbd',
                gridwidth: 1
            },
            yaxis: {
                title: 'No. of Life Threatening Medical Emergencies',
                //range: [0, 12500],
                showgrid: false,
                showline: true,
                mirror: 'ticks',
                gridcolor: '#bdbdbd',
                gridwidth: 1
            },
            yaxis2: {
                title: 'Avg. Response Time (Minutes)',
                titlefont: { color: 'rgb(148, 103, 189)' },
                tickfont: { color: 'rgb(148, 103, 189)' },
                overlaying: 'y',
                side: 'right',
                //range: [7.5, 10],
                showgrid: true,
                showline: true,
                zeroline: true,
                zerolinecolor: '#969696',
                zerolinewidth: 4,
                mirror: 'ticks',
                gridcolor: '#bdbdbd',
                gridwidth: 1,

            },
            legend: { x: 0, y: 5, "orientation": "h" },
            showgrid: true,

        };

        document.getElementById("map2").innerHTML = "";
        Plotly.newPlot('map2', data, layout).then(function () {
            return Plotly.animate('map2',
                [{ data: [{ 'line.dash': '5200px 0px' }] }],
                {
                    frame: { duration: 100, redraw: false },
                    transition: { duration: 1000000000000000000000000000000 }
                }
                [{ data: [{ data1 }] }],
                {
                    frame: { duration: 300, redraw: false },
                    transition: {
                        duration: 10000000000000000000000000000000000000000,
                        easing: 'cubic-in-out',
                        redraw: false
                    }

                }
            );
        });






    });

});


Queens.on("click", function () {
    // Select the current count
    console.log("Queens");


    d3.csv("static/data/Queens_911.csv", function (error, Qdata) {
        if (error) throw error;

        console.log(Qdata)


        // Format the data
        Qdata.forEach(function (data) {
            data.IncidentsNo = +data.IncidentsNo;
            data.AvgResponseTimesMinutes = +data.AvgResponseTimesMinutes;
        });

        var Month = Qdata.map(data => data.Month);
        console.log("Month", Month);
        var IncidentsNo = Qdata.map(data => data.IncidentsNo);

        console.log("IncentsNo", IncidentsNo);
        var AvgResponseTimesMinutes = Qdata.map(data => data.AvgResponseTimesMinutes);
        console.log("AvgResponseTimesMinutes", AvgResponseTimesMinutes);


        var trace1 = {
            x: Month,
            y: IncidentsNo,
            name: 'Incidents No.',
            type: 'bar',
            opacity: .5,
            marker: {
                color: 'rgb(237,156,40)',
            },
        };

        var trace2 = {
            x: Month,
            y: AvgResponseTimesMinutes,
            name: 'Response Times',
            yaxis: 'y2',
            mode: 'lines+markers',
            line: {
                color: 'rgb(237,156,40)',
                width: 3,
                shape: 'spline',
                dash: '0px 5200px',
            },
            marker: {
                color: 'rgb(33,33,33)',
            },
        };

        var data1 = [trace1];
        var data2 = [trace2];
        var data = [trace2, trace1];

        var layout = {
            title: 'NYC Ambulance and Fire Response Times to Life Threatening Emergencies',
            xaxis: {
                showgrid: true,
                showline: true,
                zeroline: true,
                zerolinecolor: '#969696',
                zerolinewidth: 4,
                mirror: 'ticks',
                gridcolor: '#bdbdbd',
                gridwidth: 1
            },
            yaxis: {
                title: 'No. of Life Threatening Medical Emergencies',
                //range: [0, 12500],
                showgrid: false,
                showline: true,
                mirror: 'ticks',
                gridcolor: '#bdbdbd',
                gridwidth: 1
            },
            yaxis2: {
                title: 'Avg. Response Time (Minutes)',
                titlefont: { color: 'rgb(148, 103, 189)' },
                tickfont: { color: 'rgb(148, 103, 189)' },
                overlaying: 'y',
                side: 'right',
                //range: [7.5, 10],
                showgrid: true,
                showline: true,
                zeroline: true,
                zerolinecolor: '#969696',
                zerolinewidth: 4,
                mirror: 'ticks',
                gridcolor: '#bdbdbd',
                gridwidth: 1,

            },
            legend: { x: 0, y: 5, "orientation": "h" },
            showgrid: true,

        };

        document.getElementById("map2").innerHTML = "";
        Plotly.newPlot('map2', data, layout).then(function () {
            return Plotly.animate('map2',
                [{ data: [{ 'line.dash': '5200px 0px' }] }],
                {
                    frame: { duration: 100, redraw: false },
                    transition: { duration: 1000000000000000000000000000000 }
                }
                [{ data: [{ data1 }] }],
                {
                    frame: { duration: 300, redraw: false },
                    transition: {
                        duration: 10000000000000000000000000000000000000000,
                        easing: 'cubic-in-out',
                        redraw: false
                    }

                }
            );
        });
    });

});


Bronx.on("click", function () {
    // Select the current count
    console.log("Bronx");


    d3.csv("static/data/Bronx_911.csv", function (error, BXdata) {
        if (error) throw error;

        console.log(BXdata)

        var parseTime = d3.timeParse("%b-%Y");

        // Format the data
        BXdata.forEach(function (data) {
            data.IncidentsNo = +data.IncidentsNo;
            data.AvgResponseTimesMinutes = +data.AvgResponseTimesMinutes;
        });

        var Month = BXdata.map(data => data.Month);
        console.log("Month", Month);
        var IncidentsNo = BXdata.map(data => data.IncidentsNo);
        console.log("IncentsNo", IncidentsNo);
        var AvgResponseTimesMinutes = BXdata.map(data => data.AvgResponseTimesMinutes);
        console.log("AvgResponseTimesMinutes", AvgResponseTimesMinutes);

        var trace1 = {
            x: Month,
            y: IncidentsNo,
            name: 'Incidents No.',
            type: 'bar',
            opacity: .5,
            marker: {
                color: 'rgb(210,50,45)',
            },
        };

        var trace2 = {
            x: Month,
            y: AvgResponseTimesMinutes,
            name: 'Response Times',
            yaxis: 'y2',
            mode: 'lines+markers',
            line: {
                color: 'rgb(210,50,45)',
                width: 3,
                shape: 'spline',
                dash: '0px 5200px',
            },
            marker: {
                color: 'rgb(33,33,33)',
            },
        };

        var data1 = [trace1];
        var data2 = [trace2];
        var data = [trace2, trace1];

        var layout = {
            title: 'NYC Ambulance and Fire Response Times to Life Threatening Emergencies',
            xaxis: {
                showgrid: true,
                showline: true,
                zeroline: true,
                zerolinecolor: '#969696',
                zerolinewidth: 4,
                mirror: 'ticks',
                gridcolor: '#bdbdbd',
                gridwidth: 1
            },
            yaxis: {
                title: 'No. of Life Threatening Medical Emergencies',
                //range: [0, 12500],
                showgrid: false,
                showline: true,
                mirror: 'ticks',
                gridcolor: '#bdbdbd',
                gridwidth: 1
            },
            yaxis2: {
                title: 'Avg. Response Time (Minutes)',
                titlefont: { color: 'rgb(148, 103, 189)' },
                tickfont: { color: 'rgb(148, 103, 189)' },
                overlaying: 'y',
                side: 'right',
                //range: [7.5, 10],
                showgrid: true,
                showline: true,
                zeroline: true,
                zerolinecolor: '#969696',
                zerolinewidth: 4,
                mirror: 'ticks',
                gridcolor: '#bdbdbd',
                gridwidth: 1,

            },
            legend: { x: 0, y: 5, "orientation": "h" },
            showgrid: true,

        };

        document.getElementById("map2").innerHTML = "";
        Plotly.newPlot('map2', data, layout).then(function () {
            return Plotly.animate('map2',
                [{ data: [{ 'line.dash': '5200px 0px' }] }],
                {
                    frame: { duration: 100, redraw: false },
                    transition: { duration: 1000000000000000000000000000000 }
                }
                [{ data: [{ data1 }] }],
                {
                    frame: { duration: 300, redraw: false },
                    transition: {
                        duration: 10000000000000000000000000000000000000000,
                        easing: 'cubic-in-out',
                        redraw: false
                    }

                }
            );
        });
    });

});

Brooklyn.on("click", function () {
    // Select the current count
    console.log("Brooklyn");


    d3.csv("static/data/Brooklyn_911.csv", function (error, BKdata) {
        if (error) throw error;

        console.log(BKdata)

        var parseTime = d3.timeParse("%b-%Y");

        // Format the data
        BKdata.forEach(function (data) {
            data.IncidentsNo = +data.IncidentsNo;
            data.AvgResponseTimesMinutes = +data.AvgResponseTimesMinutes;
        });

        var Month = BKdata.map(data => data.Month);
        console.log("Month", Month);
        var IncidentsNo = BKdata.map(data => data.IncidentsNo);
        console.log("IncentsNo", IncidentsNo);
        var AvgResponseTimesMinutes = BKdata.map(data => data.AvgResponseTimesMinutes);
        console.log("AvgResponseTimesMinutes", AvgResponseTimesMinutes);


        var trace1 = {
            x: Month,
            y: IncidentsNo,
            name: 'Incidents No.',
            type: 'bar',
            opacity: .5,
            marker: {
                color: 'rgb(66,139,202)',
            },
        };

        var trace2 = {
            x: Month,
            y: AvgResponseTimesMinutes,
            name: 'Response Times',
            yaxis: 'y2',
            mode: 'lines+markers',
            line: {
                color: 'rgb(66,139,202)',
                width: 3,
                shape: 'spline',
                dash: '0px 5200px',
            },
            marker: {
                color: 'rgb(33,33,33)',
            },
        };

        var data1 = [trace1];
        var data2 = [trace2];
        var data = [trace2, trace1];

        var layout = {
            title: 'NYC Ambulance and Fire Response Times to Life Threatening Emergencies',
            xaxis: {
                showgrid: true,
                showline: true,
                zeroline: true,
                zerolinecolor: '#969696',
                zerolinewidth: 4,
                mirror: 'ticks',
                gridcolor: '#bdbdbd',
                gridwidth: 1
            },
            yaxis: {
                title: 'No. of Life Threatening Medical Emergencies',
                //range: [0, 12500],
                showgrid: false,
                showline: true,
                mirror: 'ticks',
                gridcolor: '#bdbdbd',
                gridwidth: 1
            },
            yaxis2: {
                title: 'Avg. Response Time (Minutes)',
                titlefont: { color: 'rgb(148, 103, 189)' },
                tickfont: { color: 'rgb(148, 103, 189)' },
                overlaying: 'y',
                side: 'right',
                //range: [7.5, 10],
                showgrid: true,
                showline: true,
                zeroline: true,
                zerolinecolor: '#969696',
                zerolinewidth: 4,
                mirror: 'ticks',
                gridcolor: '#bdbdbd',
                gridwidth: 1,

            },
            legend: { x: 0, y: 5, "orientation": "h" },
            showgrid: true,

        };

        document.getElementById("map2").innerHTML = "";
        Plotly.newPlot('map2', data, layout).then(function () {
            return Plotly.animate('map2',
                [{ data: [{ 'line.dash': '5200px 0px' }] }],
                {
                    frame: { duration: 100, redraw: false },
                    transition: { duration: 1000000000000000000000000000000 }
                }
                [{ data: [{ data1 }] }],
                {
                    frame: { duration: 300, redraw: false },
                    transition: {
                        duration: 10000000000000000000000000000000000000000,
                        easing: 'cubic-in-out',
                        redraw: false
                    }

                }
            );
        });
    });

});


SI.on("click", function () {
    // Select the current count
    console.log("SI");


    d3.csv("static/data/SI_911.csv", function (error, SIdata) {
        if (error) throw error;

        console.log(SIdata)

        var parseTime = d3.timeParse("%b-%Y");

        // Format the data
        SIdata.forEach(function (data) {
            data.IncidentsNo = +data.IncidentsNo;
            data.AvgResponseTimesMinutes = +data.AvgResponseTimesMinutes;
        });

        var Month = SIdata.map(data => data.Month);
        console.log("Month", Month);
        var IncidentsNo = SIdata.map(data => data.IncidentsNo);
        console.log("IncentsNo", IncidentsNo);
        var AvgResponseTimesMinutes = SIdata.map(data => data.AvgResponseTimesMinutes);
        console.log("AvgResponseTimesMinutes", AvgResponseTimesMinutes);


        var trace1 = {
            x: Month,
            y: IncidentsNo,
            name: 'Incidents No.',
            type: 'bar',
            opacity: .5,
            marker: {
                color: 'rgb(57,179,215)',
            },
        };

        var trace2 = {
            x: Month,
            y: AvgResponseTimesMinutes,
            name: 'Response Times',
            yaxis: 'y2',
            mode: 'lines+markers',
            line: {
                color: 'rgb(57,179,215)',
                width: 3,
                shape: 'spline',
                dash: '0px 5200px',
            },
            marker: {
                color: 'rgb(33,33,33)',
            },
        };

        var data1 = [trace1];
        var data2 = [trace2];
        var data = [trace2, trace1];

        var layout = {
            title: 'NYC Ambulance and Fire Response Times to Life Threatening Emergencies',
            xaxis: {
                showgrid: true,
                showline: true,
                zeroline: true,
                zerolinecolor: '#969696',
                zerolinewidth: 4,
                mirror: 'ticks',
                gridcolor: '#bdbdbd',
                gridwidth: 1
            },
            yaxis: {
                title: 'No. of Life Threatening Medical Emergencies',
                //range: [0, 12500],
                showgrid: false,
                showline: true,
                mirror: 'ticks',
                gridcolor: '#bdbdbd',
                gridwidth: 1
            },
            yaxis2: {
                title: 'Avg. Response Time (Minutes)',
                titlefont: { color: 'rgb(148, 103, 189)' },
                tickfont: { color: 'rgb(148, 103, 189)' },
                overlaying: 'y',
                side: 'right',
                //range: [7.5, 10],
                showgrid: true,
                showline: true,
                zeroline: true,
                zerolinecolor: '#969696',
                zerolinewidth: 4,
                mirror: 'ticks',
                gridcolor: '#bdbdbd',
                gridwidth: 1,

            },
            legend: { x: 0, y: 5, "orientation": "h" },
            showgrid: true,

        };

        document.getElementById("map2").innerHTML = "";
        Plotly.newPlot('map2', data, layout).then(function () {
            return Plotly.animate('map2',
                [{ data: [{ 'line.dash': '5200px 0px' }] }],
                {
                    frame: { duration: 100, redraw: false },
                    transition: { duration: 1000000000000000000000000000000 }
                }
                [{ data: [{ data1 }] }],
                {
                    frame: { duration: 300, redraw: false },
                    transition: {
                        duration: 10000000000000000000000000000000000000000,
                        easing: 'cubic-in-out',
                        redraw: false
                    }

                }
            );
        });
    });
});




