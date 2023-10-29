import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <header>
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                            Hi, I am Kelvin,
                            <br />
                            Full Stack Software Developer
                        </h1>
                    </header>
                    <main>
                        <p className="mb-8 leading-relaxed">
                        Hi, I'm a Software Developer based in Dallas, TX with a rich background in both developing and educating. As a proud graduate of Coding Dojo, I've not only honed my development skills but also found my passion for imparting this knowledge to others. Over the years, I've had the privilege of educating budding developers at esteemed institutions like Fullstack Academy, DevMountain, and Chegg. Through these experiences, I've taught full-stack web development across various languages including JS, Java, and Python. I am eager to leverage my unique blend of hands-on development and instructional expertise in a Software Developer role, where my analytical acumen and coding proficiency can truly shine.
                        </p>
                    </main>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            aria-label="Contact Me"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Contact Me
                        </a>
                        <a
                            href="#projects"
                            aria-label="See Recent Projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            Recent Projects
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="Illustration of a developer coding"
                        src="./coding.svg"
                    />
                </div>
            </div>
        </section>
    );
}
