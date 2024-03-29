import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
init("user_w3cezXYt9rPRxR5JRZlxG");

export default function Contact() {
    const form = useRef();
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function handleSubmit(e) {
        e.preventDefault();

        emailjs.sendForm('service_shv3zyl', 'template_atx17xu', e.target, "-z9P9kiOXWtfacPFE")
            .then((result) => {
                alert(`${name}, Your Message Was Sent, Thank you for reaching out to me, I will get back to you soon! `)
                console.log(result.text);
            },
                (error) => {
                    console.log(error.text);
                });
        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        style={{ filter: "opacity(0.7)" }}
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=farmersbranch%20texas&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        aria-label="Google Maps showing location in Elgin, IL"
                    />
                    <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                        <address className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                Current Location
                            </h2>
                            <p className="mt-1">
                                Farmers Branch, TX, 75234
                            </p>
                        </address>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                Get In Touch:
                            </h2>
                            <h5 className="text-indigo-400 leading-relaxed">
                                Please Contact me by Email!
                            </h5>
                        </div>
                    </div>
                </div>
                <form
                    ref={form}
                    id="contact-form"
                    name="contact"
                    onSubmit={handleSubmit}
                    className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Email Me
                    </h2>
                    <p className="leading-relaxed mb-5">
                        Do you want to get in touch with me? Complete this form and I will get back to you shortly!
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                            Name
                        </label>
                        <input
                            required
                            value={name}
                            type="text"
                            id="name"
                            name="to_name"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                            Email
                        </label>
                        <input
                            value={email}
                            type="email"
                            id="email"
                            name="user_email"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="message"
                            className="leading-7 text-sm text-gray-400">
                            Message
                        </label>
                        <textarea
                            value={message}
                            id="message"
                            name="message"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
    
                    <button
                        type="submit"
                        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}