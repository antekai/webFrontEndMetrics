
var url = "https://spreadsheets.google.com/feeds/list/1cu5ZoZX9X6a9oZ6aPEP5w_CBuTVJ8sitikwJiEzeQ6U/od6/public/values?alt=json";
//Get googlesheet data as JSON
$.getJSON(url, function(data){ 	
//unpack JSON data                
var x=[], y1=[], y2=[], y3=[], y4=[], y5=[],i=0;
    for(i ; i < data.feed.entry.length; i++){
     x.push(data.feed.entry[i].gsx$date.$t)
     y1.push(data.feed.entry[i].gsx$rsvpdonmeetup.$t)
     y2.push(data.feed.entry[i].gsx$total.$t)
     y3.push(data.feed.entry[i].gsx$newcomers.$t)
     y4.push(data.feed.entry[i].gsx$male.$t)
     y5.push(data.feed.entry[i].gsx$female.$t)
    };  
	
//Registered, total and new attendants #Multi-line plot                 
var rsvp={x,y:y1,name:"registered",type:"scatter",
          line:{width:1,color:"grey",dash: 'dot'}};
var total={x,y:y2,name:"total",type:"scatter",fill:'tozeroy',
           line: {shape: 'hvh',color:"grey",width:.8,}};     
var newcomers={x,y:y3,name:"newcomers",type:"scatter",
              line: {shape: 'spline',color:"black",width:1}};     
var data1 = [rsvp,total,newcomers];

Plotly.newPlot('chart1', data1, 
             {title: 'Registered, total and new attendants',
			  legend: {x:.85,y:.97} }); 
	
// Attendants by gender #filled area plot
var gender=[{x,y:y4,fill:'tozeroy',type:'scatter',name:'males'}, 
            {x,y:y5,fill:'tozeroy',type:'scatter',name:'females'}]

 Plotly.newPlot('chart2',gender, {title: 'Attendants based on gender',
				                  legend: {x:.85,y:.97}});  
/* raw datatable
	var tdata=[x,y1,y2,y3,y4,y5];
    var tbl_body = document.createElement("tbody");
    var odd_even = false;
    $.each(tdata, function() {
        var tbl_row = tbl_body.insertRow();
        tbl_row.className = odd_even ? "odd" : "even";
        $.each(this, function(k , v) {
            var cell = tbl_row.insertCell();
            cell.appendChild(document.createTextNode(v.toString()));
        })        
        odd_even = !odd_even;    
    });
   $("#table").append(tbl_body);
*/

            });//end JSONtoPLOT
                    