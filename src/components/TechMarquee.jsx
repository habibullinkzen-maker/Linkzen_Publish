import React from 'react';

// Tech SVG Icons
const HTML5Icon = () => (
  <svg viewBox="0 0 24 24" className="tech-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2L1.5 0z" fill="#E34F26" />
    <path d="M12 22l6.8-2.2 1.6-17.8H12V22z" fill="#EF652A" />
    <path d="M12 11.5H8.4l-.2-2.7H12V6.1H5.4l.7 8.1H12v-2.7zM12 17.7l-3.3-.9-.2-2.3H5.8l.4 5.3 5.8 1.6v-3.7z" fill="#EFEFEF" />
    <path d="M12 11.5h3.6l-.3 3.9-3.3.9v-2.1l1.3-.4.2-1.8H12v-.5zM12 6.1h6.3l-.2 2.7H12V6.1z" fill="#FFF" />
  </svg>
);

const CSS3Icon = () => (
  <svg viewBox="0 0 24 24" className="tech-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2L1.5 0z" fill="#1572B6" />
    <path d="M12 22l6.8-2.2 1.6-17.8H12V22z" fill="#33A9DC" />
    <path d="M12 11.3H8.3l-.2-2.7H12V5.9H5.5l.6 8.1H12v-2.7zM12 17.5l-3.3-.9-.2-2.3H5.8l.4 5.3 5.8 1.6v-3.7z" fill="#EFEFEF" />
    <path d="M12 11.3h3.5l-.3 3.5-3.2.9v-2.7l1.3-.4.1-1.3H12v-.5zM12 5.9h6.1l-.2 2.7H12V5.9z" fill="#FFF" />
  </svg>
);

const JSIcon = () => (
  <svg viewBox="0 0 24 24" className="tech-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="3" fill="#F7DF1E" />
    <path d="M19.9 19.3c-.5.9-1.4 1.5-2.7 1.5-1.9 0-2.9-1-2.9-2.9v-.7h1.9v.7c0 .8.4 1.2 1 1.2.6 0 1-.3 1-.9s-.3-.8-.9-1.1l-.6-.3c-1.3-.5-2.1-1.1-2.1-2.6 0-1.6 1.2-2.5 2.8-2.5 1.5 0 2.4.6 2.8 1.6l-1.6.9c-.3-.5-.7-.8-1.2-.8-.5 0-.9.3-.9.7s.3.6.8.8l.6.3c1.5.6 2.2 1.2 2.2 2.6 0 1.2-.7 2.1-1.6 2.5zm-7.6-.2c0 1-.5 1.7-1.5 1.7-.8 0-1.3-.4-1.5-1.1l-1.7.9c.5 1.4 1.7 2.1 3.2 2.1 2.3 0 3.4-1.3 3.4-3.5v-7.2h-1.9v7.1z" fill="#000" />
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className="tech-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" className="tech-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0L2.7 5.4v10.8L12 21.6l9.3-5.4V5.4L12 0zm7.4 15L12 19.3l-7.4-4.3V7l7.4-4.3 7.4 4.3v8z" fill="#339933" />
    <path d="M12 4.4L6.1 7.8v6.8l5.9 3.4 5.9-3.4V7.8L12 4.4zm.5 9.7l-.5-.3v-4.1l.5.3v4.1zm-1.8.8l-.5-.3v-5.6l.5.3v5.6zm1.3-4.5c.3.2.5.4.6.8.1.3.1.7.1 1.1h-1.5c0-.2 0-.4-.1-.5s-.1-.2-.2-.2-.2-.1-.3-.1-.2.1-.3.2-.1.3-.1.5 0 .4.1.5.2.2.4.3l.5.2c.5.2.8.4 1.1.7.3.3.4.7.4 1.2 0 .5-.2.9-.5 1.2-.3.3-.8.5-1.4.5s-1.1-.2-1.4-.5c-.3-.3-.5-.7-.5-1.2h1.5c0 .3.1.5.2.6.1.1.3.2.5.2s.3-.1.4-.2.1-.3.1-.5c0-.2 0-.3-.1-.4s-.2-.2-.4-.3l-.5-.2c-.5-.2-.8-.4-1.1-.7-.3-.3-.4-.7-.4-1.2 0-.5.2-.9.5-1.2.3-.3.8-.5 1.4-.5s1 .2 1.3.5z" fill="#339933" />
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 24 24" className="tech-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.383 0 5 1.1 5 3.5v2h7V7H5c-2.4 0-3.5 1.1-3.5 3.5v7C1.5 19.9 2.6 21 5 21h2v-3.5c0-2.4 1.1-3.5 3.5-3.5h7c2.4 0 3.5-1.1 3.5-3.5v-2c0-2.4-1.1-3.5-3.5-3.5H12V3.5C12 1.1 11.617 0 12 0z" fill="#3776AB" />
    <path d="M12 24c6.617 0 7-1.1 7-3.5v-2h-7V17h7c2.4 0 3.5-1.1 3.5-3.5v-7C22.5 4.1 21.4 3 19 3h-2v3.5c0 2.4-1.1 3.5-3.5 3.5h-7C4.1 10 3 11.1 3 13.5v2c0 2.4 1.1 3.5 3.5 3.5H12v3.5c0 2.4.383 3.5 0 3.5z" fill="#FFE052" />
    <circle cx="9" cy="4.5" r="0.75" fill="#FFF" />
    <circle cx="15" cy="19.5" r="0.75" fill="#FFF" />
  </svg>
);

const TSIcon = () => (
  <svg viewBox="0 0 24 24" className="tech-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="3" fill="#3178C6" />
    <path d="M19.8 19.3c-.5.9-1.4 1.5-2.7 1.5-1.9 0-2.9-1-2.9-2.9v-.7h1.9v.7c0 .8.4 1.2 1 1.2.6 0 1-.3 1-.9s-.3-.8-.9-1.1l-.6-.3c-1.3-.5-2.1-1.1-2.1-2.6 0-1.6 1.2-2.5 2.8-2.5 1.5 0 2.4.6 2.8 1.6l-1.6.9c-.3-.5-.7-.8-1.2-.8-.5 0-.9.3-.9.7s.3.6.8.8l.6.3c1.5.6 2.2 1.2 2.2 2.6 0 1.2-.7 2.1-1.6 2.5zM12.9 8.2h-7.8v2.7h2.5v10.4h2.8v-10.4h2.5V8.2z" fill="#FFF" />
  </svg>
);

const PostgreSQLIcon = () => (
  <svg viewBox="0 0 24 24" className="tech-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.5 2 2 6.5 2 12c0 2.8 1.1 5.3 3 7.1.3-.3.7-.5 1-.8v-2c0-1 .4-1.9 1.1-2.5l-1.3-1.3C5 11.2 5 9.7 5.7 8.8l1.4 1.4c.1-.1.3-.2.5-.2.5 0 .9.4.9.9 0 .2-.1.4-.2.5l1.4 1.4c.6-.7 1.5-1.1 2.5-1.1h2v-1c-.3.1-.7.2-1 .2-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2c0 .3-.1.7-.2 1h1V8.4c.7-.7 1.6-1.1 2.6-1.1h1.3c.3 0 .5-.2.5-.5V5.5c0-.3-.2-.5-.5-.5H16c-1.7 0-3.2 1-4 2.5C11.2 6 9.7 5 8 5H6.5c-.3 0-.5.2-.5.5v1.3c0 .3.2.5.5.5H8c1 0 1.9.4 2.5 1.1L9.2 9.7C8.5 9 7.6 8.6 6.6 8.6c-1.1 0-2 .9-2 2s.9 2 2 2c.4 0 .8-.1 1.1-.3l1.3 1.3C8.4 14.3 8 15.2 8 16.2v1.5c0 .3.2.5.5.5h1.3c.3 0 .5-.2.5-.5v-1c0-.4.2-.8.5-1.1l1.3 1.3c-.1.3-.1.7-.1 1.1 0 1.1.9 2 2 2s2-.9 2-2c0-.4-.1-.8-.3-1.1l1.3-1.3c.7.7 1.1 1.6 1.1 2.6v1.3c0 .3.2.5.5.5h1.3c.3 0 .5-.2.5-.5v-1.5c0-1.7-1-3.2-2.5-4 .7-.8 1.7-1.3 2.8-1.3h1.2c.3 0 .5-.2.5-.5V10c0-4.4-3.6-8-8-8z" fill="#336791" />
  </svg>
);

const MongoDBIcon = () => (
  <svg viewBox="0 0 24 24" className="tech-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C11.5 0 8 4 8 10c0 4.5 2.5 7.5 4 10V1h.1c1.4 2.5 3.9 5.5 3.9 10 0 6-3.5 10-4 10C11.5 21 8 17 8 11h8c0 6-3.5 10-4 10s-4-4-4-10c0-6 3.5-10 4-10z" fill="#47A248" />
    <path d="M12 21v3h1c0-1 1-2 1-3H12z" fill="#589636" />
    <path d="M11 21v3h1v-3h-1z" fill="#3F3F3F" />
  </svg>
);

const ViteIcon = () => (
  <svg viewBox="0 0 24 24" className="tech-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.78 3L12 19.3 4.22 3h15.56z" fill="#646CFF" />
    <path d="M15.5 3L12 11.5 8.5 3H3l9 20 9-20h-5.5z" fill="#FFD62B" />
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 24 24" className="tech-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.3 10.9L13.1.7C12.7.3 12-.1 11.4-.1s-1.3.3-1.7.7l-2 2 3.2 3.2c.8-.3 1.8-.1 2.5.6.7.7.9 1.7.6 2.5l3.2 3.2c.8-.3 1.8-.1 2.5.6.9.9.9 2.4 0 3.3-.9.9-2.4.9-3.3 0-.7-.7-.9-1.7-.6-2.5L12.4 11c-.3.3-.7.5-1.2.5-.5 0-.9-.2-1.2-.5L6.8 7.8c-.8.3-1.8.1-2.5-.6-.9-.9-.9-2.4 0-3.3.9-.9 2.4-.9 3.3 0 .7.7.9 1.7.6 2.5l3.2 3.2c-.3-.3-.5-.7-.5-1.2 0-.5.2-.9.5-1.2L.7 10.9C.3 11.3-.1 12-.1 12.6s.3 1.3.7 1.7l10.2 10.2c.4.4 1.1.7 1.7.7s1.3-.3 1.7-.7l9.1-9.1c.9-.9.9-2.4 0-3.3z" fill="#F05032" />
  </svg>
);

const techItems = [
  { name: 'HTML5', Icon: HTML5Icon },
  { name: 'CSS3', Icon: CSS3Icon },
  { name: 'JavaScript', Icon: JSIcon },
  { name: 'React', Icon: ReactIcon },
  { name: 'Node.js', Icon: NodeIcon },
  { name: 'Python', Icon: PythonIcon },
  { name: 'TypeScript', Icon: TSIcon },
  { name: 'PostgreSQL', Icon: PostgreSQLIcon },
  { name: 'MongoDB', Icon: MongoDBIcon },
  { name: 'Vite', Icon: ViteIcon },
  { name: 'Git', Icon: GitIcon },
];

export default function TechMarquee() {
  // We duplicate the items to make the horizontal scroll infinite and seamless
  const duplicatedItems = [...techItems, ...techItems];

  return (
    <div className="tech-marquee-wrapper">
      <div className="tech-section-header">
        <span>Built With Next-Gen Technology</span>
      </div>
      <div className="tech-marquee-container">
        <div className="tech-marquee-track">
          {duplicatedItems.map((tech, idx) => (
            <div key={`${tech.name}-${idx}`} className="tech-card bg-glass">
              <tech.Icon />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
