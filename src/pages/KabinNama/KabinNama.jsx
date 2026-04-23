// import React, { useState } from "react";

// const KabinNama = () => {
//   const [formData, setFormData] = useState({
//     groomName: "",
//     groomDOB: "",
//     groomNID: "",
//     groomFatherName: "",
//     brideName: "",
//     brideDOB: "",
//     brideNID: "",
//     brideFatherName: "",
//     marriageDate: "",
//     marriagePlace: "",
//     mehrAmount: "",
//     witness1: "",
//     witness2: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Kabin Data:", formData);
//     alert("Kabin Form Submitted ✅");
//   };

//   return (
//     <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 px-4 bg-gradient-to-r from-[#A8CECF] to-[#E6AE8C]">
//       <div className="max-w-5xl mx-auto px-4 py-10  ">
//         <div>
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-green-700 mb-8">
//             Kabin Nama Registration Form
//           </h1>
//         </div>

//         <div>
//           <form
//             onSubmit={handleSubmit}
//             className="bg-white shadow-xl rounded-xl p-5 sm:p-8 space-y-6"
//           >
//             {/* ===== Groom Info ===== */}
//             <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
//               Groom Information
//             </h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 name="groomName"
//                 placeholder="Groom Full Name"
//                 className="input"
//                 value={formData.groomName}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="date"
//                 name="groomDOB"
//                 className="input"
//                 value={formData.groomDOB}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="text"
//                 name="groomNID"
//                 placeholder="Groom NID / Birth Certificate"
//                 className="input"
//                 value={formData.groomNID}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="text"
//                 name="groomFatherName"
//                 placeholder="Groom Father's Name"
//                 className="input"
//                 value={formData.groomFatherName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             {/* ===== Bride Info ===== */}
//             <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
//               Bride Information
//             </h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 name="brideName"
//                 placeholder="Bride Full Name"
//                 className="input"
//                 value={formData.brideName}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="date"
//                 name="brideDOB"
//                 className="input"
//                 value={formData.brideDOB}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="text"
//                 name="brideNID"
//                 placeholder="Bride NID / Birth Certificate"
//                 className="input"
//                 value={formData.brideNID}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="text"
//                 name="brideFatherName"
//                 placeholder="Bride Father's Name"
//                 className="input"
//                 value={formData.brideFatherName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             {/* ===== Marriage Info ===== */}
//             <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
//               Marriage Details
//             </h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <input
//                 type="date"
//                 name="marriageDate"
//                 className="input"
//                 value={formData.marriageDate}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="text"
//                 name="marriagePlace"
//                 placeholder="Marriage Place / Kazi Office"
//                 className="input"
//                 value={formData.marriagePlace}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="text"
//                 name="mehrAmount"
//                 placeholder="Mehr Amount (৳)"
//                 className="input sm:col-span-2"
//                 value={formData.mehrAmount}
//                 onChange={handleChange}
//               />
//             </div>

//             {/* ===== Witness Section ===== */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <input
//                 type="date"
//                 name="marriageDate"
//                 className="input"
//                 value={formData.witness1}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="text"
//                 name="marriagePlace"
//                 placeholder="Marriage Place / Kazi Office"
//                 className="input"
//                 value={formData.witness2}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="text"
//                 name="mehrAmount"
//                 placeholder="Mehr Amount (৳)"
//                 className="input sm:col-span-2"
//                 value={formData.mehrAmount}
//                 onChange={handleChange}
//               />
//             </div>

//             {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block mb-1 text-sm">Witness 1</label>
//                 <select
//                   name="witness1"
//                   className="input"
//                   value={formData.witness1}
//                   onChange={handleChange}
//                   required
//                 ></select>
//               </div>

//               <div>
//                 <label className="block mb-1 text-sm">Witness 2</label>
//                 <select
//                   name="witness2"
//                   className="input"
//                   value={formData.witness2}
//                   onChange={handleChange}
//                   required
//                 ></select>
//               </div>
//             </div> */}

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
//             >
//               Submit Kabin Nama
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default KabinNama;

import React, { useState, useCallback, use } from "react";
import { data } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

/* ---------------- INPUT COMPONENT ---------------- */
const Input = React.memo(({ label, name, type = "text", value, onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium mb-1">
        {label} <span className="text-red-500">*</span>
      </label>

      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
});

/* ---------------- MAIN COMPONENT ---------------- */
export default function KabinNama() {
  const [form, setForm] = useState({
    groomName: "",
    groomFather: "",
    groomMother: "",
    groomDob: "",
    groomNid: "",
    groomPHN: "",
    groomAddress: "",
    groomOccupation: "",

    brideName: "",
    brideFather: "",
    brideMother: "",
    brideDob: "",
    brideNid: "",
    bridePHN: "",
    brideAddress: "",
    brideOccupation: "",

    marriageDate: "",
    marriagePlace: "",
    mahrTotal: "",
    mahrPaid: "",
    mahrDue: "",

    witness1Name: "",
    witness1Nid: "",
    witness1Address: "",
    witness1PHN:"",

    witness2Name: "",
    witness2Nid: "",
    witness2Address: "",
    witness2PHN:"",

    kaziName: "",
    kaziLicense: "",
    kaziAddress: "",
  });

  /* ✅ FIXED CHANGE HANDLER */
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/kabin",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(form),
    })
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data);
        alert("Form submit sucessfully")
      })
      .catch((error)=>{
        console.log(error);
        alert("Faild to post data")
      })

    for (let key in form) {
      if (!form[key]?.toString().trim()) {
        alert("Please fill all required fields!");
        return;
      }
    }



    console.log("Kabin Nama Data:", form);
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Marriage Contract Form (Kabin Nama)
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* ---------------- GROOM ---------------- */}
          <section>
            <h2 className="text-lg font-semibold mb-3">Groom Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Name" name="groomName" value={form.groomName} onChange={handleChange}  />
              <Input label="Date of Birth" name="groomDob" type="date" value={form.groomDob} onChange={handleChange} />
              <Input label="NID Number" name="groomNid" type="text" value={form.groomNid} onChange={handleChange} />
              <Input label="Phone Number" name="groomPHN" type="tel" value={form.groomPHN} onChange={handleChange} />
              <Input label="Father's Name" name="groomFather" value={form.groomFather} onChange={handleChange} />
              <Input label="Mother's Name" name="groomMother" value={form.groomMother} onChange={handleChange} />
              <Input label="Address" name="groomAddress" value={form.groomAddress} onChange={handleChange} />
              <Input label="Occupation" name="groomOccupation" value={form.groomOccupation} onChange={handleChange} />
            </div>
          </section>

          {/* ---------------- BRIDE ---------------- */}
          <section>
            <h2 className="text-lg font-semibold mb-3">Bride Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Name" name="brideName" value={form.brideName} onChange={handleChange} />
              <Input label="Date of Birth" name="brideDob" type="date" value={form.brideDob} onChange={handleChange} />
              <Input label="NID Number" name="brideNid" type="text" value={form.brideNid} onChange={handleChange} />
              <Input label="Phone Number" name="bridePHN" type="tel" value={form.bridePHN} onChange={handleChange} />
              <Input label="Father's Name" name="brideFather" value={form.brideFather} onChange={handleChange} />
              <Input label="Mother's Name" name="brideMother" value={form.brideMother} onChange={handleChange} />
              <Input label="Address" name="brideAddress" value={form.brideAddress} onChange={handleChange} />
              <Input label="Occupation" name="brideOccupation" value={form.brideOccupation} onChange={handleChange} />
            </div>
          </section>

          {/* ---------------- MARRIAGE ---------------- */}
          <section>
            <h2 className="text-lg font-semibold mb-3">Marriage Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Marriage Date" name="marriageDate" type="date" value={form.marriageDate} onChange={handleChange} />
              <Input label="Marriage Place" name="marriagePlace" value={form.marriagePlace} onChange={handleChange} />
            </div>
          </section>

          {/* ---------------- MAHR ---------------- */}
          <section>
            <h2 className="text-lg font-semibold mb-3">Mahr (Dowry)</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Input label="Total Amount" name="mahrTotal" type="number" value={form.mahrTotal} onChange={handleChange} />
              <Input label="Paid Amount" name="mahrPaid" type="number" value={form.mahrPaid} onChange={handleChange} />
              <Input label="Due Amount" name="mahrDue" type="number" value={form.mahrDue} onChange={handleChange} />
            </div>
          </section>

          {/* ---------------- WITNESS ---------------- */}
          <section>
            <h2 className="text-lg font-semibold mb-3">Witness Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Witness 1 Name" name="witness1Name" value={form.witness1Name} onChange={handleChange} />
              <Input label="NID" name="witness1Nid" type="text" value={form.witness1Nid} onChange={handleChange} />
              <Input label="Address" name="witness1Address" value={form.witness1Address} onChange={handleChange} />
              <Input label="Phone Number" name="witness1PHN" type="text" value={form.witness1PHN} onChange={handleChange} />

              <Input label="Witness 2 Name" name="witness2Name" value={form.witness2Name} onChange={handleChange} />
              <Input label="NID" name="witness2Nid" type="text" value={form.witness2Nid} onChange={handleChange} />
              <Input label="Address" name="witness2Address" value={form.witness2Address} onChange={handleChange} />
              <Input label="Phone Number" name="witness2PHN" type="text" value={form.witness2PHN} onChange={handleChange} />
              
            </div>
          </section>

          {/* ---------------- KAZI ---------------- */}
          <section>
            <h2 className="text-lg font-semibold mb-3">Kazi Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Name" name="kaziName" value={form.kaziName} onChange={handleChange} />
              <Input label="License Number" name="kaziLicense" type="text" value={form.kaziLicense} onChange={handleChange} />
              <Input label="Address" name="kaziAddress" value={form.kaziAddress} onChange={handleChange} />
            </div>
          </section>

          {/* ---------------- SUBMIT ---------------- */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
}
