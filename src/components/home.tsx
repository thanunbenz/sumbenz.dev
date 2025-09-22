import Logo from '../assets/logo_website.png';

export default function Home() {
    return (
        <section id="home" className="w-full py-10 lg:py-5 bg-gradient-to-b from-[#4F76F6] to-[#f9f9f9]">
            <div className="container mx-auto text-center">
                <div className="mt-10">
                    <img
                        className="animate-shake w-64 md:w-80 mx-auto"
                        src={Logo}
                        alt="SumBenz.dev"
                    />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="mt-5 text-6xl font-bold text-[#1f2b37] uppercase tracking-wider">
                        SumBenz.dev
                    </p>
                    <p className="mt-8 text-2xl text-[#1f2b37] max-w-2xl">
                        รับเขียนเว็บไซต์ราคาดี คุณภาพเยี่ยม ไม่แพงอย่างที่คิด
                    </p>
                </div>
            </div>
        </section>
    );
}