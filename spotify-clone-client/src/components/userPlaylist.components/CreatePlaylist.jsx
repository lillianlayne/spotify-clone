import { useState, useEffect } from "react";
import { createUserPlaylist } from "../../services/UserServices";
import { useUser } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { useClick } from "../../context/clickContext";
import Icons from "../Icons";

const CreatePlaylist = () => {
  const { setClick } = useClick();
  let navigate = useNavigate();
  const { userData } = useUser();
  const [formValues, setFormValues] = useState({ name: "", description: "" });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    let data = {
      name: formValues.name,
      description: formValues.description,
      owner: userData._id,
    };

    await createUserPlaylist(userData._id, data);
    setClick((prev) => prev + 1);
    navigate("/library");
  };
  return (
    <div className="absolute card-bg w-3/4 transform-center h-1/2 rounded-lg flex items-center flex-col justify-center border-stone-600 border ">
      <div className="size-32 mx-auto bg-stone-500 flex justify-center items-center mb-8">
        <Icons type="music" fill="currentColor" size="size-16" />
      </div>
      <form className="flex p-4 flex-col gap-4 w-full" onSubmit={handleSubmit}>
        <input
          className="border-b border-stone-500 placeholder:text-stone-500 text-stone-100 py-2"
          type="text"
          name="name"
          placeholder="Playlist Name"
          value={formValues.name}
          onChange={handleChange}
        />
        <input
          className="border-b border-stone-500 placeholder:text-stone-500 text-stone-100 py-2"
          type="text"
          name="description"
          placeholder="Playlist Description"
          value={formValues.description}
          onChange={handleChange}
        />
        <button
          className="btn-primary mt-8 bg-orange-600 rounded-full"
          type="submit"
          onSubmit={handleSubmit}
        >
          {" "}
          create{" "}
        </button>
      </form>
    </div>
  );
};

export default CreatePlaylist;
