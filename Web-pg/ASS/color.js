var text = ['First', 'Second', 'Third', 'Forth', 'Fifth']

var Modify = {
    setColor: function (index, tag, text) {
        var taglist = document.querySelectorAll(tag);
        taglist[index].style.color = text;
    },
    setBackgroundColor: function (index, tag, text) {
        var taglist = document.querySelectorAll(tag);
        taglist[index].style.backgroundColor = text;
    },
    setText: function (index, tag, text) {
        var taglist = document.querySelectorAll(tag);
        taglist[index].innerText = text;
    }
}

var Delete = {
    setColor: function (index, tag) {
        var taglist = document.querySelectorAll(tag);
        taglist[index].style.color = "black";
    },
    setBackgroundColor: function (index, tag) {
        var taglist = document.querySelectorAll(tag);
        taglist[index].style.backgroundColor = "white";
    },
    setText: function (index, tag) {
        var titleORbody = (tag === 'h2') ? 'Title' : 'Body'
        var taglist = document.querySelectorAll(tag);
        taglist[index].innerText = text[index] + " " + titleORbody;
    }
}

function changeMode() {
    var x = document.getElementById("mySelect").value;
    if (x === "del") document.querySelector("span").style.display = "none"
    else document.querySelector("span").style.display = "inline"
}

function CMDHandler() {
    var form = document.querySelector('form');
    var formData = new FormData(form);
    mod = formData.get('modordel')
    CBGT = formData.get('cbgt')
    where = formData.get('where')
    where_in = formData.get('where_in')

    var input = document.querySelector("span input").value;
    var index;
    switch (where) {
        case 'first': index = [0]; break;
        case 'last': index = [4]; break;
        case 'all': index = [0, 1, 2, 3, 4]; break;
        case 'even': index = [1, 3]; break;
        case 'odd': index = [0, 2, 4]; break;
        case 'second': index = [1]; break;
    }

    if (mod === 'mod') {
        for (var i of index) {
            if (CBGT === 'color') Modify.setColor(i, where_in, input)
            else if (CBGT === 'bcolor') Modify.setBackgroundColor(i, where_in, input)
            else Modify.setText(i, where_in, input)
        }
    } else {
        for (var i of index) {
            if (CBGT === 'color') Delete.setColor(i, where_in);
            else if (CBGT === 'bcolor') Delete.setBackgroundColor(i, where_in);
            else Delete.setText(i, where_in);
        }
    }
}