import iconListSrc from "../assets/images/icon-list.svg";
function App() {
  return (
    // bg-black h-screen
    <section className="text-sm h-screen md:justify-center md:items-center md:flex">
      <div className="flex flex-col h-full  md:h-3/5 md:items-center overflow-hidden md:max-w-3xl md:flex-row-reverse md:gap-5 bg-red-200  md:rounded-2xl">
        <div className="md:w-1/2 md:self-stretch max-md:flex-[2]">
          <img
            src="https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/jake-paul-mike-tyson-65e9f44a67446.png?crop=1.00xw:1.00xh;0,0&resize=900:*"
            className="h-full object-cover  "
          />
        </div>
        <div className="px-4 py-6 space-y-5 md:w-1/2 max-md:flex-[3]">
          <h2 className="font-bold text-xl">Stay Updated!</h2>
          <p>Join 6000+ product managers receiving monthly updates on:</p>
          <div className="text-[15px] space-y-2">
            <div className="flex gap-2">
              <img src={iconListSrc} />
              <p>Product discovery and building what matters</p>
            </div>
            <div className="flex gap-2">
              <img src={iconListSrc} />
              <p>Measuring to ensure updates are a success</p>
            </div>
            <div className="flex gap-2">
              <img src={iconListSrc} />
              <p>And much more!</p>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="font-semibold  text-[13px]" htmlFor="emailInput">
              Email Address *
            </label>
            <input
              type="email"
              id="emailInput"
              placeholder="Type your email"
              className="focus:outline-none border rounded p-3"
            />
          </div>
          <button className="py-3 bg-black text-white rounded w-full text-center">
            Subscribe to monthly newsletter
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
