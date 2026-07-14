import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import WhatsappButton from "../components/whatsapp";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const Ourservices = [
    {
      title: "Luxury Wedding Decoration",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Traditional Wedding Decoration",
      image:
        "https://res.cloudinary.com/aavhigm6/image/upload/v1784018450/traditional_images_hnifdb.jpg",
    },
    {
      title: "Reception Decoration",
      image:
        "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Mandap Decoration",
      image:
        "https://res.cloudinary.com/aavhigm6/image/upload/v1784012261/mandapevent_cfvfvb.jpg",
    },
    {
      title: "Outdoor Wedding Decoration",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    },
       {
      title: "Private Events",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Testimonials — each includes a rating for schema markup
  const testimmony = [
    {
      name: "Aakrati Kafle",
      event: "Wedding Decoration",
      review:
        "Nepal Flower and Decor made our wedding truly magical! From gorgeous floral arrangements to stunning stage decoration, every detail was perfect. Highly recommend for anyone looking for the best wedding decoration in Kathmandu!",
      rating: 5,
    },
    {
      name: "Pramod Karki",
      event: "Event Managment",
      review:
        "The team was professional, creative, and punctual. They designed an amazing  setup that exceeded our expectations. Highly recommended!",
      rating: 5,
          },
    {
      name: "Anish",
      event: "Engagement Ceremony",
      review:
        "Everything was elegant and perfectly organized. Our guests couldn't stop complimenting the decorations. Thank you for making our day unforgettable!",
      rating: 5,
    },
  ];

  // Calculate average rating dynamically for schema
  const avgRating =
    testimmony.reduce((sum, t) => sum + t.rating, 0) / testimmony.length;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Nepal Flower and Decor",
    image:
      "https://res.cloudinary.com/aavhigm6/image/upload/v1783856061/sumudu-dilshara-rnGOPS769hQ-unsplash_zqwpq8.jpg",
    description:
      "Wedding decoration, floral design, and event planning services in Kathmandu, Nepal.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressCountry: "NP",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating.toFixed(1),
      reviewCount: testimmony.length,
    },
    review: testimmony.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: "5",
      },
      reviewBody: t.review,
      datePublished: t.date,
    })),
  };

  return (
    <>
      <Head>
        <title>
          Nepal Flower and Decor | Wedding & Event Decoration 
        </title>
        <meta
          name="description"
          content="Nepal Flower and Decor offers premium wedding decoration, floral arrangements, and event planning services in Kathmandu. Weddings, engagements, birthdays & corporate events made unforgettable."
        />
        <meta
          name="keywords"
          content="wedding decoration Kathmandu, event planning Nepal, floral arrangements, stage decoration, mandap decoration, birthday decoration Nepal"
        />
        <link rel="canonical" href="https://www.nepalflowerdecor.com/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Nepal Flower and Decor | Wedding & Event Decoration in Kathmandu"
        />
        <meta
          property="og:description"
          content="Elegant wedding decoration, floral design, and event planning in Kathmandu, Nepal."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/aavhigm6/image/upload/v1783856061/sumudu-dilshara-rnGOPS769hQ-unsplash_zqwpq8.jpg"
        />
        <meta property="og:type" content="website" />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <div
        className="relative min-h-[70vh] md:min-h-screen w-full bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/aavhigm6/image/upload/v1783856061/sumudu-dilshara-rnGOPS769hQ-unsplash_zqwpq8.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full px-6 md:px-20 py-20 gap-12">

  {/* Left Content */}
  <div className="max-w-2xl text-center lg:text-left lg:mt-59">

    <span
      className="text-xl text-white"
      style={{ fontFamily: "Federo, sans-serif" }}
    >
      Nepal Flower and Decor
    </span>

    <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-4"
    style = {{ fontFamily: "Federo, sans-serif" }}>
      Every event deserves
    </h1>

    <TypeAnimation
     style={{ fontFamily: "Federo, sans-serif" }}
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
      className="block mt-4 text-green-500 text-3xl sm:text-4xl lg:text-6xl font-bold"
    />

    <p className="text-white mt-8 text-lg leading-8">
      Nepal's most trusted event management studio for weddings,
      sacred ceremonies, cultural festivals, and corporate gatherings —
      rooted in tradition, refined by experience.
    </p>
  </div>

  {/* Right Content */}
  <div className="text-center lg:text-right lg:mt-59">
    <h2
      className="text-6xl sm:text-5xl lg:text-9xl font-bold text-red-700"
      style={{ fontFamily: "'Yatra One'" }}
    >
     Your Special Moments
    </h2>

    <h2
      className="text-8xl sm:text-5xl lg:text-9xl font-bold text-white mt-2"
      style={{ fontFamily: "'Yatra One'" }}
    >
      Our  <span className="text-amber-500">Service.</span>
    </h2>
  </div>
  </div>

</div>
      {/* About Section */}
      <section id="about ">
      <div className="flex flex-col md:flex-row items-center gap-10 mt-10 max-w-7xl mx-auto bg-[#FDF6EC] rounded-xl shadow-2xl p-8">
        {/* Left Side */}
        <div className="md:w-1/2">
          <h2
            className="text-5xl mb-6"
            style={{ fontFamily: "Federo, sans-serif" }}
          >
            About Us
          </h2>

          <p className="text-lg leading-8 mb-6">
            At <span className="font-semibold">Nepal Flower and Decor</span>,
            we bring your dream events to life with elegant decorations,
            creative floral arrangements, and professional event planning
            services in Kathmandu and across Nepal. Whether you're planning a
            wedding, engagement, birthday, corporate event, baby shower, or
            any special celebration, our experienced team is dedicated to
            making every moment memorable and stress-free.
          </p>

          <p className="text-lg leading-8 mb-6">
            From stunning venue décor and bridal flower arrangements to
            seamless event coordination and on-site setup, we focus on every
            detail—lighting, floral design, stage decoration, and theme
            styling—so you can enjoy your special day without worry.
          </p>

          <p className="text-lg leading-8">
            Whether you need a full-service wedding planner, a corporate
            event decorator, or a custom floral arrangement for an intimate
            celebration, Nepal Flower and Decor is your one-stop solution for
            premium event styling in Nepal.
          </p>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2">
          <img
            src="https://res.cloudinary.com/aavhigm6/image/upload/v1784013344/nfdevents_beyy1f.png"
            alt="Elegant wedding decoration by Nepal Flower and Decor in Kathmandu"
            loading="lazy"
            className="w-full h-137.5 object-cover rounded-b-full shadow-lg hover:scale-105 transition duration-500"
          />
        </div>
      </div>
      </section>
<section id="services">
      {/* Wedding Designs Section */}
      <div className="py-4 mt-9 bg-[#f7ead5]">
        <h2
          className="p-2 w-full text-5xl text-center place-self-center text-red-900"
          style={{ fontFamily: "Federo, sans-serif" }}
        >
          Our Services
        </h2>
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-self-center">
          {Ourservices.map((design, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer"
            >
              <img
                src={design.image}
                alt={`${design.title} by Nepal Flower and Decor Kathmandu`}
                loading="lazy"
                className="w-full h-80 object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-500"></div>

              {/* Title */}
              <div className="absolute bottom-6 left-6 text-white ">
                <h3 className="text-2xl font-bold">{design.title}</h3>
              </div>
            </div>
          ))}
        </div>
</div>
</section>
      {/* Testimonials Section */}
      <section 
      id="testimony"
      className="p-4 bg-[#FDF6EC]">
        <div className="mt-5"
        style={{ fontFamily: "Federo, sans-serif" }}>
          <h2 className="text-5xl text-center">Testimonials</h2>
          <h3 className="text-3xl text-center mt-3 font-normal">
            What our clients say
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
          {testimmony.map((item, index) => (
            <div
              key={index}
              itemScope
              itemType="https://schema.org/Review"
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
            >
              {/* Review */}
              <p itemProp="reviewBody" className="text-gray-600 italic mb-6">
                "{item.review}"
              </p>

              {/* User */}
              <div>
                <h4 itemProp="author" className="font-semibold text-lg">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-500">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>

      </section>
      <section className="mt-6 mb-6">
        <div className="max-w-4xl mx-auto bg-amber-100 rounded-2xl shadow-lg p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-">

    {/* Left Section */}
    <div className="lg:w-2/3">
      <h1 className="text-3xl md:text-4xl font-bold mb-4"
         style={{ fontFamily: "Federo, sans-serif" }}>
        Get in Touch
      </h1>

      <p className="text-gray-600 text-base md:text-lg leading-8">
        We'd love to hear about your upcoming celebration! Whether you're
        planning a wedding, corporate event, birthday, or any special
        occasion, our team is here to help bring your vision to life.

        <br/>

        Have a question, need a custom quote, or want to discuss your ideas?
        Get in touch with us today, and let's create an unforgettable event
        together.

        <br />

        <span className="font-semibold">
          Let's make your dream event a reality.
        </span>
      </p>
    </div>

    {/* Right Section */}
    <div className="flex justify-center lg:justify-end lg:w-1/3 mt-3">
    <Link to = "/contact">
      <button className="bg-black hover:bg-amber-50 hover:text-red-900 font-semibold hover:border-2 text-white px-8 py-3 rounded-lg transition">
        Book a Consulation
      </button></Link>
    </div>

  </div>
      </section>
      <Footer/>
      <WhatsappButton/>
    </>
  );
}