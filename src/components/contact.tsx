export default function Contact() {
    return (
        <section id="contact" className="bg-[#F9F9F9] py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1F2B37]">ติดต่อเรา</h2>
                    <div className="w-20 h-1 bg-[#4F76F6] mx-auto mt-4"></div>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
                    <a
                        href="https://github.com/thanunbenz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition duration-300 border border-gray-100"
                    >
                        <img
                            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                            alt="GitHub"
                            width="48"
                            className="hover:scale-110 transition duration-300"
                        />
                        <span className="text-lg font-medium text-[#1F2B37]">@thanunbenz</span>
                    </a>

                    <a
                        href="mailto:thesumzstudio@gmail.com"
                        className="flex items-center space-x-4 p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition duration-300 border border-gray-100"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
                            alt="Gmail"
                            width="48"
                            className="hover:scale-110 transition duration-300"
                        />
                        <span className="text-lg font-medium text-[#1F2B37]">thesumzstudio@gmail.com</span>
                    </a>
                </div>
            </div>
        </section>
    );
}