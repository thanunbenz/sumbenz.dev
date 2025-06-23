export default function Home() {
    return (
        <section id="home" className="w-full py-10 lg:py-5 bg-gradient-to-b from-[#4F76F6] to-[#f9f9f9]">
            <div className="container mx-auto text-center">
                <div className="mt-10">
                    <img
                        className="animate-shake w-64 md:w-80 mx-auto"
                        src="https://files.oaiusercontent.com/file-9t31eVDiAyq31p7zHCpawn?se=2025-03-15T13%3A34%3A03Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D2a09089f-ff08-433c-88ac-759d4c1b80a9.webp&sig=0RhIAaWiF31Zgy6ngTbF9VDkMr7caQXue9L0x7IYxW0%3D"
                        alt="Sumbenz.dev"
                    />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="mt-5 text-6xl font-bold text-[#1f2b37] uppercase tracking-wider">
                        Sumbenz.dev
                    </p>
                    <p className="mt-8 text-2xl text-[#1f2b37] max-w-2xl">
                        รับเขียนเว็บไซต์ราคาดี คุณภาพเยี่ยม ไม่แพงอย่างที่คิด
                    </p>
                </div>
            </div>
        </section>
    );
}