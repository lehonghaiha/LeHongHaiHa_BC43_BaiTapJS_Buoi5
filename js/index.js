
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
    } else if (tongDiem >= diemChuan) {
        ketQua = 'ĐẬU';
        document.getElementById('ket-qua-bai-1').innerHTML = 'Bạn đã ' + ketQua + '. Tổng điểm: ' + tongDiem;
    }
    else {
        ketQua = 'RỚT';
        document.getElementById('ket-qua-bai-1').innerHTML = 'Bạn đã ' + ketQua + '. Tổng điểm: ' + tongDiem;
    }
}

//BÀI TẬP 2: 
document.getElementById('btn-tinh-tien-dien').onclick = function () {

    //Input: hoTen(string), soDien(number)
    var hoTen = document.getElementById('hoTen').value;
    var soDien = document.getElementById('soDien').value;
    //Output: tienDien(number)
    var tienDien = tinhTienDien(soDien);
    if (tienDien <= 0) {
        document.getElementById('ket-qua-bai-2').innerHTML = "Số Kw không hợp lệ. Vui lòng nhập lại!";
    } else {
        document.getElementById('ket-qua-bai-2').innerHTML = 'Họ tên: ' + hoTen + ' ---- Tiền điện: ' + tienDien.toLocaleString() + 'đ';
    }
}


//BÀI TẬP 3:

document.getElementById('btn-tinh-thue').onclick = function () {
    //input: hoTen(string), tongThuNhapNam(number), soNguoiPhuThuoc(number)
    var hoTen = document.getElementById('ho-ten').value;
    var tongThuNhapNam = document.getElementById('thu-nhap-nam').value;
    var soNguoiPhuThuoc = document.getElementById('nguoi-phu-thuoc').value;
    //output: thuePhaiTra(number)
    var thuePhaiTra = tinhThueThuNhap(tongThuNhapNam, soNguoiPhuThuoc);
    //Process:
    if (tongThuNhapNam <= 0) {
        document.getElementById('ket-qua-bai-3').innerHTML = "Vui lòng nhập tổng thu nhập năm!"
    }
    if (thuePhaiTra <= 0) {
        document.getElementById('ket-qua-bai-3').innerHTML = "Thu nhập không hợp lệ!"
    }
    else if (thuePhaiTra > 0) {
        document.getElementById('ket-qua-bai-3').innerHTML = 'Họ tên: ' + hoTen + ' ---- ' + 'Tiền thuế thu nhập là: ' + thuePhaiTra.toLocaleString() + ' VND';
    }

}

//BÀI TẬP 4:
// Xử lý ẩn hiện thẻ div khi chọn loại khách hàng

document.getElementById('loai-khach-hang').onchange = function () {
    var kiemTra = document.getElementById('loai-khach-hang').value;
    if (kiemTra === 'nhaDan' || kiemTra === '') {
        document.getElementById('so-ket-noi').style.display = "none";
    } else if (kiemTra === 'doanhNghiep') {
        document.getElementById('so-ket-noi').style.display = "block";
    }

}
document.getElementById('btn-tinh-tien-cap').onclick = function () {
    //Input: loaiKhachHang (string), maKhachHang(string), soKenhCaoCap(number), soKetNoi(number)
    var loaiKhachHang = document.getElementById('loai-khach-hang').value;
    var maKhachHang = document.getElementById('ma-khach-hang').value;
    var soKenhCaoCap = document.getElementById('so-kenh-cao-cap').value;
    var soKetNoi = document.getElementById('so-ket-noi').value;



    //Output: tienCap(number)
    var tienCap = tinhTienCap(loaiKhachHang, soKetNoi, soKenhCaoCap);
    //Process
    if (loaiKhachHang == '') {
        document.getElementById('ket-qua-bai-4').innerHTML = 'Vui lòng chọn loại Khách hàng!'
    } else {
        document.getElementById('ket-qua-bai-4').innerHTML = 'Mã khách hàng: ' + maKhachHang + ' --- ' + 'Tiền cáp: $' + tienCap.toLocaleString();
    }
}