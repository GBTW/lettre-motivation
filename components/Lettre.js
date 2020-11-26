import Image from 'next/image'

export default function Lettre ()
{

    console.error ("Bravo ! Vous avez gagné un call avec moi ! La seule erreur possible est volontaire :)");

    return (

        <section className="text-gray-700 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="w-full mx-auto">
                    
                    {/* INFO */}
                    <div className="text-center">
                        <Image src="/images/pierre_debruyne.jpg" className="object-cover object-center rounded-full w-20 h-20" alt="Pierre Debruyne" width={80} height={80} />

                        <div className="flex flex-col items-center text-center justify-center">
                            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Pierre Debruyne</h2>
                            <div className="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
                            <p className="text-xs text-gray-600">Développeur FullStack<br/>JS / ReactJS / PHP /SQL / NodeJS<br/>Dev Since 1998</p>
                        </div>
                    </div>

                    {/* LETTRE DE MOTIVATION */}
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:border-t border-gray-300 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left leading-relaxed text-lg ">
                            <p className="mb-4 mt-4">
                                Expert en outils métiers et intéressé par les enjeux climatiques, je serais fier de participer au développement du projet MyCO2 pour sensibiliser tous types d'acteurs à la transition energétique et à l'alignement avec la trajectoire 2°C de l'Accord de Paris
                            </p>
                            <p className="mb-4">
                                Mon expérience robuste en développement front-end / back-end me permet de proposer un code élégant, rapide et documenté. 
                            </p>
                            <p className="mb-4">
                                Je considère les aspects UX / UI indisociables au développement d'une application, c'est pourquoi j'ai toujours collaboré aux étapes de création d'interface pour appuyer les équipes avec des solutions techniques innonvantes.
                            </p>
                            <p className="mb-4">
                                L'ensemble des applications que j'ai piloté en tant que développeur FullStack etaient basées sur des technologies SQL (type MySQL) et pour certainnes sur des technologies noSQL dans le cloud (Type Firebase pour parer aux problématiques de scalabilité).
                            </p>
                            <p className="mb-4">
                                De nature sociable, je m'intégre facilement dans les équipes et il m'arrive parfois de rire ! 
                            </p>
                        </div>
                    </div>

                    {/* COMPETENCES TECHNIQUES */}
                    <div className="text-center border-gray-300 border-t mt-4 pt-8">
                        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Compétences techniques</h1>

                        <div className="container px-5 py-5 mx-auto">

                            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                                <div className="p-2 sm:w-1/2 w-full">
                                    <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                        </svg>
                                        <span className="title-font font-medium">HTML5 / CSS3</span>
                                    </div>
                                </div>
                                <div className="p-2 sm:w-1/2 w-full">
                                    <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                        </svg>
                                        <span className="title-font font-medium">JavaScript</span>
                                    </div>
                                </div>
                                <div className="p-2 sm:w-1/2 w-full">
                                    <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                        </svg>
                                        <span className="title-font font-medium">ReactJs</span>
                                    </div>
                                </div>
                                <div className="p-2 sm:w-1/2 w-full">
                                    <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                        </svg>
                                        <span className="title-font font-medium">NextJs</span>
                                    </div>
                                </div>
                                <div className="p-2 sm:w-1/2 w-full">
                                    <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                        </svg>
                                        <span className="title-font font-medium">NodeJS</span>
                                    </div>
                                </div>
                                <div className="p-2 sm:w-1/2 w-full">
                                    <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                        </svg>
                                        <span className="title-font font-medium">FireBase</span>
                                    </div>
                                </div>
                                <div className="p-2 sm:w-1/2 w-full">
                                    <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span className="title-font font-medium">PHP</span>
                                    </div>
                                </div>
                                <div className="p-2 sm:w-1/2 w-full">
                                    <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span className="title-font font-medium">MySQL</span>
                                    </div>
                                </div>
                                <div className="p-2 sm:w-1/2 w-full">
                                    <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span className="title-font font-medium">CodeIgniter</span>
                                    </div>
                                </div>
                                <div className="p-2 sm:w-1/2 w-full">
                                    <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span className="title-font font-medium">Tailwind CSS</span>
                                    </div>
                                </div>
                                <div className="p-2 sm:w-1/2 w-full">
                                    <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span className="title-font font-medium">BootStrap</span>
                                    </div>
                                </div>
                                <div className="p-2 sm:w-1/2 w-full">
                                    <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span className="title-font font-medium">GIT</span>
                                    </div>
                                </div>
                                <div className="p-2 sm:w-1/2 w-full">
                                    <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span className="title-font font-medium">JQuery</span>
                                    </div>
                                </div>
                                <div className="p-2 sm:w-1/2 w-full">
                                    <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span className="title-font font-medium">WordPress</span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-8">
                                <a href="tel:+33645741646" className=" text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Appelez moi !</a>
                            </div>
                        </div>
                        
                    </div>




                </div>
            </div>
        </section>
    )
}