import { useGetAllSemesterQuery } from "../../../redux/features/accadmicSemester/Semester";


const AcademicSemesters = () => {
    const {data} = useGetAllSemesterQuery(undefined)
    console.log(data)
    return (
        <div>
            <h1>hello form academic semester </h1>
        </div>
    );
};

export default AcademicSemesters;