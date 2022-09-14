// const check = () => {
//     var fname;
//     var pass;
//     fname = document.getElementById("name").value;
//     pass = document.getElementById("pass").value;

//     if (fname == "Ahmed" && pass == 12345) {
//         console.log("wellcome ahmmed");
//         document.getElementById("title").innerHTML = "wellcome " + fname;
//         document.getElementById('img').src = '123.png'
//         window.location.replace('http://www.temmam.com')
//         // window.location.reload()
//     }
//     else {
//         console.log("you are not Ahmmed")
//         document.getElementById("title").innerHTML = "Error username or password";
//         document.getElementById('img').src = '12.png'
//     }

// }
// alert


//
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(username, password)

    if ((username == "Ahmed" && password == "3000") || (username == "Alselwi" && password == "70900")) {

        alert("login succesfully");
        window.location.assign('xo.html')
    }
    else {
        alert(
            "login falid"
        )
    }
}


// document.getElementById('form').addEventListener('click', () => {
//     var username = document.getElementById("username").Value;
//     var password = document.getElementById("password").Value;
//     console.log(username, password)

//     if (username == "Ahmed" && password == "1234") {
//         alert("login succesfully");
//         return false;
//     }
//     else {
//         alert(
//             "login falid"
//         )
//     }
// })







let title = document.querySelector('.title')
var turn = 'x';
let squares = [];

function end(num1, num2, num3) {
    title.innerHTML = `${squares[num1]} winner`;
    document.getElementById('item' + num1).style.backgroundColor = 'rgba(110, 47, 165, 0.318)'
    document.getElementById('item' + num2).style.backgroundColor = 'rgba(110, 47, 165, 0.318)'
    document.getElementById('item' + num3).style.backgroundColor = 'rgba(110, 47, 165, 0.318)'

    setInterval(function () { title.innerHTML += '.' }, 1000);
    setTimeout(function () { location.reload() }, 5000);
}
function winnner() {
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById('item' + i).innerHTML;
    }



    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '') {
        end(1, 2, 3)

        window.location.assign('/index copy.html')
    }


    else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[5] != '') {
        end(4, 5, 6)
    }

    else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[8] != '') {
        end(7, 8, 9)
    }

    else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[7] != '') {
        end(1, 4, 7)
    }

    else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[5] != '') {
        end(2, 5, 8)
    }

    else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[6] != '') {
        end(3, 6, 9)
    }

    else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[5] != '') {
        end(1, 5, 9)
    }

    else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[5] != '') {
        end(3, 5, 7)
    }

    else if (squares.every(i => i != '')) {
        alert('Draw')
        end(3, 5, 7)
    }
}
function game(id) {
    let element = document.getElementById(id)
    if (turn === 'x' && element.innerHTML == '') {
        element.innerHTML = 'X';
        turn = 'o';
        title.innerHTML = 'O'
    }
    else if (turn === 'o' && element.innerHTML == '') {
        element.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X';
    }
    winnner();
}
