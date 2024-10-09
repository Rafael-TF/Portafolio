import React from 'react';

const TimelineIcons = {
    LegalBeginning: () => (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="30" fill="#89a19c" fillOpacity="0.2"/>
        <path d="M30 10L50 20V40L30 50L10 40V20L30 10Z" stroke="#89a19c" strokeWidth="2"/>
        <path d="M30 20V40M20 25L40 35M40 25L20 35" stroke="#89a19c" strokeWidth="2"/>
        <path d="M30 15L35 18V22L30 25L25 22V18L30 15Z" fill="#89a19c"/>
      </svg>
    ),
    LongSearch: () => (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="30" fill="#89a19c" fillOpacity="0.2"/>
        <path d="M25 40H15V25L25 15H40L50 25V40H40" stroke="#89a19c" strokeWidth="2"/>
        <circle cx="25" cy="35" r="10" stroke="#89a19c" strokeWidth="2"/>
        <line x1="32.4142" y1="42" x2="38.4142" y2="48" stroke="#89a19c" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 20L35 35M35 20L20 35" stroke="#89a19c" strokeWidth="2"/>
      </svg>
    ),
    CreativitySpark: () => (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="30" fill="#89a19c" fillOpacity="0.2"/>
        <path d="M30 10L35 25H45L35 35L40 50L30 40L20 50L25 35L15 25H25L30 10Z" stroke="#89a19c" strokeWidth="2" fill="#89a19c" fillOpacity="0.3"/>
        <circle cx="30" cy="30" r="5" fill="#89a19c"/>
        <path d="M15 15L20 20M45 45L40 40M45 15L40 20M15 45L20 40" stroke="#89a19c" strokeWidth="2"/>
      </svg>
    ),
    DecisionPoint: () => (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="30" fill="#89a19c" fillOpacity="0.2"/>
        <path d="M30 10V30M10 30H30M30 30L45 15M30 30L45 45" stroke="#89a19c" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="30" cy="30" r="5" fill="#89a19c"/>
        <path d="M20 20L25 25M40 20L35 25M20 40L25 35M40 40L35 35" stroke="#89a19c" strokeWidth="2"/>
      </svg>
    ),
    ReadyForAdventure: () => (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="30" fill="#89a19c" fillOpacity="0.2"/>
        <path d="M10 50L30 10L50 50H10Z" stroke="#89a19c" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M30 35L20 50H40L30 35Z" fill="#89a19c"/>
        <path d="M25 25L30 15L35 25H25Z" stroke="#89a19c" strokeWidth="2"/>
        <circle cx="30" cy="20" r="2" fill="#89a19c"/>
      </svg>
    ),
    FutureAdventures: () => (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="30" fill="#89a19c" fillOpacity="0.2"/>
        <circle cx="30" cy="30" r="20" stroke="#89a19c" strokeWidth="2"/>
        <path d="M30 15V30L40 40" stroke="#89a19c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M45 30C45 23.9249 41.0751 20 35 20" stroke="#89a19c" strokeWidth="2" strokeLinecap="round"/>
        <path d="M15 30C15 36.0751 18.9249 40 25 40" stroke="#89a19c" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="30" cy="30" r="3" fill="#89a19c"/>
      </svg>
    )
  };
  
  export default TimelineIcons;