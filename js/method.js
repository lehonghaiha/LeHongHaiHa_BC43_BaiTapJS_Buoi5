/**
 * Hàm tính tiền điện phải đóng dựa vào số điện do người dùng nhập vào
 * @param {*} so số điện người dùng nhập vào
 * @returns hàm trả về giá trị tiền điện cần đóng
 */
function tinhTienDien(so) {
    var output = 0;
    if (so == '' || so <= 0) {
        output = 0;
    } else {
        if (so <= 50) {
            output = 500 * so;
        }
        else if (so > 50 && so <= 100) {
            output = 50 * 500 + (so - 50) * 650;
        }
        else if (so > 100 && so <= 200) {
            output = 50 * 500 + 50 * 650 + (so - 100) * 850;
        }
        else if (so > 200 && so <= 350) {
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
    if (thuNhapChiuThue <= (60e+6)) {
        output = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue > (60e+6) && thuNhapChiuThue <= (120e+6)) {
        // output = thuNhapChiuThue * 0.1;
        output = (60e+6) * 0.05 + ((120e+6) - thuNhapChiuThue) * 0.1
    } else if (thuNhapChiuThue > (120e+6) && thuNhapChiuThue <= (210e+6)) {
        // output = thuNhapChiuThue * 0.15;
        output = (60e+6) * 0.05 + (60e+6) * 0.1 + ((210e+6) - thuNhapChiuThue) * 0.15
    } else if (thuNhapChiuThue > (210e+6) && thuNhapChiuThue <= (384e+6)) {
        // output = thuNhapChiuThue * 0.2;
        output = (60e+6) * 0.05 + (60e+6) * 0.1 + (90e+6) * 0.15 + ((384e+6) - thuNhapChiuThue) * 0.2
    } else if (thuNhapChiuThue > (384e+6) && thuNhapChiuThue <= (624e+6)) {
        // output = thuNhapChiuThue * 0.25;
        output = (60e+6) * 0.05 + (60e+6) * 0.1 + (90e+6) * 0.15 + (174e+6)*0.2 + ((624e+6)-thuNhapChiuThue)*0.25
    } else if (thuNhapChiuThue > (624e+6) && thuNhapChiuThue <= (960e+6)) {
        // output = thuNhapChiuThue * 0.3;
        output = (60e+6) * 0.05 + (60e+6) * 0.1 + (90e+6) * 0.15 + (174e+6)*0.2 + (240e+6)*0.25 + ((960e+6)-thuNhapChiuThue)*0.3
    } else if (thuNhapChiuThue > (960e+6)) {
        // output = thuNhapChiuThue * 0.35;
        output = (60e+6) * 0.05 + (60e+6) * 0.1 + (90e+6) * 0.15 + (174e+6)*0.2 + (240e+6)*0.25 + (336e+6)*0.3 + (thuNhapChiuThue-(960e+6))*0.35;
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



