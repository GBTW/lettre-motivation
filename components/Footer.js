import Link from 'next/link'

export default function Footer ()
{
    return (
        <footer className="text-gray-700 body-font bg-gray-200">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                
                {/* LOGO + LIEN HOME */}

                <Link href="/">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Pierre Debruyne</span>
                    </a>
                </Link>

                {/* COPYRIGHT */}
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 | Exclusivement pour Carbone 4 </p>
            </div>
        </footer>
    )
}