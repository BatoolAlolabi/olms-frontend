import { NavLink } from "react-router-dom";

const CourseCard = ({ data }: { data: any }) => {
  return (
    // <NavLink to="/signup">
    <div className="max-w-sm h-[600px] rounded flex flex-col justify-between overflow-hidden shadow-lg">
              {data?.photo_path && (
                <img
                  className="w-full h-[350px]"
                  src={`${import.meta.env.VITE_BASE_URL}${data?.photo_path}`}
                  alt="Sunset in the mountains"
                />
              )}
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{data?.name}</div>
                <p className="text-gray-700 text-base">{data?.description}</p>
              </div>
              <div className="px-6 flex h-max items-end relative bottom-0  justify-between w-full  pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {data?.started_at}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {data?.teacher?.name}
                </span>
              </div>
            </div>
            // </NavLink>
  );
};

export default CourseCard;
