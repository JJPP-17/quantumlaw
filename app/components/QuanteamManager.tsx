"use client";

import { useEffect, useState } from "react";
import {
  createQuantTeam,
  updateQuantTeam,
  getQuantTeam,
  QuantTeam,
} from "../actions/quanteam";
import { supabase } from "../../lib/supabaseClient";
import Image from "next/image";

export default function QuantTeamManager() {
  const [quantTeam, setQuantTeam] = useState<QuantTeam[]>([]);
  const [selectedQuantTeam, setSelectedQuantTeam] = useState<QuantTeam | null>(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [fileURL, setFileURL] = useState<string | null>(null);
  const [text, setText] = useState({
    membername: "",
    filename: "",
    position: "",
    description: "",
    expertise: "",
    firmnumber: "",
    mobilenumber: "",
    email: "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const fileURL = URL.createObjectURL(selectedFile);
      setFileURL(fileURL);
      setPreview(fileURL);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!file) {
        alert('Please select a file to upload');
        return;
      }

      // Prepare file details
      const fileExt = file.name.split(".").pop();
      const timestamp = Date.now();
      const fileName = `${text.membername}_${timestamp}.${fileExt}`;
      const randomid = crypto.randomUUID();
      const filePath = `${randomid}/${fileName}`;

      // Upload image
      const { error: uploadError } = await supabase.storage
        .from("quantimages")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Get image URL
      const { data: urlData } = await supabase.storage
        .from("quantimages")
        .getPublicUrl(filePath);

      // Insert team member data
      const { error: dbError } = await supabase.from('ourteam').insert([{
        id: randomid,
        membername: text.membername,
        filename: fileName,
        position: text.position,
        description: text.description,
        expertise: text.expertise,
        firmnumber: text.firmnumber,
        mobilenumber: text.mobilenumber,
        email: text.email,
        created_at: new Date().toISOString()
      }]);

      if (dbError) throw dbError;
      

      alert('Yay! Your upload is successful');
      resetForm();
      window.location.reload();
    } catch (error) {
      setMessage(`Error: ${error.message}`);
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };
  
  const resetForm = () => {
    setSelectedQuantTeam(null);
    setFile(null);
    setFileURL(null);
    setPreview(null);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-700">Update Team Member</h1>

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

      <form id="quantTeamForm" onSubmit={handleSubmit} className="space-y-6">
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Upload Image
          </label>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              {preview ? (
                <div className="relative w-full h-full">
                  <Image
                    src={preview}
                    alt="Preview"
                    fill
                    className="object-contain p-4"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                    <p className="text-white text-sm">Click to change image</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                </div>
              )}
              <input
                id="dropzone-file"
                type="file"
                name="image"
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
              />
            </label>
          </div>
          {uploading && (
            <p className="mt-2 text-sm text-gray-600">Uploading...</p>
          )}
        </div>

        <div className="space-y-6">
          <div>
            <label className="block mb-2 text-gray-900 font-medium">Name</label>
            <div className="flex gap-2">
            
                <input
                  type="text"
                  name="membername"
                  onChange={onChangeHandler}
                  placeholder="Enter name"
                  className="w-full p-2 border rounded text-gray-900"
                  required
                />
              
            </div>
          </div>

          <div>
            <label className="block mb-2 text-gray-900">Position</label>
            <input
              type="text"
              name="position"
              onChange={onChangeHandler}
              defaultValue={selectedQuantTeam?.position}
              className="w-full p-2 border rounded text-gray-900"
              placeholder="e.g. Senior Partner"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-900 font-medium">Description</label>
            <textarea
              name="description"
              defaultValue={selectedQuantTeam?.description}
              onChange={onChangeHandler}
              className="w-full p-2 border rounded text-gray-900 min-h-[150px] resize-y"
              placeholder="Enter bio and description..."
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-900 font-medium">Expertise</label>
            <textarea
              name="expertise"
              defaultValue={selectedQuantTeam?.expertise}
              onChange={onChangeHandler}
              className="w-full p-2 border rounded text-gray-900 min-h-[100px] resize-y"
              placeholder="Enter areas of expertise..."
              required
              
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-2 text-gray-900 font-medium">Firm Number</label>
              <input
                type="tel"
                name="firmnumber"
                defaultValue={selectedQuantTeam?.firmnumber}
                className="w-full p-2 border rounded text-gray-900"
                placeholder="Office phone number"
                onChange={onChangeHandler}
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-900 font-medium">Mobile Number</label>
              <input
                type="tel"
                name="mobilenumber"
                defaultValue={selectedQuantTeam?.mobilenumber}
                className="w-full p-2 border rounded text-gray-900"
                placeholder="Mobile number"
                onChange={onChangeHandler}
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-900 font-medium">Email</label>
              <input
                type="email"
                name="email"
                defaultValue={selectedQuantTeam?.email}
                className="w-full p-2 border rounded text-gray-900"
                onChange={onChangeHandler}
                placeholder="Email address"
                required
              />
            </div>
          </div>
        </div>

        <div className="flex gap-2 pt-4">
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-400"
          >
            {isLoading ? "Saving..." : selectedQuantTeam ? "Update" : "Create"}
          </button>
          {selectedQuantTeam && (
            <button
              type="button"
              onClick={resetForm}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
