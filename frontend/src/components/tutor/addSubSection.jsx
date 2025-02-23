// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { addSubSection } from "../../services/secureApiService";
// import { useRecoilState } from "recoil";
// import { tokenAtom } from "../../store/atoms/token";
// import toast from "react-hot-toast";
// import Loader from "../Loader";

const AddSubSection = () => {

    // const { id } = useParams();
    // const [subsection, setSubsection] = useState({
    //     title: "",
    //     type: "",
    //     file: "null",
    // });

    // const [token, setToken] = useRecoilState(tokenAtom);
    // const [leading, setLoading] = useState(false);

    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     if (token) {
    //         setToken(token);
    //     }
    // }, []);

    // const handleChange = (event) => {
    //     setSubsection({
    //         ...subsection,
    //         [event.target.name]: event.target.value,
    //     });
    // };

    // const handleFileChange = (event) => {
    //     const file = event.target.files[0];
    //     setSubsection({
    //         ...subsection,
    //         file: file,
    //     });
    // };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         setLoading(true);
    //         const formData = new FormData();
    //         formData.append("title", subsection.title);
    //         formData.append("type", subsection.type);
    //         formData.append("file", subsection.file);
    //         console.log('subsection', subsection);

    //         await addSubSection(id, formData, token);
    //         toast.success("Subsection added successfully");
    //     } catch (error) {
    //         toast.error("Error adding subsection");
    //         console.error(error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    return (
        <form
            // onSubmit={handleSubmit}
            className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="subsectionTitle"
                >
                    Subsection Title:
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="subsectionTitle"
                    type="text"
                    name="title"
                    // value={subsection.title}
                    // onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="type"
                >
                    Type:
                </label>
                <select
                    // value={subsection.type}
                    // onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="type"
                    name="type" // Add name attribute
                >
                    <option value="images">Images</option>
                    <option value="videos">Videos</option>
                    <option value="pdf">PDF</option>
                    <option value="others">Others</option>
                </select>
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="file"
                >
                    File:
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="file"
                    type="file"
                    // onChange={handleFileChange}
                />
            </div>
            <div className="flex items-center justify-end">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Submit
                </button>
            </div>
            <div>
                {/* <Loader color="#00BFFF" loading={leading} size={10} /> */}
            </div>
        </form>
    );
};

export default AddSubSection;
