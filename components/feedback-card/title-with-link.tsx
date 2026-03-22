import Link from 'next/link';

interface TitleWithLinkProps {
  href: string;
  title: string;
}

export default function TitleWithLink({ href, title }: TitleWithLinkProps) {
  return (
    <Link
      href={href}
      className="hover:text-secondary-500 transition-colors after:absolute after:inset-0 focus-visible:outline-none"
    >
      {title}
    </Link>
  );
}
