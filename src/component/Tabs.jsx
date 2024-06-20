import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import Cards from '../component/Cards'
import ColdDishes from './coldDishes';
import Soup from './soup';
import Grill from './grill';
import Appetizer from './Appetizer';
import Dessert from './dessert';


const tabs = () => (
  <Tabs.Root
  className="flex flex-col w-full shadow-[0_2px_10px] shadow-blackA2"
  defaultValue="tab1"
>
  <Tabs.List className="shrink-0 flex border-b border-mauve6" aria-label="Manage your account">
    <Tabs.Trigger
      className=" bg-[#252836] px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-[#FFFFFF] select-none first:rounded-tl-md last:rounded-tr-md hover:text-[#EA7C69] data-[state=active]:text-[#EA7C69]   outline-none cursor-pointer"
      value="tab1"
    >
      Hot Dishes
    </Tabs.Trigger>
    <Tabs.Trigger
      className=" bg-[#252836] px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-[#FFFFFF] select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-[#EA7C69]  outline-none cursor-pointer"
      value="tab2"
    >
      Cold Dishes
    </Tabs.Trigger>
    <Tabs.Trigger
      className="bg-[#252836] px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-[#FFFFFF] select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-[#EA7C69]  outline-none cursor-pointer"
      value="tab3"
    >
        Soup
    </Tabs.Trigger>
    <Tabs.Trigger
      className="bg-[#252836] px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-[#FFFFFF] select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-[#EA7C69]  outline-none cursor-pointer"
      value="tab4"
    >
      Grill
    </Tabs.Trigger>
    <Tabs.Trigger
      className="bg-[#252836] px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-[#FFFFFF] select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-[#EA7C69]  outline-none cursor-pointer"
      value="tab5"
    >
      Appetizer
    </Tabs.Trigger>
    <Tabs.Trigger
      className="bg-[#252836] px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-[#FFFFFF] select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-[#EA7C69]  outline-none cursor-pointer"
      value="tab6"
    >
      Dessert
    </Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content
    className="grow p-5 bg-[#252836] rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
    value="tab1"
  >
   <Cards/>
   
   
    
  </Tabs.Content>
  <Tabs.Content
    className="grow p-5 bg-[#252836] rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
    value="tab2"
  >
   <ColdDishes/>
  </Tabs.Content>
  <Tabs.Content
    className="grow p-5 bg-[#252836] rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
    value="tab3"
  >
   <Soup/>
  </Tabs.Content>
  <Tabs.Content
    className="grow p-5 bg-[#252836] rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
    value="tab4"
  >
   <Grill/>
  </Tabs.Content>
  <Tabs.Content
    className="grow p-5 bg-[#252836] rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
    value="tab5"
  >
   <Appetizer/>
  </Tabs.Content>
  <Tabs.Content
    className="grow p-5 bg-[#252836] rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
    value="tab6"
  >
   <Dessert/>
  </Tabs.Content>
</Tabs.Root>
);

export default tabs;