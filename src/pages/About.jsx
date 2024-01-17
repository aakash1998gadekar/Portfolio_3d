import React from 'react'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { skills, experiences } from '../constants'
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className="max-container">
       <h1 className="head-text">
        Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Aakash</span>
        </h1>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
          I am currently pursuing post-graduation at the International Institute of Information Technology (IIIT) Bangalore. My interests lie in leveraging my software development skills to address real-world problems and create innovative solutions.In addition to software development, I am deeply interested in AI and ML. I find joy in exploring new technologies and staying abreast of the latest trends in the tech industry.
          </p>
        </div>

        <div className="py-10 flex flex-col">
          <h3 className="subhead-text">
            My Skills
          </h3>

          <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill)=>(
            <div className="block-container w-20 h-20">
              <div className="btn-black rounded-xl"/>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                src={skill.imageUrl}
                alt={skill.name}
                className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          ))}
          </div>
        </div>

        <div className="py-16">
          <h3 className="subhead-text">Work Experience</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
          Having been exposed to various cultures and diverse groups of people, I have developed the ability to quickly adapt to changes and gain a broader perspective. I am inherently curious and enjoy continuous learning. Problem-solving and error resolution are aspects I find gratifying. As a detail-oriented individual, I meticulously organize my goals and tasks to ensure productivity.
          </p>
          </div>

          <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        </div>
        <hr className='border-slate-200' />

      <CTA />
    </section>
  );
}

export default About
