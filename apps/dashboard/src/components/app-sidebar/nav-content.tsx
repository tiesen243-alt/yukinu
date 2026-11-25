import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
} from '@yukinu/ui/sidebar'

import type { Item } from '@/components/app-sidebar/nav-item'

import { NavItem } from '@/components/app-sidebar/nav-item'

export const NavContent: React.FC<{
  label: string
  items: Item[]
}> = ({ label, items }) => (
  <SidebarGroup className='group-data-[collapsible=icon]:hidden'>
    <SidebarGroupLabel>{label}</SidebarGroupLabel>
    <SidebarMenu>
      {items.map((item) => (
        <NavItem key={item.url} item={item} />
      ))}
    </SidebarMenu>
  </SidebarGroup>
)
