import React from 'react';
import ItemList from './ItemList';

const CategoriesListMenu: React.FC<{}> = () => {
  return (
    <div className="min-h-[80px] max-h-[80px] w-full bg-[#fff] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex flex-row items-center pl-[49px] gap-[24px]">
      <ItemList />
      <ItemList />
    </div>
  );
};

export default CategoriesListMenu;
