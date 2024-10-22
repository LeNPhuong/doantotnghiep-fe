field của sản phẩm
# id -> number
# name - > string
# price -> number
# sale  -> number không lớn hơn 100 và không nhỏ hơn 0
# img -> string link ảnh của cloudinary
# type -> string
# description -> string
# made -> string
# create_at -> Date
# update_at -> Date
# active -> boolean

ví dụ 
{
  "id": 1,
  "name": "Thùng 24 chai nước tinh khiết Dasani 510ml",
  "price": 1000000,
  "sale": 10, -> 10%
  "img": "https://cdn.tgdd.vn/Products/Images/2563/83683/bhx/thung-24-chai-nuoc-tinh-khiet-dasani-510ml-202312272241389347.jpg",
  "description": "Nước tinh khiết Dasani được sản xuất từ nguồn nước ngầm thông qua hệ thống thẩm thấu ngược và thanh trùng bằng Ozone, đảm bảo sự thanh khiết trong từng giọt nước suối giúp thanh lọc cơ thể hoàn hảo của Dasani. 24 chai nước tinh khiết Dasani 510ml vị tinh khiết, thanh mát giúp cơ thể bù nước.",
  "made": "vietnam",
  "create_at": ...,
  "update_at": ...,
  "active": true,
}

danh mục
# id -> number
# name -> string 
# key -> string
# create_at -> Date
# update_at -> Date
# active -> boolean

{
  "id":1,
  "name":"KHUYẾN MÃI",
  "key":"khuyen-mai",
  "create_at":"",
  "update_at":"",
  "active": true,
}

các danh mục
# KHUYẾN MÃI -> khuyen-mai
# RAU CỦ -> rau-cu
# GIA VỊ -> gia-vi
# GẠO BỘT -> gao-bot
# SỮA -> sua
# BÁNH KẸO -> banh-keo
# MÌ MIẾN -> mi-mien
# ĐỒ DÙNG -> do-dung
# KHUYẾN MÃI -> khuyen-mai
# NƯỚC UỐNG -> nuoc-uong


