import image from "/images/illustration-hero.svg"
import iconMusic from "/images/icon-music.svg"

export default function App() {
  return (
    <main className="min-h-screen flex justify-center items-center bg-Paleblue">
      <section className="flex flex-col gap-4 max-w-sm rounded-lg bg-white">
        <img src={image} alt="" className="rounded-lg" />
        <div className="p-4 flex flex-col gap-2">
          <h1 className="text-center font-bold text-xl">Order Summary</h1>
          <p className="text-center text-gray-500 ">You can now listen to millions of songs, audiobooks, and podcasts on any
            device anywhere you like!</p>
          <div className="flex justify-between items-center p-4">
            <span className="flex flex-row gap-2">
              <img src={iconMusic} alt="" />
              <p>
                <h1 className="font-bold"> Annual Plan</h1>
                <p className="text-gray-500"> $59.99/year</p>
              </p>
            </span>
            <a href="" className="underline text-Darkblue cursor-pointer hover:text-Desaturatedblue">Change</a>
          </div>
          <button className="p-2 border-2 font-semibold bg-Brightblue rounded-lg hover:text-white hover:bg-Desaturatedblue">Proceed to Payment</button>
          <button className="text-Desaturatedblue p-2 font-semibold hover:text-black">Cancel Order</button>
        </div>

      </section>
    </main>
  )
}