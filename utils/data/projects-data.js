import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Blood Bank App Mern Project',
        description: "The MERN Stack Blood Bank Project is an innovative web application designed to streamline blood donation and management processes.By harnessing the power of MongoDB,ExpressJs, ReactJs, and NodeJs, the platform enables easy donor registration, blood requests, and inventory management.With secure user authentication and robust search functionality, the project aims to deliver a seamless experience for both blood banks and donors, ensuring efficient and effective blood inventory management.",
        tools: ['ReactJs','ExpressJs', 'MongoDB', 'NodeJs', 'CSS','Redux','JWT'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Heart Disease Prediction using Machine Learning',
        description: 'This project endeavors to predict future occurrences of Heart Disease by analyzing patient data that classifies whether they have the condition or not. Employing cutting-edge technologies such as Machine Learning and Regression in Python, the system achieved an impressive accuracy rate of 80.3%. Ultimately, this project aims to contribute to better healthcare outcomes and enhance the overall quality of patient care.',
        tools: ['Python', 'Machine Learning', "Numpy", "Pandas", "Logistic Regression Model", "Google Colaboratory"],
        role: 'Data Science Engineer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Question Paper Generator',
        description: ' Implemented a streamlined Question Paper Generator application with a JSON file, storing questions characterized by content, subject, topic, difficulty, and marks. Employed intelligent algorithms to effortlessly generate tailored question papers based on user-defined total marks and preferred difficulty levels, enhancing efficiency in academic assessment processes.',
        tools: ['NodeJs', 'Express', 'Javascript', 'vscode', 'JSON'],
        code: '',
        role: 'Backend Developer',
        demo: '',
        image: realEstate,
    },
];