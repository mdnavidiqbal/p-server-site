import React, { useState } from "react";

const KabinNama = () => {
  const [formData, setFormData] = useState({
    groomName: "",
    groomDOB: "",
    groomNID: "",
    groomFatherName: "",
    brideName: "",
    brideDOB: "",
    brideNID: "",
    brideFatherName: "",
    marriageDate: "",
    marriagePlace: "",
    mehrAmount: "",
    witness1: "",
    witness2: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Kabin Data:", formData);
    alert("Kabin Form Submitted ✅");
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 px-4 bg-gradient-to-r from-[#A8CECF] to-[#E6AE8C]">
      <div className="max-w-5xl mx-auto px-4 py-10  ">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-green-700 mb-8">
            Kabin Nama Registration Form
          </h1>
        </div>

        <div>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-xl p-5 sm:p-8 space-y-6"
          >
            {/* ===== Groom Info ===== */}
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
              Groom Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="groomName"
                placeholder="Groom Full Name"
                className="input"
                value={formData.groomName}
                onChange={handleChange}
                required
              />
              <input
                type="date"
                name="groomDOB"
                className="input"
                value={formData.groomDOB}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="groomNID"
                placeholder="Groom NID / Birth Certificate"
                className="input"
                value={formData.groomNID}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="groomFatherName"
                placeholder="Groom Father's Name"
                className="input"
                value={formData.groomFatherName}
                onChange={handleChange}
                required
              />
            </div>

            {/* ===== Bride Info ===== */}
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
              Bride Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="brideName"
                placeholder="Bride Full Name"
                className="input"
                value={formData.brideName}
                onChange={handleChange}
                required
              />
              <input
                type="date"
                name="brideDOB"
                className="input"
                value={formData.brideDOB}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="brideNID"
                placeholder="Bride NID / Birth Certificate"
                className="input"
                value={formData.brideNID}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="brideFatherName"
                placeholder="Bride Father's Name"
                className="input"
                value={formData.brideFatherName}
                onChange={handleChange}
                required
              />
            </div>

            {/* ===== Marriage Info ===== */}
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
              Marriage Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="date"
                name="marriageDate"
                className="input"
                value={formData.marriageDate}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="marriagePlace"
                placeholder="Marriage Place / Kazi Office"
                className="input"
                value={formData.marriagePlace}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="mehrAmount"
                placeholder="Mehr Amount (৳)"
                className="input sm:col-span-2"
                value={formData.mehrAmount}
                onChange={handleChange}
              />
            </div>

            {/* ===== Witness Section ===== */}
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
              Witness Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm">Witness 1</label>
                <select
                  name="witness1"
                  className="input"
                  value={formData.witness1}
                  onChange={handleChange}
                  required
                ></select>
              </div>

              <div>
                <label className="block mb-1 text-sm">Witness 2</label>
                <select
                  name="witness2"
                  className="input"
                  value={formData.witness2}
                  onChange={handleChange}
                  required
                ></select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Submit Kabin Nama
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default KabinNama;
