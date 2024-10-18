// DoctorContext.js
import React, { createContext, useContext } from 'react';

// Create a context
const DoctorContext = createContext();

// Create a provider component
const DoctorProvider = ({ children }) => {
  const doctorDetails = [
    {
      id: 1,
      name: 'Prerana',
      profilePicUrl: 'https://randomuser.me/api/portraits/women/68.jpg', 
      coverPicUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b', 
      jobRole: 'Infertility',
      rating: '4.2',
      followers: '66k',
      following: '564k',
      posts: '405',
      aboutMe: "As a dedicated infertility specialist with over 7 years of experience, my passion lies in helping couples achieve their dreams of parenthood. I believe in providing personalized care tailored to each individual's needs. My approach combines the latest medical advancements with compassionate support, ensuring my patients feel understood and empowered throughout their journey. I am fluent in Telugu, Hindi, English, and Marathi, which allows me to connect with a diverse range of patients. Together, we can explore all available options and find the best path forward for you.",
      languages: ['Telugu', 'Hindi', 'English', 'Marathi'],
      specializations: ['WomensHealth', 'SkinCare', 'Immunity', 'HairCare'],
      treatments: [
        'SkinTreatment',
        'Pregnancy',
        'PeriodDoubts',
        'Endometrosis',
        'PelvicPain',
        'OvarianCysts',
      ],
      workExperience: '7+',
      workExperienceYears: [
        { id: 1, hospital: 'MidTownMedicalCollege', years: 4 },
        { id: 2, hospital: 'MidTownMedicalCollege', years: 3 },
      ],
      reviews: [
        {
          id: 1,
          reviewerName: 'Kajal Agarwal',
          photoUrl: '',
          date: '20 January',
          designation: 'Consultant for SkinCare',
          reviewContent: 'Might be a bit early to confirm but yes, I can see a noticeable difference in my hair fall. I will write again after using it for longer periods.',
        },
        {
          id: 2,
          reviewerName: 'Kriti Sanon',
          photoUrl: '',
          date: '30 January',
          designation: 'Consultant for SkinCare',
          reviewContent: 'Might be a bit early to confirm but yes, I can see a noticeable difference in my hair fall. I will write again after using it for longer periods.',
        },
      ],
    },
    {
      id: 2,
      name: 'Ravi Kumar',
      profilePicUrl: 'https://randomuser.me/api/portraits/men/85.jpg', 
      coverPicUrl: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb', 
      jobRole: 'Dermatologist',
      rating: '4.5',
      followers: '80k',
      following: '500k',
      posts: '312',
      aboutMe: "I am Dr. Ravi Kumar, a board-certified dermatologist with over 10 years of experience in treating various skin conditions. My focus is on providing comprehensive skin care, including acne treatment, anti-aging solutions, and hair restoration. I strive to create a warm and welcoming environment for my patients, ensuring they feel comfortable discussing their concerns. My approach to treatment is rooted in understanding each patient's unique skin type and needs. I’m committed to using the latest techniques and products to help you achieve healthy, glowing skin.",
      languages: ['Telugu', 'English'],
      specializations: ['SkinCare', 'Acne', 'Anti-aging', 'HairCare'],
      treatments: [
        'AcneTreatment',
        'HairLoss',
        'SkinAllergies',
        'Psoriasis',
        'Eczema',
        'WartsRemoval',
      ],
      workExperience: '10+',
      workExperienceYears: [
        { id: 1, hospital: 'HealthySkinHospital', years: 6 },
        { id: 2, hospital: 'CityCareClinic', years: 4 },
      ],
      reviews: [
        {
          id: 1,
          reviewerName: 'Rohit Sharma',
          photoUrl: '',
          date: '15 February',
          designation: 'Patient',
          reviewContent: 'Dr. Ravi is very professional and knowledgeable. My skin has improved drastically!',
        },
        {
          id: 2,
          reviewerName: 'Patrick Bateman',
          photoUrl: '',
          date: '22 February',
          designation: 'Patient',
          reviewContent: 'I am very happy with the treatment provided by Dr. Ravi. Highly recommend!',
        },
      ],
    },
    {
      id: 3,
      name: 'Anita Desai',
      profilePicUrl: 'https://randomuser.me/api/portraits/women/79.jpg', 
      coverPicUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0', 
      jobRole: 'Nutritionist',
      rating: '4.8',
      followers: '45k',
      following: '250k',
      posts: '150',
      aboutMe: "Hello! I’m Anita Desai, a certified nutritionist with a passion for helping individuals achieve their health goals through balanced nutrition and lifestyle changes. With over 5 years of experience, I specialize in weight management, fitness nutrition, and creating personalized diet plans. My philosophy is simple: every individual is unique, and so should be their dietary approach. I believe in empowering my clients with the knowledge and tools to make informed food choices, leading to sustainable health improvements. Let’s work together to cultivate a healthier and happier you!",
      languages: ['Hindi', 'English', 'Gujarati'],
      specializations: ['Nutrition', 'WeightLoss', 'Fitness', 'HealthCoach'],
      treatments: [
        'DietPlanning',
        'WeightManagement',
        'DiabetesControl',
        'HealthyEating',
        'MealPrep',
        'FitnessGoals',
      ],
      workExperience: '5+',
      workExperienceYears: [
        { id: 1, hospital: 'WellnessCenter', years: 3 },
        { id: 2, hospital: 'NutritionHub', years: 2 },
      ],
      reviews: [
        {
          id: 1,
          reviewerName: 'Anjali Putra',
          photoUrl: '',
          date: '10 March',
          designation: 'Client',
          reviewContent: 'Anita’s diet plan has helped me lose weight effectively! Very supportive!',
        },
        {
          id: 2,
          reviewerName: 'Shaik Basha',
          photoUrl: '',
          date: '20 March',
          designation: 'Client',
          reviewContent: 'I feel healthier and more energetic thanks to Anita’s guidance.',
        },
      ],
    },
    {
      id: 4,
      name: 'Sameer Patel',
      profilePicUrl: 'https://randomuser.me/api/portraits/men/65.jpg', // Random profile pic
      coverPicUrl: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913', // Random cover pic
      jobRole: 'General Practitioner',
      rating: '4.0',
      followers: '30k',
      following: '320k',
      posts: '250',
      aboutMe: "I’m Dr. Sameer Patel, a general practitioner with more than 8 years of experience in providing comprehensive healthcare to patients of all ages. My goal is to foster a trusting relationship with my patients, ensuring open communication and thorough understanding of their health concerns. I specialize in preventive care, routine checkups, and chronic disease management. I believe that patient education is key to effective healthcare, and I strive to empower my patients to take charge of their health. Together, we can build a healthier future for you and your family.",
      languages: ['Hindi', 'English'],
      specializations: ['GeneralHealth', 'Pediatrics', 'PreventiveCare', 'FamilyMedicine'],
      treatments: [
        'RoutineCheckup',
        'Vaccinations',
        'ChronicDiseaseManagement',
        'HealthScreening',
        'WellnessExam',
        'EmergencyCare',
      ],
      workExperience: '8+',
      workExperienceYears: [
        { id: 1, hospital: 'CityHealthCenter', years: 5 },
        { id: 2, hospital: 'CommunityHospital', years: 3 },
      ],
      reviews: [
        {
          id: 1,
          reviewerName: 'Vikram Rathode',
          photoUrl: '',
          date: '5 April',
          designation: 'Patient',
          reviewContent: 'Dr. Sameer is very thorough in his examinations. He takes the time to listen.',
        },
        {
          id: 2,
          reviewerName: 'Uday Kiran',
          photoUrl: '',
          date: '12 April',
          designation: 'Patient',
          reviewContent: 'Very satisfied with the care provided. Would recommend him to anyone.',
        },
      ],
    },
  ];
  

  return (
    <DoctorContext.Provider value={doctorDetails}>
      {children}
    </DoctorContext.Provider>
  );
};

// Create a custom hook to use the DoctorContext
const useDoctorDetails = () => {
  return useContext(DoctorContext);
};

export { DoctorProvider, useDoctorDetails };
