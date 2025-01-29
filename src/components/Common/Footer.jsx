const Footer = () => {
  return (
    <footer className="bg-primaryColor text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left md:text-left">
          
          {/* Brand Name */}
          <div>
            <h2 className="text-3xl font-bold tracking-wide">CareHub</h2>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold uppercase">Quick Links</h3>
            <hr className="w-16 border-t-2 border-white md:mx-0 my-3" />
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Doctors</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold uppercase">Contact Us</h3>
            <hr className="w-16 border-t-2 border-white  md:mx-0 my-3" />
            <ul className="space-y-2 text-sm">
              <li>📍 New Delhi</li>
              <li>📧 <a href="mailto:Carehub@gmail.com" className="hover:text-gray-300 transition-colors">Carehub@gmail.com</a></li>
              <li>📞 <a href="tel:+918089426945" className="hover:text-gray-300 transition-colors">+91 8089426945</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold uppercase">Social Media</h3>
            <hr className="w-16 border-t-2 border-white  md:mx-0 my-3" />
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300 transition-colors">🐦 Twitter</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">📱 Whatsapp</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">📷 Instagram</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">🎥 Youtube</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t border-white mt-8 pt-4 text-center text-sm">
          Copyright ©2025; Designed by <span className="text-gray-300 font-medium">Ashique</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
