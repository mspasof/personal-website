
"use client";

import { Sidebar, SidebarCollapse, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { HiChartPie } from "react-icons/hi";
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
          <SidebarCollapse icon={GoHistory} label="Projects">
            <SidebarItem href="#">Project #1</SidebarItem>
            <SidebarItem href="#">Project #2</SidebarItem>
            <SidebarItem href="#">Project #3</SidebarItem>
          </SidebarCollapse>
          <SidebarItem href="#" icon={GrContactInfo}>
            Contacts
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
