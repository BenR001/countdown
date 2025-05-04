'use client';
import Countdown from 'react-countdown';
import './globals.css'; // Ensure global styles are imported

export default function Home() {
  const targetDate = new Date('2025-05-19T00:00:00');

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="flex space-x-4">
        <div className="countdown-item">
          <div className="text-6xl font-semibold text-indigo-600">{days}</div>
          <div className="text-lg text-gray-500">Days</div>
        </div>
        <div className="countdown-item">
          <div className="text-6xl font-semibold text-indigo-600">{hours}</div>
          <div className="text-lg text-gray-500">Hours</div>
        </div>
        <div className="countdown-item">
          <div className="text-6xl font-semibold text-indigo-600">{minutes}</div>
          <div className="text-lg text-gray-500">Minutes</div>
        </div>
        <div className="countdown-item">
          <div className="text-6xl font-semibold text-indigo-600">{seconds}</div>
          <div className="text-lg text-gray-500">Seconds</div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gradient-animate">
      <h1 className="text-7xl font-bold mb-4">Isabelle & Ben </h1>
      <Countdown date={targetDate} renderer={renderer} />
    </div>
  );
}
