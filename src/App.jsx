import IconSuccess from "../assets/images/icon-success.svg";
function App() {
  return (
    // bg-black h-screen
    <section className="text-sm">
      <div className="">
        <img src="https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/jake-paul-mike-tyson-65e9f44a67446.png?crop=1.00xw:1.00xh;0,0&resize=900:*" />
        <div className="px-4 py-6 space-y-5">
          <h2 className="font-bold text-xl">Stay Updated!</h2>
          <p>Join 6000+ product managers receiving monthly updates on:</p>
          <ul>
            <p>Product discovery and building what matters</p>
            <p>Measuring to ensure updates are a success</p>
            <p>And much more!</p>
          </ul>
          <div className="flex flex-col">
            <label className="font-semibold  text-[13px]" htmlFor="emailInput">
              Email Address *
            </label>
            <input
              type="email"
              id="emailInput"
              placeholder="Type your email"
              className="focus:outline-none border rounded py-2 px-1"
            />
          </div>
          <button className="py-2 px-4 bg-black text-white rounded w-full text-center">
            Subscribe to monthly newsletter
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
