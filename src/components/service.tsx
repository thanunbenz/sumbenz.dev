export default function Service() {
    return (
        <section id="service" className="py-5 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-left">
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-800">
                        บริการของเรา
                    </h2>
                    <p className="mt-3 text-lg text-gray-600">
                        พัฒนาและดูแลระบบดิจิทัลครบวงจร ตอบโจทย์ทุกความต้องการของคุณ
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                    <div className="bg-white shadow-lg rounded-xl p-6">
                        <h3 className="text-2xl font-semibold text-gray-800">
                            รับพัฒนาเว็บไซต์ระบบ
                        </h3>
                        <p className="mt-2 text-gray-600">
                            พัฒนาเว็บไซต์คุณภาพสูง รองรับการใช้งานทุกอุปกรณ์ ดีไซน์สวย 
                            และตอบโจทย์ธุรกิจของคุณ
                        </p>
                        <p className="mt-3 text-xl font-semibold text-blue-600">
                            ราคาเริ่มต้นเพียง 10,000 บาท
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-xl p-6">
                        <h3 className="text-2xl font-semibold text-gray-800">
                            รับแก้ไขและปรับแต่งเว็บไซต์
                        </h3>
                        <p className="mt-2 text-gray-600">
                            เพิ่มฟังก์ชันใหม่ ปรับปรุงดีไซน์ หรือแก้ไขข้อบกพร่อง 
                            ให้เว็บไซต์ของคุณทันสมัยและใช้งานได้เต็มประสิทธิภาพ
                        </p>
                        <p className="mt-3 text-xl font-semibold text-blue-600">
                            ราคาเริ่มต้นเพียง 500 บาท
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
}