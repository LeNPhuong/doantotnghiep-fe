import React from 'react';

const FieldInfor: React.FC<{
  label: string;
  value: string | number;
  color?: string;
  size: string;
  color1?: string;
  color2?: string;
  weight?: string;
}> = ({
  label,
  value,
  color = '#000',
  size,
  color1 = '',
  color2 = '',
  weight = '',
}) => {
  return (
    <div
      style={{
        color: color,
        fontSize: size,
        fontWeight: weight.length > 0 ? weight : 'inherit',
      }}
      className="flex flex-row justify-between text-[#004D40]"
    >
      <p
        style={{
          color: color1?.length > 0 ? color1 : 'inherit',
        }}
      >
        {label}
      </p>
      <p
        style={{
          color: color2.length > 0 ? color2 : 'inherit',
        }}
      >
        {value}
      </p>
    </div>
  );
};

export default FieldInfor;
