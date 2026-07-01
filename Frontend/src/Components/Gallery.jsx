// import gallery1 from "../assets/gallery/gallery1.jpg";
// import gallery2 from "../assets/gallery/gallery2.jpg";
// import gallery3 from "../assets/gallery/gallery3.jpg";
// import gallery4 from "../assets/gallery/gallery4.jpg";
// import gallery5 from "../assets/gallery/gallery5.jpg";
// import gallery6 from "../assets/gallery/gallery6.jpg";

// function Gallery() {

//   const images = [
//     gallery1,
//     gallery2,
//     gallery3,
//     gallery4,
//     gallery5,
//     gallery6,
//   ];

//   return (
//     <section
//       id="gallery"
//       className="py-24 bg-gray-50"
//     >

//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}

//         <div className="text-center">

//           <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">

//             Gallery

//           </span>

//           <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-gray-800">

//             Explore EngiWorld

//           </h2>

//           <p className="mt-5 text-lg text-gray-500 max-w-3xl mx-auto">

//             A glimpse of engineering learning,
//             workshops, projects and opportunities
//             available on EngiWorld.

//           </p>

//         </div>

//         {/* Images */}

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

//           {images.map((image, index) => (

//             <div
//               key={index}
//               className="overflow-hidden rounded-3xl shadow-lg group"
//             >

//               <img
//                 src={image}
//                 alt={`Gallery ${index + 1}`}
//                 className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
//               />

//             </div>

//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }

// export default Gallery;

import gallery1 from "../assets/gallery/gallery1.jpg";
import gallery2 from "../assets/gallery/gallery2.jpg";
import gallery3 from "../assets/gallery/gallery3.jpg";
import gallery4 from "../assets/gallery/gallery4.jpg";
import gallery5 from "../assets/gallery/gallery5.jpg";
import gallery6 from "../assets/gallery/gallery6.jpg";

function Gallery() {
  const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
  ];

  return (
    <section
      id="gallery"
      className="py-20 bg-[#FFF5F5]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <span className="inline-block bg-[#FFE5E5] text-[#FF6B6B] px-5 py-2 rounded-full font-semibold">
            Gallery
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-800">
            Explore EngiWorld
          </h2>

          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            A glimpse of engineering learning,
            workshops, projects and opportunities
            available on EngiWorld.
          </p>

        </div>

        {/* Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {images.map((image, index) => (

            <div
              key={index}
              className="
                bg-white
                border
                border-gray-200
                rounded-3xl
                overflow-hidden
                shadow-md
                hover:shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                group
              "
            >

              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="
                  w-full
                  h-72
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Gallery;