import React from 'react';
import CardItem from '../../components/listproduct/CardItem';
import { IFProduct } from '../../types/IFProducts';

const CategoriesListProduct: React.FC<{ data: IFProduct[] }> = ({ data }) => {
  return (
    <div className="shadow-[0_0_4px_rgba(0,0,0,0.25)] flex flex-row flex-wrap py-[25px] relative gap-y-[20px] px-[50px] md:justify-start justify-center">
      {data.map((e) => (
        <CardItem key={e.id} data={e} />
      ))}
    </div>
  );
};

export default CategoriesListProduct;
