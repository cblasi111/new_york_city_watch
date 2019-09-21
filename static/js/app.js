
var Manhattan = d3.select(".Manhattan");
var Bronx = d3.select(".Bronx");
var Queens = d3.select(".Queens");
var Brooklyn = d3.select(".Brooklyn");
var SI = d3.select(".SI");



 d3.csv("../data/Manhattan_911.csv", function(error, Mdata) {
  if (error) throw error;

  console.log(Mdata)

     var parseTime = d3.timeParse("%b-%Y");

     // Format the data
     Mdata.forEach(function (data) {
         data.IncidentsNo = +data.IncidentsNo;
         data.AvgResponseTimesMinutes = +data.AvgResponseTimesMinutes;
     });

     var Month =  Mdata.map(data => data.Month);
     console.log("Month", Month);
     var IncidentsNo =  Mdata.map(data => data.IncidentsNo);
     console.log("IncentsNo", IncidentsNo);
     var AvgResponseTimesMinutes =  Mdata.map(data => data.AvgResponseTimesMinutes);
     console.log("AvgResponseTimesMinutes", AvgResponseTimesMinutes);
     
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
        },
        marker: {
          color: 'rgb(33,33,33)',
      },
    };
    
    var data = [trace1, trace2];

    var layout = {
      title: 'NYC Ambulance and Fire Response Times to Life Threatening Emergencies',
      xaxis: {showgrid: true,
        showline: true,
        zeroline: true,
        zerolinecolor: '#969696',
        zerolinewidth: 4,
        mirror: 'ticks',
        gridcolor: '#bdbdbd',
        gridwidth: 1},
      yaxis: {title: 'No. of Life Threatening Medical Emergencies',
          range: [0, 12500],
      showgrid: false,
      showline: true,
      mirror: 'ticks',
      gridcolor: '#bdbdbd',
      gridwidth: 1},
      yaxis2: {
        title: 'Avg. Response Time (Minutes)',
        titlefont: {color: 'rgb(148, 103, 189)'},
        tickfont: {color: 'rgb(148, 103, 189)'},
        overlaying: 'y',
        side: 'right',
        range: [7.5, 10],
          showgrid: true,
          showline: true,
          zeroline: true,
          zerolinecolor: '#969696',
          zerolinewidth: 4,
          mirror: 'ticks',
          gridcolor: '#bdbdbd',
          gridwidth: 1,
      
      } , 
      legend: {x:0, y:5, "orientation": "h"} ,
      showgrid: true,    
      
    };

    Plotly.newPlot('plot', data, layout);
});



























Manhattan.on("click", function() {
    // Select the current count
   console.log("Manhattan");


   d3.csv("../data/Manhattan_911.csv", function(error, Mdata) {
    if (error) throw error;

    console.log(Mdata)

       var parseTime = d3.timeParse("%b-%Y");

       // Format the data
       Mdata.forEach(function (data) {
           data.IncidentsNo = +data.IncidentsNo;
           data.AvgResponseTimesMinutes = +data.AvgResponseTimesMinutes;
       });

       var Month =  Mdata.map(data => data.Month);
       console.log("Month", Month);
       var IncidentsNo =  Mdata.map(data => data.IncidentsNo);
       console.log("IncentsNo", IncidentsNo);
       var AvgResponseTimesMinutes =  Mdata.map(data => data.AvgResponseTimesMinutes);
       console.log("AvgResponseTimesMinutes", AvgResponseTimesMinutes);
       
       var trace1 = {
        x: Month,
        y: IncidentsNo,
        name: 'Incidents No.',
        type: 'bar',
        opacity: .5,
        marker: {
        color: 'rgb(0,133,66)',
        }
      
        
        
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
          },
        marker: {
            color: 'rgb(33,33,33)',
        },
      };
      
      var data = [trace1, trace2];

      var layout = {
        title: 'NYC Ambulance and Fire Response Times to Life Threatening Emergencies',
        hovermode: 'closest',
        xaxis: {showgrid: true,
                showline: true,
                zeroline: true,
                zerolinecolor: '#969696',
                zerolinewidth: 4,
                mirror: 'ticks',
                gridcolor: '#bdbdbd',
                gridwidth: 1},
        yaxis: {title: 'No. of Life Threatening Medical Emergencies',
                range: [0, 12500],
                showgrid: false,
                showline: true,
                mirror: 'ticks',
                gridcolor: '#bdbdbd',
                gridwidth: 1},
        yaxis2: {
          title: 'Avg. Response Time (Minutes)',
          titlefont: {color: 'rgb(148, 103, 189)'},
          tickfont: {color: 'rgb(148, 103, 189)'},
          overlaying: 'y',
          side: 'right',
          range: [7.5, 10],
          showgrid: true,
          showline: true,
          zeroline: true,
          zerolinecolor: '#969696',
          zerolinewidth: 4,
          mirror: 'ticks',
          gridcolor: '#bdbdbd',
          gridwidth: 1,
                } , 
        legend: {x:0, y:5, "orientation": "h"},
        
       
      

      };
    

      // Plotly.newPlot('plot', data, layout);



      Plotly.animate('plot', {
        data: data,
         //traces: [0],
         layout: layout
       }, {
         transition: {
           duration: 300000000,
           easing: 'cubic-in-out'
         },
         frame: {
           duration: 500
         },
         responsive: true,
       })
  });
  
  
 
  });






  Queens.on("click", function() {
    // Select the current count
   console.log("Queens");


   d3.csv("../data/Queens_911.csv", function(error, Qdata) {
    if (error) throw error;

    console.log(Qdata)

       var parseTime = d3.timeParse("%b-%Y");

       // Format the data
       Qdata.forEach(function (data) {
           data.IncidentsNo = +data.IncidentsNo;
           data.AvgResponseTimesMinutes = +data.AvgResponseTimesMinutes;
       });

       var Month =  Qdata.map(data => data.Month);
       console.log("Month", Month);
       var IncidentsNo =  Qdata.map(data => data.IncidentsNo);
       console.log("IncentsNo", IncidentsNo);
       var AvgResponseTimesMinutes =  Qdata.map(data => data.AvgResponseTimesMinutes);
       console.log("AvgResponseTimesMinutes", AvgResponseTimesMinutes);
       console.log("AvgResponseTimesMinutes0", AvgResponseTimesMinutes[0]);
       
       var trace1 = {
        x: Month,
        y: IncidentsNo,
        name: 'Incidents No.',
        type: 'bar',
        opacity: .5,
        marker:{
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
          }
      };
      
      var data = [trace1, trace2];
      var data1 = [trace1];
      var data2 = [trace2];

      var layout = {
        title: 'NYC Ambulance and Fire Response Times to Life Threatening Emergencies',
        yaxis: {title: 'No. of Life Threatening Medical Emergencies',
              range: [0, 11000] },
        yaxis2: {
          title: 'Avg. Response Time (Minutes)',
          titlefont: {color: 'rgb(148, 103, 189)'},
          tickfont: {color: 'rgb(148, 103, 189)'},
          overlaying: 'y',
          side: 'right',
          range: [7.5, 9.4],
        } , 
        legend: {x:0, y:5, "orientation": "h"}  
      };


      var layout1 = {
        title: 'NYC Ambulance and Fire Response Times to Life Threatening Emergencies',
        yaxis: {title: 'No. of Life Threatening Medical Emergencies',
              range: [0, 11000] },
      };

      var layout2 = {
        yaxis2: {
          title: 'Avg. Response Time (Minutes)',
          titlefont: {color: 'rgb(148, 103, 189)'},
          tickfont: {color: 'rgb(148, 103, 189)'},
          overlaying: 'y',
          side: 'right',
          range: [7.5, 9.4],
        } , 
        legend: {x:0, y:5, "orientation": "h"},  
      };

      

    //  // Plotly.animate('plot', data, layout);
      Plotly.animate('plot', {
        data: data,
        //traces: data,
        layout: layout
      }, {
        transition: {
          duration: 300000000,
          easing: 'cubic-in-out',
          redraw: true,
        },
        frame: {
          duration: 500,
        }
      })


     
     
      //  Plotly.plot('plot', 
      //  [{
      //    y:[AvgResponseTimesMinutes[0]],
      //    type: 'line+markers'

      //  }]);

    });
 
  });





  Bronx.on("click", function() {
    // Select the current count
   console.log("Bronx");


   d3.csv("../data/Bronx_911.csv", function(error, BXdata) {
    if (error) throw error;

    console.log(BXdata)

       var parseTime = d3.timeParse("%b-%Y");

       // Format the data
       BXdata.forEach(function (data) {
           data.IncidentsNo = +data.IncidentsNo;
           data.AvgResponseTimesMinutes = +data.AvgResponseTimesMinutes;
       });

       var Month =  BXdata.map(data => data.Month);
       console.log("Month", Month);
       var IncidentsNo =  BXdata.map(data => data.IncidentsNo);
       console.log("IncentsNo", IncidentsNo);
       var AvgResponseTimesMinutes =  BXdata.map(data => data.AvgResponseTimesMinutes);
       console.log("AvgResponseTimesMinutes", AvgResponseTimesMinutes);
       
       var trace1 = {
        x: Month,
        y: IncidentsNo,
        name: 'Incidents No.',
        type: 'bar',
        opacity: .5,
        marker:{
            color: 'rgb(210,50,45)'
           ,
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
          }
      };
      
      var data = [trace1, trace2];

      var layout = {
        title: 'NYC Ambulance and Fire Response Times to Life Threatening Emergencies',
        yaxis: {title: 'No. of Life Threatening Medical Emergencies',
        range: [0, 12500]},
        yaxis2: {
          title: 'Avg. Response Time (Minutes)',
          titlefont: {color: 'rgb(148, 103, 189)'},
          tickfont: {color: 'rgb(148, 103, 189)'},
          overlaying: 'y',
          side: 'right',
          range: [7.5, 10.3],
        
        } , 
        legend: {x:0, y:5, "orientation": "h"}     
      };

      // Plotly.newPlot('plot', data, layout);

      Plotly.animate('plot', {
        data: data,
         //traces: [0],
         layout: layout
       }, {
         transition: {
           duration: 300000000,
           easing: 'cubic-in-out'
         },
         frame: {
           duration: 500
         }
       })
  });
 
  });



  Brooklyn.on("click", function() {
    // Select the current count
   console.log("Brooklyn");


   d3.csv("../data/Brooklyn_911.csv", function(error, BKdata) {
    if (error) throw error;

    console.log(BKdata)

       var parseTime = d3.timeParse("%b-%Y");

       // Format the data
       BKdata.forEach(function (data) {
           data.IncidentsNo = +data.IncidentsNo;
           data.AvgResponseTimesMinutes = +data.AvgResponseTimesMinutes;
       });

       var Month =  BKdata.map(data => data.Month);
       console.log("Month", Month);
       var IncidentsNo =  BKdata.map(data => data.IncidentsNo);
       console.log("IncentsNo", IncidentsNo);
       var AvgResponseTimesMinutes =  BKdata.map(data => data.AvgResponseTimesMinutes);
       console.log("AvgResponseTimesMinutes", AvgResponseTimesMinutes);
       
       var trace1 = {
        x: Month,
        y: IncidentsNo,
        name: 'Incidents No.',
        type: 'bar',
        opacity: .5,
        marker:{
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
          }
      };
      
      var data = [trace1, trace2];

      var layout = {
        title: 'NYC Ambulance and Fire Response Times to Life Threatening Emergencies',
        yaxis: {title: 'No. of Life Threatening Medical Emergencies',
        range: [0, 15000]},
        yaxis2: {
          title: 'Avg. Response Time (Minutes)',
          titlefont: {color: 'rgb(148, 103, 189)'},
          tickfont: {color: 'rgb(148, 103, 189)'},
          overlaying: 'y',
          side: 'right',
          range: [7.5, 9.1]
        
        } , 
        legend: {x:0, y:5, "orientation": "h"}     
      };

      // Plotly.newPlot('plot', data, layout);

      
      Plotly.animate('plot', {
        data: data,
         //traces: [0],
         layout: layout
       }, {
         transition: {
           duration: 300000000,
           easing: 'cubic-in-out'
         },
         frame: {
           duration: 500
         }
       })
  });
 
  });
  

SI.on("click", function() {
    // Select the current count
   console.log("SI");


   d3.csv("../data/SI_911.csv", function(error, SIdata) {
    if (error) throw error;

    console.log(SIdata)

       var parseTime = d3.timeParse("%b-%Y");

       // Format the data
       SIdata.forEach(function (data) {
           data.IncidentsNo = +data.IncidentsNo;
           data.AvgResponseTimesMinutes = +data.AvgResponseTimesMinutes;
       });

       var Month =  SIdata.map(data => data.Month);
       console.log("Month", Month);
       var IncidentsNo =  SIdata.map(data => data.IncidentsNo);
       console.log("IncentsNo", IncidentsNo);
       var AvgResponseTimesMinutes =  SIdata.map(data => data.AvgResponseTimesMinutes);
       console.log("AvgResponseTimesMinutes", AvgResponseTimesMinutes);
       
       var trace1 = {
        x: Month,
        y: IncidentsNo,
        name: 'Incidents No.',
        type: 'bar',
        opacity: .5,
        marker:{
            color:  'rgb(57,179,215)',
          },
        
      };
      
      var trace2 = {
        x: Month,
        y: AvgResponseTimesMinutes,
        name: 'Response Times',
        yaxis: 'y2',
        mode: 'lines+markers',
        line: {
            color:  'rgb(57,179,215)',
            width: 3,
            shape: 'spline',
          }
      };
      
      var data = [trace1, trace2];

      var layout = {
        title: 'NYC Ambulance and Fire Response Times to Life Threatening Emergencies',
        yaxis: {title: 'No. of Life Threatening Medical Emergencies',
        range: [0, 2500]
      },
        yaxis2: {
          title: 'Avg. Response Time (Minutes)',
          titlefont: {color: 'rgb(148, 103, 189)'},
          tickfont: {color: 'rgb(148, 103, 189)'},
          overlaying: 'y',
          side: 'right',
          range: [6.5, 8.5]
        
        } , 
        legend: {x:0, y:5, "orientation": "h"}     
      };

      // Plotly.newPlot('plot', data, layout);

      Plotly.animate('plot', {
        data: data,
         //traces: [0],
         layout: layout
       }, {
         transition: {
           duration: 300000000,
           easing: 'linear-in-out'
         },
         frame: {
           duration: 500
         },
         mode: 'afterall', 
       })
  });
 
  });
  
  