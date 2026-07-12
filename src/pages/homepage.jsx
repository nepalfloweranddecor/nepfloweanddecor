import Navbar from "../components/navbar";
import { TypeAnimation } from "react-type-animation";
export default function Home() {
  return (
    <>
      <Navbar />

      <div
  className="relative min-h-[70vh] md:min-h-screen w-full bg-cover bg-center"
  style={{
    backgroundImage:
      'url("https://res.cloudinary.com/aavhigm6/image/upload/v1783856061/sumudu-dilshara-rnGOPS769hQ-unsplash_zqwpq8.jpg")',
  }}
>
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative z-10 flex items-center h-full px-6 md:px-20 ">
    <div className="max-w-2xl">
      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mt-60 lg:mt-90">
        Every event deserves
      </h1>

      <TypeAnimation
        sequence={[
          "a floral identity.",
          2000,
          "a touch of bloom.",
          2000,
          "a garden moment.",
          2000,
          "a beautiful beginning.",
          2000,
          "to be unforgettable.",
          2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="block mt-3 text-green-500 text-3xl sm:text-4xl md:text-6xl font-bold"
      />
    </div>
  </div>
</div>
  <div>
    <h1>Our Decorations</h1>
  </div>
    </>
  );
}