
"use client";

import { Badge, Sidebar, SidebarCollapse, SidebarCTA, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { FaPencil } from "react-icons/fa6";
import { MdPerson } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { GrContactInfo } from "react-icons/gr";

export default function Component() {
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem href="#" icon={MdPerson}>
            About me
          </SidebarItem>
          <SidebarItem href='#' icon={FaPencil}>Blog</SidebarItem>
          <SidebarCollapse icon={GoHistory} label="Projects">
            <SidebarItem href="#">Project #1</SidebarItem>
            <SidebarItem href="#">Project #2</SidebarItem>
            <SidebarItem href="#">Project #3</SidebarItem>
          </SidebarCollapse>
          <SidebarItem href="#" icon={GrContactInfo}>
            {/* Replace with router functionality that will manage the webpage as SPA
            link: https://reactrouter.com/6.28.0/start/tutorial */}
            <button onClick={() => alert('This is a test.')}>
              Contacts
            </button>
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
