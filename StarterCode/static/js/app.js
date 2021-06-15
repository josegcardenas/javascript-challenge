// from data.js
const tableData = data;
const tbody = d3.select("tbody");


function table(data){
    tbody.html("");
    
    data.forEach((ufo_info) => {
        const row = tbody.append("tr");

    Object.values(ufo_info).forEach((info) =>{
        let cell = row.append("td").text(info);
        cell.text(info);
    })
})
};
button.on("click", UFO_Data);
form.on("submit", UFO_Data);


var button = d3.select("#filter-btn");
var form = d3.select("form");

//Event handlers
function UFO_click(){
    //Avoid clicks refreshing the page
    d3.event.preventDefault();
    console.log('You clicked me!!')

    var date = d3.select("#datetime").property("value");

    var filtered_data = tableData.filter(row => row.datetime === date);
    console.log(filtered_data);

    filtered_data.forEach(ufo_info => {
        let row = table_body.append("tr");

        Object.values(ufo_info).forEach(info => {
            let cell = row.append("td").text(info)})
        
    })

};