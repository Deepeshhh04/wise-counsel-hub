import { MessageSquare, Users, User, LogOut, Scale, ShieldCheck, FileText } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const navItems = [
  { title: "AI Chat", url: "/chat", icon: MessageSquare },
  { title: "Legal Agreements", url: "/agreements", icon: FileText },
  { title: "Lawyer Connect", url: "/lawyers", icon: Users },
  { title: "Verify as Lawyer", url: "/verify-lawyer", icon: ShieldCheck },
  { title: "Dashboard", url: "/dashboard", icon: User },
];

export function DashboardSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border/50">
      <SidebarHeader className="p-4">
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2.5"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sidebar-primary to-accent flex items-center justify-center shadow-lg">
            <Scale className="w-5 h-5 text-sidebar-primary-foreground" />
          </div>
          {!collapsed && (
            <span className="font-display font-bold text-sidebar-foreground text-xl tracking-tight">
              NyayaSetu
            </span>
          )}
        </motion.div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 text-[10px] uppercase tracking-[0.2em] text-sidebar-foreground/40 font-bold">
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent className="px-2">
            <SidebarMenu>
              {navItems.map((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="p-0">
                    <motion.div
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <NavLink
                        to={item.url}
                        end
                        className="flex items-center w-full px-3 py-2.5 rounded-lg text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50 transition-all group relative overflow-hidden"
                        activeClassName="bg-sidebar-accent text-sidebar-primary font-semibold shadow-sm"
                      >
                        <item.icon className="mr-3 h-4 w-4 shrink-0 group-hover:scale-110 transition-transform" />
                        {!collapsed && <span className="text-sm">{item.title}</span>}
                        <motion.div 
                          className="absolute left-0 w-1 h-0 bg-sidebar-primary rounded-r-full"
                          layoutId="active-indicator"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      </NavLink>
                    </motion.div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-sidebar-border/30">
        <Button
          variant="ghost"
          className="w-full justify-start text-sidebar-foreground/60 hover:text-destructive hover:bg-destructive/5 group transition-colors h-11"
          onClick={() => {/* placeholder logout */}}
        >
          <LogOut className="mr-3 h-4 w-4 shrink-0 group-hover:-translate-x-0.5 transition-transform" />
          {!collapsed && <span className="text-sm font-medium">Logout</span>}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
