export default function Navbar() {
    return (
        <nav className="bg-[#4F76F6] sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-2xl font-bold text-[#1F2B37] hover:text-[#F9F9F9]">SUMBENZ.DEV</a>
                    </div>
                    <ul className="flex items-center space-x-8">
                        <li><a href="#" className="text-text-[#1F2B37] hover:text-[#F9F9F9]">หน้าแรก</a></li>
                        <li><a href="#service" className="text-text-[#1F2B37] hover:text-[#F9F9F9]">บริการ</a></li>
                        {/* <li><a href="#review" className="text-text-[#1F2B37] hover:text-[#F9F9F9]">รีวิว</a></li> */}
                        <li><a href="#contact" className="text-text-[#1F2B37] hover:text-[#F9F9F9]">ติดต่อเรา</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}