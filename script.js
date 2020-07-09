function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

function build() {
    var out = "";
    for(var i = 0; i < myArray.length; i++) {
        var style = "card card_"+(i+1);
        out += '<div class="'+ style +'">' + myArray[i] + '</div>';
       // console.log(out);
    }
    refData.innerHTML = out;
}

function sortArray() {
    myArray.sort();
    build();
}

function shuffle_arrayList(){ 
    shuffle(myArray);
    build();
}

var myArray = [9, 1, 7, 3, 6, 5, 4, 2, 8];
var refData = document.getElementById('data');
build();

//console.log(shuffle(myArray));
