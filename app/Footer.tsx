export default function Footer() {
  return (
    <footer className="py-12 px-8 text-center border-t border-white/10">
      <p className="text-slate-400 text-sm">
        © {new Date().getFullYear()} Sapienspace.  
        <br />A humanistic Science and technology initiative.
      </p>
    </footer>
  );
}
