
export default function Footer() {


    const getCurrentYear = () => {
        return new Date().getFullYear();
    }

    return (
        <footer className="bg-[#1F2B37] py-4">
            <div className="max-w-7xl mx-auto px-4">
                <p className="text-center text-[#f9f9f9]">© SUMBENZ.DEV {getCurrentYear()}. All Rights Reserved.</p>
            </div>
        </footer>

    );
}