import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import { Button } from './ui/button';

// Placeholder board members - can be replaced with real data later
const placeholderMembers = [
  { id: 1, name: 'Board Member 1', role: 'Chairman', bio: 'Leadership role placeholder' },
  { id: 2, name: 'Board Member 2', role: 'Vice Chairman', bio: 'Leadership role placeholder' },
  { id: 3, name: 'Board Member 3', role: 'Secretary', bio: 'Leadership role placeholder' },
  { id: 4, name: 'Board Member 4', role: 'Treasurer', bio: 'Leadership role placeholder' },
  { id: 5, name: 'Board Member 5', role: 'Member at Large', bio: 'Leadership role placeholder' },
  { id: 6, name: 'Board Member 6', role: 'Member at Large', bio: 'Leadership role placeholder' }
];

export const BoardCarousel = ({ members = placeholderMembers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, members.length - itemsPerView);

  const next = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
          }}
        >
          {members.map((member) => (
            <div
              key={member.id}
              className="flex-shrink-0 px-4"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 h-full hover:border-amber-500/50 transition-all duration-300 group">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <User className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 text-center">{member.name}</h3>
                <p className="text-amber-400 font-semibold mb-4 text-center">{member.role}</p>
                <p className="text-slate-300 text-center">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      {members.length > itemsPerView && (
        <>
          <Button
            onClick={prev}
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-slate-800/90 border-slate-700 text-white hover:bg-slate-700 hover:text-amber-400 rounded-full w-12 h-12"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            onClick={next}
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-slate-800/90 border-slate-700 text-white hover:bg-slate-700 hover:text-amber-400 rounded-full w-12 h-12"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-amber-500 w-8'
                : 'bg-slate-600 hover:bg-slate-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};