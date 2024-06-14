import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';


const Tabs = () => (
  <Tabs.Root
  className="flex flex-col w-[300px] shadow-[0_2px_10px] shadow-blackA2"
  defaultValue="tab1"
>
  <Tabs.List className="shrink-0 flex border-b border-mauve6" aria-label="Manage your account">
    <Tabs.Trigger
      className=" bg-[#252836] px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-[#FFFFFF] select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-[#FFFFFF] data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
      value="tab1"
    >
      Hot Dishes
    </Tabs.Trigger>
    <Tabs.Trigger
      className="bg-[#252836] px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-[#FFFFFF] select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-[#FFFFFF] data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
      value="tab2"
    >
      Cold Dishes
    </Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content
    className="grow p-5 bg-[#252836] rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
    value="tab1"
  >
    <p className="mb-5 text-[#FFFFFF] text-[15px] leading-normal">
      Make changes to your account here. Click save when you're done.
    </p>
    <fieldset className="mb-[15px] w-full flex flex-col justify-start">
      <label className="text-[13px] leading-none mb-2.5 text-[#FFFFFF] block" htmlFor="name">
        Name
      </label>
      <input
        className="grow shrink-0 bg-[#2D303E] rounded px-2.5 text-[15px] text-[#FFFFFF] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
        id="name"
        defaultValue="Pedro Duarte "
      />
    </fieldset>
    <fieldset className="mb-[15px] w-full flex flex-col justify-start">
      <label className="text-[13px] leading-none mb-2.5 text-[#FFFFFF] block" htmlFor="username">
        Username
      </label>
      <input
        className="grow shrink-0  bg-[#2D303E] text-[#FFFFFF] rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
        id="username"
        defaultValue="@peduarte"
      />
    </fieldset>
    <div className="flex justify-end mt-5">
      <button className="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-[#252836] text-[#FFFFFF] hover:bg-[#EA7C69] focus:shadow-[0_0_0_2px] focus:shadow-green7 border border-[#FFFFFF] cursor-default">
        Save changes
      </button>
    </div>
  </Tabs.Content>
  <Tabs.Content
    className="grow p-5 bg-[#252836] rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
    value="tab2"
  >
    <p className="mb-5 text-mauve11 text-[15px] text-[#FFFFFF] leading-normal">
      Change your password here. After saving, you'll be logged out.
    </p>
    <fieldset className="mb-[15px] w-full flex flex-col justify-start">
      <label
        className="text-[13px]  leading-none mb-2.5 text-[#FFFFFF] block"
        htmlFor="currentPassword"
      >
        Current password
      </label>
      <input
        className="grow shrink-0 rounded px-2.5 text-[15px] bg-[#2D303E] leading-none text-[#FFFFFF] shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
        id="currentPassword"
        type="password"
      />
    </fieldset>
    <fieldset className="mb-[15px] w-full flex flex-col justify-start">
      <label
        className="text-[13px] leading-none mb-2.5 text-[#FFFFFF] block"
        htmlFor="newPassword"
      >
        New password
      </label>
      <input
        className="grow shrink-0 rounded  px-2.5 bg-[#2D303E] text-[15px] leading-none text-[#FFFFFF] shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
        id="newPassword"
        type="password"
      />
    </fieldset>
    <fieldset className="mb-[15px] w-full flex flex-col justify-start">
      <label
        className="text-[13px] leading-none  mb-2.5 text-[#FFFFFF] block"
        htmlFor="confirmPassword"
      >
        Confirm password
      </label>
      <input
        className="grow shrink-0 rounded px-2.5 bg-[#2D303E] text-[15px] leading-none text-[#FFFFFF] shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
        id="confirmPassword"
        type="password"
      />
    </fieldset>
    <div className="flex justify-end mt-5">
      <button className="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-[#2D303E] text-[#FFFFFF] hover:bg-[#EA7C69] focus:shadow-[0_0_0_2px] border border-[#FFFFFF] focus:shadow-green7 outline-none cursor-default">
        Change password
      </button>
    </div>
  </Tabs.Content>
</Tabs.Root>
);

export default Tabs;