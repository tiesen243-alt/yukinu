import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from '@yukinu/ui/sidebar'

import type { Item } from '@/components/app-sidebar/nav-item'

import { NavItem } from '@/components/app-sidebar/nav-item'

export const NavMain: React.FC<{ items: Item[] }> = ({ items }) => (
  <SidebarGroup>
    <SidebarGroupContent className='flex flex-col gap-2'>
      <SidebarMenu>
        {items.map((item) => (
          <NavItem key={item.url} item={item} />
        ))}
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
)
