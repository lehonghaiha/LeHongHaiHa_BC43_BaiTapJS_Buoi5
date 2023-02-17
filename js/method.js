/**
 * Hàm tính tiền điện phải đóng dựa vào số điện do người dùng nhập vào
 * @param {*} so số điện người dùng nhập vào
 * @returns hàm trả về giá trị tiền điện cần đóng
 */
function tinhTienDien(so){
    var output=0;
    if (so == '' || so <= 0) {
        output=0;
    } else {
        if (so <= 50) {
            output = 500 * so;
        }
        else if (so > 50 && so <= 100) {
            output = 50 * 500 + (so - 50) * 650;
        }
        else if (so > 100 && soDien <= 200) {
            output = 50 * 500 + 50 * 650 + (so - 100) * 850;
        }
        else if (so > 200 && soDien <= 350) {
            output = 50 * 500 + 50 * 650 + 100 * 850 + (so - 200) * 1100;
        }
        else if (so > 350) {
            output = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (so - 350) * 1300;
        }               
    }
    return output;
}


/**
 * Hàm nhập vào tổng thu nhập cả năm và số người phụ thuộc
 * @param {*} tongLuongNam Người dùng nhập tổng lương năm
 * @param {*} soNguoiPhuThuoc người dùng nhập số người phụ thuộc
 * @returns Hàm sẽ trả về số thuế phải trả
 */
function tinhThueThuNhap(tongLuongNam, soNguoiPhuThuoc) {

    //input: tongLuongNam(number), soNguoiPhuThuoc(number)

    // Output: thuNhapChiuThue (number), thuePhaiTra(number)
    var thuNhapChiuThue = tongLuongNam - 4000000 - (soNguoiPhuThuoc * 1600000);
    var output = 0;
    if (thuNhapChiuThue <= 60000000) {
        output = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
        output = thuNhapChiuThue * 0.1;
    } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
        output = thuNhapChiuThue * 0.15;
    } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
        output = thuNhapChiuThue * 0.2;
    } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
        output = thuNhapChiuThue * 0.25;
    } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
        output = thuNhapChiuThue * 0.3;
    } else if (thuNhapChiuThue > 960000000) {
        output = thuNhapChiuThue * 0.35;
    }

    return output;
}



/**
 * Hàm tính tiền cáp phải đóng dựa vào các thông số người dùng nhập vào
 * @param {*} loaiKhachHang Người dùng chọn loại khách hàng là nhaDan||doanhNghiep 
 * @param {*} soKetNoi Người dùng nhập dữ liệu số kết nối khi chọn khách hàng doanhNghiep
 * @param {*} soKenhCaoCap Người dùng nhập số kênh cao cấp
 * @returns Hàm sẽ trả về giá trị tiền cáp phải đóng
 */
function tinhTienCap(loaiKhachHang, soKetNoi, soKenhCaoCap) {
    var output = 0;

    if (loaiKhachHang === 'nhaDan') {
        output = 4.5 + 20.5 + 7.5 * soKenhCaoCap;
    } else if (loaiKhachHang === 'doanhNghiep') {
        var phiKetNoi = 0;
        if (soKetNoi <= 10) {
            phiKetNoi = 75;
        } else if (soKetNoi > 10) {
            phiKetNoi = (soKetNoi - 10) * 5 + 75;
        }
        output = 15 + 50 * soKenhCaoCap + phiKetNoi;
    }


    return output;
}



