"use client";

import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";
import Image from "next/image";

export default function QuanteamAward() {
  const [awards, setAwards] = useState([]);
  const [selectedAward, setSelectedAward] = useState(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const [text, setText] = useState({
    awardsname: "",
    filename: "",
    description: "",
    awardsyear: "",
    awardstype: "",
  });

  useEffect(() => {
    fetchAwards();
  }, []);

  async function fetchAwards() {
    const { data, error } = await supabase
        .from("ourteam")
        .select("*")
        .order("awardsyear", { ascending: false });

    if (error) throw error;
    setAwards(
      data.map((award) => ({
      ...award,
      image: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/quantimages/${award.id}/${award.filename}`
    })))
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const fileURL = URL.createObjectURL(selectedFile);
      setFileURL(fileURL);
      setPreview(fileURL);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = selectedAward;
      if (!file && !selectedAward) {
        alert("Please select a file to upload");
        return;
      }

      // Prepare file details
      const fileExt = file ? file.name.split(".").pop() : selectedAward?.filename.split(".").pop();
      const timestamp = Date.now();
      const fileName = `${text.filename}_${timestamp}.${fileExt}`;
      const randomid = crypto.randomUUID();
      const filePath = selectedAward ? `${selectedAward.id}/${fileName}` : `${randomid}/${fileName}`;

      // Upload image
      const { error: uploadError } = await supabase.storage
        .from("quantimages")
        .upload(filePath, file, {upsert: true});

      if (uploadError) throw uploadError;

      // Get image URL
      const { data: urlData } = await supabase.storage
        .from("quantimages")
        .getPublicUrl(filePath);

      if (selectedAward) {
        const { error: updateError } = await supabase
          .from("ourteam")
          .update({
            awardsname: text.awardsname,
            filename: file ? fileName : selectedAward.filename,
            description: text.description,
            awardsyear: text.awardsyear,
            awardstype: text.awardstype,
          })
          .eq("id", selectedAward.id);
      } else {
        // Insert awards data
        const { error: dbError } = await supabase.from("ourteam").insert([
          {
            id: randomid,
            awardsname: text.awardsname,
            filename: fileName,
            description: text.description,
            awardsyear: text.awardsyear,
            awardstype: text.awardstype,
            created_at: new Date().toISOString(),
          },
        ]);

        if (dbError) throw dbError;
      }

      alert("Yay! Your upload is successful");
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
    setSelectedAward(null);
    setFile(null);
    setFileURL(null);
    setPreview(null);
  };

  console.log(selectedAward);
  

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-700">
        {selectedAward ? "Edit Award" : "Create Award"}
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
                    name="awardsname"
                    value={selectedAward?.id || "new"}
                    onChange={(e) => {
                        if (e.target.value === "new") {
                            setSelectedAward(null);
                        } else {
                            const award = awards.find(
                                (a) => `${a.awardsname}-${a.description}` === e.target.value
                            );
                        setSelectedAward(award || null);
                        setPreview(
                            `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/quantimages/${award?.id}/${award?.filename}` || null
                        );
                        setText({
                            awardsname: award.awardsname,
                            filename: award.filename,
                            description: award.description,
                            awardsyear: award.awardsyear,
                            awardstype: award.awardstype,
                            created_at: new Date().toISOString(),
                        })
                        }
                    }}
                >
                    <option value="new">Select Existing Award</option>
                    {awards.map((award) => (
                      award && award.awardsname ? (
                        <option key={award.id} value={`${award.awardsname}-${award.description}`}>
                            {award.awardsname} - {award.description} {award.awardsyear}
                        </option>
                      ) : null
                    ))}
                </select>
                {!selectedAward && (
                    <input
                        type="text"
                        name="new_award"
                        placeholder="Enter new award"
                    />
                )}
            </div>

        </div>

        <div className="space-y-6">
            <div>    
            <p className="text-gray-900 font-bold">Please select Image</p>
                <div className="flex items-center justify-center w-full">
                 
                    <label
                        htmlFor="dropzone-file"   
                    >
                        {preview ? (
                                <div className="h-72 w-72 relative rounded-lg overflow-hidden">
                                    <Image
                                        src={preview}
                                        alt="Preview Image"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                
                        ) : (
                            <div className="flex flex-col items-center justify-center w-92 h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                <p className="text-gray-500">
                                    {file ? file.name : "Upload Image"}
                                </p>
                            </div>
                        )}
                    </label>
                </div>
                <input
                    id="dropzone-file"
                    type="file"
                    name="image"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                />
                {uploading && (
                    <p className="mt-2 text-sm text-gray-600">Uploading...</p>
                )}
            </div>
            <div className="space-y-6">
                <div>
                    <label className="block mb-2 text-gray-900 font-medium">
                        Award Name
                    </label>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            name="awardsname"
                            defaultValue={selectedAward?.awardsname}
                            onChange={onChangeHandler}
                            placeholder="Enter Award Name"
                            className="w-full p-2 border rounded text-gray-900"
                            required
                        />
                    </div>   
                </div>
            </div>  
            <div>
                <label className="block mb-2 text-gray-900 font-medium">
                    Award Year
                </label>
                <div className="flex gap-2">       
                    <input
                        type="text"
                        name="awardsyear"
                        defaultValue={selectedAward?.awardsyear}
                        onChange={onChangeHandler}
                        placeholder="Enter Award Year"
                        className="w-full p-2 border rounded text-gray-900"
                        required        
                    />
                </div>
            </div>
            <div>
                <label className="block mb-2 text-gray-900 font-medium">
                    Award Type
                </label>
                <div className="flex gap-2">
                    <input
                        type="text"
                        name="awardstype"
                        defaultValue={selectedAward?.awardstype}
                        onChange={onChangeHandler}
                        placeholder="Enter Award Type"
                        className="w-full p-2 border rounded text-gray-900"
                        required
                    />
                </div>
            </div>
            <div>
                <label className="block mb-2 text-gray-900 font-medium">
                    Award Description
                </label>
                <div className="flex gap-2">
                    <input
                        type="text"
                        name="description"
                        defaultValue={selectedAward?.description}
                        onChange={onChangeHandler}
                        placeholder="Enter Award Description"
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
