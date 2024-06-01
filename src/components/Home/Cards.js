// Cards.js

import React from "react";
import HomeComponent from "./HomeComponent";
//import studentInfoImg from "./IMG/college_management.jpeg";
import './cards.css';
const Cards = () => {
  // Define an array of card data
  const cardData = [
    {
      title: "Student Information System",
      description:
        "The Student Information System (SIS) is a comprehensive software solution designed to manage student data efficiently.",
      imageUrl:
        "https://www.mastersofterp.com/images/home/Online-Exam-Proctoring-new.webp",
      link: "/student-information-system",
    },
    {
      title: "Online Admission System",
      description:
        " An Online Admission System revolutionizes the traditional admission process by offering a seamless and efficient way..",
      imageUrl:
        "https://www.mastersofterp.com/images/home/Outcome-Based-Education-new.webp",
      link: "/online-admission-system",
    },
    {
      title: "Fees Management System",
      description:
        "A Fees Management System is a comprehensive software solution designed to streamline the management.",
      imageUrl:
        "https://www.mastersofterp.com/images/home/Online-Fee-Collection-new.webp",
      link: "/fees-management-system",
    },
    {
      title: "Online Examination System",
      description:
        "An Online Examination System is a robust platform designed to conduct assessments, quizzes, and examinations remotely.",
      imageUrl:
        "https://www.mastersofterp.com/images/home/Online-Admission-new.webp",
      link: "/online-examination-system",
    },
    {
      title: "Attendance Management System",
      description:
        " An Attendance Management System is a digital solution designed to automate and streamline the process of tracking.",
      imageUrl:
        "https://www.mastersofterp.com/images/home/Online-Exam-Proctoring-new.webp",
      link: "/attendance-management-system",
    },
    {
      title: "Higher Education System",
      description:
        " Higher Education System aims to streamline administrative processes, enhance academic delivery, improve student engagement, and facilitate data-driven..",
      imageUrl:
        "https://www.mastersofterp.com/images/home/Outcome-Based-Education-new.webp",
      link: "/higher-education-system",
    },
    {
      title: "University Management Software",
      description:
        " University Management Software (UMS) is a comprehensive solution designed to address the complex administrative and academic.",
      imageUrl:
        "https://www.mastersofterp.com/images/home/Online-Admission-new.webp",
      link: "/university-management-software",
    },
    {
      title: "Institute Management Software",
      description:
        "Institute Management Software (IMS) is a comprehensive solution designed to streamline the administrative and operational.",
      imageUrl:
        "https://www.mastersofterp.com/images/home/Higher-Education-Software-ERP-new.webp",
      link: "/institute-management-software",
    },
    {
      title: "College Management Software",
      description:
        "College Management Software  simplifies the admissions process by automating tasks such as inquiry management.",
      imageUrl:
        "https://www.mastersofterp.com/images/home/Online-Exam-Proctoring-new.webp",
      link: "/college-management-software",
    },
    {
      title: "School Management Software",
      description:
        "The SMS module centralizes student data, including personal details, academic records, attendance, and behavior.",
      imageUrl:
        "https://www.mastersofterp.com/images/home/Student-Information-System-new.webp",
      link: "/school-management-software",
    },
    {
      title: "Faculty Management System",
      description:
        " Faculty Management System centralizes faculty information, including personal details, qualifications, employment history.",
      imageUrl:
        "https://www.mastersofterp.com/images/home/Lead-Management-System-new.webp",
      link: "/faculty-management-software",
    },
    {
      title: "Learning Management System",
      description:
        "Learning Management System allows instructors to create and organize course content, including lectures, presentations, videos.",
      imageUrl:
        "https://www.mastersofterp.com/images/home/Learning-Management-System-new.webp",
      link: "/learning-management-software",
    },



  ];

  return (
    <>
      {cardData.map((card) => (
        <HomeComponent key={card.title} {...card} />
      ))}
    </>
  );
};

export default Cards;
