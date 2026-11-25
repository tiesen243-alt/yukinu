import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from '@yukinu/ui/sidebar'
import * as React from 'react'

import type { Item } from '@/components/app-sidebar/nav-item'

import { NavItem } from '@/components/app-sidebar/nav-item'

export const NavSecondary: React.FC<
  {
    items: Item[]
  } & React.ComponentPropsWithoutRef<typeof SidebarGroup>
> = ({ items, ...props }) => (
  <SidebarGroup {...props}>
    <SidebarGroupContent>
      <SidebarMenu>
        {items.map((item) => (
          <NavItem key={item.url} item={item} />
        ))}
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
)
