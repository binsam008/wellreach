import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Incoterms() {
  const tableRef = useRef(null);

  // HEADERS
  const incotermHeaders = [
    "EXW","FCA","FAS","FOB","CFR","CIF","CPT","CIP",
    "DAF","DES","DEQ","DDU","DDP"
  ];

  // ROWS
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

  // ⭐ EXPORT TO PDF (IMAGE SNAPSHOT)
  const downloadPDF = async () => {
    const tableElement = tableRef.current;

    const canvas = await html2canvas(tableElement, { scale: 2 });

    const imgData = canvas.toDataURL("image/jpeg", 1.0);
    const pdf = new jsPDF("landscape", "pt", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "JPEG", 0, 20, pdfWidth, pdfHeight);
    pdf.save("incoterm-chart.pdf");
  };

  // ⭐ EXPORT TO CSV
  const downloadCSV = () => {
    let csv = "Services," + incotermHeaders.join(",") + "\n";

    services.forEach((row) => {
      csv += row.name + "," + row.values.join(",") + "\n";
    });

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "incoterm-chart.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="px-4 md:px-10 py-25 max-w-7xl mx-auto">

      <h1 className="text-center text-3xl md:text-4xl font-bold text-[#4A46C6] mb-4">
        INCOTERM CHART
      </h1>

      {/* EXPORT BUTTONS */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {/* <button
          onClick={downloadPDF}
          className="bg-[#4A46C6] text-white px-5 py-2 rounded-lg shadow hover:opacity-90"
        >
          📄 Download PDF
        </button> */}

        <button
          onClick={downloadCSV}
          className="bg-[#1010ff] text-white px-5 py-2 rounded-lg shadow hover:opacity-90"
        >
          📥 Download CSV
        </button>
      </div>

      {/* DESKTOP TABLE */}
      <div
        ref={tableRef}
        className="hidden md:block overflow-auto rounded-xl border border-[#4A46C6] shadow-md"
      >
        <table
          className="min-w-full border-collapse border border-[#4A46C6]"
          style={{ borderColor: "#4A46C6" }}
        >
          <thead>
            <tr style={{ background: "#E8E5FF" }}>
              <th
                className="p-3 font-semibold text-left sticky left-0 z-10"
                style={{ border: "1px solid #4A46C6", background: "#E8E5FF" }}
              >
                SERVICES
              </th>

              {incotermHeaders.map((header, i) => (
                <th
                  key={i}
                  className="p-3 text-sm font-semibold whitespace-nowrap"
                  style={{
                    border: "1px solid #4A46C6",
                    background: "#E8E5FF",
                  }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {services.map((service, idx) => (
              <tr
                key={idx}
                style={{
                  background: idx % 2 === 0 ? "#ffffff" : "#f3f4f6",
                }}
              >
                <td
                  className="p-3 font-medium sticky left-0 z-10"
                  style={{
                    border: "1px solid #4A46C6",
                    background: "#ffffff",
                    whiteSpace: "nowrap",
                  }}
                >
                  {service.name}
                </td>

                {service.values.map((value, colIndex) => (
                  <td
                    key={colIndex}
                    className="p-3 text-center text-sm"
                    style={{ border: "1px solid #4A46C6" }}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE ACCORDION */}
      <div className="md:hidden space-y-4 mt-6">
        {services.map((service, i) => (
          <details
            key={i}
            className="rounded-lg"
            style={{ border: "1px solid #4A46C6" }}
          >
            <summary
              className="cursor-pointer p-3 font-semibold"
              style={{ background: "#E8E5FF" }}
            >
              {service.name}
            </summary>

            <div className="p-3 bg-white">
              {service.values.map((val, idx) => (
                <div
                  key={idx}
                  className="flex justify-between py-1"
                  style={{
                    borderBottom:
                      idx === service.values.length - 1
                        ? "none"
                        : "1px solid #d1d5db",
                  }}
                >
                  <span className="font-medium text-sm text-gray-700">
                    {incotermHeaders[idx]}
                  </span>
                  <span className="text-sm">{val}</span>
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>

      <p className="text-sm mt-4" style={{ color: "#4A46C6" }}>
        * FCA has two variants: Seller’s Premises (no inland freight) and Named Place (includes inland freight responsibility).
      </p>

    </div>
  );
}
