var part1Elements = document.getElementsByClassName('part1www');
console.log('part1Elements-length: ');
console.log(part1Elements[0]);
console.log(part1Elements[1]);

for (var i = 0; i < part1Elements.length; i++)
    part1Elements[i].id = 'part1-' + i;

var part2Elements = document.getElementsByClassName('part2www');

for (var j = 0; i < part2Elements.length; i++)
    part2Elements[i].id = 'part2-' + i;

var part1 = document.getElementsByClassName('part1ww');
console.log(part1);
/*
function showData(a) {
    console.log('clicked');
    var part2 = document.getElementById('p2-' + a);
    console.log(part2);
    var part1 = document.getElementById('p1-' + a);
    console.log(part1);
    var status = part2.getAttribute('isOpen');
    var plus = document.getElementById('plus' + a);
    console.log('status - ' + status);

    if(status == 0 ){
        part2.style.display = 'flex';
        part2.setAttribute('isOpen', 1);
        part1.style.marginBottom = 0;
        plus.classList.add('fa-minus');
        plus.classList.remove('fa-plus');

                      if ( plus.classList.contains('fa-minus') ){

                          plus.classList.toggle('fa-minus');
                  }
    }
        else {

 */
/*
        part2.style.display = 'none';
        document.getElementById(a).setAttribute('isOpen', 0);
        plus.classList.add('fa-plus');
        plus.classList.remove('fa-minus');
    }
}

function showData(pop) {
    console.log('clicked');
    var part2Elements = document.getElementsByClassName('part2');
    console.log(part1);
   // var status = part2.getAttribute('isOpen');
    var plus = document.getElementById('plus' + a);
    console.log('status - ' + status);

    if(status == 0 ){
        part2.style.display = 'flex';
        part2.setAttribute('isOpen', 1);
        part1.style.marginBottom = 0;
        plus.classList.add('fa-minus');
        plus.classList.remove('fa-plus');
        /*
                      if ( plus.classList.contains('fa-minus') ){

                          plus.classList.toggle('fa-minus');
                  }

    }
    else {
        part2.style.display = 'none';
        document.getElementById(a).setAttribute('isOpen', 0);
        plus.classList.add('fa-plus');
        plus.classList.remove('fa-minus');
    }
}
*/

function changeData(part) {
    var part = document.getElementById(part);
    console.log('changeData clicked');
    part.classList.add('visibledevice');
    part.classList.remove('hide_m');
}
