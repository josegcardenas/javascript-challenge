// from data.js
const tableData = data;
const tbody = d3.select("tbody");


function table(data){

    tbody.html("");

    data.forEach((dataRow) => {
        const row = tbody.append("tr");

        Object.values(dataRow).forEach((info) =>{
            let cell = row.append("td");
                cell.text(info);
            }
        );
    });
}

//var button = d3.select("#filter-btn").on("click", UFO_click);
//var form = d3.select("form");

//button.on("click", UFO_click);
//form.on("submit", UFO_click);

//Event handlers
function UFO_click(){
    //Avoid clicks refreshing the page
    d3.event.preventDefault();
    console.log('You clicked me!!')

    var date = d3.select("#datetime").property("value");

    if(date) {

        filtered_data = tableData.filter(row => row.datetime === date);
        console.log(filtered_data);
    }
    //build the table in
    table(filtered_data);

    //filtered_data.forEach(dataRow => {
      //  let row = table_body.append("tr");

        //Object.values(dataRow).forEach(info => {
          //  let cell = row.append("td").text(info)})
        
    //})

};

d3.selectAll("#filter-btn").on("click", UFO_click);

table(tableData);