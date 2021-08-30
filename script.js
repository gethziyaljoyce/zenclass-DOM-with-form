function createTable() {

    let food = " ";
    let count=0;
    
     if($("#food1").prop('checked') == true){
         food+=food1.value+",";
         count++;
     }
     if($("#food2").prop('checked') == true){
        food+=food2.value+",";
        count++;
    }
    if($("#food3").prop('checked') == true){
        food+=food3.value+",";
        count++;
    }
    if($("#food4").prop('checked') == true){
        food+=food4.value+",";
        count++;
    }
    if($("#food5").prop('checked') == true){
        food+=food5.value;
        count++;
    }
  if(count>=2){
    let info = document.createElement("table");
    info.setAttribute("class", "info");
   let htmlContent = `
     <thead>
<tr>
<th>First Name</th>
<th>Last Name</th>
<th>Address</th>
<th>Pincode</th>
<th>Gender</th>
<th>Food</th>
<th>State</th>
<th>Country</th>
</tr>
</thead>
<tr>
<td>${document.getElementById("fname").value}</td>
<td>${document.getElementById("lname").value}</td>
<td>${document.getElementById("address").value}</td>
<td>${document.getElementById("pincode").value}</td>
<td>${document.getElementById("gender").value}</td>
<td>${food}</td>
<td>${document.getElementById("state").value}</td>
<td>${document.getElementById("country").value}</td>
</tr>
`;
info.innerHTML=htmlContent;
const result= document.createElement("div");
result.setAttribute("class","result");
result.append(info);
$(".result").empty();
document.body.append(result); 

}
else{
      alert("Select minimum two food items");
  }

};