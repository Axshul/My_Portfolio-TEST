const About: React.FC = () => {
  return (
    <section id="about" className="py-20 section">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="card p-8 rounded-2xl">
            <div className="aspect-square rounded-full bg-gradient-to-br from-indigo-600 to-emerald-500 mx-auto max-w-xs flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Deepankar Bhadrasen</h3>
            <p className="text-gray-300 mb-6">
              I'm a 21-year-old graduate from Symbiosis International University with a passion for AI and automation. My journey began when I discovered the transformative potential of AI in the business world.
            </p>
            <p className="text-gray-300 mb-6">
              Through extensive research and hands-on experience, I've developed expertise in creating intelligent automation solutions that help businesses streamline operations, reduce costs, and unlock new opportunities.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-indigo-400">Education</h4>
                <p className="text-gray-400">Symbiosis International University</p>
              </div>
              <div>
                <h4 className="font-bold text-indigo-400">Age</h4>
                <p className="text-gray-400">21 Years</p>
              </div>
              <div>
                <h4 className="font-bold text-indigo-400">Focus</h4>
                <p className="text-gray-400">AI Automation & n8n</p>
              </div>
              <div>
                <h4 className="font-bold text-indigo-400">Goal</h4>
                <p className="text-gray-400">Business Transformation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;