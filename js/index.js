//BÀI TẬP 1: 

function tinhDiem() {
    //Input diemChuan (number), diemMot (number), diemHai (number), diemBa (number), khuVuc (number),doiTuong(number)
    var diemChuan = document.getElementById('diemChuan').value;
    var diemMot = document.getElementById('diemMot').value;
    var diemHai = document.getElementById('diemHai').value;
    var diemBa = document.getElementById('diemBa').value;
    //Lấy giá trị 
    var khuVuc = document.getElementById('khuVuc').value;
    //ví dụ : khuVuc=A tương đương khuVuc=2;
    var doiTuong = document.getElementById('doiTuong').value;

    //Output:ketQua(string), tongDiem(number)
    var tongDiem = 0;
    var ketQua = '';
    //Process
    tongDiem = Number(diemMot) + Number(diemHai) + Number(diemBa) + Number(khuVuc) + Number(doiTuong);
    if (diemMot == 0 || diemHai == 0 || diemBa == 0) {
        document.getElementById('ket-qua-bai-1').innerHTML = 'Bạn đã RỚT do có điểm "0"'
    } else if(tongDiem>=diemChuan) {
        ketQua='ĐẬU';
        document.getElementById('ket-qua-bai-1').innerHTML ='Bạn đã ' + ketQua + '. Tổng điểm: '+ tongDiem;
    }
    else{
        ketQua='RỚT';
        document.getElementById('ket-qua-bai-1').innerHTML ='Bạn đã ' + ketQua + '. Tổng điểm: '+ tongDiem;        
    }
}

//BÀI TẬP 2: 
function tinhTienDien(){

//Input: hoTen(string), soDien(number)
var hoTen=document.getElementById('hoTen').value;
var soDien=document.getElementById('soDien').value;
//Output: tienDien(number)
var tienDien=0;
//Process
if(soDien<=50){
    tienDien=500*soDien;
}
else if(soDien>50&&soDien<=100){
    tienDien=50*500+(soDien-50)*650;
}
else if(soDien>100&&soDien<=200){
    tienDien=50*500+50*650+(soDien-100)*850;
}
else if(soDien>200&&soDien<=350){
    tienDien=50*500+50*650+100*850+(soDien-200)*1100;
}
else if(soDien>350){
    tienDien=50*500+50*650+100*850+150*1100+(soDien-350)*1300;
}
//In kết quả ra giao diện:
document.getElementById('ket-qua-bai-2').innerHTML = 'Họ tên: ' + hoTen +'; Tiền điện: '+ tienDien.toLocaleString()+'đ';

}