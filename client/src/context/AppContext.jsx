import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";

export const AppContext = createContext();


export const AppContextProvider = (props) =>{

    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()
    const [allcourses,setAllCourses] = useState([])
    const [isEducator,setIsEducator] = useState(true)
    const [enrolledCourses, setEnrolledCourses] = useState([])


    //Fetch all courses
    const fetchAllCourses = async()=>{
        setAllCourses(dummyCourses)
    }

    //function to calculate average rating of a course
    const calculateRating = (course)=>{
        if(course.courseRatings.length === 0){
            return 0;
        }
        let totalRating = 0;
        course.courseRatings.forEach(rating =>{
            totalRating += rating.rating;
        })
        return totalRating / course.courseRatings.length;
    }

    //function to calculate Course chapter Time
    const calculateChapterTime = (chapter)=>{
        let time = 0;
        chapter.chapterContent.map((lecture)=> time += lecture.lectureDuration) //here the duration we will get in min. that we have to convert into hour and min  and for that we will use humanize-duration package
        return humanizeDuration(time * 60 * 1000, {units: ['h', 'm']})

    }

    //function to calculate total duration of course
    const calculateTotalDuration = (course) => {
         let time = 0;
         course.courseContent.map((chapter) => 
             chapter.chapterContent.map((lecture) => time += lecture.lectureDuration)
         )
         return humanizeDuration(time * 60 * 1000, {units: ['h', 'm']})

    }

    //function to calculate total no. of lecture in the course
    const calculateTotalLectures = (course)=>{
        let totalLectures = 0;
        course.courseContent.forEach(chapter => {
            if(Array.isArray(chapter.chapterContent)){
                totalLectures += chapter.chapterContent.length;
            }
        });
        return totalLectures;

    }

    //fetch users enrolled courses
    const fetchUserEnrolledCourses = async () => {
        setEnrolledCourses(dummyCourses)
    }


    useEffect(()=>{
        fetchAllCourses()
        fetchUserEnrolledCourses()
    },[])
    
    const value ={
        currency,allcourses,navigate,
        calculateRating,isEducator,setIsEducator,
        calculateChapterTime,calculateTotalLectures,
        calculateTotalDuration,
        enrolledCourses,fetchUserEnrolledCourses
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}