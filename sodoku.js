// representa o nosso sodoku
function representar (titulo,arr){
    var html ="<h3>"+titulo+"</h3><table>";
    for(y=0;y<arr.length;y++){
        html += "<tr>"
        for(x=0;x<arr[y].length;x++){
            if(arr[y][x]!=0){
                html += "<td class='dado-original' data-x='"+x+"' data-y='"+y+"' data-ori='"+arr[y][x]+"'>"+arr[y][x]+"</td>";
            }else{
                html += "<td data-x='"+x+"' data-y='"+y+"'> &nbsp;</td>";
            }
        }
        html += "</tr>";
    }  
    html += "</table>";
    return html;
}


// verificar verticalmente por um valor
function verificar_vertical ( x, new_value, sodoku){
    for(var y in sodoku){
        if( sodoku[y][x] == new_value ){
            return true;
        }
    }
    return false;
}

// verificar horizontalmente por um valor
function verificar_horizontal ( y, new_value, sodoku){
    for(var x in sodoku[y]){
        if( sodoku[y][x] == new_value ){
            return true;
        }
    }
    return false;
}

function verificar_quadrado (x,y,new_value,sodoku){
    var _x = x == 0 ? 0 : Math.floor(x/3),
        _y = y == 0 ? 0 : Math.floor(y/3),
        _ate_x = _x +3,
        _ate_y = _y +3;

    _x = _x * 3;
    _y = _y * 3;

    for(var nx=_x;nx<=_ate_x;nx++){
        for(var ny=_y;ny<=_ate_y;ny++){
            if(sodoku[ny][nx] == new_value){
                return true;
            }
        }
    }
    return false;
}

function edit (x,y,new_value,sodoku){
    if( verificar_vertical(x,new_value,sodoku)){return true;}
    if( verificar_horizontal(y,new_value,sodoku)){return true;}
    if( verificar_quadrado(x,y,new_value,sodoku)){return true;}
    
    sodoku[y][x] = new_value;
    return sodoku;
}