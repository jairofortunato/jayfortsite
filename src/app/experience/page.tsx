import React from 'react';
import Sidebar from '@/components/Sidebar';

// Define a TypeScript interface for the content block
interface ContentBlock {
  title: string;
  description: string;
}

export default function Component() {
  // Function to render a single content block, now with types
  const renderContentBlock = ({ title, description }: ContentBlock) => (
    <div className="w-full lg:w-1/3 p-8">
      <div className="flex mb-4 border-t border-black"></div>
      <h2 className="text-2xl font-bold hover:italic">{title}</h2>
      <div className="flex mt-4 mb-4 border-t border-black"></div>
      <p className="mt-4 text-xl">{description}</p>

    </div>
  );


  // Array of content blocks data
  const contentBlocks = [
    {
      title: "Build & Sell | 2024",
      description: "Build & Sell is a web development and design studio that specializes in creating sites and micro-saas for small business."
    },
    
    {
      title: "Barbercard | 2023-2024",
      description: "Web tool for barbershops to manage purchase frequency and increase customer loyalty through automated messages on WhatsApp. Developed with React, Next.js, and TypeScript. I conducted complete back-end development, creating API endpoints and configuring the integration between Prisma and Planetscale database for efficient data management. I used Clerk for user authentication, ensuring security. Developed an innovative user interface with Tailwind CSS, focusing on intuitive navigation and an attractive design with a focus on the user's objective within the app. Developed a function to monitor the time since the last customer purchase and generate a personalized message. Implementation of a loyalty card system that rewards customers after a certain number of purchases.",
    },
    {
      title: "Data Analysis | 2022-2024",
      description: "Data Pipeline Management, ensuring data flow and integrations. Connection between SQL Database Server and Power BI. Management of Employee Database, implementing comprehensive data cleaning processes and collecting data from offices in Latin America and Europe, requiring bilingual communication skills (English and Spanish) to ensure accurate and up-to-date employee databases. Data Analysis and Reporting, leveraging Power BI to create informative real-time reports and dashboards. These tools were fundamental in enabling fast and effective decision-making processes in HR for the development and maintenance of metrics, developing key HR metrics to track and analyze performance, turnover, and other critical employee indicators. Assisted in HR administrative tasks, utilizing advanced Excel skills for data management and reporting, improving department efficiency and workflow optimization.",
    },
    {
      title: "Family Business Manager | 2019-2022",
      description: "Family business since 2007 selling fiberglass pools in the southern region of Santa Catarina to personal consumers. In 2017, Art Fibras started manufacturing pools for resellers. Leadership of sales team in pursuit of goals. Sold 562 pools during my supervision, with an average ticket of R$ 13,000. 180 of them were sold by me. Control and planning in Finance, Sales, Logistics, Technical Assistance, and Marketing leading people. Monthly individual conversations with employees. Restructuring of areas with systems and key metrics for process creation through Airtable and Google Workspace, task responsibility and simplification with CRM, calendars, dashboards, and spreadsheets. Responsible for production control, inventory, transport, delivery, and installation of pools, creating the best possible customer experience from purchase to delivery. Creation and execution of marketing campaigns, preparing attractive offers, creative design, persuasive text, budget setting, and advertisement execution on Google Ads and Facebook Ads. Content marketing on Instagram and YouTube. Video recording and editing. Analysis of content metrics. Updating processes to better platforms. Execution of accounts payable, accounts receivable, invoicing, inventory control, bank reconciliation, and cash flow result analysis using Quickbooks, Google Calendar, and Excel. Importation process of raw materials from China."
    },
    
    {
      title: "Podcast Pausa Pro Pito | 2021-2022",
      description: "Founder and host of the podcast on YouTube with 40 episodes and 14,800 total views.",
    },
    {
      title: "Political Campaign Marketing | 2020",
      description: "Social media video marketing for three political campaigns in the 2020 elections. One of the clients was elected.",
    },
    
  ];

  return (
    <div className="flex flex-col lg:flex-row bg-stone-200">
      <Sidebar />
  
      {/* Main content */}
      <div className="flex-1 flex flex-col relative">
  

        {/* Title */}
        <h1 className="px-3 mb-8 text-6xl font-medium mt-16">Experience</h1>
  
        {/* Content blocks */}
        <div className="flex flex-wrap">
          {contentBlocks.map((block, blockIndex) => (
            // Pass the entire block object to the function
            renderContentBlock(block)
          ))}
        </div>
  
      </div>
    </div>
  );}