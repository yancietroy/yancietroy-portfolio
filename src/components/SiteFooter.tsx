export function SiteFooter() {
  return (
    <footer className="bg-[#181915] px-5 py-10 text-white">
      <div className="mx-auto flex max-w-[1160px] flex-col gap-6 border-t border-white/15 pt-7 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
        <p>Yancie Troy Saludo · Rizal, Philippines</p>
        <div className="flex gap-6">
          <a className="transition-colors duration-150 hover:text-white" href="https://linkedin.com/in/troy-saludo/">LinkedIn</a>
          <a className="transition-colors duration-150 hover:text-white" href="mailto:yanciesaludo14@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
