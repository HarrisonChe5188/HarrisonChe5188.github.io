interface SidebarItem {
  id: string;
  label: string;
}

interface DocSidebarProps {
  items: SidebarItem[];
}

export default function DocSidebar({ items }: DocSidebarProps) {
  return (
    <aside className="hidden lg:block w-64 sticky top-32 h-fit mr-10">
      <nav className="space-y-4 text-sm font-medium border-l pl-6 border-zinc-300 dark:border-zinc-700">
        {items.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="block hover:text-blue-500">
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
