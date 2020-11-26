import Image from 'next/image'
import Link from 'next/link'

import Tooltip from "react-simple-tooltip"

export default function Hero ()
{

    const cssTooTip = "white-space: nowrap;";

    return (

        <section className="text-gray-700 body-font">

            <div className="container mx-auto flex flex-col mt-4">
                
                {/* TITRE */}
                <h1 className="sm:text-2xl text-3xl font-medium text-center title-font text-gray-900 mb-4 border-gray-300 border-b pb-4 mb-8">
                    Chère équipe de Carbone 4,
                    <br />Bienvenue sur ma lettre de motivation
                </h1>

                {/* IMAGE */}
                <div className="flex justify-center mb-4">
                    <div className="rounded-lg h-64 overflow-hidden">
                        <Image src="/images/hero.jpg" className="object-cover object-center h-full w-full" alt="Pierre Debruyne" width={800} height={333} />
                    </div>
                </div>

                {/* TEXTE */}
                <p className="mb-4 mt-4 text-center max-w-2xl mx-auto">
                    Écrire une lettre de motivation est un exercice que je n'ai pas fait depuis...<br />Et bien depuis toujours ! A tout juste 42 ans, je n'ai jamais eu l'occasion d'en écrire une !
                </p>
                <p className="mb-4 text-center max-w-xl mx-auto">
                    Dans un souci de joindre l'utile à l'agréable, je me permets de faire cette lettre sous un format un peu particulier, qui vous donnera aussi un très leger avant-goût de mes capacités de développeur. 
                </p>

                {/* BOUTONS */}
                <div className="flex justify-center mt-12">
                    <Tooltip content="Ah ! Ça fait plaisir !" background="#5DDC3E" border="#5DDC3E" fadeDuration="300" radius="10" customCss={cssTooTip}>
                        <Link href="/lettre">
                            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Continuer ?</button>
                        </Link>
                    </Tooltip>
                    <Tooltip content="Ce bouton peut endommager votre ordinateur !!!!!" background="#FF0000" border="#FF0000" fadeDuration="300" radius="10" customCss={cssTooTip} >
                        <Link href="/refus">
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Envoyer lettre de refus :(</button>
                        </Link>
                    </Tooltip>
                </div>

            </div>

        </section>

    )
}