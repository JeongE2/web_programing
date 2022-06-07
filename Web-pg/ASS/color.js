
var Modify = {
    setColor: function (index, tag) {
        var taglist = document.querySelectorAll(tag);
        taglist[index].style.color = "red";
    },
    setBackgroundColor: function (index, tag) {
       var taglist = document.querySelectorAll(tag);
       taglist[index].style.backgroundColor = "blue";
    },
    setText: function (tag,text) {
        //document.querySelector('body').style.backgroundColor = color;innerhtml
    }
}

var Delete = {
    setColor: function (index, tag) {
        var taglist = document.querySelectorAll(tag);
        taglist[index].style.color = "yellow";
    },
    setBackgroundColor: function (index, tag) {
        var taglist = document.querySelectorAll(tag);
        taglist[index].style.backgroundColor = "green";
    },
    setText: function () {
        document.querySelector('body').style.backgroundColor = color;
    }
}


function CMDHandler(self){
    var form = document.querySelector('form');
    var formData = new FormData(form);
    mod= formData.get('modordel')
    CBGT = formData.get('cbgt')
    where = formData.get('where')
    where_in = formData.get('where_in')
    
    
    if(mod === 'mod'){ //mod
        //console.log("mod mode")
        if(CBGT === 'color')
            Modify.setColor(where,where_in)
        if(CBGT === 'bcolor')
            Modify.setBackgroundColor(where,where_in)
        //if(CBGT === 'text')

    } else { //del 
       // console.log("del mode")
        if(CBGT === 'color')
            Delete.setColor(where,where_in)
        if(CBGT === 'bcolor')
            Delete.setBackgroundColor(where,where_in)
        //if(CBGT === 'text')

    }
    return true;
}