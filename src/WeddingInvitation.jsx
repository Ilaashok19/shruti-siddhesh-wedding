// import React, { useState, useEffect, useRef } from "react";
// import {
//   Camera,
//   MapPin,
//   Calendar,
//   Clock,
//   Users,
//   Heart,
//   Sparkles,
//   ChevronDown,
// } from "lucide-react";

// const WeddingInvitation = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [guestCount, setGuestCount] = useState(1);
//   const [guestName, setGuestName] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const countdownRef = useRef(null);
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   // Wedding date: April 29, 2026
//   const weddingDate = new Date("2026-04-29T09:55:00");

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const now = new Date();
//       const difference = weddingDate - now;

//       if (difference > 0) {
//         setTimeLeft({
//           days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//           minutes: Math.floor((difference / 1000 / 60) % 60),
//           seconds: Math.floor((difference / 1000) % 60),
//         });
//       }
//     }, 1000);

//     return () => clearInterval(timer);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   useEffect(() => {
//     // Reserved for future scroll animations if needed
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (guestName.trim()) {
//       setSubmitted(true);
//       // Here you would typically send this to a backend
//       console.log({ name: guestName, count: guestCount });
//     }
//   };

//   const events = [
//     {
//       date: "27th April",
//       title: "Muhurtham & Mehendi",
//       events: [
//         {
//           name: "Muhurta Med",
//           time: "Morning",
//           description:
//             "Traditional Telugu wedding ritual marking the auspicious beginning",
//         },
//         {
//           name: "Mehendi Ceremony",
//           time: "Evening",
//           description: "An evening of henna art, music, and celebration",
//         },
//       ],
//       color: "#D4AF37",
//     },
//     {
//       date: "28th April",
//       title: "Engagement & Haldi",
//       events: [
//         {
//           name: "Engagement Ceremony",
//           time: "12:00 PM",
//           description: "The official union of two families and two hearts",
//         },
//         {
//           name: "Haldi Ceremony",
//           time: "7:00 PM",
//           description: "A turmeric blessing ceremony for the bride and groom",
//         },
//       ],
//       color: "#FFD700",
//     },
//     {
//       date: "29th April",
//       title: "Wedding Ceremony",
//       events: [
//         {
//           name: "Wedding Muhurtam",
//           time: "9:55 AM",
//           description:
//             "The sacred union at the most auspicious moment. Traditional attire recommended.",
//         },
//       ],
//       color: "#FF6B6B",
//       highlight: true,
//     },
//     {
//       date: "30th April",
//       title: "Satyanarayan Pooja",
//       events: [
//         {
//           name: "Satyanarayan Pooja",
//           time: "Morning",
//           description:
//             "A thanksgiving ceremony seeking divine blessings for the newlyweds",
//         },
//       ],
//       color: "#4ECDC4",
//     },
//   ];

//   const importantInfo = [
//     {
//       icon: "🏨",
//       title: "Accommodation",
//       info: "Multiple hotels available nearby in Johns Creek and Alpharetta area. Contact family for recommendations.",
//     },
//     {
//       icon: "✈️",
//       title: "Airport",
//       info: "Hartsfield-Jackson Atlanta International Airport (ATL) - approximately 40 minutes away",
//     },
//     {
//       icon: "🚗",
//       title: "Parking",
//       info: "Ample parking available at Sankranti Restaurant venue",
//     },
//     {
//       icon: "🍽️",
//       title: "Food",
//       info: "Authentic Telugu and Marathi cuisine will be served throughout the celebrations",
//     },
//     {
//       icon: "🎁",
//       title: "Gifts",
//       info: "Your presence is the greatest gift. Blessings are all we seek.",
//     },
//     {
//       icon: "📸",
//       title: "Photography",
//       info: "Feel free to capture moments, but please respect ceremony timings",
//     },
//   ];

//   if (!isOpen) {
//     return (
//       <div className="landing-page">
//         <div className="mandala-overlay"></div>
//         <div className="content-wrapper">
//           <div className="sacred-symbol">॥ श्री गणेशाय नमः ॥</div>
//           <h1 className="bride-groom-names">
//             <span className="bride">Shruti</span>
//             <Heart className="heart-icon" />
//             <span className="groom">Siddhesh</span>
//           </h1>
//           <div className="wedding-date">29th April 2026</div>
//           <div className="blessing-text">
//             "Two souls with but a single thought,
//             <br />
//             Two hearts that beat as one"
//           </div>
//           <button className="open-button" onClick={() => setIsOpen(true)}>
//             <span>Open Invitation</span>
//             <ChevronDown className="bounce" />
//           </button>
//         </div>

//         <style jsx>{`
//           * {
//             margin: 0;
//             padding: 0;
//             box-sizing: border-box;
//           }

//           .landing-page {
//             min-height: 100vh;
//             background: linear-gradient(
//               135deg,
//               #667eea 0%,
//               #764ba2 50%,
//               #f093fb 100%
//             );
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             position: relative;
//             overflow: hidden;
//             font-family: "Cormorant Garamond", "Georgia", serif;
//           }

//           .mandala-overlay {
//             position: absolute;
//             top: 50%;
//             left: 50%;
//             transform: translate(-50%, -50%) rotate(0deg);
//             width: 120vh;
//             height: 120vh;
//             background-image:
//               radial-gradient(
//                 circle at center,
//                 transparent 20%,
//                 rgba(255, 255, 255, 0.03) 20%,
//                 rgba(255, 255, 255, 0.03) 21%,
//                 transparent 21%
//               ),
//               radial-gradient(
//                 circle at center,
//                 transparent 40%,
//                 rgba(255, 255, 255, 0.02) 40%,
//                 rgba(255, 255, 255, 0.02) 41%,
//                 transparent 41%
//               ),
//               radial-gradient(
//                 circle at center,
//                 transparent 60%,
//                 rgba(255, 255, 255, 0.01) 60%,
//                 rgba(255, 255, 255, 0.01) 61%,
//                 transparent 61%
//               );
//             animation: rotate 60s linear infinite;
//             pointer-events: none;
//           }

//           @keyframes rotate {
//             from {
//               transform: translate(-50%, -50%) rotate(0deg);
//             }
//             to {
//               transform: translate(-50%, -50%) rotate(360deg);
//             }
//           }

//           .content-wrapper {
//             text-align: center;
//             z-index: 1;
//             color: white;
//             padding: 2rem;
//             max-width: 600px;
//           }

//           .sacred-symbol {
//             font-size: 1.5rem;
//             margin-bottom: 3rem;
//             opacity: 0.9;
//             font-weight: 300;
//             letter-spacing: 2px;
//           }

//           .bride-groom-names {
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             gap: 1.5rem;
//             margin-bottom: 2rem;
//             font-size: 4rem;
//             font-weight: 400;
//             text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
//           }

//           .bride,
//           .groom {
//             animation: fadeInUp 1s ease-out;
//           }

//           .bride {
//             animation-delay: 0.2s;
//             opacity: 0;
//             animation-fill-mode: forwards;
//           }

//           .groom {
//             animation-delay: 0.4s;
//             opacity: 0;
//             animation-fill-mode: forwards;
//           }

//           @keyframes fadeInUp {
//             from {
//               opacity: 0;
//               transform: translateY(30px);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }

//           .heart-icon {
//             color: #ffb6c1;
//             width: 3rem;
//             height: 3rem;
//             animation: heartbeat 2s ease-in-out infinite;
//             filter: drop-shadow(0 0 20px rgba(255, 182, 193, 0.6));
//           }

//           @keyframes heartbeat {
//             0%,
//             100% {
//               transform: scale(1);
//             }
//             50% {
//               transform: scale(1.1);
//             }
//           }

//           .wedding-date {
//             font-size: 2rem;
//             margin-bottom: 2rem;
//             letter-spacing: 3px;
//             font-weight: 300;
//             opacity: 0;
//             animation: fadeInUp 1s ease-out 0.6s forwards;
//           }

//           .blessing-text {
//             font-size: 1.2rem;
//             line-height: 1.8;
//             margin-bottom: 3rem;
//             opacity: 0.95;
//             font-style: italic;
//             opacity: 0;
//             animation: fadeInUp 1s ease-out 0.8s forwards;
//           }

//           .open-button {
//             background: rgba(255, 255, 255, 0.2);
//             backdrop-filter: blur(10px);
//             border: 2px solid rgba(255, 255, 255, 0.4);
//             color: white;
//             padding: 1.2rem 3rem;
//             font-size: 1.3rem;
//             border-radius: 50px;
//             cursor: pointer;
//             transition: all 0.3s ease;
//             font-family: "Cormorant Garamond", serif;
//             display: flex;
//             align-items: center;
//             gap: 0.5rem;
//             margin: 0 auto;
//             opacity: 0;
//             animation: fadeInUp 1s ease-out 1s forwards;
//           }

//           .open-button:hover {
//             background: rgba(255, 255, 255, 0.3);
//             transform: translateY(-2px);
//             box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
//           }

//           .bounce {
//             animation: bounce 2s ease-in-out infinite;
//           }

//           @keyframes bounce {
//             0%,
//             100% {
//               transform: translateY(0);
//             }
//             50% {
//               transform: translateY(-10px);
//             }
//           }

//           @media (max-width: 768px) {
//             .bride-groom-names {
//               font-size: 2.5rem;
//               flex-direction: column;
//               gap: 1rem;
//             }
//             .heart-icon {
//               width: 2rem;
//               height: 2rem;
//             }
//             .wedding-date {
//               font-size: 1.5rem;
//             }
//           }
//         `}</style>
//       </div>
//     );
//   }

//   return (
//     <div className="main-content">
//       {/* Video Hero Section */}
//       <section className="video-section">
//         <div className="video-placeholder">
//           <div className="ritual-silhouette">
//             <Camera size={80} />
//             <p className="video-description">
//               A glimpse of our beautiful union
//             </p>
//             <div className="video-overlay-text">
//               <h1 className="couple-names">Shruti weds Siddhesh</h1>
//               <p className="wedding-date-hero">29th April 2026</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Countdown Section */}
//       <section className="countdown-section" ref={countdownRef}>
//         <h2 className="section-title">Counting Every Moment</h2>
//         <div className="countdown-grid">
//           <div className="countdown-item">
//             <div className="countdown-number">{timeLeft.days}</div>
//             <div className="countdown-label">Days</div>
//           </div>
//           <div className="countdown-item">
//             <div className="countdown-number">{timeLeft.hours}</div>
//             <div className="countdown-label">Hours</div>
//           </div>
//           <div className="countdown-item">
//             <div className="countdown-number">{timeLeft.minutes}</div>
//             <div className="countdown-label">Minutes</div>
//           </div>
//           <div className="countdown-item">
//             <div className="countdown-number">{timeLeft.seconds}</div>
//             <div className="countdown-label">Seconds</div>
//           </div>
//         </div>
//       </section>

//       {/* Location Section */}
//       <section className="location-section">
//         <h2 className="section-title">
//           <MapPin className="inline-icon" />
//           Where We Celebrate
//         </h2>
//         <div className="location-content">
//           <div className="map-container">
//             <iframe
//               title="Wedding Venue Location"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6611.80883295152!2d-84.2257999!3d34.0463229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f59f08f6b15b27%3A0x777d8685c07da5a7!2sSankranti%20Restaurant!5e0!3m2!1sen!2sus!4v1771021478274!5m2!1sen!2sus"
//               width="100%"
//               height="400"
//               style={{ border: 0, borderRadius: "15px" }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>
//           <div className="location-details">
//             <h3>Venue Details</h3>
//             <p className="venue-name">Sankranti Restaurant</p>
//             <p className="venue-address">
//               2000 Ray Moss Connector, Johns Creek, GA 30022
//             </p>
//             <a
//               href="https://maps.app.goo.gl/PPvkR6mCQ94mghnQ7"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="directions-btn"
//             >
//               Get Directions
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Events Timeline */}
//       <section className="events-section">
//         <h2 className="section-title">
//           <Calendar className="inline-icon" />
//           Celebration Timeline
//         </h2>
//         <div className="events-timeline">
//           {events.map((day, idx) => (
//             <details
//               className={`event-day ${day.highlight ? "highlight" : ""}`}
//               key={idx}
//             >
//               <summary style={{ borderLeftColor: day.color }}>
//                 <div className="event-header">
//                   <div className="event-date" style={{ color: day.color }}>
//                     {day.date}
//                   </div>
//                   <div className="event-title">{day.title}</div>
//                 </div>
//                 <ChevronDown className="chevron" />
//               </summary>
//               <div className="event-details">
//                 {day.events.map((event, eventIdx) => (
//                   <div className="event-item" key={eventIdx}>
//                     <div className="event-time">
//                       <Clock size={16} />
//                       {event.time}
//                     </div>
//                     <div className="event-name">{event.name}</div>
//                     <div className="event-description">{event.description}</div>
//                   </div>
//                 ))}
//               </div>
//             </details>
//           ))}
//         </div>

//         <div className="dress-code-section">
//           <h3>
//             <Sparkles className="inline-icon" />
//             Dress Code
//           </h3>
//           <div className="dress-code-grid">
//             <div className="dress-code-item">
//               <div className="dress-icon">👗</div>
//               <h4>Muhurtham & Mehendi</h4>
//               <p>Traditional Indian attire - Sarees, Lehengas, Kurtas</p>
//             </div>
//             <div className="dress-code-item">
//               <div className="dress-icon">💍</div>
//               <h4>Engagement & Haldi</h4>
//               <p>Semi-formal to Traditional - Bright colors welcome</p>
//             </div>
//             <div className="dress-code-item highlight-dress">
//               <div className="dress-icon">👰</div>
//               <h4>Wedding Day</h4>
//               <p>Traditional Indian Wedding Attire - Your finest!</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Important Information */}
//       <section className="info-section">
//         <h2 className="section-title">Important Information</h2>
//         <div className="info-grid">
//           {importantInfo.map((item, idx) => (
//             <div className="info-card" key={idx}>
//               <div className="info-icon">{item.icon}</div>
//               <h4>{item.title}</h4>
//               <p>{item.info}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//       <section className="video-section">
//         <div className="video-container">
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="hero-video"
//           >
//             <source src="/videos/wedding-video.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>

//           <div className="video-overlay">
//             <div className="video-overlay-text">
//               <h1 className="couple-names">Shruti weds Siddhesh</h1>
//               <p className="wedding-date-hero">29th April 2026</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* RSVP Section */}
//       <section className="rsvp-section">
//         <h2 className="section-title">
//           <Users className="inline-icon" />
//           Confirm Your Presence
//         </h2>
//         {!submitted ? (
//           <form onSubmit={handleSubmit} className="rsvp-form">
//             <div className="form-group">
//               <label>Your Name</label>
//               <input
//                 type="text"
//                 value={guestName}
//                 onChange={(e) => setGuestName(e.target.value)}
//                 placeholder="Enter your name"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Number of Guests</label>
//               <div className="guest-counter">
//                 <button
//                   type="button"
//                   onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
//                   className="counter-btn"
//                 >
//                   -
//                 </button>
//                 <span className="guest-count">{guestCount}</span>
//                 <button
//                   type="button"
//                   onClick={() => setGuestCount(guestCount + 1)}
//                   className="counter-btn"
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//             <button type="submit" className="submit-btn">
//               Confirm Attendance
//             </button>
//           </form>
//         ) : (
//           <div className="thank-you-message">
//             <Heart className="thank-you-icon" />
//             <h3>Thank You, {guestName}!</h3>
//             <p>We're delighted you'll be joining us for our special day.</p>
//             <p className="guest-count-confirm">Party of {guestCount}</p>
//           </div>
//         )}
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="footer-content">
//           <div className="footer-symbol">
//             <Heart className="footer-heart" />
//           </div>
//           <div className="footer-names">
//             <span className="footer-name">Shruti</span>
//             <span className="footer-separator">&</span>
//             <span className="footer-name">Siddhesh</span>
//           </div>
//           <div className="footer-date">April 29, 2026</div>
//           <div className="footer-quote">
//             "Two families, two cultures, one love"
//           </div>
//           <div className="footer-tagline">
//             Telugu • Marathi • Together Forever
//           </div>
//         </div>
//       </footer>

//       <style jsx>{`
//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         .main-content {
//           font-family: "Crimson Text", "Georgia", serif;
//           background: #faf9f6;
//           color: #2c3e50;
//         }

//         /* Video Section */
//         .video-section {
//           height: 100vh;
//           position: relative;
//           background: linear-gradient(
//             135deg,
//             #2c3e50 0%,
//             #34495e 50%,
//             #5d6d7e 100%
//           );
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           overflow: hidden;
//         }

//         .video-placeholder {
//           width: 100%;
//           height: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           position: relative;
//           background:
//             radial-gradient(
//               circle at 20% 50%,
//               rgba(142, 68, 173, 0.2),
//               transparent 50%
//             ),
//             radial-gradient(
//               circle at 80% 50%,
//               rgba(52, 152, 219, 0.2),
//               transparent 50%
//             ),
//             #1a1a2e;
//         }

//         .ritual-silhouette {
//           text-align: center;
//           color: rgba(255, 255, 255, 0.8);
//           z-index: 1;
//         }

//         .ritual-silhouette svg {
//           opacity: 0.3;
//           margin-bottom: 2rem;
//           animation: float 3s ease-in-out infinite;
//         }

//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//         }

//         .video-description {
//           font-size: 1.2rem;
//           margin-bottom: 3rem;
//           opacity: 0.7;
//         }

//         .video-overlay-text {
//           position: relative;
//         }

//         .couple-names {
//           font-size: 5rem;
//           font-weight: 300;
//           margin-bottom: 1rem;
//           color: white;
//           text-shadow: 0 0 40px rgba(255, 255, 255, 0.5);
//           letter-spacing: 3px;
//           font-family: "Playfair Display", serif;
//         }

//         .wedding-date-hero {
//           font-size: 2rem;
//           color: #d4af37;
//           letter-spacing: 5px;
//           font-weight: 300;
//         }

//         /* Countdown Section */
//         .countdown-section {
//           padding: 5rem 2rem;
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           color: white;
//           text-align: center;
//         }

//         .section-title {
//           font-size: 3rem;
//           margin-bottom: 3rem;
//           font-weight: 300;
//           letter-spacing: 2px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 1rem;
//         }

//         .inline-icon {
//           color: #d4af37;
//         }

//         .countdown-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
//           gap: 2rem;
//           max-width: 800px;
//           margin: 0 auto;
//         }

//         .countdown-item {
//           background: rgba(255, 255, 255, 0.15);
//           backdrop-filter: blur(10px);
//           padding: 2rem;
//           border-radius: 15px;
//           border: 1px solid rgba(255, 255, 255, 0.2);
//           transition: transform 0.3s ease;
//         }

//         .countdown-item:hover {
//           transform: translateY(-5px);
//           background: rgba(255, 255, 255, 0.25);
//         }

//         .countdown-number {
//           font-size: 3.5rem;
//           font-weight: 700;
//           margin-bottom: 0.5rem;
//           font-family: "Playfair Display", serif;
//         }

//         .countdown-label {
//           font-size: 1.2rem;
//           text-transform: uppercase;
//           letter-spacing: 2px;
//           opacity: 0.9;
//         }

//         /* Location Section */
//         .location-section {
//           padding: 5rem 2rem;
//           background: white;
//         }

//         .location-content {
//           max-width: 1200px;
//           margin: 0 auto;
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 3rem;
//           align-items: center;
//         }

//         .map-container {
//           border-radius: 15px;
//           overflow: hidden;
//           box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
//         }

//         .location-details {
//           text-align: center;
//         }

//         .location-details h3 {
//           font-size: 2rem;
//           margin-bottom: 1rem;
//           color: #667eea;
//         }

//         .venue-name {
//           font-size: 1.8rem;
//           font-weight: 600;
//           margin-bottom: 0.5rem;
//           color: #2c3e50;
//         }

//         .venue-address {
//           font-size: 1.2rem;
//           color: #7f8c8d;
//           margin-bottom: 2rem;
//         }

//         .directions-btn {
//           display: inline-block;
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           color: white;
//           padding: 1rem 3rem;
//           border-radius: 50px;
//           text-decoration: none;
//           font-size: 1.1rem;
//           transition: all 0.3s ease;
//           box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
//         }

//         .directions-btn:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 8px 30px rgba(102, 126, 234, 0.6);
//         }

//         /* Events Section */
//         .events-section {
//           padding: 5rem 2rem;
//           background: linear-gradient(to bottom, #faf9f6, #f0ede5);
//         }

//         .events-timeline {
//           max-width: 900px;
//           margin: 0 auto 4rem;
//         }

//         .event-day {
//           background: white;
//           margin-bottom: 1.5rem;
//           border-radius: 15px;
//           box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
//           overflow: hidden;
//           transition: all 0.3s ease;
//         }

//         .event-day.highlight {
//           border: 2px solid #ff6b6b;
//           box-shadow: 0 5px 30px rgba(255, 107, 107, 0.3);
//         }

//         .event-day summary {
//           padding: 1.5rem 2rem;
//           cursor: pointer;
//           list-style: none;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           border-left: 5px solid;
//           transition: background 0.3s ease;
//         }

//         .event-day summary:hover {
//           background: #f8f9fa;
//         }

//         .event-day summary::-webkit-details-marker {
//           display: none;
//         }

//         .event-header {
//           flex: 1;
//         }

//         .event-date {
//           font-size: 1.3rem;
//           font-weight: 600;
//           margin-bottom: 0.3rem;
//         }

//         .event-title {
//           font-size: 1.8rem;
//           color: #2c3e50;
//           font-weight: 300;
//         }

//         .chevron {
//           transition: transform 0.3s ease;
//           color: #7f8c8d;
//         }

//         .event-day[open] .chevron {
//           transform: rotate(180deg);
//         }

//         .event-details {
//           padding: 0 2rem 2rem 2rem;
//           border-top: 1px solid #ecf0f1;
//           margin-top: 1rem;
//         }

//         .event-item {
//           padding: 1.5rem;
//           background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
//           border-radius: 10px;
//           margin-top: 1rem;
//         }

//         .event-time {
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//           color: #7f8c8d;
//           font-size: 1rem;
//           margin-bottom: 0.5rem;
//         }

//         .event-name {
//           font-size: 1.4rem;
//           font-weight: 600;
//           color: #2c3e50;
//           margin-bottom: 0.5rem;
//         }

//         .event-description {
//           color: #5d6d7e;
//           line-height: 1.6;
//         }

//         /* Dress Code */
//         .dress-code-section {
//           max-width: 1000px;
//           margin: 4rem auto 0;
//           text-align: center;
//         }

//         .dress-code-section h3 {
//           font-size: 2.5rem;
//           margin-bottom: 2rem;
//           color: #2c3e50;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 1rem;
//         }

//         .dress-code-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//           gap: 2rem;
//         }

//         .dress-code-item {
//           background: white;
//           padding: 2rem;
//           border-radius: 15px;
//           box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
//           transition: transform 0.3s ease;
//         }

//         .dress-code-item:hover {
//           transform: translateY(-5px);
//         }

//         .dress-code-item.highlight-dress {
//           background: linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%);
//           color: white;
//         }

//         .dress-icon {
//           font-size: 3rem;
//           margin-bottom: 1rem;
//         }

//         .dress-code-item h4 {
//           font-size: 1.3rem;
//           margin-bottom: 0.5rem;
//         }

//         .dress-code-item p {
//           opacity: 0.8;
//           line-height: 1.6;
//         }

//         /* Info Section */
//         .info-section {
//           padding: 5rem 2rem;
//           background: white;
//         }

//         .info-grid {
//           max-width: 1200px;
//           margin: 0 auto;
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//           gap: 2rem;
//         }

//         .info-card {
//           background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
//           padding: 2rem;
//           border-radius: 15px;
//           box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
//           text-align: center;
//           transition: all 0.3s ease;
//         }

//         .info-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
//         }

//         .info-icon {
//           font-size: 3rem;
//           margin-bottom: 1rem;
//         }

//         .info-card h4 {
//           font-size: 1.5rem;
//           margin-bottom: 0.5rem;
//           color: #2c3e50;
//         }

//         .info-card p {
//           color: #7f8c8d;
//           line-height: 1.6;
//         }

//         /* RSVP Section */
//         .rsvp-section {
//           padding: 5rem 2rem;
//           background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
//           color: white;
//         }

//         .rsvp-form {
//           max-width: 500px;
//           margin: 0 auto;
//           background: rgba(255, 255, 255, 0.15);
//           backdrop-filter: blur(10px);
//           padding: 3rem;
//           border-radius: 20px;
//           border: 1px solid rgba(255, 255, 255, 0.2);
//         }

//         .form-group {
//           margin-bottom: 2rem;
//           text-align: left;
//         }

//         .form-group label {
//           display: block;
//           margin-bottom: 0.5rem;
//           font-size: 1.2rem;
//           font-weight: 500;
//         }

//         .form-group input {
//           width: 100%;
//           padding: 1rem;
//           border: 2px solid rgba(255, 255, 255, 0.3);
//           border-radius: 10px;
//           background: rgba(255, 255, 255, 0.9);
//           font-size: 1.1rem;
//           transition: all 0.3s ease;
//         }

//         .form-group input:focus {
//           outline: none;
//           border-color: white;
//           background: white;
//         }

//         .guest-counter {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 2rem;
//         }

//         .counter-btn {
//           width: 50px;
//           height: 50px;
//           border: 2px solid white;
//           background: rgba(255, 255, 255, 0.2);
//           color: white;
//           font-size: 1.5rem;
//           border-radius: 50%;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }

//         .counter-btn:hover {
//           background: rgba(255, 255, 255, 0.4);
//           transform: scale(1.1);
//         }

//         .guest-count {
//           font-size: 2rem;
//           font-weight: 600;
//           min-width: 50px;
//           text-align: center;
//         }

//         .submit-btn {
//           width: 100%;
//           padding: 1.2rem;
//           background: white;
//           color: #f5576c;
//           border: none;
//           border-radius: 50px;
//           font-size: 1.2rem;
//           font-weight: 600;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           font-family: "Crimson Text", serif;
//         }

//         .submit-btn:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
//         }

//         .thank-you-message {
//           text-align: center;
//           max-width: 500px;
//           margin: 0 auto;
//         }

//         .thank-you-icon {
//           width: 80px;
//           height: 80px;
//           margin-bottom: 2rem;
//           animation: heartbeat 2s ease-in-out infinite;
//         }

//         .thank-you-message h3 {
//           font-size: 2.5rem;
//           margin-bottom: 1rem;
//         }

//         .thank-you-message p {
//           font-size: 1.3rem;
//           margin-bottom: 0.5rem;
//           opacity: 0.95;
//         }

//         .guest-count-confirm {
//           font-size: 1.5rem;
//           margin-top: 1rem;
//           font-weight: 600;
//         }

//         /* Footer */
//         .footer {
//           background: #2c3e50;
//           color: white;
//           padding: 4rem 2rem;
//           text-align: center;
//         }

//         .footer-content {
//           max-width: 600px;
//           margin: 0 auto;
//         }

//         .footer-symbol {
//           margin-bottom: 2rem;
//         }

//         .footer-heart {
//           width: 50px;
//           height: 50px;
//           color: #ff6b6b;
//           animation: heartbeat 2s ease-in-out infinite;
//         }

//         .footer-names {
//           font-size: 2.5rem;
//           margin-bottom: 1rem;
//           font-family: "Playfair Display", serif;
//         }

//         .footer-name {
//           font-weight: 300;
//         }

//         .footer-separator {
//           margin: 0 1rem;
//           opacity: 0.6;
//         }

//         .footer-date {
//           font-size: 1.3rem;
//           margin-bottom: 1.5rem;
//           color: #d4af37;
//           letter-spacing: 2px;
//         }

//         .footer-quote {
//           font-style: italic;
//           font-size: 1.2rem;
//           margin-bottom: 1rem;
//           opacity: 0.9;
//         }

//         .footer-tagline {
//           font-size: 1rem;
//           opacity: 0.7;
//           letter-spacing: 1px;
//         }

//         /* Scroll Animation */
//         .fade-in-scroll {
//           opacity: 0;
//           transform: translateY(50px);
//           transition:
//             opacity 0.8s ease,
//             transform 0.8s ease;
//         }

//         .fade-in-scroll.visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         /* Mobile Responsive */
//         @media (max-width: 768px) {
//           .couple-names {
//             font-size: 3rem;
//           }

//           .wedding-date-hero {
//             font-size: 1.5rem;
//           }

//           .section-title {
//             font-size: 2rem;
//           }

//           .location-content {
//             grid-template-columns: 1fr;
//           }

//           .countdown-number {
//             font-size: 2.5rem;
//           }

//           .bride-groom-names {
//             font-size: 2rem;
//           }

//           .footer-names {
//             font-size: 1.8rem;
//           }
//         }

//         @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Crimson+Text:wght@400;600&family=Playfair+Display:wght@300;400;700&display=swap");
//       `}</style>
//     </div>
//   );
// };

// export default WeddingInvitation;

import React, { useState, useEffect, useRef } from "react";
import {
  Camera,
  MapPin,
  Calendar,
  Clock,
  Users,
  Heart,
  Sparkles,
  ChevronDown,
} from "lucide-react";

const WeddingInvitation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(1);
  const [guestName, setGuestName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const countdownRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Wedding date: April 29, 2026
  const weddingDate = new Date("2026-04-29T09:55:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Reserved for future scroll animations if needed
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guestName.trim()) {
      setSubmitted(true);
      // Here you would typically send this to a backend
      console.log({ name: guestName, count: guestCount });
    }
  };

  const events = [
    {
      date: "27th April",
      title: "Muhurtham & Mehendi",
      events: [
        {
          name: "Muhurta Med",
          time: "Morning",
          description:
            "Traditional Telugu wedding ritual marking the auspicious beginning",
        },
        {
          name: "Mehendi Ceremony",
          time: "Evening",
          description: "An evening of henna art, music, and celebration",
        },
      ],
      color: "#D4AF37",
    },
    {
      date: "28th April",
      title: "Engagement & Haldi",
      events: [
        {
          name: "Engagement Ceremony",
          time: "12:00 PM",
          description: "The official union of two families and two hearts",
        },
        {
          name: "Haldi Ceremony",
          time: "7:00 PM",
          description: "A turmeric blessing ceremony for the bride and groom",
        },
      ],
      color: "#FFD700",
    },
    {
      date: "29th April",
      title: "Wedding Ceremony",
      events: [
        {
          name: "Wedding Muhurtam",
          time: "9:55 AM",
          description:
            "The sacred union at the most auspicious moment. Traditional attire recommended.",
        },
      ],
      color: "#FF6B6B",
      highlight: true,
    },
    {
      date: "30th April",
      title: "Satyanarayan Pooja",
      events: [
        {
          name: "Satyanarayan Pooja",
          time: "Morning",
          description:
            "A thanksgiving ceremony seeking divine blessings for the newlyweds",
        },
      ],
      color: "#4ECDC4",
    },
  ];

  const importantInfo = [
    {
      icon: "🏨",
      title: "Accommodation",
      info: "Multiple hotels available nearby in Johns Creek and Alpharetta area. Contact family for recommendations.",
    },
    {
      icon: "✈️",
      title: "Airport",
      info: "Hartsfield-Jackson Atlanta International Airport (ATL) - approximately 40 minutes away",
    },
    {
      icon: "🚗",
      title: "Parking",
      info: "Ample parking available at Sankranti Restaurant venue",
    },
    {
      icon: "🍽️",
      title: "Food",
      info: "Authentic Telugu and Marathi cuisine will be served throughout the celebrations",
    },
    {
      icon: "🎁",
      title: "Gifts",
      info: "Your presence is the greatest gift. Blessings are all we seek.",
    },
    {
      icon: "📸",
      title: "Photography",
      info: "Feel free to capture moments, but please respect ceremony timings",
    },
  ];

  if (!isOpen) {
    return (
      <div className="landing-page">
        <div className="mandala-overlay"></div>
        <div className="content-wrapper">
          <div className="sacred-symbol">॥ श्री गणेशाय नमः ॥</div>
          <h1 className="bride-groom-names">
            <span className="bride">Shruti</span>
            <Heart className="heart-icon" />
            <span className="groom">Siddhesh</span>
          </h1>
          <div className="wedding-date">29th April 2026</div>
          <div className="blessing-text">
            "Two souls with but a single thought,
            <br />
            Two hearts that beat as one"
          </div>
          <button className="open-button" onClick={() => setIsOpen(true)}>
            <span>Open Invitation</span>
            <ChevronDown className="bounce" />
          </button>
        </div>

        <style jsx>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          .landing-page {
            min-height: 100vh;
            background: linear-gradient(
              135deg,
              #667eea 0%,
              #764ba2 50%,
              #f093fb 100%
            );
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            font-family: "Cormorant Garamond", "Georgia", serif;
          }

          .mandala-overlay {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(0deg);
            width: 120vh;
            height: 120vh;
            background-image:
              radial-gradient(
                circle at center,
                transparent 20%,
                rgba(255, 255, 255, 0.03) 20%,
                rgba(255, 255, 255, 0.03) 21%,
                transparent 21%
              ),
              radial-gradient(
                circle at center,
                transparent 40%,
                rgba(255, 255, 255, 0.02) 40%,
                rgba(255, 255, 255, 0.02) 41%,
                transparent 41%
              ),
              radial-gradient(
                circle at center,
                transparent 60%,
                rgba(255, 255, 255, 0.01) 60%,
                rgba(255, 255, 255, 0.01) 61%,
                transparent 61%
              );
            animation: rotate 60s linear infinite;
            pointer-events: none;
          }

          @keyframes rotate {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }

          .content-wrapper {
            text-align: center;
            z-index: 1;
            color: white;
            padding: 2rem;
            max-width: 600px;
          }

          .sacred-symbol {
            font-size: 1.5rem;
            margin-bottom: 3rem;
            opacity: 0.9;
            font-weight: 300;
            letter-spacing: 2px;
          }

          .bride-groom-names {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
            margin-bottom: 2rem;
            font-size: 4rem;
            font-weight: 400;
            text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          }

          .bride,
          .groom {
            animation: fadeInUp 1s ease-out;
          }

          .bride {
            animation-delay: 0.2s;
            opacity: 0;
            animation-fill-mode: forwards;
          }

          .groom {
            animation-delay: 0.4s;
            opacity: 0;
            animation-fill-mode: forwards;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .heart-icon {
            color: #ffb6c1;
            width: 3rem;
            height: 3rem;
            animation: heartbeat 2s ease-in-out infinite;
            filter: drop-shadow(0 0 20px rgba(255, 182, 193, 0.6));
          }

          @keyframes heartbeat {
            0%,
            100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
          }

          .wedding-date {
            font-size: 2rem;
            margin-bottom: 2rem;
            letter-spacing: 3px;
            font-weight: 300;
            opacity: 0;
            animation: fadeInUp 1s ease-out 0.6s forwards;
          }

          .blessing-text {
            font-size: 1.2rem;
            line-height: 1.8;
            margin-bottom: 3rem;
            opacity: 0.95;
            font-style: italic;
            opacity: 0;
            animation: fadeInUp 1s ease-out 0.8s forwards;
          }

          .open-button {
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255, 255, 255, 0.4);
            color: white;
            padding: 1.2rem 3rem;
            font-size: 1.3rem;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: "Cormorant Garamond", serif;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin: 0 auto;
            opacity: 0;
            animation: fadeInUp 1s ease-out 1s forwards;
          }

          .open-button:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          }

          .bounce {
            animation: bounce 2s ease-in-out infinite;
          }

          @keyframes bounce {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          @media (max-width: 768px) {
            .bride-groom-names {
              font-size: 2.5rem;
              flex-direction: column;
              gap: 1rem;
            }
            .heart-icon {
              width: 2rem;
              height: 2rem;
            }
            .wedding-date {
              font-size: 1.5rem;
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="main-content">
      {/* Video Hero Section */}
      <section className="video-section">
        <div className="video-container">
          {/* Option 1: Local Video - Upload your video to public/videos/wedding-video.mp4 */}
          <video autoPlay loop muted playsInline className="hero-video">
            <source src="/videos/wedding-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Option 2: YouTube - Uncomment and add your video ID
          <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=YOUR_VIDEO_ID&controls=0&showinfo=0&rel=0"
            title="Wedding Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          */}

          <div className="video-overlay">
            <div className="video-overlay-text">
              <h1 className="couple-names">Shruti weds Siddhesh</h1>
              <p className="wedding-date-hero">29th April 2026</p>
              <p className="video-subtitle">A glimpse of our beautiful union</p>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="countdown-section" ref={countdownRef}>
        <h2 className="section-title">Counting Every Moment</h2>
        <div className="countdown-grid">
          <div className="countdown-item">
            <div className="countdown-number">{timeLeft.days}</div>
            <div className="countdown-label">Days</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-number">{timeLeft.hours}</div>
            <div className="countdown-label">Hours</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-number">{timeLeft.minutes}</div>
            <div className="countdown-label">Minutes</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-number">{timeLeft.seconds}</div>
            <div className="countdown-label">Seconds</div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location-section">
        <h2 className="section-title">
          <MapPin className="inline-icon" />
          Where We Celebrate
        </h2>
        <div className="location-content">
          <div className="map-container">
            <iframe
              title="Wedding Venue Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6611.80883295152!2d-84.2257999!3d34.0463229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f59f08f6b15b27%3A0x777d8685c07da5a7!2sSankranti%20Restaurant!5e0!3m2!1sen!2sus!4v1771021478274!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "15px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="location-details">
            <h3>Venue Details</h3>
            <p className="venue-name">Sankranti Restaurant</p>
            <p className="venue-address">
              2000 Ray Moss Connector, Johns Creek, GA 30022
            </p>
            <a
              href="https://maps.app.goo.gl/PPvkR6mCQ94mghnQ7"
              target="_blank"
              rel="noopener noreferrer"
              className="directions-btn"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Events Timeline */}
      <section className="events-section">
        <h2 className="section-title">
          <Calendar className="inline-icon" />
          Celebration Timeline
        </h2>
        <div className="events-timeline">
          {events.map((day, idx) => (
            <details
              className={`event-day ${day.highlight ? "highlight" : ""}`}
              key={idx}
            >
              <summary style={{ borderLeftColor: day.color }}>
                <div className="event-header">
                  <div className="event-date" style={{ color: day.color }}>
                    {day.date}
                  </div>
                  <div className="event-title">{day.title}</div>
                </div>
                <ChevronDown className="chevron" />
              </summary>
              <div className="event-details">
                {day.events.map((event, eventIdx) => (
                  <div className="event-item" key={eventIdx}>
                    <div className="event-time">
                      <Clock size={16} />
                      {event.time}
                    </div>
                    <div className="event-name">{event.name}</div>
                    <div className="event-description">{event.description}</div>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>

        <div className="dress-code-section">
          <h3>
            <Sparkles className="inline-icon" />
            Dress Code
          </h3>
          <div className="dress-code-grid">
            <div className="dress-code-item">
              <div className="dress-icon">👗</div>
              <h4>Muhurtham & Mehendi</h4>
              <p>Traditional Indian attire - Sarees, Lehengas, Kurtas</p>
            </div>
            <div className="dress-code-item">
              <div className="dress-icon">💍</div>
              <h4>Engagement & Haldi</h4>
              <p>Semi-formal to Traditional - Bright colors welcome</p>
            </div>
            <div className="dress-code-item highlight-dress">
              <div className="dress-icon">👰</div>
              <h4>Wedding Day</h4>
              <p>Traditional Indian Wedding Attire - Your finest!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="info-section">
        <h2 className="section-title">Important Information</h2>
        <div className="info-grid">
          {importantInfo.map((item, idx) => (
            <div className="info-card" key={idx}>
              <div className="info-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.info}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RSVP Section */}
      <section className="rsvp-section">
        <h2 className="section-title">
          <Users className="inline-icon" />
          Confirm Your Presence
        </h2>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="rsvp-form">
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label>Number of Guests</label>
              <div className="guest-counter">
                <button
                  type="button"
                  onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                  className="counter-btn"
                >
                  -
                </button>
                <span className="guest-count">{guestCount}</span>
                <button
                  type="button"
                  onClick={() => setGuestCount(guestCount + 1)}
                  className="counter-btn"
                >
                  +
                </button>
              </div>
            </div>
            <button type="submit" className="submit-btn">
              Confirm Attendance
            </button>
          </form>
        ) : (
          <div className="thank-you-message">
            <Heart className="thank-you-icon" />
            <h3>Thank You, {guestName}!</h3>
            <p>We're delighted you'll be joining us for our special day.</p>
            <p className="guest-count-confirm">Party of {guestCount}</p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-symbol">
            <Heart className="footer-heart" />
          </div>
          <div className="footer-names">
            <span className="footer-name">Shruti</span>
            <span className="footer-separator">&</span>
            <span className="footer-name">Siddhesh</span>
          </div>
          <div className="footer-date">April 29, 2026</div>
          <div className="footer-quote">
            "Two families, two cultures, one love"
          </div>
          <div className="footer-tagline">
            Telugu • Marathi • Together Forever
          </div>
        </div>
      </footer>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .main-content {
          font-family: "Crimson Text", "Georgia", serif;
          background: #faf9f6;
          color: #2c3e50;
        }

        /* Video Section */
        .video-section {
          height: 100vh;
          position: relative;
          overflow: hidden;
        }

        .video-container {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .hero-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
        }

        /* YouTube Video Styles (if using YouTube option) */
        .youtube-video {
          width: 100vw;
          height: 100vh;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        @media (min-aspect-ratio: 16/9) {
          .youtube-video {
            height: 56.25vw;
          }
        }

        @media (max-aspect-ratio: 16/9) {
          .youtube-video {
            width: 177.78vh;
          }
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(0, 0, 0, 0.5) 100%
          );
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }

        .video-overlay-text {
          text-align: center;
          color: white;
          z-index: 2;
          padding: 2rem;
        }

        .couple-names {
          font-size: 5rem;
          font-weight: 300;
          margin-bottom: 1rem;
          color: white;
          text-shadow: 0 0 40px rgba(0, 0, 0, 0.8);
          letter-spacing: 3px;
          font-family: "Playfair Display", serif;
          animation: fadeInUp 1s ease-out;
        }

        .wedding-date-hero {
          font-size: 2rem;
          color: #d4af37;
          letter-spacing: 5px;
          font-weight: 300;
          text-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
          animation: fadeInUp 1s ease-out 0.3s backwards;
        }

        .video-subtitle {
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.9);
          margin-top: 1rem;
          font-style: italic;
          animation: fadeInUp 1s ease-out 0.6s backwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Countdown Section */
        .countdown-section {
          padding: 5rem 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-align: center;
        }

        .section-title {
          font-size: 3rem;
          margin-bottom: 3rem;
          font-weight: 300;
          letter-spacing: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .inline-icon {
          color: #d4af37;
        }

        .countdown-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .countdown-item {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          padding: 2rem;
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: transform 0.3s ease;
        }

        .countdown-item:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.25);
        }

        .countdown-number {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          font-family: "Playfair Display", serif;
        }

        .countdown-label {
          font-size: 1.2rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          opacity: 0.9;
        }

        /* Location Section */
        .location-section {
          padding: 5rem 2rem;
          background: white;
        }

        .location-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .map-container {
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        .location-details {
          text-align: center;
        }

        .location-details h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #667eea;
        }

        .venue-name {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #2c3e50;
        }

        .venue-address {
          font-size: 1.2rem;
          color: #7f8c8d;
          margin-bottom: 2rem;
        }

        .directions-btn {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 1rem 3rem;
          border-radius: 50px;
          text-decoration: none;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
        }

        .directions-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(102, 126, 234, 0.6);
        }

        /* Events Section */
        .events-section {
          padding: 5rem 2rem;
          background: linear-gradient(to bottom, #faf9f6, #f0ede5);
        }

        .events-timeline {
          max-width: 900px;
          margin: 0 auto 4rem;
        }

        .event-day {
          background: white;
          margin-bottom: 1.5rem;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .event-day.highlight {
          border: 2px solid #ff6b6b;
          box-shadow: 0 5px 30px rgba(255, 107, 107, 0.3);
        }

        .event-day summary {
          padding: 1.5rem 2rem;
          cursor: pointer;
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-left: 5px solid;
          transition: background 0.3s ease;
        }

        .event-day summary:hover {
          background: #f8f9fa;
        }

        .event-day summary::-webkit-details-marker {
          display: none;
        }

        .event-header {
          flex: 1;
        }

        .event-date {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 0.3rem;
        }

        .event-title {
          font-size: 1.8rem;
          color: #2c3e50;
          font-weight: 300;
        }

        .chevron {
          transition: transform 0.3s ease;
          color: #7f8c8d;
        }

        .event-day[open] .chevron {
          transform: rotate(180deg);
        }

        .event-details {
          padding: 0 2rem 2rem 2rem;
          border-top: 1px solid #ecf0f1;
          margin-top: 1rem;
        }

        .event-item {
          padding: 1.5rem;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          border-radius: 10px;
          margin-top: 1rem;
        }

        .event-time {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #7f8c8d;
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }

        .event-name {
          font-size: 1.4rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 0.5rem;
        }

        .event-description {
          color: #5d6d7e;
          line-height: 1.6;
        }

        /* Dress Code */
        .dress-code-section {
          max-width: 1000px;
          margin: 4rem auto 0;
          text-align: center;
        }

        .dress-code-section h3 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: #2c3e50;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .dress-code-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .dress-code-item {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }

        .dress-code-item:hover {
          transform: translateY(-5px);
        }

        .dress-code-item.highlight-dress {
          background: linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%);
          color: white;
        }

        .dress-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .dress-code-item h4 {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
        }

        .dress-code-item p {
          opacity: 0.8;
          line-height: 1.6;
        }

        /* Info Section */
        .info-section {
          padding: 5rem 2rem;
          background: white;
        }

        .info-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .info-card {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          text-align: center;
          transition: all 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .info-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .info-card h4 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: #2c3e50;
        }

        .info-card p {
          color: #7f8c8d;
          line-height: 1.6;
        }

        /* RSVP Section */
        .rsvp-section {
          padding: 5rem 2rem;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
        }

        .rsvp-form {
          max-width: 500px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          padding: 3rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .form-group {
          margin-bottom: 2rem;
          text-align: left;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
          font-weight: 500;
        }

        .form-group input {
          width: 100%;
          padding: 1rem;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.9);
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .form-group input:focus {
          outline: none;
          border-color: white;
          background: white;
        }

        .guest-counter {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
        }

        .counter-btn {
          width: 50px;
          height: 50px;
          border: 2px solid white;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          font-size: 1.5rem;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .counter-btn:hover {
          background: rgba(255, 255, 255, 0.4);
          transform: scale(1.1);
        }

        .guest-count {
          font-size: 2rem;
          font-weight: 600;
          min-width: 50px;
          text-align: center;
        }

        .submit-btn {
          width: 100%;
          padding: 1.2rem;
          background: white;
          color: #f5576c;
          border: none;
          border-radius: 50px;
          font-size: 1.2rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: "Crimson Text", serif;
        }

        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .thank-you-message {
          text-align: center;
          max-width: 500px;
          margin: 0 auto;
        }

        .thank-you-icon {
          width: 80px;
          height: 80px;
          margin-bottom: 2rem;
          animation: heartbeat 2s ease-in-out infinite;
        }

        .thank-you-message h3 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .thank-you-message p {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          opacity: 0.95;
        }

        .guest-count-confirm {
          font-size: 1.5rem;
          margin-top: 1rem;
          font-weight: 600;
        }

        /* Footer */
        .footer {
          background: #2c3e50;
          color: white;
          padding: 4rem 2rem;
          text-align: center;
        }

        .footer-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .footer-symbol {
          margin-bottom: 2rem;
        }

        .footer-heart {
          width: 50px;
          height: 50px;
          color: #ff6b6b;
          animation: heartbeat 2s ease-in-out infinite;
        }

        .footer-names {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-family: "Playfair Display", serif;
        }

        .footer-name {
          font-weight: 300;
        }

        .footer-separator {
          margin: 0 1rem;
          opacity: 0.6;
        }

        .footer-date {
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
          color: #d4af37;
          letter-spacing: 2px;
        }

        .footer-quote {
          font-style: italic;
          font-size: 1.2rem;
          margin-bottom: 1rem;
          opacity: 0.9;
        }

        .footer-tagline {
          font-size: 1rem;
          opacity: 0.7;
          letter-spacing: 1px;
        }

        /* Scroll Animation */
        .fade-in-scroll {
          opacity: 0;
          transform: translateY(50px);
          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }

        .fade-in-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .couple-names {
            font-size: 3rem;
          }

          .wedding-date-hero {
            font-size: 1.5rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .location-content {
            grid-template-columns: 1fr;
          }

          .countdown-number {
            font-size: 2.5rem;
          }

          .bride-groom-names {
            font-size: 2rem;
          }

          .footer-names {
            font-size: 1.8rem;
          }
        }

        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Crimson+Text:wght@400;600&family=Playfair+Display:wght@300;400;700&display=swap");
      `}</style>
    </div>
  );
};

export default WeddingInvitation;
