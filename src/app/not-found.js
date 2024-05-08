import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center mt-8">
      <h2 className="text-3xl font-bold mb-4">Not Found</h2>
      <p className="text-lg mb-8">Could not find the requested resource.</p>
      <Link href="/">
        <span className="text-blue-500 font-semibold">Return Home</span>
      </Link>
    </div>
  );
}