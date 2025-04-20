import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MyLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);
  const currentPath = usePathname();
  const navigated = currentPath === href;
  const handleClick = () => {
    if (href !== currentPath) {
      setLoading(true);
    }
  };

  useEffect(() => {
    if (loading && navigated) {
      setLoading(false);
    }
  }, [navigated, loading]);

  return (
    <Link
      href={href}
      onClick={handleClick}
      prefetch={false}
      className="flex items-center justify-center"
    >
      {children}
      {loading && (
        <div className="ml-2 animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-blue-500"></div>
      )}
    </Link>
  );
}
