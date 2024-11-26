export function extractValueAndUnit(str: string) {
  // Biểu thức chính quy tìm các số và đơn vị (kg, g, m, cm, ...):
  const regex = /(\d+(\.\d+)?)\s*(kg|g|m|cm|l|thùng|hộp|bịch|ml)?/i;
  const match = str.match(regex);

  if (match) {
    const value = match[1]; // Giá trị số
    const unit = match[3] ? match[3].toLowerCase() : ''; // Đơn vị (nếu có)
    return { value, unit };
  }

  return null; // Trường hợp không tìm thấy giá trị nào
}
