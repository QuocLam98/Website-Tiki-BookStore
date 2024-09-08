function Footer() {
    return (
        <div className="container grid grid-cols-5 gap-4 bg-white gap-10">
            <div className="col-span-1 flex flex-col gap-4">
                <label className="font-bold">Hỗ trợ khách hàng</label>
                <div className="flex flex-col">
                    <span>Hotline: <span className="font-bold">1900-6035</span></span>
                    <span>(1000đ/phút, 8-21h kể cả T7,CN)</span>
                </div>
                <span>Các câu hỏi thường gặp</span>
                <span>Gửi yêu cầu hỗ trợ</span>
                <span>Hướng dẫn đặt hàng</span>
                <span>Phương thức đặt hàng</span>
                <span>Chính sách đổi trả</span>
                <span>Hướng dẫn trả góp</span>
                <span>Chính sách nhập khẩu</span>
                <span>Hỗ trợ khách hàng: hotro@tiki.vn</span>
                <span>Báo lỗi bảo mật: security@tiki.vn</span>
            </div>
            <div className="col-span-1 flex flex-col gap-4">
                <label className="font-bold">Về Tiki</label>
                <span>Giới thiệu Tiki</span>
                <span>Tiki Blog</span>
                <span>Tuyển dụng</span>
                <span>Chính sách bảo mật thanh toán</span>
                <span>Chính sách bảo mật thông tin cá nhân</span>
                <span>Chính sách giải quyết khiếu nại</span>
                <span>Điều khoản sử dụng</span>
                <span>Giới thiệu Tiki Xu</span>
                <span>Gói hội viên VIP</span>
                <span>Tiếp thị liên kết cùng Tiki</span>
                <span>Bán hàng doanh nghiệp</span>
                <span>Điều kiện vận chuyển</span>
            </div>
            <div className="col-span-1 flex flex-col gap-4">
                <label className="font-bold">Hợp tác liên kết</label>
                <span>Quy chế hoạt động sàn GDTMĐT</span>
                <span>Bán hàng cùng Tiki</span>
                <label className="font-bold">Chứng nhận bởi</label>
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg" alt="" />
            </div>
            <div className="col-span-1 flex flex-col gap-4">
                <label className="font-bold">Phương thức thanh toán</label>
                <label className="font-bold">Dịch vụ giao hàng</label>
            </div>
            <div className="col-span-1 flex flex-col gap-4">
                <label className="font-bold">Kết nối với chúng tôi</label>
                <div className="flex gap-4">

                </div>
            </div>
        </div>
    )
}

export default Footer;