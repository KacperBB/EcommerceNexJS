

const NavBar = () => {
  return (

    <div>
    <header className="text-gray-400 bg-gray-900 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" id="store"><path fill="none" d="M0 0h48v48H0z"/><path fill="white" d="M40 8H8v4h32V8zm2 20v-4l-2-10H8L6 24v4h2v12h20V28h8v12h4V28h2zm-18 8H12v-8h12v8z"/></svg>
        <span className="ml-3 text-xl">MyShop</span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a href="/" className="mr-5 hover:text-white">Home</a>
        <a href="/about" className="mr-5 hover:text-white">About Us</a>
        <a href="/products" className="mr-5 hover:text-white">Products</a>
        <a href="/contact" className="mr-5 hover:text-white">Contact Us</a>
      </nav>
      <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-4 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
        Log In
      </button>
    </div>
  </header>
  </div>

  )

}

export default NavBar
