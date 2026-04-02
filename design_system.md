# Hệ thống thiết kế: The Modern Archivist

## 1. Tổng quan & Định hướng sáng tạo
Định hướng sáng tạo cốt lõi cho hệ thống thiết kế này là **"The Curated Gallery" (Phòng trưng bày được tuyển sinh)**. Chúng ta sẽ rời xa mật độ dày đặc kiểu giao diện ứng dụng (app-like) của các phần mềm SaaS truyền thống, chuyển sang cảm giác nhịp nhàng, rộng rãi của một ấn phẩm báo chí cao cấp. Hệ thống này được định hình bởi sự tinh tế, sử dụng các khoảng trắng (white space) không phải như một khoảng trống thừa thãi, mà như một yếu tố cấu trúc.

Để phá vỡ cái nhìn "dập khuôn" máy móc, chúng ta ưu tiên sử dụng **sự bất đối xứng có chủ đích**. Bố cục nên tránh sắp xếp dạng lưới cân xứng hoàn hảo ngay chính giữa; thay vào đó, hãy sử dụng thang đo khoảng cách để tạo sự so le cho các yếu tố, cho phép các tiêu đề serif lớn "treo leo" lơ lửng trên biên lề trong khi nội dung văn bản lại nằm gọn trong các cột hẹp hơn. Bằng cách xếp chồng các yếu tố hình hạt đậu (pill-shaped) mượt mà lên trên khung tiêu đề cổ điển góc cạnh, chúng ta tạo ra một sự căng tràn giữa vẻ đẹp cổ điển và thiết kế đương đại.

## 2. Màu sắc & Cấu trúc bề mặt
Bảng màu của chúng ta bắt nguồn từ quang phổ thiết kế tinh tế, sắc thái tự nhiên—chuyển mình từ màu **primary** (#568331) có tính quyết đoán sâu thẳm, đến màu **secondary** (#6f7b62) êm ái thoáng khí hơn, và được xuyết thêm điểm nhấn thanh bình của màu **tertiary** (#517f7d). Màu **neutral** (#777777) tạo nên lớp nền móng trung tính cho cả hệ thống.

### Nguyên tắc "Không sử dụng đường kẻ"
**Hướng dẫn bắt buộc:** Không được sử dụng viền thẳng nét liền (1px solid borders) để phân cách các khu vực văn bản. Ranh giới về cấu trúc phải được định hình giới hạn độc quyền qua việc thay đổi các mức độ ánh màu của lớp nền.
- Sử dụng `surface_container_low` (#f6f3f2) để tạo phân vùng thứ cấp rộng rãi nhằm phân biệt một cách nhẹ nhàng với nền tảng chủ đạo `background` (#fcf9f8).
- Để chia tách phần Đầu trang (Header) ra khỏi phần giới thiệu chính (Hero), hãy sử dụng thủ thuật thay đổi tông màu chìm thay vì vẽ ra một đường cắt ngang (divider line).

### Cấu trúc phân cấp lớp Bề mặt
Hãy xử lý giao diện như những lớp ngăn tầng vật lý. Chúng ta dùng quy chuẩn xếp chồng gam màu để phân định mức độ quan trọng:
- **Tầng 0 (Tầng Cột lõi):** `surface` (#fcf9f8).
- **Tầng 1 (Khu vực phân vùng):** `surface_container_low` (#f6f3f2).
- **Tầng 2 (Thẻ nội dung tương tác):** `surface_container_lowest` (#ffffff).
- **Tầng 3 (Lớp phủ tương tác):** `surface_bright` kết hợp hiệu ứng làm mờ phông nền (backdrop-blur).

### Quy tắc "Kính và Chuyển sắc"
Để thổi "linh hồn" vào một thiết kế dạng phẳng:
- **Yếu tố lơ lửng:** Dùng `surface_container_lowest` ở độ mờ (opacity) 80% kết hợp hiệu ứng làm mờ lớp nền (backdrop-blur) ở mức `20px` dành cho các thanh điều hướng (navigation bars) hay các nút lệnh nổi (floating action buttons).
- **Chuyển màu tinh tế:** Dành cho các Nút kêu gọi hành động (CTAs) chính hoặc vùng nền Hero, áp dụng sự chuyển đổi màu sắc tuyến tính dạng dốc gradient từ tông `primary` (#3b4e2a) sang `primary_container` (#526640) theo một góc nghiêng 135 độ. Việc này sẽ tạo ra độ sâu xúc giác tựa hồ "mực in trên giấy" mà các mảng màu véc-tơ phẳng không thể nào lột tả được.

## 3. Nghệ thuật chữ (Typography)
Hệ thống sử dụng các mẫu chữ kết hợp từ phông chữ có chân **Newsreader** (Serif) và phông không chân **Manrope** (Sans-serif) theo độ tương phản cao.

- **Dạng chữ Ngoại cỡ và Tiêu đề (Newsreader):** Ứng dụng phổ biến cho nhóm `display-lg` kéo đến xuống nhóm `headline-sm` trên toàn bộ các tài liệu tự sự. Mảng chữ này cần được cài đặt với khoảng cách giữa các chữ thu hẹp lại hơn một chút (-0.02em) nhằm nhấn nhá sự hiện diện của một nhà chuyên san.
- **Nội dung thân trang và thiết kế UI (Manrope):** Dùng nhóm `body-lg` cho các văn bản tường thuật với lối đọc dài, và dùng `label-md` cho các chức danh của cấu trúc UI. Phông chữ không chân mang tới sự "tiện lợi" và tính "hiện đại", giúp cân bằng được vẻ tĩnh mịch từ phông chữ có chân (Serif).
- **Sự thẩm quyền ở cấp bậc Tên tiêu đề:** Hãy tận dụng nhóm `primary` (#3b4e2a) dành riêng cho các tiêu đề nội dung lớn nhằm thâu tóm sự chú ý, còn lại sử dụng `on_surface_variant` (#44483f) áp dụng với dòng tựa đề mờ nhằm xây dựng phần văn thuyết minh lớp thứ hai một cách nhẹ nhàng mà thật dễ đọc.

## 4. Khuôn mẫu về Cao độ và Độ sâu
Mặc dù bạn từng yêu cầu "thật không dùng bóng viền hộp (box-shadows)", thế nhưng chúng ta cũng làm nên được chiều sâu thiết kế này thông qua **Khối Xếp chồng Đa tông (Tonal Layering)** và **Ánh phản quang bao quanh (Ambient Diffusion).**

- **Nguyên lý Xếp Lớp:** Độ sâu là yếu tố mang tính hiện hành "chồng chéo". Nếu ta đem bọc một đoạn nền thẻ `surface_container_lowest` lên trên khoảng không nền `surface_container_low`, một vùng hiển thị "hòn đảo" cong khoảng 24px sẽ ngay lập tức lộ mặt mà hoàn toàn không đánh động một chiếc bóng viền xám rập (drop shadow).
- **Bóng xung quanh - Ambient Shadows (Ngoại lệ):** Cùng lúc ấy, ví thử như một phân đoạn bắt buộc phải đóng kịch "bay lơ lửng" trên khắp các mặt của vô vàn vùng màn hình (điển hình: khung rớt thanh cuộn thả xuống), hãy kích dùng thủ thuật bóng ấm "Ambient Shadow": Cài `Color: #1c1b1b`, `Opacity: 4%`, `Blur: 40px`, cùng `Y-Offset: 12px`. Thiết kế này cho phép nó tạo vẻ lan tỏa như cái nóng êm ả thay cho một viền kẻ cạnh cắt mạnh.
- **"Đường viền tàng hình" (The "Ghost Border"):** Cũng tùy đòi hỏi thao tác của mặt thiết kế cấu trúc nếu thấy cần chỉ định làm một biên giới chứa hộp, mang biến số của sắc chỉ nhạt qua lớp `outline_variant` (#c5c8bc) đặt chung trong tỷ lệ mờ **15% opacity**. Yếu tố này phải cảm nhận được bằng trực giác, chứ chẳng thể dễ dàng nhìn qua thấy ngay.

## 5. Thành phần giao diện (Components)

### Nút lệnh (Buttons)
- **Nút lệnh cấp độ Một (Primary):** Bo góc hình viên nén (`rounded-full`), phần nền phông lấp vào màu `primary`, màu ký tự là `on_primary`. Các kích thước khung xốp lề (Padding): `1rem 2rem`.
- **Nút lệnh cấp độ Hai (Secondary):** Bo góc hình viên nén, vùng nền phông lấp thành `secondary_container`, khung gõ text mang định dạng `on_secondary_container`.
- **Nút lệnh cấp độ Ba (Tertiary):** Định nghĩa cấu trúc chuẩn dạng viền cạnh dưới chân mang font chữ kiểu Newsreader Serif làm màu nhẹ nhàng nhạt hòa bằng phông biến lượng của `secondary`, làm rõ qua nền kích dày 2px với lệch cự ly 4px.

### Thẻ nội dung (Cards) và Tập hợp khối dạng Danh sách (Lists)
- **Quy tắc "Không Khai cắt" (The "No-Divider" Rule):** Đóng rào quy định kiên quyết cấm xài các mốc định dạng phân giới dạng ngang. Nếu nhằm tạo lối xẻ đường chỉ báo trên mục cấu phần, cho chêm thông số về `3.5rem` (Mốc khoảng trống Tương ứng - Spacing 10) về hướng chiều trục cao lùi của sắc trắng hoặc có thể chia dồn cho hoán vị vùng màu đằng trước danh sách trải dài về cặp mã số `surface` hoặc `surface_container_low`.
- **Hình ảnh (Images):** Tuyệt đối các phân tử ảnh rải qua màn phải tận cấu trúc viền góc cung lớn khoảng `xl` (3rem) hay kích tầm `lg` (2rem), với lý dĩ để giúp hiện diện thành cặp đối xứng và sự thản nhiên uyển chuyển mà nhãn hiệu đó sở hữu nét quyến rũ cơ duyên.

### Ô chứa thông số trường Nhập liệu (Input Fields)
- Khước từ các thiết kề dạng cấu tạo ô chèn chữ "bọc kín" (boxed). Hãy đem ra dùng cấu trúc bo dưới chân (Kiểu Viền bóng tàng hình - Ghost Border style) hay phủ thêm lớp `surface_container_high` tạo mờ mịn cho hình khung cắt mang cự ly `md` (1.5rem) tại góc cạnh viền. Khi hiện dạng một nội dung chỉ đường nhỏ, cho bọc gọn vào lớp `label-sm` gắn chặt trong chỉ sắc `on_surface_variant`.

### Hệ cấu hình Riêng biệt của Mẫu Giao diện: "Trích đoạn Chữ Kéo lớn" (The Feature Pull-Quote)
Thiết lập tính tùy chỉnh đặc quyền của giao tiếp khuôn dạng này: Đề xuất gắn dòng báo tựa đề cấp thiết `headline-lg` mang chân (serif), đứng căn vị trí tại chính trung tâm nhét kỹ trong kích thước rãnh dọc khoảng 5.5rem (Tầm cự ly Spacing 16), đánh mốc điểm hình xóc dạng mảng bất cập không song song cho lớp hiệu dấu phủ màu `primary_fixed` (#d3eaba) kề nép trườn đằng sau các mẫu chữ hoa cái thứ nhất.

## 6. Việc nên làm (Do's) và Những Điều Kiêng kị (Don'ts)

### Việc nên làm
- **Nên** cấp phát cho các khoảng không một vùng biên dồi dào, thênh thang. Đã nhẩm nhìn chừa một cự ly vừa ổn, hãy cho nhân bồi thêm chừng 20% mức không gian nữa.
- **Nên** đánh tung độ sắp đặt đa cỡ với cấu trúc chữ lồng vào nhau. Giao thoa phó từ giữa phần mốc tựa mục ở `display-lg` đặt xáp kề dải nhãn `label-sm` dễ sinh vẻ căng thẳng mà cực kỳ cao tay.
- **Nên** phân lưới chỉnh hàng căn cứ dải phân chia với tổng 12 thanh cột khối thế nhưng chủ địch đẩy làm trống không cột dòng định biên thứ 1-2 hoặc từ rãnh số 11-12 mục ích xây cất kiểu "lề sách" chốn tòa soạn tự thuật.

### Kiêng kị
- **Tuyệt đối không** mang ra ứng dụng loại sắc màu đen rặc đen lụi 100% (#000000). Chuyển hướng xài toàn bộ lớp biến số cho toàn văn bằng cấu chỉ `on_surface` (#1c1b1b) qua tác lệnh luôn giữ sự êm dịu, mềm như sợi lông cho cả tập màu pha.
- **Tuyệt đối không** chơi đùa góc nhọn cắt xén đứt lìa. Khắp chốn giao diện phải truyền cảm sự dễ xáp bờ tiến lại và trỗi được bản tính hài hoà thiên tư.
- **Tuyệt đối không** đi tìm các phương thức phác họa bóng tối của mô thức "Material Design" ngụy truyền. Giả dụ khó lấy mắt xác lập phân dải chênh lệch độ phô diễn qua cấu trúc làm nền, hãy ra lệnh vần vũ qua dịch sắc theo biên dịch màu (color shift), chứ nhất quyết chả được xài tới điểm phủ đắp đen qua cái bóng đè.
