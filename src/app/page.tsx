import Logo from './Logo'

export default function Home() {
  return (
    <>
      <div>
        <Logo />
        <nav></nav>
        <div></div>
        <div></div>
      </div>
      <div className="bg-euphoria-gray-800 text-euphoria-gray-100 px-28 py-16">
        <div className="px-20 pb-12">
          <section className="flex space-x-20">
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl/10 font-bold">Need Help</h2>
              <ul className="space-y-1">
                <li className="text-lg/8">Contact Us</li>
                <li className="text-lg/8">Track Order</li>
                <li className="text-lg/8">Returns & Refunds</li>
                <li className="text-lg/8">FAQ&apos;s</li>
                <li className="text-lg/8">Career</li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl/8 font-bold">Company</h2>
              <ul className="space-y-1">
                <li className="text-lg/8">About Us</li>
                <li className="text-lg/8">euphoria Blog</li>
                <li className="text-lg/8">euphoriastan</li>
                <li className="text-lg/8">Collaboration</li>
                <li className="text-lg/8">Media</li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl/8 font-bold">More Info</h2>
              <ul className="space-y-1">
                <li className="text-lg/8">Term and Conditions</li>
                <li className="text-lg/8">Privacy Policy</li>
                <li className="text-lg/8">Shipping Policy</li>
                <li className="text-lg/8">Sitemap</li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl/8 font-bold">Location</h2>
              <ul className="space-y-1">
                <li className="text-lg/8">support@euphoria.in</li>
                <li className="text-lg/8">
                  Eklingpura Chouraha, Ahmedabad Main Road
                </li>
                <li className="text-lg/8">
                  (NH 8- Near Mahadev Hotel) Udaipur, India- 313002
                </li>
              </ul>
            </div>
          </section>
        </div>
        <div>
          <section></section>
          <section></section>
        </div>
        <div className="">
          <div className="border-euphoria-gray-400 border-y-[1px] px-20 py-8">
            <span className="text-3xl/8 font-bold">Popular Categories</span>
          </div>
        </div>
        <div>
          <p className="text-center text-lg/8 font-bold">
            Copyright &copy; 2023 Euphoria Folks Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </>
  )
}
