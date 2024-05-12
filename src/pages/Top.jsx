/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useContext } from "react";
// import { useUserContext } from './UserContext';
import useSessionUserId from "./useSessionUserId";
import { useNavigate } from "react-router-dom";
import {
  BASE_URL,
  TOP_ADD_ENDPOINT,
  TOP_GET_BY_COLOR_ENDPOINT,
  TOP_GET_BY_GENRE_ENDPOINT,
} from "./apiEndpoints";
import Product from "../components/Product";

function Top() {
  const { userId, loading } = useSessionUserId();
  const navigate = useNavigate();
  const [fetchedData, setFetchedData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!loading && !userId) {
      navigate("/login");
    }
  }, [userId, navigate, loading]);

  const [formData, setFormData] = useState({
    name: "",
    color: "",
    color_type: "",
    gender: "",
    genre: "",
    userId: userId,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fileInput = document.getElementById("file_input");
    const file = fileInput?.files?.[0]; // Use optional chaining to prevent errors
  
    if (!file) {
      console.error("No file selected");
      return;
    }
  
    const imageUrl = await uploadImageToCloudinary(file);
    const updatedFormData = { ...formData, imageUrl, userId };
    setFormData(updatedFormData);
  
    const response = await fetch(`${BASE_URL}${TOP_ADD_ENDPOINT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFormData),
    });
  
    if (!response.ok) {
      throw new Error("Error adding Top");
    }
  
    const responseData = await response.json();
    console.log("Success:", responseData);
    setFormData({ name: "", color: "", color_type: "" });
  };

  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "usjlsnfx");

    try {
      const cloudinaryResponse = await fetch(
        "https://api.cloudinary.com/v1_1/dii4sv9ql/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!cloudinaryResponse.ok) {
        throw new Error("Error uploading image to Cloudinary");
      }

      const cloudinaryData = await cloudinaryResponse.json();
      const imageUrl = cloudinaryData.url;
      console.log("Image URL:", imageUrl);
      return imageUrl;
    } catch (error) {
      throw new Error("Error uploading image to Cloudinary: " + error.message);
    }
  };

  const handleColorChange = (e) => {
    fetch(
      `${BASE_URL}${TOP_GET_BY_COLOR_ENDPOINT}?color=${e.target.value}&userId=${userId}`
    )
      .then((response) => response.json())
      .then((data) => setFetchedData(data))
      .catch((error) => console.error("Error:", error));
  };

  const handleGenreChange = (e) => {
    fetch(
      `${BASE_URL}${TOP_GET_BY_GENRE_ENDPOINT}?Genre=${e.target.value}&userId=${userId}`
    )
      .then((response) => response.json())
      .then((data) => setFetchedData(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
      <div class="bg-slate-900 bg-opacity-40 w-5/6 rounded-xl mt-24 mb-10">
        <nav className="relative z-10 bg-slate-900 backdrop-filter backdrop-blur-lg h-24 bg-opacity-20 border-b border-gray-200 rounded-t-lg">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between h-16">
              <span className="text-4xl mt-5 text-gray-900 font-bold">TOP</span>
              <div className="flex space-x-0 text-gray-900">
                <div className="flex flex-col">
                <div>
                  
                  
                    <select
                      id="colorSelect"
                      name="color"
                      onChange={handleColorChange}
                      className="border border-gray-900 text-sm focus:outline-none rounded-lg block w-full p-1.5 dark:bg-gray-900 dark:text-white mt-2"
                    >
                      <option value="">Select color</option>
                      <option value="RED">Red</option>
                      <option value="YELLOW">Yellow</option>
                      <option value="BLUE">Blue</option>
                      <option value="GREEN">Green</option>
                      <option value="BLACK">Black</option>
                      <option value="WHITE">White</option>
                      <option value="GREY">Grey</option>
                      <option value="VIOLET">Violet</option>
                      <option value="ORANGE">Orange</option>
                      <option value="INDIGO">Indigo</option>
                    </select>
                  </div>
                  <div>
                    <select
                      id="genreSelect"
                      name="genre"
                      onChange={handleGenreChange}
                      className="border border-gray-900 text-sm focus:outline-none rounded-lg block w-full p-1.5 dark:bg-gray-900 dark:text-white mt-2"
                    >
                      <option value="">Select genre</option>
                      <option value="CASUAL">Casual</option>
                      <option value="FORMAL">Formal</option>
                      <option value="SPORTS">Sports</option>
                      <option value="OCCASIONAL">Occasional</option>
                      <option value="ETHNIC">Ethnic</option>
                    </select>
                  </div>
                </div>
                <div className="relative z-50">
                  <button
                    onClick={toggleModal}
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-10 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ml-20"
                    type="button"
                  >
                    Add Top
                  </button>

                  {isOpen && (
                    <div className="absolute z-50 mt-2 w-96 rounded-md shadow-lg  ring-black ring-opacity-5">
                      <div className="relative p-2">
                        <div className="relative bg-white rounded-lg shadow p-2 dark:bg-gray-700">
                          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              Add New Top Item
                            </h3>
                            <button
                              type="button"
                              onClick={toggleModal}
                              className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              X
                              <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                              </svg>
                              <span className="sr-only">Close modal</span>
                            </button>
                          </div>
                          {/* Modal content */}
                          <div className="relative left-0 mt-2 w-full rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                            <form onSubmit={handleSubmit}>
                              <div>
                                <input
                                  type="text"
                                  id="first_name"
                                  class="border border-gray-900 text-sm focus:outline-none rounded-lg block w-full p-2.5 dark:bg-gray-900 dark:text-white mt-2"
                                  placeholder="Item Name"
                                  required
                                />
                              </div>
                              {/* <input type="file" id="fileInput" /> */}

                              <label
                                class="block mb-1 text-sm font-medium text-gray-900 dark:text-white mt-2"
                                for="file_input"
                              >
                                Upload Item
                              </label>
                              <input
                                class="border border-gray-900 text-sm focus:outline-none rounded-lg block w-full p-2.5 dark:bg-gray-900 dark:text-white"
                                aria-describedby="file_input_help"
                                id="file_input"
                                type="file"
                              />
                              <p
                                class="mt-0 text-sm text-gray-500 dark:text-gray-700 mb-3"
                                id="file_input_help"
                              >
                                SVG, PNG, JPG or GIF (MAX. 800x400px).
                              </p>

                              <select
                                className="border border-gray-900 text-sm focus:outline-none rounded-lg block w-full p-2.5 dark:bg-gray-900 dark:text-white mt-2"
                                name="color"
                                value={formData.color}
                                onChange={handleChange}
                                required
                              >
                                <option value="">Select color</option>
                                <option value="RED">Red</option>
                                <option value="YELLOW">Yellow</option>
                                <option value="BLUE">Blue</option>
                                <option value="GREEN">Green</option>
                                <option value="BLACK">Black</option>
                                <option value="WHITE">White</option>
                                <option value="GREY">Grey</option>
                                <option value="VIOLET">Violet</option>
                                <option value="ORANGE">Orange</option>
                                <option value="INDIGO">Indigo</option>
                              </select>
                              <select
                                className="border border-gray-900 text-sm focus:outline-none rounded-lg block w-full p-2.5 dark:bg-gray-900 dark:text-white mt-2"
                                name="color_type"
                                value={formData.color_type}
                                onChange={handleChange}
                                required
                              >
                                <option value="">Select color type</option>
                                <option value="DARK">Dark</option>
                                <option value="LIGHT">Light</option>
                                <option value="MID">Mid</option>
                              </select>
                              <select
                                className="border border-gray-900 text-sm focus:outline-none rounded-lg block w-full p-2.5 dark:bg-gray-900 dark:text-white mt-2"
                                name="genre"
                                value={formData.genre}
                                onChange={handleChange}
                                required
                              >
                                <option value="">Select genre</option>
                                <option value="CASUAL">Casual</option>
                                <option value="FORMAL">Formal</option>
                                <option value="SPORTS">Sports</option>
                                <option value="OCCASIONAL">Occasional</option>
                                <option value="ETHNIC">Ethnic</option>
                              </select>
                              <select
                                className="border border-gray-900 text-sm focus:outline-none rounded-lg block w-full p-2.5 dark:bg-gray-900 dark:text-white mt-2"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                required
                              >
                                <option value="">Select gender</option>
                                <option value="MALE">Male</option>
                                <option value="FEMALE">Female</option>
                                <option value="OTHER">Other</option>
                              </select>
                              <button
                                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                                onClick={handleSubmit}
                                type="submit"
                              >
                                Add Top
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className=" mx-5 mt-20 ">
          <Product data={fetchedData} />
        </div>
      </div>
    </>
  );
}

export default Top;
