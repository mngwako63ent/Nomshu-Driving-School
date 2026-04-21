import React, { useState } from 'react';

const accordionItems = [
  {
    id: 1,
    title: 'Theory Classes',
    imageUrl: 'https://res.cloudinary.com/dm7sxhaeb/image/upload/v1776771674/Instructor_teaching_learners_202604211340_j170cm.jpg',
  },
  {
    id: 2,
    title: 'Driving Lessons',
    imageUrl: 'https://res.cloudinary.com/dm7sxhaeb/image/upload/v1776771874/Instructor_teaching_learner_202604211343_sohanl.jpg',
  },
  {
    id: 3,
    title: 'Test Prep',
    imageUrl: 'https://res.cloudinary.com/dm7sxhaeb/image/upload/v1776772221/Instructor_invigilating_learners__202604211348_dusdg6.jpg',
  },
  {
    id: 4,
    title: 'Code 10 & 14',
    imageUrl: 'https://res.cloudinary.com/dm7sxhaeb/image/upload/v1776772478/Vehicles_parking_learners_202604211354_jbxnh1.jpg',
  },
  {
    id: 5,
    title: 'Pass First Time',
    imageUrl: 'https://res.cloudinary.com/dm7sxhaeb/image/upload/v1776772773/Learner_passes_drivers_202604211359_nu4pdl.jpg',
  },
];

interface AccordionItemProps {
  item: {
    id: number;
    title: string;
    imageUrl: string;
  };
  isActive: boolean;
  onMouseEnter: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isActive, onMouseEnter }) => {
  return (
    <div
      className={`
        relative h-full rounded-2xl sm:rounded-[2rem] overflow-hidden cursor-pointer
        transition-all duration-700 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] shadow-lg
        ${isActive ? 'flex-[4] sm:flex-[5] lg:flex-[8] xl:flex-[12]' : 'flex-[0.5] sm:flex-1 lg:flex-[0.8] xl:flex-[1]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
        onError={(e: any) => { 
          e.target.onerror = null; 
          e.target.src = 'https://placehold.co/400x500/2d3748/ffffff?text=Image+Error'; 
        }}
      />
      {/* Dark overlay for better text readability */}
      <div className={`absolute inset-0 transition-colors duration-500 ${isActive ? 'bg-black/20' : 'bg-black/40 hover:bg-black/30'}`}></div>

      {/* Caption Text */}
      <span
        className={`
          absolute text-white font-bold whitespace-nowrap
          transition-all duration-500 ease-in-out tracking-tight
          ${
            isActive
              ? 'bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 rotate-0 text-lg sm:text-xl drop-shadow-lg' 
              : 'w-auto text-left bottom-16 sm:bottom-24 left-1/2 -translate-x-1/2 -rotate-90 text-[10px] sm:text-sm opacity-80'
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};

export function InteractiveImageAccordion() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="flex flex-row gap-1.5 sm:gap-2 md:gap-3 w-full h-[300px] sm:h-[400px] md:h-[500px]">
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={item.id}
          item={item}
          isActive={index === activeIndex}
          onMouseEnter={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
}
