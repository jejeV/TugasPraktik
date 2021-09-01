var namabarang =['Aizawa Sensei T-shirt', 'LAWOFNATURE Hoodie', 'Nike Blazer Mid 77 W']
var hargabarang =[ 150000, 550000, 5000000]
var gambarbarang =["https://i.pinimg.com/564x/19/be/b5/19beb5393ab013a06312da2ebc8caaaf.jpg", 
    "https://i.pinimg.com/564x/cd/92/65/cd9265b8dff599255c576bddeaab6f9b.jpg","https://i.pinimg.com/564x/1e/9d/bf/1e9dbf2b640007459d807454c15f4658.jpg",]


var listproduct = document.getElementById('listproduct')

var namabarang_keranjang = []
var hargabarang_keranjang = []

var listkeranjang = document.getElementById('listkeranjang')

function showlistproduct() {
    listproduck.innerHTML =''
    for (let i = 0; i < namabarang.length; i++){
        listproduck.innerHTML +='<div class="card float-left mr-3 mb-3" style="width: 14rem;">'+
          '<img src="'+gambarbarang[i]+'"class="card-img-top" alt="...">'+
          '<div class="card-body">'+
          '<h5 class="card-title">'+namabarang[i]+'</h5>'+
          '<p class="card-text">'+hargabarang[i]+'</p>'+
          '<a href="#" class="btn-tambah" onclick="addlistite('+i+')">Buy</a>'+
        '</div>'+
      '</div>'
    } 
}

function addlistite(id) {
    namabarang_keranjang.push(namabarang[id])
    hargabarang_keranjang.push(hargabarang[id])

    showlistkeranjang()

}

var listkeranjang = document.getElementById('listkeranjang')
var tampilandiscount = document.getElementById('discount')
var tampilanpajak = document.getElementById('pajak')
var tampilantotalbayar = document.getElementById('totalbayar') 

function showlistkeranjang() {
    listkeranjang.innerHTML=''

    var discount = 0
    var pajak = 0
    var hargatotal = 0
    var totalbayar = 0 
    for (let i = 0; i< namabarang_keranjang.length; i++) {
      listkeranjang.innerHTML+=' <div class="card mt-3 mb-3" style="width: 22rem;">'+
              '<div class="card-body">'+
                  '<h5 class="card-title">'+namabarang_keranjang[i]+'</h5>'+
                  '<p class="card-text">RP.'+hargabarang_keranjang[i]+'</p>'+
                  '<p>Qty : 1</p>'+
                  '<a href="#" class="btn-hapus float-right" onclick = "deleteitem('+i+')">Delete</a>'+
                '</div>'+
              '</div>'
      
       hargatotal = hargabarang_keranjang[i]+hargatotal
       totalbayar = hargatotal
       pajak = hargatotal*0.1



       if(totalbayar>150000){
           discount = totalbayar*0.05
          }else{
              discount = 0
          }
      totalbayar = hargatotal-discount+pajak

      
      
      var totalbelanja = totalbayar - pajak
      tampilanpajak.innerHTML = pajak
      tampilandiscount.innerHTML = discount 
      tampilantotalbayar.innerHTML = totalbayar
    }
}

function deleteitem(id) {
    namabarang_keranjang.pop(id,1)
    hargabarang_keranjang.pop(id,1)

    showlistkeranjang()
}


showlistproduct()