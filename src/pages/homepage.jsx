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
  <div className=" flex  flex-col mt-3">
    <h1 className="w-full text-5xl text-center mt-5"
      style={{ fontFamily: "Federo, sans-serif" }}
    >About Us</h1>
   <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
  <p className="text-lg leading-8 mb-6">
    At <span className="font-semibold">Nepal Flower and Decor</span>, we bring your dream events to life with elegant decorations, creative floral arrangements, and professional event planning. Whether it's a wedding, engagement, birthday, corporate event, or any special celebration, our team is dedicated to making every moment memorable.
  </p>

  <p className="text-lg leading-8">
    From stunning venue décor to seamless event coordination, we focus on every detail so you can enjoy your special day stress-free. With creativity, quality, and a passion for excellence, Nepal Flower and Decor transforms your vision into an unforgettable experience.
  </p>
</div>
  </div>

  <div>
    <h1 
      style={{ fontFamily: "Federo, sans-serif" }}
    >Wedding Desgins</h1>
  </div>
    </>
  );
}