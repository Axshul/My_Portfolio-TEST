import { useEffect } from 'react';

const CustomCursor: React.FC = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor') as HTMLElement;
    const cursorDot = document.querySelector('.cursor-dot') as HTMLElement;
    const clickables = document.querySelectorAll('.clickable, a, button');
    
    const handleMouseMove = (e: MouseEvent) => {
      if (cursor && cursorDot) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    clickables.forEach(element => {
      element.addEventListener('mouseenter', () => {
        cursor?.classList.add('hover');
      });
      
      element.addEventListener('mouseleave', () => {
        cursor?.classList.remove('hover');
      });
    });
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor-dot"></div>
    </>
  );
};

export default CustomCursor;