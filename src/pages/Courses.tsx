import CourseCard from "components/CourseCard";
import { LoadingSpinner } from "components/Svgs";
import { useLayout } from "layout";
import AuthLayout from "layout/AuthLayout";
import { useEffect, useState } from "react";
import API from "utils/API";

const Courses = () => {
  const { user } = useLayout();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const _fetchData = () => {
    setLoading(true);
    API.get(
      "/api/courses",
      {},
      (data) => {
        setLoading(false);
        setCourses(data?.data);
      },
      (e) => {
        setLoading(false);
      },
      {
        Authorization: `Bearer ${user?.access_token}`,
      }
    );
    setLoading(false);
  };
  useEffect(() => {
    _fetchData();
  }, []);
  return (
    <AuthLayout title={"Courses"}>
      {loading && (
        <span className=" z-10 w-full flex items-center justify-center p-10">
          <LoadingSpinner />
        </span>
      )}
      <div className="grid grid-cols-3 gap-10">
        {courses?.map((course: any, i: number) => {
          return (
            <CourseCard data={course} />
          );
        })}
      </div>
    </AuthLayout>
  );
};

export default Courses;
