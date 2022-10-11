import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex h-fit w-screen items-center justify-end bg-blue-500 py-1 text-center font-sans text-sm font-semibold text-white">
      <p className="mr-auto ml-2">
        Feito por Estevão Gomes para Omnix Digital Experience.
      </p>
      <Link href="/">
        <button
          type="button"
          className="mr-2 rounded-md border-2 border-blue-300 py-4 px-2 text-base font-bold text-white transition-all duration-300 hover:border-blue-500 hover:bg-blue-300"
        >
          Ops, errei meu CEP!
        </button>
      </Link>
    </footer>
  );
}
