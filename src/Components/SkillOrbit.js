import React from 'react';
import { motion } from 'framer-motion';

const SkillOrbit = ({ category, skills }) => {
  const CategoryIcon = category.icon;
  return (
    <div className="skill-orbit">
      <div className="category-icon">
        <CategoryIcon size={60} />
        <span>{category.category}</span>
      </div>
      <div className="skills-wheel">
        {skills.map((skill, index) => {
          const SkillIcon = skill.icon;
          const angle = (index / skills.length) * 360;
          return (
            <motion.div
              key={skill.name}
              className="skill-icon"
              style={{
                transform: `rotate(${angle}deg) translateX(120px) rotate(-${angle}deg)`
              }}
              whileHover={{ scale: 1.2, zIndex: 10 }}
            >
              <SkillIcon size={40} />
              <span>{skill.name}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const SkillsGalaxy = ({ skillsData }) => {
  return (
    <div className="skills-galaxy">
      {skillsData.map((category, index) => (
        <SkillOrbit key={category.category} category={category} skills={category.skills} />
      ))}
    </div>
  );
};

export default SkillsGalaxy;