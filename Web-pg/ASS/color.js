
var Modify = {
    setColor: function (color) {
       document.querySelector('body').style.color = color;
    },
    setBackgroundColor: function (color) {
       document.querySelector('body').style.backgroundColor = color;
    },
    setText: function (text) {
        //document.querySelector('body').style.backgroundColor = color;
    }
}

var Delete = {
    setColor: function () {
       document.querySelector('body').style.color = black;
    },
    setBackgroundColor: function () {
       document.querySelector('body').style.backgroundColor = white;
    },
    setText: function () {
        //document.querySelector('body').style.backgroundColor = color;
    }
}


function CMDHandler(){
    var form = document.querySelector('form');
    var formData = new FormData(form);
    MOD = formData.get('modordel')
    CBGT = formData.get('cbgt')
    where = formData.get('where')
    where_in = formData.get('where_in')

    if(MOD === 'mod'){ //mod
        if(CBGT === 'color')

        if(CBGT === 'bcolor')

        if(CBGT === 'text')

    } else { //del
        if(CBGT === 'color')

        if(CBGT === 'bcolor')

        if(CBGT === 'text')

    }
}