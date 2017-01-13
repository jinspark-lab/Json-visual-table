
/*
    You can change this one to edit style.
    Basically it follows bootstrap table template.
*/
var tableHtml = "<table class='table table-bordered' style='table-layout:auto; display:table; max-width:100%; white-space:nowrap'>";


//Recusive Array - Show array type data sequentially
var recursive_array_horizontal = function(dict){
    var html = tableHtml;
    
    html += "<tr>";
    for(elem in dict){
        if(dict[elem] == null){
        	dict[elem] = "NULL";
        }
        
        if(dict[elem].constructor == Object){
        	html += "<td>" + recursive_object_horizontal(dict[elem]) + "</td>";
        }else if(dict[elem].constructor == Array){
        	var txt = "";
        	for(var iter = 0; iter < dict[elem].length; iter++){
        		if(dict[elem][iter].constructor == Object){
        			txt += recursive_object_horizontal(dict[elem][iter]) + "<br>";
        		}else if(dict[elem][iter].constructor == Array){
                    txt += recursive_array_horizontal(dict[elem][iter]) + "<br>";
        		}else{
        			txt += dict[elem][iter] + ",";
        		}
        	}
        	html += "<td>" + txt + "</td>";
        }else{
            html += "<td>" + dict[elem] + "</td>"
        }
        
    }
    html += "</tr>";
    html += "</table>";
    return html;
}


//Recursive Array - Show array type data sequentially
var recursive_array_vertical = function(dict){
    var html = tableHtml;
    
    html += "<tr>";
    for(elem in dict){
        if(dict[elem] == null){
        	dict[elem] = "NULL";
        }
        
        if(dict[elem].constructor == Object){
        	html += "<td>" + recursive_object_vertical(dict[elem]) + "</td>";
        }else if(dict[elem].constructor == Array){
        	var txt = "";
        	for(var iter = 0; iter < dict[elem].length; iter++){
        		if(dict[elem][iter].constructor == Object){
        			txt += recursive_object_vertical(dict[elem][iter]) + "<br>";
        		}else if(dict[elem][iter].constructor == Array){
                    txt += recursive_array_vertical(dict[elem][iter]) + "<br>";
        		}else{
        			txt += dict[elem][iter] + ",";
        		}
        	}
        	html += "<td>" + txt + "</td>";
        }else{
            html += "<td>" + dict[elem] + "</td>"
        }
        
    }
    html += "</tr>";
    html += "</table>";
    return html;
}


//Recursive Object - Show Json data as per Object type. It shows "Key" of Object type and "Value" of Object type left to right sequentially.
var recursive_object_vertical = function(dict){
    var html = tableHtml;
    
    for(var elem in dict){
        html += "<tr><td><strong>" + elem + "</strong></td>";
        if(dict[elem] == null)
        	dict[elem] = "NULL";

        if(dict[elem].constructor == Object){
        	html += "<td>" + recursive_object_vertical(dict[elem]) + "</td>";
        }else if(dict[elem].constructor == Array){
        	var txt = "";
        	for(var iter = 0; iter < dict[elem].length; iter++){
        		if(dict[elem][iter].constructor == Object){
        			txt += recursive_object_vertical(dict[elem][iter]) + "<br>";
        		}else if(dict[elem][iter].constructor == Array){
                    txt += recursive_array_vertical(dict[elem][iter]) + "<br>";
        		}else{
                    if(iter < dict[elem].length - 1)
                        txt += dict[elem][iter] + ",";
                    else
                        txt += dict[elem][iter];
        		}
        	}
        	html += "<td>" + txt + "</td>";
        }else{
            html += "<td>" + dict[elem] + "</td>"
        }
        html += "</tr>";
    }
    html += "</table>";
    return html;
};


//Recursive Object - Show Json data as per Object type. It shows "Key" of Object type and "Value" of Object type up to down sequentially.
var recursive_object_horizontal = function(dict){
    var html = tableHtml;
    
    html += "<tr>";
    for(var elem in dict){
        html += "<th style='white-space:nowrap; width:auto; max-width:auto'>" + elem + "</th>";
    }
    html += "</tr><tr>";
    for(var elem in dict){
        if(dict[elem] == null){
            dict[elem] = "NULL";
        }
        if(dict[elem].constructor == Object){
            html += "<td>" + recursive_object_horizontal(dict[elem]) + "</td>";
        }else if(dict[elem].constructor == Array){
            var txt = "";
            for(var iter = 0; iter < dict[elem].length; iter++){
                if(dict[elem][iter].constructor == Object){
                    txt += recursive_object_horizontal(dict[elem][iter]) + ",";
                }else if(dict[elem][iter].constructor == Array){
                    txt += recursive_array_horizontal(dict[elem][iter]) + "<br>";
        		}else{
                    if(iter < dict[elem].length - 1)
                        txt += dict[elem][iter] + ",";
                    else
                        txt += dict[elem][iter];
        		}
            }
            html += "<td>" + txt + "</td>";
        }else{
            html += "<td>" + dict[elem] + "</td>";
        }
    }
    html += "</tr>";
    html += "</table>";
    return html;
};


//Show data vertically - depends on Json format.
var visualize_vertical = function(data){
    if(data.constructor == Object){
        return recursive_object_vertical(data);
    }else if(data.constructor == Array){
        return recursive_array_vertical(data);
    }else{
        return data;
    }    
}


//Show data horizontally - depends on Json format.
var visualize_horizontal = function(data){
    if(data.constructor == Object){
        return recursive_object_horizontal(data);
    }else if(data.constructor == Array){
        return recursive_array_horizontal(data);
    }else{
        return data;
    }
}
