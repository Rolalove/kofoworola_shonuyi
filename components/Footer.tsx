export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-900">
      <div className="px-6 md:px-[95.62px] py-8 md:py-10">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs font-sans">
            &copy; {currentYear} Kòfowórọlá Shonuyi. All rights reserved.
          </p>
          <p className="text-zinc-700 text-xs font-(family-name:--font-dm-mono)">
            Designed &amp; coded with precision
          </p>
        </div>
      </div>
    </footer>
  );
}
