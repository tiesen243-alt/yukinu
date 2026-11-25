import type { LucideIcon } from '@yukinu/ui/icons'

import { SidebarMenuItem, SidebarMenuButton } from '@yukinu/ui/sidebar'
import { Link, useResolvedPath, useMatch } from 'react-router'

export interface Item {
  title?: string
  url: string
  icon?: LucideIcon
}

export const NavItem: React.FC<{ item: Item }> = ({ item }) => {
  const resolved = useResolvedPath(item.url)
  const match = useMatch({ path: resolved.pathname, end: true })

  return (
    <SidebarMenuItem>
      <SidebarMenuButton isActive={!!match} render={<Link to={item.url} />}>
        {item.icon && <item.icon />}
        <span>{item.title}</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}
