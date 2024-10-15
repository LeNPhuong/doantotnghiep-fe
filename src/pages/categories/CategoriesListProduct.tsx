import React from 'react';
import CardItem from '../../components/listproduct/CardItem';
import LabelName from '../../components/listproduct/LabelName';

const CategoriesListProduct: React.FC<{}> = () => {
  return (
    <div className="shadow-[0_0_4px_rgba(0,0,0,0.25)] flex flex-row flex-wrap pt-[135px] px-[40px] gap-[67px] pb-[32px] relative">
      <LabelName name="TRÁI CÂY" />
      {Array.from({ length: 20 }, (_, e) => (
        <CardItem />
      ))}
    </div>
  );
};

export default CategoriesListProduct;
