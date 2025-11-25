import React from 'react';
import { FaChalkboardTeacher, FaUsers, FaMicrophone, FaHandsHelping } from 'react-icons/fa';

const AchievementCard = ({ year, category, description, Icon }) => {
    return (
        <div className="border-2 border-[#1f1f1f] p-6 flex justify-between items-center h-48">
            <div className="flex gap-8 items-center">
                <div>
                    <p className="text-gray-300 text-2xl mb-2">{year}</p>
                    <h3 className="text-gray-300 text-2xl font-semibold mb-2">{category}</h3>
                    <p className="text-white text-lg leading-tight">{description}</p>
                </div>
            </div>
            <div className="ml-8 flex-shrink-0 text-gray-300">
                {Icon && <Icon className="h-24 w-24" />}
            </div>
        </div>
    );
};

const Achievemnt = () => {
    const achievements = [
        {
            year: '2019 - present',
            category: 'Cyber Security Bootcamps',
            description: 'Mentored more than 1000 students globally in ethical hacking and cyber defense.',
            Icon: FaChalkboardTeacher,
        },
        {
            year: 'Ongoing',
            category: 'Live Training Sessions',
            description: 'Conducts hands-on workshops connecting classroom learning with real-world scenarios.',
            Icon: FaUsers,
        },
        {
            year: '2019',
            category: 'Guest Speaker — CRIFO 2019',
            description: 'Delivered a session on AI-driven security automation and digital forensics.',
            Icon: FaMicrophone,
        },
        {
            year: '2018 - present',
            category: 'Community Mentor',
            description: 'Guides aspiring developers and ethical hackers in career development and technical innovation.',
            Icon: FaHandsHelping,
        },
    ];

    return (
        <div className="min-h-screen bg-[#121212] text-white py-20 px-8">
            <div className="max-w-7xl mx-auto">
                <p className="text-gray-300 text-xl font-bold tracking-widest uppercase mb-4">Achieved Award</p>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-16">
                    My achievement<br />at a glance
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {achievements.map((achievement, index) => (
                        <AchievementCard key={index} {...achievement} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Achievemnt;
