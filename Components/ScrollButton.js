import React, {useState, useEffect} from 'react';
const ScrollButton = () =>{  

  const [visible, setVisible] = useState(false)
    useEffect(() => {
        const toggleVisible = () => {
            const scrolled = document.documentElement.scrollTop;
            if (scrolled > 100){
              setVisible(true)
            } 
            else if (scrolled <= 100){
              setVisible(false)
            }
        }; 
        
        window.addEventListener('scroll', toggleVisible);

          return () => { 
            window.addEventListener('scroll', toggleVisible);
          }; 
    }, []);

    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
    };
  
  return (
    <div 
      className="fixed bottom-10 right-10 z-50 leading-10 text-center text-white rounded-full p-2 cursor-pointer h-14 w-14 hover:shadow-md bg-red-400 hover:shadow-xl active:scale-90 transition duration-150" onClick={scrollToTop} 
      style={{display: visible ? 'inline' : 'none'}}
      onClick={scrollToTop}
    > 
      ^
    </div>
  );
}
  
export default ScrollButton;