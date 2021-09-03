function hasil() {
    var harga= parseInt(document.getElementById('harga').value);
    var jumlah= parseInt(document.getElementById('jumlah').value);
    var total= harga*jumlah
    document.getElementById('total').innerHTML = total;
    var dis=0.10; 
    var bayar; 
    if(total>50.000){
        bayar = total - (total*dis);
        document.getElementById('bayar').innerHTML = bayar;
        document.getElementById('dis').innerHTML = "10%"
    }else{
        document.getElementById('bayar').innerHTML = total;
        document.getElementById('dis').innerHTML = "10%"
        
    }
}

// function hasil() {
//     var harga= parseInt(document.getElementById('harga').value);
//     var jarak= parseInt(document.getElementById('jarak').value);
//     var total= harga*jarak
//     document.getElementById('total').innerHTML = total;
// }

// function hasil() {
//     var harga= parseInt(document.getElementById('harga').value);
//     var berat= parseInt(document.getElementById('berat').value);
//     var total= harga*berat
//     document.getElementById('total').innerHTML = total;
// }



