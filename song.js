/*
(async () => {
    await import('https://code.jquery.com/jquery-2.2.4.min.js')
    // Library ready
    console.log(jQuery)
  })()
console.log(JSON.stringify($('li[data-v-7e4653c2]').map((index, x) => {return {id: parseInt($.trim($(x).find('.num').text())), value: $.trim($(x).find('.song-tit').text())}}).get()))
*/
const songs = [{"id":1,"value":"Ngày Rất Thánh và Tôn Quý"},{"id":2,"value":"Ngày Sabát Phước Lành!"},{"id":3,"value":"Con Đường Bộ Hành Không Nơi Định Sẵn"},{"id":4,"value":"Phước Lành của Ngày Sabát"},{"id":6,"value":"Bánh và Rượu Vang Lễ Vượt Qua"},{"id":7,"value":"Bài Ca của Chúa Cứu Chuộc"},{"id":8,"value":"Bởi Hy Sinh Lễ Vượt Qua"},{"id":9,"value":"Hy Sinh của Lễ Bánh Không Men"},{"id":10,"value":"Lễ Kèn Thổi"},{"id":11,"value":"Ngày Đại Lễ Chuộc Tội"},{"id":12,"value":"Lễ Lều Tạm"},{"id":13,"value":"Bảy Tiếng Sấm Đã Giấu Kín"},{"id":14,"value":"Hãy Tán Dương!"},{"id":15,"value":"Nơi Mười Bốn Vạn Bốn Ngàn Nhóm Lại"},{"id":16,"value":"Lời Tiên Tri của Đức Chúa Trời Quyền Năng"},{"id":17,"value":"Cả Thế Gian Này Chẳng Có Sự Sáng"},{"id":18,"value":"Đi Lên Núi Thật Cao Vót"},{"id":19,"value":"Hỡi Đấng Đã Đến Với Danh Đavít"},{"id":20,"value":"Hỡi Cả Thế Giới! Các Ngươi Chẳng Hề Im Lặng"},{"id":21,"value":"Sự Sáng Thật là Đức Chúa Trời Cha Con!"},{"id":22,"value":"Nước Sự Sống của Mẹ"},{"id":23,"value":"Sự Mầu Nhiệm Cuối Cùng"},{"id":24,"value":"Ồ! Vinh Hiển của Giêrusalem"},{"id":25,"value":"Đấng Sự Sáng của Chúng Con"},{"id":27,"value":"Giêrusalem Vinh Quang!"},{"id":28,"value":"Nước Sự Sống Tuôn Trào"},{"id":29,"value":"Dòng Nước Rất Nhỏ Tụ Lại"},{"id":30,"value":"Giêrusalem! Giêrusalem!"},{"id":31,"value":"Danh Mới"},{"id":32,"value":"Từ Nơi Mặt Trời Mọc"},{"id":33,"value":"Mầu Nhiệm Vinh Hiển Đã Được Giấu Kín"},{"id":34,"value":"Đấng An Xang Hồng Đức Chúa Trời Thánh Linh Chí Thánh"},{"id":36,"value":"Đền Thờ Giêrusalem Mới"},{"id":37,"value":"Đấng An Xang Hồng, Đức Chúa Trời Cha Trên Trời"},{"id":38,"value":"Bởi Cánh Tay Quyền Năng của Đấng An Xang Hồng!"},{"id":39,"value":"Quý Giá Biết Bao Tình Yêu Thương của Mẹ!"},{"id":40,"value":"Hôm Nay Cầu Nguyện Tha Thiết \r\ncủa Đức Chúa Trời Mẹ"},{"id":41,"value":"Cho Đến Nơi Cao Trên Cung Trăng"},{"id":42,"value":"Đức Chúa Trời Cha An Xang Hồng Trên Các Từng Trời"},{"id":43,"value":"Nước Sự Sống của Đức Chúa Trời Mẹ"},{"id":44,"value":"Nhờ Quyền Năng của Cha Sáng Tạo"},{"id":45,"value":"Do Phạm Tội Ăn Trái Thiện Ác"},{"id":46,"value":"Hãy Hát Xướng Bằng Bài Ca Mới \r\nCho Đức Chúa Trời"},{"id":47,"value":"Tình Yêu Thương của Đức Chúa Trời Mẹ Đã Bị Giấu Kín Trải Qua Các Kiếp"},{"id":48,"value":"Được Nhận Sự Vinh Hiển Thật Lớn của Đấng Sáng Tạo Vĩ Đại"},{"id":49,"value":"Nhìn Xem! Giêrusalem Sáng Láng Rực Rỡ!"},{"id":50,"value":"Siru, Người Xức Dầu của Đức Chúa Trời"},{"id":51,"value":"“Hỡi Các Người Hầu Việc Hòm Giao Ước!”"},{"id":52,"value":"Bằng Môi Miếng Bé Mọn"},{"id":53,"value":"Sự Lành Phước Đức Chúa Trời Mẹ Ban Cho"},{"id":54,"value":"Biển Nhân Loại Muôn Nước Khắp Thế Gian Này"},{"id":55,"value":"Đấng Vĩ Đại Trên Toàn Vũ Trụ"},{"id":56,"value":"Lạy Chúa Trời An Xang Hồng! Hãy Làm Cho Mới Lại Thần Linh của Con!"},{"id":57,"value":"Đi Tìm Kiếm Con Cái Đã Bị Mất"},{"id":58,"value":"An Xang Hồng Đấng Yêu Thương!"},{"id":61,"value":"Lạy Đức Chúa Trời Cha! Lạy Đức Chúa Trời Mẹ!"},{"id":62,"value":"Nếu Chúng Ta Chỉ Trông Cậy Đời Nầy"},{"id":63,"value":"Đức Chúa Trời Cha Đã Yêu Thương Chúng Con Biết Bao"},{"id":64,"value":"Làm Cho Linh Hồn Tôi Hiểu Biết Đấng Christ"},{"id":65,"value":"Thánh Thay Dường Nào Danh Mới"},{"id":66,"value":"Bởi Sự Khôn Ngoan Đức Chúa Trời"},{"id":67,"value":"Hãy Cảm Tạ Đức Chúa Trời"},{"id":69,"value":"Khi Còn Ở Đời Này"},{"id":70,"value":"Bằng Hết Linh Hồn của Con"},{"id":71,"value":"Danh Chí Thánh Mẹ Tôn Quý"},{"id":72,"value":"Tội Lỗi Tày Trời Thật Lớn Chúng Con"},{"id":73,"value":"Ngai Vinh Hiển Thật Sáng Láng"},{"id":74,"value":"Tình Yêu Thương Vô Hạn của Đức Chúa Trời"},{"id":75,"value":"Hôm Nay Giờ Này Đây"},{"id":76,"value":"Bằng Lòng Cảm Tạ Đi Vào Cửa Siôn"},{"id":77,"value":"Trở Nên Hoa Sự Sống Được Nở Ra"},{"id":78,"value":"Thưa Mẹ Ơi! Mẹ của Con Càng Gọi Càng Nhớ!"},{"id":79,"value":"Thưa Mẹ ơi! Thưa Mẹ ơi! Ồ! Mẹ của Con ơi!"},{"id":80,"value":"Đấng Chí Thánh và Quyền Năng"},{"id":81,"value":"Những Gì Đầy Dẫy Trong Tấm Lòng Chúng Con"},{"id":82,"value":"Ấy là Vinh Quang Vô Hạn"},{"id":83,"value":"Loài Người Là Gì"},{"id":84,"value":"Cầu Nguyện Tâm Linh"},{"id":85,"value":"거룩하신 하나님께 경배"},{"id":86,"value":"Tình Yêu Thương Lớn Lao Đức Chúa Trời Mẹ"},{"id":87,"value":"Bài Ca của Người Tiên Tri"},{"id":88,"value":"Nên Thánh và Tin Kính"},{"id":89,"value":"Diều Răn của Đức Chúa Trời Quý Hơn Cả Vàng Ròng!"},{"id":90,"value":"Hãy Vượt Qua Biển Đỏ"},{"id":91,"value":"Hãy Nhìm Xem Lễ Trọng Thể Giao Ước Mới!"},{"id":93,"value":"Tại Nơi Rất Thánh Ngài, Đấng Chí Thánh Tỏ Hình Ảnh Ấy"},{"id":94,"value":"Người Dân Được Ngài Lựa Chọn"},{"id":95,"value":"Là Chiên Con!"},{"id":96,"value":"Phước Cho Người Nào"},{"id":97,"value":"Trở Nên Năm Người Nữ Khôn"},{"id":98,"value":"Từ Nơi Đồng Vắng Hoang Vu"},{"id":99,"value":"Hãy Tán Dương Đấng An Xang Hồng!"},{"id":101,"value":"Đấng Sáng Tạo của Chúng Con"},{"id":102,"value":"Việc Dựng Nên Đền Thánh của Mẹ"},{"id":104,"value":"Đối Với Người Nào Có Ý Định Tốt"},{"id":105,"value":"Các Thánh Đồ Hội Thánh Sơ Khai Gìn Giữ Giao Ước Mới"},{"id":106,"value":"Như Đức Tin Tuyệt Đối Ápraham"},{"id":107,"value":"Đức Chúa Trời Chiếu Ánh Sáng Sự Sống"},{"id":110,"value":"Ngày Nào Cũng Đồng Tấm Lòng"},{"id":111,"value":"Ngài Thật là Đức Chúa Trời"},{"id":112,"value":"Ta là Sự Sống Lại!"},{"id":113,"value":"Giọng Tiếng Khẩn Thiết của Cha"},{"id":114,"value":"Đức Chúa Trời An Xang Hồng Đến Thế Gian"},{"id":115,"value":"Đấng An Xang Hồng Chí Thánh"},{"id":116,"value":"Đức Chúa Trời Đến Từ Phương Đông!"},{"id":117,"value":"Trở Nên Hột Lúa Mì Chết Đi"},{"id":119,"value":"Giọng Tiếng của Mẹ"},{"id":120,"value":"Chiếu Từ Phương Đông Mặt Trời Mọc Lên"},{"id":121,"value":"Tôi Không Ghen Ghét"},{"id":122,"value":"Hỡi Những Người Kính Sợ Đức Chúa Trời Mẹ"},{"id":123,"value":"Người Nào Có Đức Tin Thì"},{"id":125,"value":"Môise Cùng Mọi Đấng Tiên Tri"},{"id":126,"value":"Người Nào Thắng!"},{"id":127,"value":"Giọng Đức Chúa Trời Mẹ"},{"id":130,"value":"Đức Chúa Trời Thật Chí Thánh Ban Nước Sự Sống"},{"id":131,"value":"Giêrusalem, Nguồn Nước Sự Sống"},{"id":132,"value":"Ba Mươi Bảy Năm Cha Tái Hiện Ra"},{"id":133,"value":"Này, Ta Gọi Chim Ó Phương Đông!"},{"id":134,"value":"Mẹ là Sự Sống của Tôi!"},{"id":135,"value":"Nơi Yên Nghỉ của Linh Hồn Chúng Ta"},{"id":136,"value":"Cây Gậy của Môise"},{"id":137,"value":"Người Tin Danh Mới Đấng An Xang Hồng"},{"id":139,"value":"Ai là Người Đi Lên Núi Thánh Siôn của Đức Chúa Trời"},{"id":142,"value":"Luật Pháp của Đức Chúa Trời là"},{"id":143,"value":"Theo Lời Tiên Tri, Ngài Cho Chúng Con"},{"id":144,"value":"Cha của Tôi Đã Đến Rồi"},{"id":145,"value":"Ngài Cứu Rỗi Con Này"},{"id":147,"value":"Cội Rễ của Vua Davít"},{"id":149,"value":"Tôi Như Cây Bá Hương"},{"id":150,"value":"Cha, Đấng An Xang Hồng Đích Thân Đã Đến"},{"id":151,"value":"Để Tìm Kiếm Con Cái Trên Trời"},{"id":152,"value":"Bởi Tiếng Kêu La của Giôsuê"},{"id":153,"value":"Tôi Sẽ Lấy Gì Làm Cho Đức Chúa Trời Mẹ Được Vui Mừng"},{"id":154,"value":"Xin Hãy Ban Cho Con Sức Mới"},{"id":156,"value":"Tại Trước Mặt Đức Chúa Trời"},{"id":157,"value":"Cha Sự Sống của Con"},{"id":158,"value":"Hôm Nay Tôi Cũng Đi Đến Siôn"},{"id":160,"value":"Ta Sẽ Giúp Đỡ Ngươi"},{"id":161,"value":"Tôi Bắt Đầu Đi Lên Đường"},{"id":162,"value":"Ta Nôn Nả Làm Điều Ấy"},{"id":163,"value":"Sự Khởi Đầu cùng Sự Sau Rốt của Chúng Con"},{"id":164,"value":"Ngọn Đèn của Thế Gian Tối Tăm"},{"id":165,"value":"Ồ! Thưa Mẹ! Mẹ là Sự Sống!"},{"id":166,"value":"Trên Con Đường Nhân Sinh Mờ Mịt Tăm Tối"},{"id":167,"value":"Tôi Cậy Ân Huệ Đức Chúa Trời Cha Mà Sống"},{"id":168,"value":"Khi Còn Đi Theo Đường Thế Gian"},{"id":169,"value":"Đức Chúa Trời Mẹ là Đường Đi là Lẽ Thật"},{"id":170,"value":"Nếu Không Khai Phá Vỡ Hoang Trong Tấm Lòng của Tôi"},{"id":171,"value":"God Said to Abraham"},{"id":172,"value":"Today I Walk the Way of My Father"},{"id":173,"value":"Đường Này, Nay Tôi Đang Đi Theo!"},{"id":174,"value":"Danh Vinh Hiển của Giêrusalem Mới"},{"id":178,"value":"Đường Về Quê Hương Lúc Hoàng Hôn"},{"id":179,"value":"Ánh Sáng của Buổi Sớm Mai Chói Lòa"},{"id":180,"value":"Quê Hương Trên Trời Vĩnh Viễn Nhà của Tôi"},{"id":182,"value":"Hãy Ngước Mắt Ngắm Nhìn Vũ Tru Bao La Lấp Lánh Các Vì Sao Đang Chiếu Sáng"},{"id":183,"value":"Vườn Thiên Đàng Chúa Trời Cha Ngự"},{"id":184,"value":"Quê Hương Tôi ở Trên Trời Kia"},{"id":185,"value":"Trên Bờ Sông Sự Sống Đẹp Đẽ"},{"id":186,"value":"Ngày Vinh Hiển Trở Về Nước Thiên Đàng"},{"id":187,"value":"Trong Tấm Lòng Tôi Tưởng Tương Ra"},{"id":188,"value":"Tôi Nhớ Giọng Tiếng của Mẹ"},{"id":189,"value":"Con Đường Về Quê Hương"},{"id":190,"value":"Kẻ Chưa Được Trọn Vẹn Thuộc Về Đất"},{"id":191,"value":"Trước Khi Biết Đức Chúa Trời Cha"},{"id":193,"value":"Đến Thế Giới Thiên Sứ Con Ao Ước"},{"id":194,"value":"Ở Núi Thánh Biển Thủy Tinh"},{"id":195,"value":"Hỡi Êđen Ta Thật Muốn Đi!"},{"id":196,"value":"Ghi Khắc Sâu Trong Tấm Lòng Mẹ"},{"id":197,"value":"Tiệc Tùng Vinh Hiển Hân Hoan Nước Thiên Đàng"},{"id":198,"value":"Ban Cho Chúng Con Sự Sáng Láng"},{"id":199,"value":"Leo Lên Nơi Cao Kia"},{"id":200,"value":"Tôi là gì?"},{"id":201,"value":"Giao Ước Mới Đấng An Xang Hồng Lập Ra"},{"id":202,"value":"Hỡi Sự Sáng Trên Trời!"},{"id":203,"value":"Chúa Trời Cha Kiếm Tìm Chúng Con"},{"id":204,"value":"Hãy Nhướng Mắt Lên và Nhìn Xem!"},{"id":206,"value":"Trong Thời Gian Đằng Đẵng Vĩnh Viễn"},{"id":207,"value":"Như Chim Bay Hướng Về Trời"},{"id":208,"value":"A! Quê Hương Trên Trời Kia của Tôi"},{"id":209,"value":"Ngôi Thiên Thượng Trên Trời"},{"id":210,"value":"Sự Đớn Đau Cuộc Đời"},{"id":211,"value":"Dầu Con Cầu Nguyện Bằng Nước Mắt Hối Cải"},{"id":213,"value":"Đức Chúa Trời Ban Sự Sáng"},{"id":214,"value":"Anh Em Khiêm Tốn, Chị Em Nhu Mì"},{"id":215,"value":"Quê Hương"},{"id":216,"value":"Cửa Trên Trời Được Mở Ra"},{"id":219,"value":"Xòe Rộng Đôi Cánh Màu Bạc Tươi Đẹp"},{"id":222,"value":"Ồ! Nước Thiên Đàng Đức Chúa Trời Sắm Sẵn"},{"id":223,"value":"Cha Đến Đầu Cùng Đất Phương Đông"},{"id":225,"value":"Sự Chói Sáng Rực Rỡ Trong Khoảng Không Trên Trời"},{"id":227,"value":"Chẳng Cảm Nhận Được Sao?"},{"id":228,"value":"Hình Ảnh Ấy Thật Đẹp Thay!"},{"id":229,"value":"Dầu Ngài Cưỡi Lừa Con Mà Đến"},{"id":230,"value":"Tình Yêu Thương của Mẹ"},{"id":231,"value":"Hỡi Sự Sống!"},{"id":233,"value":"Mong Ước Nơi Đẹp Đẽ"},{"id":234,"value":"Ô! Thật Lạ Lùng! Tình Yêu Thương Lớn Lao Ấy"},{"id":235,"value":"Tình Yêu Thương Hay Nhịn Nhục"},{"id":236,"value":"Mother, Mother"},{"id":237,"value":"Hôm Nay Tôi Thấy Hương Khí của Siôn"},{"id":238,"value":"Lạy Thưa Cha! Ngày Tháng Đau Đớn Ấy"},{"id":239,"value":"Tình Yêu Thương Anh Em Thiện Lành ở Siôn"},{"id":240,"value":"Giêrusalem Nơi Ở Thánh Khiết"},{"id":241,"value":"Ôi! Hôm Nay, Ngày Đẹp Như Thế  Này"},{"id":244,"value":"Ai Trên Thế Gian Quên Đi Ngủ"},{"id":245,"value":"Mẹ ơi, Mẹ Chính là Tình Yêu Chân Thật"},{"id":247,"value":"Sự Sáng Vinh Quang Rất Chí Tôn"},{"id":248,"value":"À! Thưa Mẹ của Chính Con"},{"id":249,"value":"Ồ! Đức Chúa Trời của Con Thật Đáng Cảm Tạ"},{"id":250,"value":"Trong Tấm Lòng Chúng Ta"},{"id":251,"value":"Nguyện Xin Cha Mẹ Ban Phước Dư Dật!"},{"id":252,"value":"Ngài Phán “Hãy Yêu Nhau!”"},{"id":253,"value":"Tình Yêu Thương Không Nhìn Thấy Được"},{"id":254,"value":"Dẫu Đến Đỗi Trời của Các Từng Trời"},{"id":255,"value":"Toàn Trái Đất chỉ là Hỗn Độn"},{"id":256,"value":"Vườn Siôn Đầy Dẫy Tình Yêu Thương"},{"id":257,"value":"Xin Hãy Mặc Áo Lễ"},{"id":258,"value":"Chúng Tôi là"},{"id":259,"value":"Vì Lang Thang Trong Tối Tăm"},{"id":260,"value":"Hỡi Anh Em Trên Trời Thương Nhớ của Tôi!"},{"id":261,"value":"Hầu Việc Anh Em"},{"id":263,"value":"Anh Em Ăn Ở Hòa Thuận Nhau"},{"id":264,"value":"Chúng Con Thảy Đều Như Là Con Chiên"},{"id":265,"value":"Ly Biệt Sáu Ngàn Năm"},{"id":266,"value":"Tình Yêu Thương, Sự Vui Mừng, Bình An"},{"id":267,"value":"Hãy Trở Nên Hột Giống Lúa Mì Chết Đi"},{"id":268,"value":"Vào Sáng Sớm, Trong Ánh Sáng Ban Mai"},{"id":269,"value":"Tiếng của Tình Yêu Thương"},{"id":270,"value":"Chúng Ta Hãy Yêu Thương Lẫn Nhau"},{"id":271,"value":"Sự Trông Cậy Hay Nước Thiên Đàng Kia"},{"id":272,"value":"Đức Chúa Trời Cha của Chúng Ta Xưng"},{"id":273,"value":"Đấng Đã Sáng Tạo Sự Sống Đời Đời"},{"id":274,"value":"Tình Yêu Thương Đức Chúa Trời Cha"},{"id":275,"value":"Bởi Tình Yêu Thương Trên Thiên Thượng"},{"id":276,"value":"A! Vĩ Đại Thay Tình Yêu Thương Ấy"},{"id":277,"value":"Theo Hình Ảnh của Chúng Ta"},{"id":278,"value":"Điều Đã Rao Truyền Cho Chúng Tôi"},{"id":279,"value":"Một Người Đã Dấy Từ Phương Đông"},{"id":281,"value":"Giêrusalem Thành Yêu Thương"},{"id":282,"value":"Cho Chúng Con Hiểu Biết Tình Yêu Thương của Ngài"},{"id":283,"value":"Tình Yêu Thương của Mẹ Đã Cứu Lấy"},{"id":285,"value":"Mười Bốn Vạn Bốn Ngàn Trái"},{"id":286,"value":"Chúng Con Nghe Thấy Tiếng phán"},{"id":287,"value":"Hỡi Hy Sinh Thật Chí Thánh"},{"id":288,"value":"Dưới Xiềng Xích Tối Tăm và Sự Chết"},{"id":289,"value":"Lá Cây Vả Mới Đâm"},{"id":290,"value":"Mẹ Đi Dạo Giữa Những Hòn Ngọc Sáng Như Lửa"},{"id":291,"value":"Bàn Thờ Lễ Thiêu Chiên Con"},{"id":292,"value":"Để Tìm Con Cái"},{"id":293,"value":"Thưa Cha ở Trên Trời"},{"id":295,"value":"Mẹ, Sự Sống của Con!"},{"id":296,"value":"Há Đích Thân Đức Chúa Trời Đã Đến"},{"id":297,"value":"Thật Cao Cả Sự Hy Sinh"},{"id":298,"value":"Hy Sinh của Thầy Tế Lễ Thượng Phẩm"},{"id":301,"value":"Từ Bỏ Sau Lưng Vinh Quang Trên Trời"},{"id":302,"value":"Cha, Để Cứu Con"},{"id":303,"value":"Dầu Chặng Đường Chất Đầy Chông Gai"},{"id":304,"value":"Trên Bàn Tay Xù Xì của Cha"},{"id":306,"value":"Để Đánh Thức Thế Gian Dẫy Đầy Sự Tối Tăm"},{"id":307,"value":"Đô Thành của Đức Chúa Trời, Hỡi Giêrusalem!"},{"id":309,"value":"Ngày Tháng Sáu Ngàn Năm Qua"},{"id":310,"value":"Ađam Sau Hết và Êva Sau Hết"},{"id":311,"value":"Hỡi Các Ngươi là Kẻ Yêu Mến Giêrusalem"},{"id":312,"value":"Con là chi mà"},{"id":313,"value":"Xin Rửa Tội Lỗi của Con"},{"id":314,"value":"Trước Đây Con Thật Chẳng Nhận Ra"},{"id":315,"value":"A Bơ Gi! Dù Con Rất Muốn Gọi Thưa Cha"},{"id":317,"value":"Tấm Lòng của Thảy Mọi Chúng Con Đều"},{"id":318,"value":"Khi Nhìn Bằng Đôi Mắt Yêu Thương của Đức Chúa Trời Cha"},{"id":319,"value":"Bây Giờ Mới Hối Cải Trước Mặt Ngài!"},{"id":320,"value":"Hãy Hối Cải! Vì Nước Thiên Đàng Đến Gần!"},{"id":321,"value":"A! Đức Chúa Trời Mẹ Yêu Thương"},{"id":323,"value":"Hãy La Tiếng Đến Samari, Đầu Cùng Đất!"},{"id":326,"value":"Chúng Ta Hãy Nắm Chặt Bàn Tay Với Nhau"},{"id":327,"value":"Vũ Trụ Bao La và Mênh Mông Kia!"},{"id":328,"value":"A! Hỡi Anh Chị Em Nhớ Nhung của Tôi!"},{"id":329,"value":"Sự Sáng Vinh Hiển Đấng An Xang Hồng"},{"id":330,"value":"Quê Hương Trên Trời Kia Xưa"},{"id":331,"value":"Tin Tức Tốt Lành Hòa Bình"},{"id":332,"value":"Để Làm Người Giúp Việc của Giao Ước Mới"},{"id":333,"value":"Đấng Dùng Lời Lẽ Thật Sanh Ra Chúng Con!"},{"id":334,"value":"Bởi Thịt và Huyết Đức Chúa Trời"},{"id":335,"value":"Hướng Về Tổ Ám Yêu Thương"},{"id":336,"value":"Lòng Trông Cậy Trên Trời"},{"id":337,"value":"Trên Vọng Canh Thành Giêrusalem"},{"id":339,"value":"Đức Chúa Trời Cha Ngự Trên Trời"},{"id":341,"value":"Nếu Chẳng Có Ai Rao Giảng"},{"id":342,"value":"Hãy Thổi Kèn Tin Lành!"},{"id":344,"value":"Hãy Truyền Sự Cứu Rỗi Lớn Lao của Đức Chúa Trời"},{"id":345,"value":"Hỡi Các Người Đương Ngủ! Hãy Thức Dậy!"},{"id":346,"value":"Nào Hãy Nhướng Mắt Nhìn Đồng Ruộng"},{"id":347,"value":"Tay Tả Hãy Cầm Cái Đuốc Cháy Bừng Lên!"},{"id":348,"value":"Hỡi Thanh Niên Kẻ Canh Giữ Siôn"},{"id":349,"value":"Hãy Nhìn Xem! Hãy Nghe Thấy!"},{"id":350,"value":"Thánh Linh Đức Chúa Trời Cha Đã Hứa Ban Cho"},{"id":351,"value":"Mùa Tin Lành Nước Thiên Đàng"},{"id":354,"value":"Cầm Gươm Lời Đức Chúa Trời"},{"id":355,"value":"Hỡi Ngươi, là Người của Đức Chúa Trời!"},{"id":356,"value":"Hỡi Các Dũng Sĩ Lẽ Thật"},{"id":357,"value":"Con Đường Cha An Xang Hồng Đã Đi"},{"id":358,"value":"Hãy Tỉnh Thức, Dấy Lên, Chói Lòa!"},{"id":359,"value":"Mặc Lấy Quyền Năng của Ngài"},{"id":360,"value":"Hãy Đi Đến Thế Giới!"},{"id":361,"value":"Người Giúp Việc của Giao Ước Mới"},{"id":362,"value":"Từ Đầu Cùng Đất Nhỏ Tại Phương Đông"},{"id":363,"value":"Hỡi Các Thanh Niên Trong Siôn! Hãy Bước Ra Thế Giới"},{"id":364,"value":"Hãy Cứu Một Linh Hồn!"},{"id":365,"value":"Mọi Nơi Bàn Chân Chúng Con Đặt Đến"},{"id":367,"value":"Đức Thánh Linh Ngự Trên Chúng Ta"},{"id":368,"value":"Hướng Đến Tân Thế Giới của Tin Lành"},{"id":369,"value":"Hỡi Con Cái Giêrusalem!"},{"id":372,"value":"Hỡi Các Người Sống Vĩnh Viễn"},{"id":373,"value":"Công Việc Vĩ Đại của Đức Chúa Trời"},{"id":374,"value":"Tin Lành Đầy Sự Vinh Hiển"},{"id":375,"value":"Xin Ngài Hãy Mở Cửa Trên Trời"},{"id":376,"value":"Bằng Tấm Lòng Đầy Tràn Niềm Vui"},{"id":377,"value":"Hãy Nhìn Kìa! Tiếng Kèn Vang của Những Kẻ Canh Giữ"},{"id":378,"value":"Cầu Nguyện"},{"id":379,"value":"Hầu Cho Nhận Biết Ân Huệ của Cha"},{"id":380,"value":"Nguyện Xin Ngài Hãy Mau Chóng Đến!"},{"id":381,"value":"Xin Hầu Cho Con Nhận Biết"},{"id":382,"value":"Xin Hãy Cho Con Hầu Việc"},{"id":383,"value":"Xin Hãy Lấp Đầy Lòng Chúng Con!"},{"id":384,"value":"Vào Giờ Này Con Cầu Khẩn"},{"id":386,"value":"Xin Hầu Cho Con Nhẫn Nhịn"},{"id":387,"value":"Lạy Thưa Đấng An Xang Hồng, Đức Chúa Trời của Con Ôi!"},{"id":388,"value":"Con Cầu Khẩn"},{"id":389,"value":"Bởi Được Đức Thánh Linh Cảm Động"},{"id":390,"value":"Lạy Thưa Đức Chúa Trời Chí Thánh"},{"id":391,"value":"Lạy Đức Chúa Trời Mẹ Thật Khẩn Thiết"},{"id":392,"value":"Thần Lẽ Thật!"},{"id":393,"value":"Trong Tình Yêu Thương của Mẹ"},{"id":395,"value":"Lạy Đức Chúa Trời Cha ở Trên Trời"},{"id":396,"value":"Ân Sủng Chúa Trời Lấp Lánh Sáng Ngời"},{"id":397,"value":"Ngày Nghỉ Ngơi Đầy Phước Lành"},{"id":398,"value":"Christ Phục Sinh"},{"id":399,"value":"Thánh Thay, Thánh Thay, Thánh Thay!"},{"id":400,"value":"Vọng Vang Tiếng Ngợi Khen"},{"id":401,"value":"Muôn Vật Được Đấng An Xang Hồng Sáng Tạo"},{"id":402,"value":"Ngôi Cao Cả Sáng Láng"},{"id":403,"value":"Chính Cha Luôn Luôn Dẫn Dắt"},{"id":404,"value":"Tôi Đã Từng Lìa Khỏi Bầy Chiên"},{"id":405,"value":"Khi Chúng Ta Mệt Mỏi Vì Tội Lỗi Đã Phạm"},{"id":406,"value":"Cha Mẹ Dẫn Đưa Đời Tôi"},{"id":407,"value":"Lời Cha Thật Sâu Sắc và Ngọt Ngào"},{"id":408,"value":"Nơi Hội Thánh Giống Như Thành Siôn"},{"id":409,"value":"Dầu Vượt Qua Núi Cao, Thung Lũng Hiểm Nguy"},{"id":410,"value":"Cha Đã Chiếu Soi Đường Chúng Con Phải Đi"},{"id":411,"value":"Nầy, Đấng An Xang Hồng Đã Đến!"},{"id":412,"value":"Vì Linh Hồn của Tôi Được Chiếu Sáng"},{"id":413,"value":"Nhân Từ Thay Đấng An Xang Hồng"},{"id":414,"value":"Dầu Ta Không Nhìn Thấy Mọi Chứng Cớ"},{"id":415,"value":"Siôn, Thành Vững Mạnh"},{"id":416,"value":"Để Được Tự Do Khỏi Tội Lỗi"},{"id":417,"value":"Ân Huệ Lớn Lao của Đức Chúa Trời An Xang Hồng"},{"id":418,"value":"Cha An Xang Hồng Kêu Gọi: Hãy Đến"},{"id":419,"value":"Dòng Huyết Quý Báu Như Ngọn Suối Nước Sự Sống"},{"id":420,"value":"Nay Tôi Tin Cậy Cha An Xang Hồng"},{"id":422,"value":"Hãy Loại Bỏ Những Nghi Ngờ Đầy Dẫy Trong Lòng"},{"id":423,"value":"Tận Nơi Sâu Thẳm Trong Linh Hồn Tôi"},{"id":424,"value":"Để Thoát Khỏi Gánh Nặng và Ách của Sự Đau Đớn"},{"id":425,"value":"Đến Gần Ngài"},{"id":426,"value":"Xin Hãy Giáng Lâm, Hỡi Đấng Nguồn Phước Lành"},{"id":427,"value":"Dẫu Gặp Phải Hoạn Nạn, Khó Khăn"},{"id":428,"value":"Con Đường Đi Về Trên Trời Sáng Láng"},{"id":429,"value":"Ấy là Sự Trông Cậy Trong Lòng Ta"},{"id":430,"value":"Niềm Vui Trong Tôi Chảy Tràn Như Dòng Sông"},{"id":431,"value":"Đi Đến Thiên Đàng Tốt Đẹp Kia"},{"id":432,"value":"Vì Kèn Hành Quân Đã Được Thổi"},{"id":433,"value":"Tiếng Kèn Báo Sự Giáng Lâm Thật Rung Động"},{"id":435,"value":"Linh Hồn Tôi Nhận Lấy Ân Sủng"},{"id":436,"value":"Tôi Được Nghỉ Ngơi Thỏa Thích Trong Cánh Tay của Ngài"},{"id":437,"value":"Ngài là Niềm Vui của Con"},{"id":438,"value":"Ngọc Thể Cao Quý của Cha"},{"id":439,"value":"Ôi! Lời Đức Chúa Trời Cha Ban Cho Chúng Ta"},{"id":440,"value":"Ngài Đã Vì Con mà Phán Lời Ấy"},{"id":441,"value":"Tình Yêu Thương To Lớn Ấy của Đức Chúa Trời"},{"id":442,"value":"Vì Con Không Nơi Nương Tựa"},{"id":443,"value":"Bởi Huyết Quý Báu Chiên Con Làm Của Lễ Chuộc Tội"},{"id":444,"value":"Đầu Tội Lỗi của Ngươi Gian Ác"},{"id":445,"value":"Bởi Huyết Báu Lễ Vượt Qua Giao Ước Mới"},{"id":446,"value":"Trước Đêm Tăm Tối Bao Phủ Quanh"},{"id":447,"value":"Hãy Ném Dây Sự Sống Vượt Qua Dòng Nước Kia"},{"id":448,"value":"Chúng Ta Từ Sáng Sớm"},{"id":449,"value":"Lúa Mì Chín Vàng Rực Đang Trải Dài"},{"id":450,"value":"Thiết Tha và Êm Dịu Cha Đang Gọi"},{"id":451,"value":"Tin Tức Rất Vui Mừng Này"},{"id":452,"value":"Hãy Trở Về! Hãy Trở Về!"},{"id":453,"value":"Thời Gian Con Cầu Nguyện Lên Cha"},{"id":454,"value":"Con Xin Hướng Về Nơi Cao Cả Ấy"},{"id":455,"value":"Thử Thách Hiểm Nguy Trong Dòng Nước"},{"id":456,"value":"Hỡi Cha Đấy Dẫy Nhân Từ"},{"id":457,"value":"Ngày Trước Con Đi Cách Xa Ngài"},{"id":458,"value":"Dầu Cho Thế Gian Đầy Nguy Hiểm"},{"id":459,"value":"Hỡi Thánh Linh, Xin Ngự Trên Con!"},{"id":460,"value":"Mọi Sự Thử Thách, Lo Lắng, Khó Khăn"},{"id":461,"value":"Ôi! Huyết Quý Báu Chiên Con"},{"id":462,"value":"Như Rơm Khô Giữa Cánh Đồng Vắng Vẻ"},{"id":463,"value":"Vầng Đá Muôn Đới"},{"id":464,"value":"Trên Thế Gian Luôn Dẫy Đầy Sự Lo Âu"},{"id":465,"value":"Thân Thể Đang Đi Bộ Hành Cuộc Đời Đau Đớn"},{"id":466,"value":"Sau Khi Vất Vả, Lao Khổ Thế Gian Qua Đi"},{"id":467,"value":"Nhìn Thấy Nước Thiên Đàng Kia"},{"id":468,"value":"Sau Mọi Sự Vất Vả cùng Khó Nhọc Đi Qua"},{"id":469,"value":"Nơi Vầng Đá Muôn Đới Được Mở Ra"},{"id":470,"value":"Nước Thiên Đàng Kia Sáng Láng Hơn Mặt Trời"},{"id":471,"value":"Cho Đến Khi Chúng Ta Sẽ Gặp Lại"},{"id":472,"value":"Hãy Bước Đi Đến Khắp Cả Thế Giới!"}];