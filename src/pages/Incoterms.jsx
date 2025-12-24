import React from "react";

export default function Incoterms() {
  const incotermHeaders = [
    "EXW","FCA","FAS","FOB","CFR","CIF","CPT","CIP",
    "DAF","DES","DEQ","DDU","DDP"
  ];

  const services = [
    { name: "Warehouse Storage", values: ["Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller"] },
    { name: "Warehouse Labor", values: ["Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller"] },
    { name: "Export Packing", values: ["Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller"] },
    { name: "Loading Charges", values: ["Buyer","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller"] },
    { name: "Inland Freight", values: ["Buyer","Buyer/Seller*","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller"] },
    { name: "Terminal Charges", values: ["Buyer","Buyer","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller"] },
    { name: "Forwarder's Fees", values: ["Buyer","Buyer","Buyer","Buyer","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller"] },
    { name: "Loading On Vessel", values: ["Buyer","Buyer","Buyer","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller"] },
    { name: "Ocean/Air Freight", values: ["Buyer","Buyer","Buyer","Buyer","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller"] },
    { name: "Charges On Arrival", values: ["Buyer","Buyer","Buyer","Buyer","Buyer","Buyer","Seller","Seller","Buyer","Buyer","Seller","Seller","Seller"] },
    { name: "Duty, Taxes & Customs", values: ["Buyer","Buyer","Buyer","Buyer","Buyer","Buyer","Buyer","Buyer","Buyer","Buyer","Buyer","Buyer","Seller"] },
    { name: "Delivery To Destination", values: ["Buyer","Buyer","Buyer","Buyer","Buyer","Buyer","Buyer","Buyer","Buyer","Buyer","Buyer","Buyer","Seller"] },
  ];

  return (
    <div className="px-4 md:px-10 py-25 max-w-7xl mx-auto">
      <h1 className="text-center text-3xl md:text-4xl font-bold text-[#4A46C6] mb-6">
        INCOTERM CHART
      </h1>

      {/* Responsive container */}
      <div className="overflow-auto rounded-xl border border-[#4A46C6] shadow-md">
        <table className="min-w-full border-collapse border border-[#4A46C6]">
          
          {/* HEADER ROW */}
          <thead>
            <tr className="bg-[#E8E5FF]">
              <th className="p-3 border border-[#4A46C6] font-semibold text-left sticky left-0 z-10 bg-[#E8E5FF]">
                SERVICES
              </th>

              {incotermHeaders.map((header, i) => (
                <th
                  key={i}
                  className="p-3 text-sm font-semibold border border-[#4A46C6] whitespace-nowrap bg-[#E8E5FF]"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {services.map((service, idx) => (
              <tr key={idx} className="odd:bg-white even:bg-gray-50">
                <td className="p-3 font-medium border border-[#4A46C6] whitespace-nowrap sticky left-0 bg-white z-10">
                  {service.name}
                </td>

                {service.values.map((value, colIndex) => (
                  <td
                    key={colIndex}
                    className="p-3 border border-[#4A46C6] text-center text-sm font-medium"
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-purple-800 mt-4">
        * FCA has two variants: Seller’s Premises (no inland freight) and Named Place (includes inland freight responsibility).
      </p>
    </div>
  );
}
