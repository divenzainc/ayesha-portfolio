type ArtefactImage = {
  src: string;
  alt: string;
};

type ArtefactGallery = {
  title: string;
  note: string;
  images: ArtefactImage[];
};

export type TeacherArtefact = {
  number: string;
  title: string;
  eyebrow: string;
  quote: string;
  accent: string;
  galleries: ArtefactGallery[];
  paragraphs: string[];
  lookingBack: string[];
  references: string[];
};

function numberedImages(folder: string, count: number, label: string): ArtefactImage[] {
  return Array.from({ length: count }, (_, index) => {
    const number = index + 1;

    return {
      src: `/${folder}/${number}.jpeg`,
      alt: `${label} memory ${number}`,
    };
  });
}

export const teacherArtefacts: TeacherArtefact[] = [
  {
    number: "01",
    title: "The Love That Shaped My Journey",
    eyebrow: "Learners, care, and classroom memories",
    quote:
      "The greatest reward of teaching is not found in certificates or titles. It is found in the hearts that remember us long after the lesson has ended.",
    accent: "sky",
    galleries: [
      {
        title: "Government School Memories",
        note: "Young learners, classroom moments, handmade gifts, and daily reminders of care.",
        images: numberedImages("school", 29, "Government school"),
      },
      {
        title: "SLIATE Learning Community",
        note: "Higher National Diploma students, celebrations, appreciation, and professional connection.",
        images: numberedImages("sliate", 12, "SLIATE"),
      },
    ],
    paragraphs: [
      "When people ask me why I have remained in the teaching profession for so many years, I often struggle to find a simple answer. It is certainly not because teaching is easy. Like every teacher, I have experienced demanding workloads, changing curricula, examination pressures, personal sacrifices and moments of self-doubt. Yet, despite these challenges, I have never lost my love for teaching. Looking back today, I realise that the reason has never been the profession itself. It has always been the people I have met along the way.",
      "Throughout my journey as an English language teacher, I have been blessed to receive two very different, yet equally meaningful, forms of love from my learners. Both have quietly shaped my professional identity and reminded me why I continue to choose this profession every single day.",
      "The first came from the young children in my rural government school. Children have a remarkable way of expressing affection with complete honesty. Their love is never planned or rehearsed; it simply appears in the smallest and most unexpected moments. A flower picked on the way to school, a handmade birthday card carefully coloured with tiny hands, a drawing folded neatly into my lesson file, a chocolate secretly placed on my desk, or a cheerful smile waiting for me every morning - these gestures may seem ordinary to others, but to me they have become priceless treasures.",
      "There were days when I entered the classroom feeling physically tired or emotionally exhausted. Yet, before the first lesson even began, a child's innocent smile or a simple \"Teacher, I missed you yesterday,\" was often enough to change my entire day. Without realising it, my learners became my greatest source of strength. Their genuine affection reminded me that before children are ready to learn from a teacher, they first need to feel safe with that teacher. Long before they remember grammar rules or vocabulary, they remember how a teacher made them feel.",
      "Several years later, another chapter of my professional journey began when I joined the Sri Lanka Institute of Advanced Technological Education (SLIATE) as a Visiting Lecturer. There, I taught Higher National Diploma students - young adults preparing to build their own professional futures, many of whom hoped to become English teachers themselves. I expected my relationship with these learners to be entirely different because they were mature adults rather than schoolchildren. Surprisingly, I discovered that genuine human connection has no age limit.",
      "Unlike children, my adult learners expressed their appreciation through thoughtful words rather than simple gestures. They wrote heartfelt messages after completing courses, surprised me with birthday celebrations, presented farewell gifts, shared personal reflections and continued to stay in touch even after graduating. Some still send messages to tell me about their careers, their achievements and the ways in which our classroom conversations continue to guide them. Every message reminds me that the influence of a teacher often extends far beyond the classroom walls.",
      "Although these two groups of learners belonged to different stages of life, they taught me exactly the same lesson. Children taught me the beauty of unconditional affection, while my Higher National Diploma students taught me the depth of respect earned through trust, encouragement and genuine care. Together, they transformed the way I understand teaching. I gradually stopped measuring my success only through examination results or completed lesson plans. Instead, I began recognising success in quieter moments - a learner who finally gained the confidence to speak English, a former student who returned simply to say \"Thank you, Madam,\" or a birthday card kept safely for years because it carried more meaning than any professional award.",
      "As I reflected on these experiences, I realised that meaningful teaching begins long before academic achievement. Nel Noddings (2005) argues that caring relationships form the foundation of authentic education because learners thrive when they feel genuinely valued and respected. Throughout my own journey, I have repeatedly witnessed this truth. Learners become more willing to participate, ask questions, take risks and overcome their fears when they know they are accepted without judgement. Language learning, therefore, is not built only through textbooks and classroom activities; it flourishes within relationships based on trust, empathy and mutual respect.",
      "Looking back today, I honestly believe that my learners have taught me as much as I have taught them. They have taught me patience when progress was slow, resilience when challenges seemed overwhelming, humility when I realised I still had much to learn, and gratitude for the privilege of becoming part of so many lives. Every birthday card, every handwritten note, every photograph, every farewell gift and every message preserved in this artefact tells a story - not of what I taught, but of what my learners quietly taught me about being a teacher.",
      "This artefact is therefore far more than a collection of memories. It represents the invisible thread that connects every stage of my teaching journey. Whenever I look at these photographs and messages, I do not simply remember classrooms or lessons. I remember the laughter we shared, the challenges we overcame together and the countless moments that reminded me why teaching has never been just a profession. It has become a relationship of mutual growth, where teachers shape learners while learners quietly shape their teachers in return.",
    ],
    lookingBack: [
      "Sometimes I ask myself what my learners will remember years from now. They may forget many grammar lessons, classroom activities or vocabulary exercises, and that is perfectly natural. However, I sincerely hope they will remember something much more important - that there was a teacher who listened, encouraged, believed in them and celebrated even their smallest achievements.",
      "Whenever I feel discouraged or overwhelmed, I return to these photographs, birthday cards, gifts and messages. They remind me that success in teaching cannot always be measured by grades or certificates. Sometimes it is measured by the smile of a child who finally believes in themselves, or by a former student who returns years later simply to say, \"Madam, thank you. You made a difference.\"",
      "If I leave behind that kind of memory in the hearts of my learners, I believe I will have achieved something far greater than completing a syllabus or preparing students for examinations. I will have fulfilled the true purpose of being an educator.",
    ],
    references: [
      "Noddings, N. (2005). The challenge to care in schools: An alternative approach to education (2nd ed.). Teachers College Press.",
      "Palmer, P. J. (2007). The courage to teach: Exploring the inner landscape of a teacher's life (10th anniversary ed.). Jossey-Bass.",
    ],
  },
  {
    number: "02",
    title: "Where Discipline Met Compassion",
    eyebrow: "Uniform, service, and professional character",
    quote:
      "Some lessons are learned inside classrooms. Others are learned while standing in formation before sunrise. Both became classrooms that shaped the teacher I am today.",
    accent: "blue",
    galleries: [
      {
        title: "National Cadet Corps",
        note: "Leadership, responsibility, teamwork, and the discipline that strengthened professional identity.",
        images: numberedImages("ncc", 11, "National Cadet Corps"),
      },
      {
        title: "Sri Lanka Military Academy",
        note: "English instruction, service memories, and the meeting point between education and leadership.",
        images: numberedImages("slma", 4, "Sri Lanka Military Academy"),
      },
    ],
    paragraphs: [
      "When people meet me for the first time, they usually see an English language teacher. What they rarely see is another chapter of my life that quietly shaped my professional identity long before I became the teacher standing in front of a classroom today. That chapter began during my teacher training at the National College of Education, where I was commissioned as an officer through the National Cadet Corps (NCC). It continued when I was later mobilized to serve with the Sri Lanka Army and eventually became an English Instructor at the Sri Lanka Military Academy.",
      "At that time, I never imagined that wearing a uniform would one day influence the way I would teach English. Initially, I believed military life was simply about discipline, punctuality and physical endurance. However, as the years passed, I realised that it was quietly transforming something much deeper - my character.",
      "Military training taught me that discipline is not about fear; it is about self-respect. It is the quiet determination to do the right thing even when nobody is watching. Every early morning parade, every demanding training exercise and every responsibility entrusted to me gradually strengthened qualities that would remain with me long after I returned to civilian life. Discipline became a daily habit. Dedication became a personal commitment. Hard work became a natural part of who I was rather than something expected of me. At the same time, I learned perseverance, tolerance, teamwork, leadership and the importance of remaining calm under pressure.",
      "Perhaps the greatest lesson I learned was that leadership is never about giving orders. It is about accepting responsibility for the people who trust you. As an officer, I learned that respect cannot be demanded; it must be earned through consistency, fairness, integrity and genuine concern for others. Years later, when I stood in front of my own classrooms, I realised that the same principle applied to teaching. Learners respond most positively not to authority itself, but to teachers who are prepared, dependable and genuinely invested in their success.",
      "Returning to the classroom after my military experiences, I noticed subtle but important changes in the way I worked. Lesson preparation became more systematic. Time management became a personal discipline rather than an external expectation. I learned to remain calm during unexpected situations, to make decisions with confidence and to approach every responsibility with commitment. More importantly, I discovered that discipline and kindness are not opposites. They complement one another. A well-managed classroom does not require fear; it requires clear expectations, mutual respect and genuine care.",
      "Throughout my years as a government school teacher, I have often encountered learners facing academic difficulties, emotional challenges and personal hardships. During such moments, I found myself drawing not only upon my educational training but also upon the resilience and patience developed through my military experiences. Those experiences taught me not to give up when situations became difficult, but instead to remain composed, adapt and continue moving forward. They reminded me that every challenge carries an opportunity for growth.",
      "Teaching at the Sri Lanka Military Academy later became another significant milestone in this journey. Standing before officer cadets as their English Instructor, I recognised a meaningful connection between my two worlds. Although my learners were very different from the children I taught in government schools, my purpose remained exactly the same - to help others grow with confidence. Whether teaching young children, adult diploma students or future military officers, I came to understand that education is fundamentally about empowering people to become the best version of themselves.",
      "Educational philosopher John Dewey (1938) believed that the most powerful learning grows from meaningful experience. Looking back, I realise that some of the most valuable lessons I have ever learned were never found in a textbook or university lecture. They were learned while wearing a uniform, accepting responsibility for others and understanding that true leadership begins with self-discipline. Those experiences continue to influence every lesson I prepare, every learner I encourage and every professional decision I make.",
      "Today, I no longer wear my uniform every day. However, I carry its values with me wherever I go. They are reflected in my preparation before every lesson, my commitment to my learners, my resilience during challenges and my determination never to stop improving. Although the uniform eventually became part of my past, the person it helped shape continues to live within the teacher I have become.",
    ],
    lookingBack: [
      "Sometimes I wonder whether my learners realise that every lesson I teach carries experiences far beyond the pages of a textbook. Many of the values I try to develop in them - discipline, perseverance, responsibility, teamwork and respect - were first developed within myself through experiences that took place long before they entered my classroom.",
      "When I look at these photographs today, I do not simply remember ranks, uniforms or ceremonies. I remember a journey that challenged me physically, mentally and emotionally, and in doing so, prepared me not only to become a stronger officer but also a better teacher and a better human being.",
      "If my learners leave my classroom believing that discipline can exist alongside kindness, that leadership begins with humility and that perseverance makes difficult goals possible, then I know those experiences continue to serve a purpose far greater than I ever imagined.",
    ],
    references: [
      "Dewey, J. (1938). Experience and education. Macmillan.",
      "Palmer, P. J. (2007). The courage to teach: Exploring the inner landscape of a teacher's life (10th anniversary ed.). Jossey-Bass.",
      "Schön, D. A. (1983). The reflective practitioner: How professionals think in action. Basic Books.",
    ],
  },
  {
    number: "03",
    title: "My Lifelong Passion for Learning",
    eyebrow: "Qualifications, courage, and continued growth",
    quote:
      "The day I believe I know everything will be the day I stop becoming the teacher my learners deserve.",
    accent: "cyan",
    galleries: [
      {
        title: "Learning Journey Certificates",
        note: "Teacher training, postgraduate study, professional learning, and milestones of continued growth.",
        images: numberedImages("certificates", 16, "Certificate"),
      },
    ],
    paragraphs: [
      "When I first entered the teaching profession, I believed that completing my teacher training had prepared me for the classroom. I felt excited, confident and ready to begin my career. However, it did not take long for me to realise that teaching was introducing me to questions that no textbook had fully answered.",
      "Every classroom was different. Every learner brought unique strengths, challenges and dreams. Some children learned quickly through stories, while others needed pictures, games or simply a little more encouragement. Some learners arrived carrying confidence, while others quietly carried fear. As I searched for better ways to reach every learner, I gradually realised that teaching itself had become my greatest teacher.",
      "Instead of believing that experience alone was enough, I developed an increasing desire to continue learning. What began as professional curiosity slowly became a lifelong passion. I discovered that every new learning opportunity expanded not only my knowledge but also my understanding of the learners who sat before me each day.",
      "Throughout my professional journey, I chose to continue my education while balancing the responsibilities of full-time teaching. Each qualification became another milestone - not because I wanted to collect certificates, but because I genuinely wanted to become a better teacher. My studies in English strengthened my language proficiency. Psychology helped me understand learners beyond their academic performance and reminded me that every learner brings emotional, social and personal experiences into the classroom. Linguistics allowed me to appreciate the beauty and complexity of language itself, while the MA TESL programme transformed the way I planned lessons, reflected on my teaching and viewed learning as an active, learner-centred process.",
      "Perhaps the most meaningful part of this journey was becoming a student again after many years of teaching. Sitting on the other side of the classroom reminded me what it feels like to struggle with assignments, question my own abilities, wait anxiously for feedback and celebrate small successes after weeks of hard work. Those experiences quietly changed me. They made me more patient with my own learners because I once again experienced the uncertainty, frustration and satisfaction that accompany genuine learning.",
      "My postgraduate journey also taught me the importance of reflection. Earlier in my career, I often judged my lessons by asking myself whether I had completed everything I had planned. Today, I ask different questions. Did my learners truly understand? Did they feel confident enough to participate? What could I improve tomorrow? This shift in thinking has perhaps been the greatest transformation in my professional life. Learning is no longer something I pursue for myself alone; it has become something I continuously share with every learner who enters my classroom.",
      "There have been moments when balancing work, family responsibilities and academic commitments felt overwhelming. There were evenings when lesson planning was followed immediately by assignment writing, weekends spent completing research instead of resting, and countless occasions when I questioned whether I had the strength to continue. Yet every challenge strengthened my belief that meaningful growth rarely happens within our comfort zone. Looking back, I now realise that perseverance became one of the most valuable lessons my education taught me.",
      "UNESCO (2020) describes lifelong learning as a continuous process that enriches individuals throughout every stage of life. Reflecting on my own journey, I recognise that lifelong learning has become much more than professional development. It has become part of who I am. Every course I completed, every book I read, every workshop I attended and every classroom experience has gradually shaped my identity as an educator. More importantly, each learning experience has enabled me to create richer and more meaningful learning opportunities for my own students.",
      "Sometimes my learners ask me why I continue studying after so many years of teaching. My answer is always simple. I tell them that teachers should never ask learners to love learning unless they are willing to demonstrate that love themselves. I hope my students see not only the qualifications displayed on a wall but also the curiosity, enthusiasm and humility that continue to guide my own journey.",
      "This artefact therefore represents far more than academic achievements. It represents a promise I made to myself many years ago - that I would never allow my teaching to become routine or my curiosity to disappear. As long as I continue learning, I know I will continue growing - not only as a teacher, but also as a person.",
    ],
    lookingBack: [
      "When I look at this journey today, I do not see degrees, certificates or academic titles. I see moments of courage, sacrifice, uncertainty, perseverance and hope. Every qualification reminds me of a chapter in my life when I chose growth instead of comfort and curiosity instead of complacency.",
      "I often tell my learners that education is one journey where the destination continually changes as we grow. Today, I understand that those words describe my own life as well. I may complete courses and earn qualifications, but my journey as a learner will never truly end.",
      "If there is one lesson I hope my students carry with them beyond the classroom, it is this: never stop learning, because every new experience has the power to change not only what you know, but also who you become.",
      "That, perhaps, is the greatest lesson teaching has taught me.",
    ],
    references: [
      "Palmer, P. J. (2007). The courage to teach: Exploring the inner landscape of a teacher's life (10th anniversary ed.). Jossey-Bass.",
      "Schön, D. A. (1983). The reflective practitioner: How professionals think in action. Basic Books.",
      "UNESCO Institute for Lifelong Learning. (2020). Embracing a culture of lifelong learning.",
    ],
  },
];
