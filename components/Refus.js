import Link from 'next/link'

export default function Refus ()
{

    console.error ("Bravo ! Vous avez gagné un call avec moi ! La seule erreur possible est volontaire :)");

    return (

        <section className="text-gray-700 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="w-full mx-auto">
                    
                    <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">404 - Désolé cette page est introuvable !</h1>

                    <p className="mb-4 mt-4 text-center">
                        Malheureusement, il semble que cette page ou cette fonction du site ne soit pas une option ! 
                    </p>
                    <p className="mb-4 mt-4 text-center">
                        Heureusement, vous avez une porte de sortie ! 
                        <br/>
                        <Link href="/lettre">
                            <button className="inline-flex mt-8 text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Continuer !</button>
                        </Link>

                    </p>


                </div>
            </div>
        </section>
    )
}