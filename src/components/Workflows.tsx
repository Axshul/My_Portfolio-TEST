import React, { ReactNode, FC } from "react";

interface WorkflowCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  tags: string[];
}

const WorkflowCard: FC<WorkflowCardProps> = ({ icon, title, description, tags }) => {
  return (
    <div className="workflow-card">
      <div className="workflow-card-inner card p-6 rounded-2xl h-full">
        <div className="bg-gradient-to-br from-indigo-600/20 to-emerald-500/20 rounded-xl p-4 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs bg-indigo-900/50 text-indigo-300 px-2 py-1 rounded">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Workflows: React.FC = () => {
  const workflows = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      title: "Customer Support Agent",
      description: "An AI-powered workflow that handles customer inquiries, provides instant responses, and escalates complex issues to human agents when necessary.",
      tags: ["Customer Service", "AI", "Automation"]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "RAG Agent",
      description: "A Retrieval-Augmented Generation workflow that combines knowledge base retrieval with generative AI to provide accurate, context-aware responses.",
      tags: ["Knowledge Base", "LLM", "Information Retrieval"]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "ElevenLabs Outbound Call Agent",
      description: "An automated workflow that uses ElevenLabs' voice synthesis technology to make personalized outbound calls for appointment reminders, follow-ups, and surveys.",
      tags: ["Voice AI", "Telephony", "Customer Engagement"]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      title: "Intelligent Alerting System",
      description: "A workflow that monitors business metrics and sends smart alerts when anomalies are detected, with contextual information and suggested actions.",
      tags: ["Monitoring", "Alerts", "AI Analysis"]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Automated Lead Nurturing",
      description: "A workflow that tracks prospect interactions and automatically sends personalized follow-ups based on behavior and engagement level.",
      tags: ["Marketing", "Lead Generation", "Personalization"]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: "Document Processing",
      description: "A workflow that extracts data from various document formats, processes it using AI, and integrates it into business systems.",
      tags: ["OCR", "Document Management", "Data Extraction"]
    }
  ];

  return (
    <section id="workflows" className="py-20 section">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="gradient-text">n8n Workflows</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workflows.map((workflow, index) => (
            <WorkflowCard 
              key={index}
              icon={workflow.icon}
              title={workflow.title}
              description={workflow.description}
              tags={workflow.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflows;