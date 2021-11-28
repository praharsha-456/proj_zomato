$.ajax({
    type: "GET",
    url: "/restaurant/{{restaurant.split|join:'_'}}/",
    dataType: "json",
    success: function(data) {
      let r_data = ''
        for(let a in data){
          r_data+='<tr>'
          r_data+='<td><input type="checkbox" id="dish'+data[a].dish_name+'" name="dish" value="'+data[a].dish_name+'"><label for="dish'+data[a].dish_name+'">'+data[a].dish_name+'</label></td>'
          console.log(data)
        }
      document.getElementById("data_append").innerHTML=r_data;
    },
    error: function(data) {
           alert("error..");
    }});