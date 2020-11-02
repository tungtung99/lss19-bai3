function kiemtrasonguyento(so) {
    for (var i = 2; i <= Math.sqrt(so); i++) {
        if (so % i == 0) {
            return 0;
        }
    }
    return 1;
}


function locdieukiensonguyento() {
    let h3 = document.getElementById('h3')
    let a = prompt("Nhập số lượng số nguyên tố: ");
    h3.innerText += Number(a) + ' số nguyên tố đầu tiên là: '
    let dem = 0;
    for (var i = 2; ; i++) {
        var check = kiemtrasonguyento(Number(i))
        if (check == 1) {
            dem++;
            h3.innerText += ' ' + i;
            if (dem == Number(a)) {
                break;
            }
        }
    }
}