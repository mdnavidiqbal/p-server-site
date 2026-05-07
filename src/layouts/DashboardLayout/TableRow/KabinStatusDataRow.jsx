// import jsPDF from "jspdf";
// import React, { useState } from "react";

// const KabinStatusDataRow = ({ details }) => {
//   const { email, status } = details || {};
//   console.log(details);
//   const [isOpen, setIsOpen] = useState(false);

//  const handleDownload = () => {
//   const doc = new jsPDF();

//   // 👉 date format
//   const formattedDate = new Date(details.marriageDate).toLocaleDateString("en-GB");

//   doc.text(`Groom Name: ${details.groomName}`, 10, 10);
//   doc.text(`Groom NID: ${details.groomNid}`, 10, 20);

//   doc.text(`Bride Name: ${details.brideName}`, 10, 30);
//   doc.text(`Bride NID: ${details.brideNid}`, 10, 40);

//   doc.text(`Marriage Date: ${formattedDate}`, 10, 50);
//   doc.text(`Kazi License: ${details.kaziLicense}`, 10, 60);

//   doc.save("kabin-info.pdf");
// };

//   return (
//     <>
//       <tr>
//         {/* Name */}
//         <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//           {email}
//         </td>

//         {/* Email */}
//         <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//           {status}
//         </td>
//         {/* Action Button */}
//         <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//           <button
//           onClick={()=>setIsOpen(true)}
//           className="text-white bg-blue-500 px-4 py-2 rounded">
//             View
//           </button>
//         </td>
//       </tr>
//       {isOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
//           <div className="bg-white p-6 rounded w-[400px]">

//             <h2 className="text-xl font-bold mb-4">Kabin Details</h2>

//             <p><b>Groom Name:</b> {details.groomName}</p>
//             <p><b>Groom NID:</b> {details.groomNid}</p>
//             <p><b>Bride Name:</b> {details.brideName}</p>
//             <p><b>Bride Name:</b> {details.brideNid}</p>
//             <p><b>Marriage Date:</b> {details.marriageDate}</p>
//             <p><b>Kazi License:</b> {details.kaziLicense}</p>

//             {/* Buttons */}
//             <div className="mt-4 flex justify-between">
//               <button
//                 onClick={handleDownload}
//                 className="bg-green-500 text-white px-4 py-2 rounded"
//               >
//                 Download PDF
//               </button>

//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="bg-red-500 text-white px-4 py-2 rounded"
//               >
//                 Close
//               </button>
//             </div>

//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default KabinStatusDataRow;

import jsPDF from "jspdf";
import React, { useState } from "react";

const KabinStatusDataRow = ({ details }) => {
  const { email, status } = details || {};
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = () => {
    const doc = new jsPDF({
      unit: "mm",
      format: "a4",
      orientation: "portrait",
    });

    if (!details) return;

    const pageWidth = doc.internal.pageSize.getWidth();
    const centerX = pageWidth / 2;
    let y = 25;

    // ================= HEADER =================
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("MARRIAGE CERTIFICATE", centerX, y, { align: "center" });
    y += 10;

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("Government of Bangladesh - Marriage Registration", centerX, y, {
      align: "center",
    });
    y += 15;

    doc.line(20, y, pageWidth - 20, y);
    y += 15;

    // ================= GROOM =================
    doc.setFont("helvetica", "bold");
    doc.text("GROOM DETAILS", centerX, y, { align: "center" });
    y += 10;

    doc.setFont("helvetica", "normal");
    doc.text(`Name: ${details.groomName || "N/A"}`, 30, y);
    y += 8;
    doc.text(`NID: ${details.groomNid || "N/A"}`, 30, y);
    y += 12;

    // ================= BRIDE =================
    doc.setFont("helvetica", "bold");
    doc.text("BRIDE DETAILS", centerX, y, { align: "center" });
    y += 10;

    doc.setFont("helvetica", "normal");
    doc.text(`Name: ${details.brideName || "N/A"}`, 30, y);
    y += 8;
    doc.text(`NID: ${details.brideNid || "N/A"}`, 30, y);
    y += 12;

    // ==============Kazi================//
    doc.setFont("helvetica", "bold");
    doc.text("KAZI DETAILS", centerX, y, { align: "center" });
    y += 10;

    doc.setFont("helvetica", "normal");
    doc.text(`Name: ${details.kaziName || "N/A"}`, 30, y);
    y += 8;
    doc.text(`Adress: ${details.kaziAddress || "N/A"}`, 30, y);
    y += 10;
    doc.text(`Kzi License: ${details.kaziLicense || "N/A"}`, 30, y);
    y += 12;

    // ================= MARRIAGE INFO =================
    doc.setFont("helvetica", "bold");
    doc.text("MARRIAGE INFO", centerX, y, { align: "center" });
    y += 10;

    const formattedDate = details.marriageDate
      ? new Date(details.marriageDate).toLocaleDateString("en-GB")
      : "N/A";

    doc.setFont("helvetica", "normal");
    doc.text(`Marriage Date: ${formattedDate}`, 30, y);
    y += 8;
    doc.text(`Marriage Place : ${details.marriagePlace || "N/A"}`, 30, y);
    y += 8;
    doc.text(`Total Mahar : ${details.mahrTotal || "N/A"}`, 30, y);
    y += 8;
    doc.text(`Total Paid : ${details.mahrPaid || "N/A"}`, 30, y);
    y += 8;

    // ================= SYSTEM INFO =================
    // doc.text(`Email: ${email || "N/A"}`, 30, y);
    // y += 8;
    // doc.text(`Status: ${status || "N/A"}`, 30, y);
    // y += 15;

    // ================= FOOTER =================
    doc.line(20, y, pageWidth - 20, y);
    y += 10;

    doc.setFontSize(9);
    doc.text("This is a system generated certificate.", centerX, y, {
      align: "center",
    });

    // filename
    const fileName = `kabin_certificate_${(details.groomName || "record")
      .replace(/\s/g, "_")
      .toLowerCase()}.pdf`;

    doc.save(fileName);
  };

  return (
    <>
      {/* TABLE ROW */}
      <tr>
        <td className="px-5 py-5 border-b bg-white text-sm">{email}</td>
        <td className="px-5 py-5 border-b bg-white text-sm">{status}</td>

        <td className="px-5 py-5 border-b bg-white text-sm">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            View
          </button>
        </td>
      </tr>

      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded w-[450px]">
            <h2 className="text-xl font-bold mb-4">Kabin Details</h2>

            <p>
              <b>Groom:</b> {details.groomName}
            </p>
            <p>
              <b>Bride:</b> {details.brideName}
            </p>
            <p>
              <b>Date:</b> {details.marriageDate}
            </p>
            <p>
              <b>Kazi Name:</b> {details.kaziName}
            </p>
            <p>
              <b>Kazi License:</b> {details.kaziLicense}
            </p>
            <hr />
            {/* BUTTONS */}
            <div className="mt-5 flex justify-between">
              <button
                onClick={handleDownload}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Download PDF
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default KabinStatusDataRow;
