import React, { useState, useCallback, use, useEffect } from "react";
import { data, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/UseAxiosSecure";

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
  const { user } = use(AuthContext);
  const navigate = useNavigate();
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
    witness1PHN: "",

    witness2Name: "",
    witness2Nid: "",
    witness2Address: "",
    witness2PHN: "",

    kaziName: "",
    kaziLicense: "",
    kaziAddress: "",

    useremail: "",
  });
  /*  AUTO SET EMAIL */
  useEffect(() => {
    if (user?.email) {
      setForm((prev) => ({
        ...prev,
        useremail: user.email,
      }));
    }
  }, [user]);

  /* FIXED CHANGE HANDLER */
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const axiosSecure = useAxiosSecure();

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation
    for (let key in form) {
      if (!form[key]?.toString().trim()) {
        toast.error("Please fill all required fields!");
        return;
      }
    }

    try {
      const payload = {
        ...form,
        status: "pending",
      };

      await axiosSecure.post("/kabin", payload);

      toast.success("Form submitted successfully, wait for response", {
        autoClose: 4000,
      });

      navigate("/home");
    } catch (err) {
      console.log("ERROR:", err?.response || err);

      toast.error(
        err?.response?.data?.message ||
          "Failed to submit (check backend or token)",
      );
    }
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
              <Input
                label="Name"
                name="groomName"
                value={form.groomName}
                onChange={handleChange}
              />
              <Input
                label="Date of Birth"
                name="groomDob"
                type="date"
                value={form.groomDob}
                onChange={handleChange}
              />
              <Input
                label="NID Number"
                name="groomNid"
                type="text"
                value={form.groomNid}
                onChange={handleChange}
              />
              <Input
                label="Phone Number"
                name="groomPHN"
                type="tel"
                value={form.groomPHN}
                onChange={handleChange}
              />
              <Input
                label="Father's Name"
                name="groomFather"
                value={form.groomFather}
                onChange={handleChange}
              />
              <Input
                label="Mother's Name"
                name="groomMother"
                value={form.groomMother}
                onChange={handleChange}
              />
              <Input
                label="Address"
                name="groomAddress"
                value={form.groomAddress}
                onChange={handleChange}
              />
              <Input
                label="Occupation"
                name="groomOccupation"
                value={form.groomOccupation}
                onChange={handleChange}
              />
            </div>
          </section>

          {/* ---------------- BRIDE ---------------- */}
          <section>
            <h2 className="text-lg font-semibold mb-3">Bride Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Name"
                name="brideName"
                value={form.brideName}
                onChange={handleChange}
              />
              <Input
                label="Date of Birth"
                name="brideDob"
                type="date"
                value={form.brideDob}
                onChange={handleChange}
              />
              <Input
                label="NID Number"
                name="brideNid"
                type="text"
                value={form.brideNid}
                onChange={handleChange}
              />
              <Input
                label="Phone Number"
                name="bridePHN"
                type="tel"
                value={form.bridePHN}
                onChange={handleChange}
              />
              <Input
                label="Father's Name"
                name="brideFather"
                value={form.brideFather}
                onChange={handleChange}
              />
              <Input
                label="Mother's Name"
                name="brideMother"
                value={form.brideMother}
                onChange={handleChange}
              />
              <Input
                label="Address"
                name="brideAddress"
                value={form.brideAddress}
                onChange={handleChange}
              />
              <Input
                label="Occupation"
                name="brideOccupation"
                value={form.brideOccupation}
                onChange={handleChange}
              />
            </div>
          </section>

          {/* ---------------- MARRIAGE ---------------- */}
          <section>
            <h2 className="text-lg font-semibold mb-3">Marriage Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Marriage Date"
                name="marriageDate"
                type="date"
                value={form.marriageDate}
                onChange={handleChange}
              />
              <Input
                label="Marriage Place"
                name="marriagePlace"
                value={form.marriagePlace}
                onChange={handleChange}
              />
            </div>
          </section>

          {/* ---------------- MAHR ---------------- */}
          <section>
            <h2 className="text-lg font-semibold mb-3">Mahr (Dowry)</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Input
                label="Total Amount"
                name="mahrTotal"
                type="number"
                value={form.mahrTotal}
                onChange={handleChange}
              />
              <Input
                label="Paid Amount"
                name="mahrPaid"
                type="number"
                value={form.mahrPaid}
                onChange={handleChange}
              />
              <Input
                label="Due Amount"
                name="mahrDue"
                type="number"
                value={form.mahrDue}
                onChange={handleChange}
              />
            </div>
          </section>

          {/* ---------------- WITNESS ---------------- */}
          <section>
            <h2 className="text-lg font-semibold mb-3">Witness Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Witness 1 Name"
                name="witness1Name"
                value={form.witness1Name}
                onChange={handleChange}
              />
              <Input
                label="NID"
                name="witness1Nid"
                type="text"
                value={form.witness1Nid}
                onChange={handleChange}
              />
              <Input
                label="Address"
                name="witness1Address"
                value={form.witness1Address}
                onChange={handleChange}
              />
              <Input
                label="Phone Number"
                name="witness1PHN"
                type="text"
                value={form.witness1PHN}
                onChange={handleChange}
              />

              <Input
                label="Witness 2 Name"
                name="witness2Name"
                value={form.witness2Name}
                onChange={handleChange}
              />
              <Input
                label="NID"
                name="witness2Nid"
                type="text"
                value={form.witness2Nid}
                onChange={handleChange}
              />
              <Input
                label="Address"
                name="witness2Address"
                value={form.witness2Address}
                onChange={handleChange}
              />
              <Input
                label="Phone Number"
                name="witness2PHN"
                type="text"
                value={form.witness2PHN}
                onChange={handleChange}
              />
            </div>
          </section>

          {/* ---------------- KAZI ---------------- */}
          <section>
            <h2 className="text-lg font-semibold mb-3">Kazi Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Name"
                name="kaziName"
                value={form.kaziName}
                onChange={handleChange}
              />
              <Input
                label="License Number"
                name="kaziLicense"
                type="text"
                value={form.kaziLicense}
                onChange={handleChange}
              />
              <Input
                label="Address"
                name="kaziAddress"
                value={form.kaziAddress}
                onChange={handleChange}
              />
            </div>
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-3">User Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="User Email"
                name="useremail"
                type="email"
                value={form.useremail}
                onChange={handleChange}
                readOnly
              />
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
