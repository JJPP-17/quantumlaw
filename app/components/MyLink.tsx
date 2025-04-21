import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MyLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
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
      className={className}
    >
      {children}
    </Link>
  );
}
