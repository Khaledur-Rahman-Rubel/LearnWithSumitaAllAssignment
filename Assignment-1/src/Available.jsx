import PropertyItem from "./component/PropertyItem";

import image1 from "./component/property/1.webp";
import image2 from "./component/property/2.webp";
import image3 from "./component/property/3.webp";
import image4 from "./component/property/4.webp";
import image5 from "./component/property/5.webp";

const Available = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
            <span className="mb-2 block text-lg font-semibold text-primary">
              Properties
            </span>
            <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
              Grab your Dream Property
            </h2>
            <p className="text-base text-body-color dark:text-dark-6">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PropertyItem
              image="https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
              name="Modern Design villa"
              rent="$3000"
              bed="3"
              bath="3"
            />
            <PropertyItem
              image={image1}
              name="1741 Spyglass Dr Apt"
              rent="$2,300"
              bed="2"
              bath="2"
            />
            <PropertyItem
              image={image2}
              name="9000 Edmundsbury Dr"
              rent="$1,800"
              bed="3"
              bath="2"
            />
            <PropertyItem
              image={image3}
              name="Aspire at Onion Creek"
              rent="$771"
              bed="1"
              bath="1"
            />
            <PropertyItem
              image={image4}
              name="2502 Audubon Pl Unit B"
              rent="$2,200"
              bed="3"
              bath="2"
            />
            <PropertyItem
              image={image5}
              name="1036 Liberty Park Dr"
              rent="$6,250"
              bed="4"
              bath="4"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Available;
