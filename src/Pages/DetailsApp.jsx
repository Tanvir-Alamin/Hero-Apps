import { useLocation } from "react-router";
import downloadIcon from "../assets/icon-downloads.png";
import reviewIcon from "../assets/icon-review.png";
import ratingIcon from "../assets/icon-ratings.png";
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { useState } from "react";
import { toast } from "react-toastify";

const DetailsApp = () => {
  const [install, setInstall] = useState([]);
  const location = useLocation();
  const {
    title,
    image,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    description,
    id,
    ratings,
  } = location.state;

  const isExist = JSON.parse(localStorage.getItem("installed")) || [];
  const isDuplicate = isExist.some((p) => p.id == location.state.id);

  const handleAdd = () => {
    let updateList = [];
    if (isExist) {
      updateList = [...isExist, location.state];
    } else {
      updateList.push(location.state);
    }
    localStorage.setItem("installed", JSON.stringify(updateList));
  };

  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    toast.info(`${title} is Installing ✨`, {
      theme: "colored",
      autoClose: 2500,
      onClose: () => {
        toast.success(`${title} is Installed ✔️`, {
          theme: "colored",
          autoClose: 1000,
        });
      },
    });

    setToggle(true);
  };
  // const [gg, setGg] = useState(false);

  // const bhai = () => {
  //   alert("kire bhhai");
  //   setGg(true);
  // };

  return (
    <div className=" w-[calc(100%-80px)] mx-auto">
      <div className="flex gap-10 mt-20  ">
        <img
          className="w-70 rounded-2xl shadow-2xl"
          src={image}
          alt="app Image"
        />
        <div>
          <h1 className="font-bold text-3xl">{title}</h1>
          <h1 className="pt-2 pb-5">
            Developed by
            <span className="text-blue-500 font-semibold "> {companyName}</span>
          </h1>
          <hr className="my-2" />
          <div className="flex gap-10">
            <div>
              <img className="w-10" src={downloadIcon} alt="" />
              <h1>Downloads</h1>
              <h1 className="text-3xl font-bold">{downloads}</h1>
            </div>
            <div>
              <img className="w-10" src={ratingIcon} alt="" />
              <h1>Average Ratings</h1>
              <h1 className="text-3xl font-bold">{ratingAvg}</h1>
            </div>
            <div>
              <img className="w-10" src={reviewIcon} alt="" />
              <h1>Total Reviews</h1>
              <h1 className="text-3xl font-bold">{reviews}</h1>
            </div>
          </div>
          <button
            disabled={isDuplicate}
            onClick={() => {
              handleToggle();
              setInstall(...install, location.state);
              handleAdd();
            }}
            className={`btn mt-8 skeleton bg-green-400 p-3 text-2xl font-semibold text-white ${
              toggle ? "opacity-35" : ""
            }`}
          >
            {!isDuplicate ? `Install Now (${size} MB)` : "Installed"}
          </button>
        </div>
      </div>
      <div className="mt-20 flex justify-center">
        <BarChart
          width={1000}
          height={250}
          data={[...ratings].reverse()}
          layout="vertical"
          margin={{ top: 0, right: 50, left: 20, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Bar dataKey="count" fill="#FFA500" />
        </BarChart>
      </div>

      <div className=" mt-20 mb-20 space-y-5">
        <h1 className="text-2xl font-bold">Description</h1>
        <h1 className="text-gray-500">{description}</h1>
      </div>
    </div>
  );
};
export default DetailsApp;
