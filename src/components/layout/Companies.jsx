import React from "react";
import logo1 from "../../assets/1.svg";
import logo2 from "../../assets/2.svg";
import logo3 from "../../assets/3.svg";
import logo5 from "../../assets/5.svg";
import logo7 from "../../assets/7.svg";

const Companies = () => {
  const companies = [
    {
      name: "Uber",
      logo: logo1,
    },
    {
      name: "Microsoft",
      logo: logo2,
    },
    {
      name: "Shopify",
      logo: logo3,
    },

    {
      name: "Adobe",
      logo: logo5,
    },
    {
      name: "Amazon",
      logo: logo7,
    },
  ];

  return (
    <div className="py-2 bg-black">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 ">
          {companies.map((company) => (
            <div key={company.name} className=" py-5">
              <img
                src={company.logo}
                alt={company.name}
                className="max-h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
