import React from 'react';
import CardItem from '../../components/listproduct/CardItem';

const CategoriesListProduct: React.FC<{}> = () => {
  return (
    <div className="shadow-[0_0_4px_rgba(0,0,0,0.25)] flex flex-row flex-wrap py-[25px] px-[40px] gap-[67px] relative">
      {Array.from({ length: 20 }, (_, e) => (
        <CardItem />
      ))}
    </div>
  );
};

export default CategoriesListProduct;
