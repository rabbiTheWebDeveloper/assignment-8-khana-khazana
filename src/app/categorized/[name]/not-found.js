"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NotFound({ params }) {
  const pathname = usePathname();

  return (
    <div className="text-center mt-8">
      <h2 className="text-3xl font-bold mb-4">Not Found</h2>
      <p className="text-lg mb-8">
        This Card with{' '}
        <span className="text-blue-500 font-semibold">{pathname}</span> name was not found!
      </p>
      <Link href="/">
        <span className="text-blue-500 font-semibold">Return Home</span>
      </Link>
    </div>
  );
}