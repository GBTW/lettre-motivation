import Image from 'next/image'
import Link from 'next/link'

import Tooltip from "react-simple-tooltip"

export default function Hero ()
{

    const cssTooTip = "white-space: nowrap;";

    return (

        <section className="text-gray-700 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Chère équipe de Carbone 4
                        <br />bienvenue sur ma lettre de motivation
                    </h1>
                    <p className="mb-8 leading-relaxed">Écrire une lettre de motivation est un exercice que je n'ai pas fait depuis...<br />Et bien depuis toujours ! A tout juste 42 ans, je n'ai jamais eu l'occasion d'en écrire une !</p>
                    <p className="mb-8 leading-relaxed">Dans un souci de joindre l'utile à l'agréable, je me permes de faire cette lettre sous un format un peu particulier, qui vous donnera aussi un très leger avant-goût de mes capacités de développeur.</p>
                    <div className="flex justify-center">
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
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image src="/images/hero.jpg" className="object-cover object-center rounded" alt="Un jolie image de stock censée illustrer l'embauche" width={720} height={600} />
                </div>
            </div>
        </section>
    )
}