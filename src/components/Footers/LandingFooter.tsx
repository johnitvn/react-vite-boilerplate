export default function LandingFooter() {
  return (
    <>
      <footer className="relative pt-8 pb-6" style={{ background: 'linear-gradient(90deg, #3730a3 0%,#f472b6 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center">
            <div className="w-full px-4">
              <h4 className="text-3xl text-white font-semibold">Let's keep in touch!</h4>
              <h5 className="text-lg mt-4 mb-2 text-gray-200">Find us on any of these platforms, we respond 1-2 business days.</h5>
              <div className="mt-6 mb-6">
                <button
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-twitter" />
                </button>
                <button
                  className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-facebook-square" />
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-dribbble" />
                </button>
                <button
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-github" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
