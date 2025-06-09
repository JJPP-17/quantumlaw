"use client";

import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";


export default function QuantumCareers() {
  const [careers, setCareers] = useState([]);
  const [selectedCareers, setSelectedCareers] = useState(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState({
    position: "",
    roledescription: "",
    category: "",
    qualifications: "",
    howtoapply: "",
  });

  console.log(careers)

  useEffect(() => {
    fetchCareers();
  }, []);

  async function fetchCareers() {
    const { data, error } = await supabase
        .from("careers")
        .select("*")
        .order("position", { ascending: false });

    if (error) throw error;
    setCareers(
      data.map((award) => ({
      ...award
    })))
  }

  console.log('selectedCareers', selectedCareers);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (selectedCareers) {
        const { error: updateError } = await supabase
          .from("careers")
          .update({
            position: text.position,
            roledescription: text.roledescription,
            category: text.category,
            qualifications: text.qualifications,
            howtoapply: text.howtoapply
          })
          .eq("id", selectedCareers.id);
      } else {
        // Insert awards data
        const { error: dbError } = await supabase.from("careers").insert([
          {
            position: text.position,
            roledescription: text.roledescription,
            category: text.category,
            qualifications: text.qualifications,
            howtoapply: text.howtoapply,
            created_at: new Date().toISOString(),
          },
        ]);

        if (dbError) throw dbError;
      }

      resetForm();
      window.location.reload();
    } catch (error) {
      setMessage(`Error: ${error.message}`);
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };


  const onChangeHandler = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
  }

  const resetForm = () => {
    setSelectedCareers(null);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-700">
        {selectedCareers ? "Edit Careers" : "Create Careers"}
      </h1>
      
      {message && (
        <div
          className={`p-4 mb-4 rounded ${
            message.includes("error")
              ? "bg-red-200 text-red-800"
              : "bg-green-200 text-green-800"
          }`}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
            <div className="flex gap-2">
                <select
                    className="w-full p-2 border rounded text-gray-900"
                    name="position"
                    value={selectedCareers?.id || "new"}
                    onChange={(e) => {
                        if (e.target.value === "new") {
                            setSelectedCareers(null);
                        } else {
                            const career = careers.find(
                                (c) => c.position === e.target.value 
                            );
                            setSelectedCareers(career || null);
                            
                        setText({
                            position: career.position,
                            roledescription: career.roledescription,
                            category: career.category,
                            qualifications: career.qualifications,
                            howtoapply: career.howtoapply,
                            created_at: new Date().toISOString(),
                        })
                        }
                    }}
                >
                    <option value="new">Select Existing Careers</option>
                    {careers.map((career) => (
                      career && career.position ? (
                        <option key={career.id} value={career.position}>
                            {career.position} {career.category} 
                        </option>
                      ) : null
                    ))}
                </select>
                {!selectedCareers && (
                    <input
                        type="text"
                        name="new career"
                        placeholder="Enter new career"
                    />
                )}
            </div>

        <div className="space-y-6">
            
            </div>
            <div className="space-y-6">
                <div>
                    <label className="block mb-2 text-gray-900 font-medium mt-5">
                        Careers Name
                    </label>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            name="position"
                            defaultValue={selectedCareers?.position}
                            value={text.position}
                            onChange={onChangeHandler}
                            placeholder="Enter Career Name"
                            className="w-full p-2 border rounded text-gray-900"
                            required
                        />
                    </div>   
                </div>
            </div>  
            <div>
                <label className="block mb-2 text-gray-900 font-medium mt-5">
                    Careers Description
                </label>
                <div className="flex gap-2">       
                    <textarea
                        name="roledescription"
                        defaultValue={selectedCareers?.roledescription}
                        value={text.roledescription}
                        onChange={onChangeHandler}
                        placeholder="Enter Description"
                        className="w-full p-6 border rounded text-gray-900"
                        required        
                    />
                </div>
            </div>
            <div>
                <label className="block mb-2 text-gray-900 font-medium mt-5">
                    Careers Type
                </label>
                <div className="flex gap-2">
            <select
                name="category"
                defaultValue={selectedCareers?.category}
                value={text.category}
                onChange={onChangeHandler}
                className="w-full p-2 border rounded text-gray-900"
                required
            >
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Contract">Contract</option>
                    <option value="Full Time/Part Time">Full Time/Part Time</option>
            </select>
</div>
            </div>
            <div>
                <label className="block mb-2 text-gray-900 font-medium mt-5">
                    Qualification
                </label>
                <div className="flex gap-2">
                    <input
                        type="text"
                        name="qualifications"
                        defaultValue={selectedCareers?.qualifications}
                        value={text.qualifications}
                        onChange={onChangeHandler}
                        placeholder="Enter Qualifications"
                        className="w-full p-2 border rounded text-gray-900"
                        required
                    />
                </div>
            </div>
            <div>
                <label className="block mb-2 text-gray-900 font-medium mt-5">
                    How to Apply
                </label>
                <div className="flex gap-2">
                    <input
                        type="text"
                        name="howtoapply"
                        defaultValue={selectedCareers?.howtoapply}
                        value={text.howtoapply}
                        onChange={onChangeHandler}
                        placeholder="Enter How to Apply"
                        className="w-full p-2 border rounded text-gray-900"
                        required
                    />
                </div>
            </div>
        </div>
        <button
            type="submit"
            className="w-full p-2 border rounded text-white bg-blue-500 hover:bg-blue-600"
            disabled={isLoading}
        >
            {isLoading ? "Uploading..." : "Upload"}
        </button>
       
      </form>
    </div>
  )
}
