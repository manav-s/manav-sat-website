import type { BlogPost } from "./posts";

export const VIDEO_POSTS: BlogPost[] = [
  {
    "slug": "sat-percentage-problems-three-cases",
    "title": "How to Solve SAT Percentage Problems Without Mixing Up the Cases",
    "description": "An edited transcript on the three percentage cases that show up on the SAT: of, greater than, and less than.",
    "publishedAt": "2026-05-04",
    "videoId": "BMCTLWd78vQ",
    "keywords": [
      "SAT percentage problems",
      "SAT math percentages",
      "percentage increase SAT",
      "percentage decrease SAT",
      "SAT word problems percentages"
    ],
    "intro": [
      "Hi there, everyone. My name is Manav. If you do not know me, I scored perfectly on the SAT and I have taught the SAT for five years, so I know a thing or two about how percentage questions work on this test.",
      "I wanted to make a separate lesson for this topic because I have seen even my strongest students get tripped up by it again and again. The actual math is usually not hard. The cases just blend together really well if you are moving too fast.",
      "So in this article, I am going to walk through the same structure I use in the video: the three percentage cases, the word cues that tell you which case you are in, and a few SAT-style examples where we translate the English one sentence at a time."
    ],
    "sections": [
      {
        "heading": "The three cases students mix up",
        "body": [
          "The three cases my students mix up are all distinct. The first case is when you see the word of. This is the simplest version. If a question asks for a percent of a number, you convert the percent to a decimal and multiply by the base number.",
          "For example, if the question says 10% of 200, you move the decimal two places left to get 0.10, then multiply 0.10 by 200. You get 20. That is the direct percent-of case.",
          "The second case is when you hear wording like greater than, more than, increased by, or increased over. For these, I want you to think tax. If you have a $100 subtotal and there is a 10% tax, you do not pay $10 total. You pay the original $100 plus the $10 tax, so the total is $110.",
          "That means 10% greater than 200 is not 0.10 times 200. It is 110% of 200, which is 1.10 times 200. That gives you 220.",
          "The third case is the opposite: less than, decreased by, or discounted by. For this one, think discount. If you have a 20% off coupon, the 20% is the part you are not paying. What remains is 80%, so you multiply by 0.80.",
          "If you are paying 10% less than 200, you are paying 90% of 200. That is 0.90 times 200, which gives 180. Same percent, completely different multiplier. That is why the wording matters so much."
        ],
        "bullets": [
          "Percent of means multiply by the decimal version of the percent.",
          "Percent greater than means add that percent to 100% first.",
          "Percent less than means subtract that percent from 100% first.",
          "Do not start calculating until you know which case the sentence is using."
        ]
      },
      {
        "heading": "The word cues I want you to remember",
        "body": [
          "There are a few word cues that save a lot of time. In math word problems, the word of often acts like multiplication. The word is often acts like an equal sign. Greater than should make you think tax. Less than should make you think discount.",
          "That might sound too simple, but this is exactly how you avoid randomly grabbing numbers from the question. You are not hunting for numbers. You are translating a sentence into an equation.",
          "When the SAT says a population is K times another population, I literally split the sentence at is. Everything before is goes on the left side. Everything after is goes on the right side. That one habit keeps the relationship clean."
        ],
        "bullets": [
          "of: multiply",
          "is: equals",
          "greater than: tax, so use 100% plus the increase",
          "less than: discount, so use 100% minus the decrease"
        ]
      },
      {
        "heading": "Example one: 35% of 240 items",
        "body": [
          "Here is the first practice question. A store has 240 items in stock. If 35% are on sale, how many items are on sale?",
          "This is the simple case because the question is asking for 35% of 240. You are not increasing the 240. You are not discounting the 240. You are finding the portion of the stock that is on sale.",
          "So we convert 35% to 0.35 and multiply: 240 times 0.35. That gives 84. So 84 items are on sale.",
          "Notice that there is no second step here. A lot of students make percentage questions harder because they assume every percent question needs some trick. This one does not. It is just the of case."
        ]
      },
      {
        "heading": "Example two: 20% greater than last year",
        "body": [
          "Now try this one. This year's enrollment is 20% greater than last year's enrollment of 350 students. How many students are enrolled this year?",
          "Last year's enrollment is 350 students, and that original amount represents 100% of last year's class. This year is 20% greater than that, so we add 20% on top of the original 100%.",
          "That gives 120% total. As a decimal, 120% is 1.20. So we calculate 350 times 1.20, which gives 420.",
          "The common wrong answer is 70 because 20% of 350 is 70. But 70 is only the increase. The question asks for this year's enrollment, which includes last year's 350 plus the increase."
        ]
      },
      {
        "heading": "Example three: 40% less than the original price",
        "body": [
          "The third basic example is the discount case. The sales price is 40% less than the original price of $150. What is the sales price?",
          "The original price is 100%. A 40% discount means we chop away 40% of that original price. What remains is 60%.",
          "So the sales price is 60% of 150. We calculate 150 times 0.60, which gives 90. The new price is $90.",
          "Again, the percent in the sentence is not always the percent you pay. In a less-than question, the percent in the sentence is usually the amount removed. You have to ask what is left."
        ]
      },
      {
        "heading": "A real SAT-style question: population increased by 7%",
        "body": [
          "Now let us look at a more SAT-like version. The population of Greenville increased by 7% from 2015 to 2016. If the 2016 population is K times the 2015 population, what is the value of K?",
          "First, I see the word is. That is my equal sign. The left side is the 2016 population. The right side is K times the 2015 population.",
          "The question says the population increased by 7%. That means the 2016 population is the original 2015 population plus 7% of that population. In other words, it is 107% of the 2015 population.",
          "As a decimal, 107% is 1.07. Since the question says the 2016 population is K times the 2015 population, K must be 1.07.",
          "This is the greater-than case again, just with a variable instead of a final number. The logic is exactly the same."
        ]
      },
      {
        "heading": "The shirt question that trips everyone up",
        "body": [
          "The question that trips up a lot of students is the chained one. The regular price of a shirt at a store is $11.70. The sales price is 80% less than the regular price, and the sales price is 30% greater than the store's cost for the shirt. What was the store's cost?",
          "When I see a question like this, I do not try to combine the whole thing in my head. I translate each sentence into an expression or equation one by one.",
          "The first sentence is simple: the regular price is $11.70. I can call the regular price R, so R equals 11.70.",
          "The second sentence says the sales price is 80% less than the regular price. Let the sales price be S. If the sales price is 80% less than regular price, then the customer is paying the remaining 20%. So S equals 0.20R.",
          "Since R is 11.70, the sales price is 0.20 times 11.70, which is 2.34. So S equals 2.34.",
          "The third sentence says the sales price is 30% greater than the store's cost. Let the cost be C. Greater than means tax, so the sales price is 130% of the cost. That means S equals 1.30C.",
          "We already know S is 2.34, so 2.34 equals 1.30C. Divide both sides by 1.30 and you get C equals 1.80. The store's cost was $1.80.",
          "The reason this question feels hard is not the arithmetic. It is that the SAT stacks two percentage relationships on top of each other. If you translate one sentence at a time, it becomes manageable."
        ]
      },
      {
        "heading": "What this is really testing",
        "body": [
          "If you nail this topic, it is an easy place to pick up points because percentage language comes up so often. These questions are really testing how well you can translate words into expressions.",
          "Do the translation first. Then do the arithmetic. If you remember of means multiply, greater than means tax, and less than means discount, you will stop mixing up questions that look almost the same on the surface."
        ]
      }
    ],
    "closing": [
      "The main lesson is simple: do not multiply by the visible percent just because it is sitting there. Figure out whether the question is asking for a piece, an increase, or a remaining amount after a decrease.",
      "Once you can separate those three cases, SAT percentage questions become translation questions, not mystery questions."
    ],
    "readingTime": "9 min read"
  },
  {
    "slug": "why-i-make-sat-students-read-books",
    "title": "Why I Make My SAT Students Read One Book a Month",
    "description": "An edited transcript on why sustained reading helps SAT focus, working memory, vocabulary, and patience.",
    "publishedAt": "2026-05-04",
    "videoId": "yu39UbIkgD0",
    "keywords": [
      "SAT reading attention span",
      "books for SAT prep",
      "improve SAT focus",
      "SAT reading books",
      "SAT prep attention span"
    ],
    "intro": [
      "Hello, everybody. My name is Manav, and I am an SAT tutor. If you do not know me, I scored perfectly on the SAT and I have taught students how to study for the exam for the past five years.",
      "Today I want to talk about how to unfry your brain for the SAT. That sounds dramatic, but I mean it seriously. To put in the hours on the weekend when no one is watching, you need the ability to ignore your phone and sit down. I feel like we have low-key lost that as a society.",
      "This is why I force my students to read one book per month minimum while they are working with me. It is not because I need them to love literature. It is because reading trains the exact mental muscle the SAT quietly demands."
    ],
    "sections": [
      {
        "heading": "Why I care about reading in SAT prep",
        "body": [
          "I am not assigning books because I care which celebrity memoir you read or because I need every student to study Steve Jobs, Thomas Edison, or some other famous person. Books are great. Books have been one of the best pastimes of my life, and I have learned a lot from both fiction and nonfiction.",
          "But that is not the main reason I assign them. The real reason is that, as a Gen Z person myself, I can say our brains are completely fried. I consume at least an hour of short-form content a day, whether that is Instagram Reels, TikTok, or whatever else. Honestly, if I checked my screen time, it would probably embarrass me.",
          "We digest so much short-form content that it is genuinely insane. This is the first time in human history that people have been exposed to something like this constantly, and obviously it is not great for attention span."
        ]
      },
      {
        "heading": "Short-form content trains the opposite skill",
        "body": [
          "Short-form content gives you constant novelty. Every few seconds there is a new joke, a new face, a new caption, a new argument, or a new clip. It trains your brain to expect information overload and quick dopamine hits.",
          "I compare it to someone who vapes or smokes cigarettes. Their dopamine baseline can get pushed upward, and then normal tasks feel boring by comparison. Sustained studying becomes harder because the studying does not give you that same constant hit.",
          "Short-form content also trains your brain not to think deeply about what you are consuming. You are going to scroll past it in a few seconds anyway, so your processing stays surface-level.",
          "The SAT requires the opposite. It requires more than two hours of concentration. It requires careful reading. It requires working memory, because you have to remember what you just read and use it when you look through answer choices."
        ]
      },
      {
        "heading": "How books retrain your attention",
        "body": [
          "Reading books retrains this because you are forced to understand context. If it is fiction, you have to remember characters, situations, motives, and what happened earlier. If it is nonfiction, you have to work through dense passages of facts, science, arguments, and examples.",
          "That is good brain insurance. It forces your mind to stay with one thing for longer than a few seconds. It forces you to build a thread of meaning across pages instead of constantly resetting your attention.",
          "That is exactly what students need when they sit down for the SAT. Even though the digital SAT has shorter passages than the old test, the questions still punish shallow reading. If you do not hold the context in your head, you start choosing answers by vibes."
        ]
      },
      {
        "heading": "The vocabulary benefit is real too",
        "body": [
          "You also get the extra benefit of better vocabulary. I do not mean you will magically memorize every hard word. I mean you will get better at using context clues.",
          "When you read a lot, you constantly run into words you do not fully know. Your brain starts comparing roots, tone, sentence structure, and surrounding details. Eventually you get that feeling of, I do not know the word exactly, but I kind of know what it is doing here.",
          "That skill matters on SAT vocabulary questions. You do not need to know every word cold. You need to stay calm, read the sentence, and figure out what kind of meaning belongs in the blank."
        ]
      },
      {
        "heading": "The real point of one book per month",
        "body": [
          "One book per month is not meant to be punishment. It is a minimum rep. I want students to prove to themselves that they can sit with a longer piece of writing and finish it.",
          "The book can be fiction or nonfiction. It can be something academic or something normal. The important part is that it requires focus. You should not pick something so easy that your brain does nothing, and you should not pick something so painful that you quit after ten pages.",
          "Outside the test, you get a better attention span. And yes, you also get to be a little performative and read in public, which is always great. But for SAT purposes, the main goal is simple: rebuild the ability to focus when focusing is not immediately entertaining."
        ]
      }
    ],
    "closing": [
      "If you are studying for the SAT, do not limit your attention to formulas and grammar rules. Think about the condition of your attention span.",
      "Reading one book per month is a clean way to train that attention span, build vocabulary context, and make dense SAT wording feel less painful."
    ],
    "readingTime": "5 min read"
  },
  {
    "slug": "what-sat-score-do-you-actually-need",
    "title": "What SAT Score Do You Actually Need?",
    "description": "An edited transcript on SAT score ranges, when to keep pushing, and when your time is better spent elsewhere.",
    "publishedAt": "2026-05-04",
    "videoId": "jTQa0C1einM",
    "keywords": [
      "what SAT score do I need",
      "good SAT score",
      "SAT score ranges",
      "SAT college admissions",
      "SAT score goals"
    ],
    "intro": [
      "Hi everyone. My name is Manav. If you do not know me, I am a perfect scorer and I have been teaching the SAT for over five years at this point.",
      "Since you saw the title, we are talking about what SAT score you actually need. This is important because if you do not quantify your goal, it is hard to know when to be satisfied, when to stop, and when you need to keep your foot on the gas.",
      "I truly believe you can reach your goal, but the goal has to be real. A 1200 goal, a 1450 goal, and a 1580 goal are not the same project, and they should not take the same amount of your time."
    ],
    "sections": [
      {
        "heading": "SAT scores are like keys or club bouncers",
        "body": [
          "The way I think about SAT scores is that they are like keys, or like a club bouncer. Hopefully, if you are watching this, you have not actually been in a club because you are probably in high school, but you know the concept. Somebody stands outside and checks who gets in.",
          "The SAT works as a gatekeeper. If your SAT score is too low for the school you are applying to, they may ignore you unless something else about your application is truly special. If you have a Nobel Peace Prize and a 1000, sure, they will probably look. Most people are not in that category.",
          "But students also make the opposite mistake. They think a perfect score means college admissions becomes easy. I got a perfect score, and that is not true. A high score gives you a chance to play. It does not guarantee admission.",
          "You can find students with a 1550 and a 4.0 GPA who still get rejected from a lot of Ivy League schools. Every highly selective school is distinct, and they are not admitting based on SAT alone."
        ]
      },
      {
        "heading": "900 to 1050: you are becoming college ready, but options are limited",
        "body": [
          "The first band is roughly 900 to 1050. If you are below this, I am going to be blunt: you need to step your game up. This is around the range where you start becoming somewhat college ready, but your options are limited.",
          "You may have access to some state universities and less selective private colleges. There may be small GPA-dependent merit awards, especially if your grades are strong, but for the most part you should not expect the SAT to create a huge amount of scholarship upside yet.",
          "At this range, the limiting factor is usually content. You do not know enough math yet, or you do not know enough reading and writing yet. Strategy is not the main issue. The main issue is that the foundation is not there."
        ]
      },
      {
        "heading": "1050 to 1200: the first high-return zone",
        "body": [
          "Once you move into the 1050 to 1200 range, a lot of familiar state universities become much more realistic than they were in the previous tier. You also start getting some access to mid-tier private colleges, although it is not a wide-open field.",
          "This score says you are a solid student. Nothing crazy, to be honest, but solid. Schools like FIU or Texas State are examples of the type of place that starts to make more sense in this range.",
          "The limit is still mostly content. You need to pay more attention to math, read more, improve vocabulary, and close the basic gaps. The good news is that content is a good limit to have because you can attack it directly."
        ]
      },
      {
        "heading": "1200 to 1350: competitive and academically capable",
        "body": [
          "The 1200 to 1350 range is where I start to feel much more comfortable telling students what to expect. At this point, you are considered a competitive applicant with something real to show.",
          "You have broad access to strong public universities, places like Rutgers, Penn State, and the University of Arizona. You have better odds at selective private schools too, although you are not just walking in.",
          "Colleges will generally see you as academically capable and competitive. The limit here is still often content, but now the content gap is more specific. You probably know a lot, but there are still question types and topic areas that keep leaking points."
        ]
      },
      {
        "heading": "1350 to 1450: strategy starts to matter more",
        "body": [
          "From 1350 to 1450, you are among the top students at most schools. You are competitive at many top 50 schools, and you can probably get large merit scholarships at a lot of colleges, especially if you are aiming below the most selective group.",
          "This is also where your SAT can create forgiveness in other parts of your application. If your GPA is not perfect, a strong SAT score can make colleges wonder whether your school is harder, whether one semester was weird, or whether there is more academic strength than the transcript alone shows.",
          "The limit changes here. It is not just content anymore. If I locked you in a room with the SAT for 24 hours, you could probably get to 1500 because you know a lot of the material. Your issue shifts toward execution and strategy.",
          "You need to learn question types more precisely. You need strategies for sections, pacing, review, and when to skip. You need to make sure you are not giving up while you still have time left. At this score range, how you take the test matters a lot."
        ]
      },
      {
        "heading": "1450 to 1550: elite schools will take a serious look",
        "body": [
          "The next tier is the 1450 to 1550 range. This is when Ivy-adjacent schools, top 20 schools, and highly selective private schools start taking you seriously in a different way.",
          "These are places like Northeastern, USC, NYU, and the schools everyone has heard about because they send you mail and people write songs about them. You are not guaranteed admission, but your score is not the reason they throw out your application.",
          "This is a strong zone. If you are here, your SAT is doing its job. The rest of the application matters: essays, extracurriculars, leadership, recommendations, and the story you are telling."
        ]
      },
      {
        "heading": "1550 to 1600: diminishing returns are real",
        "body": [
          "The last tier is 1550 to 1600, and I call it the diminishing return zone. I grinded until I was in this zone myself, so I am not saying it is bad. But I do think I made an error by spending more time than I needed after I was already in the previous zone.",
          "If you come to me with a 1550 and tell me you want to retake the exam, I will obviously take your money if you insist, but I will also have to hold back laughter a little bit. The weekends you spend chasing 20 more points may be better spent on essays, extracurriculars, leadership, or honestly sitting in the sun and thinking about your life.",
          "At this point, you have a huge amount of signaling power. You may be in full scholarship territory at certain schools, and for the most selective schools your score is already elite. Beyond 1550, most people do not care about the difference the way students think they do."
        ],
        "bullets": [
          "Around 1000 is average.",
          "Around 1200 is solid.",
          "Around 1300 is strong.",
          "Around 1400 is very strong.",
          "Around 1500 is elite.",
          "Beyond 1550, your time may be better spent somewhere else."
        ]
      },
      {
        "heading": "A few myths I hear all the time",
        "body": [
          "The first myth is that a 1500 guarantees Ivy League admission. I wish that were true. If it were, I would be wearing a Harvard sweatshirt in the video. Unfortunately, they did not mess with your boy like that.",
          "A high SAT score is a door opener. It lets you step into the casino. It does not mean you win every hand.",
          "The second myth is that the SAT does not matter because so many schools are test optional. First, a lot of those policies came from the COVID era, and many schools have rolled them back or adjusted them. Second, even where test optional exists, a strong score can still help.",
          "If two students both have a 3.9 GPA and one also has a 1500, an admissions officer may see that student differently, especially if the rest of the application is strong too.",
          "The third myth is that improvement comes from a secret trick. Tutors can help, but we are not magicians. We are catalysts, coaches, and supporters. We shorten the feedback loop. We help you see patterns faster. But the improvement still comes from doing questions, reviewing mistakes, and building skill over time."
        ]
      }
    ],
    "closing": [
      "The score you need depends on the schools you want, the scholarships you want, and how strong the rest of your application is.",
      "Set a real target. Work hard until you hit the score band that serves your goal. Then be honest about whether more SAT studying is still the best use of your time."
    ],
    "readingTime": "9 min read"
  },
  {
    "slug": "how-a-perfect-sat-score-changed-my-life",
    "title": "How a Perfect SAT Score Changed My Life",
    "description": "An edited transcript on what a perfect SAT score did for my college options, scholarships, career, and mindset.",
    "publishedAt": "2026-05-04",
    "videoId": "xaX7odGkSAI",
    "keywords": [
      "perfect SAT score",
      "SAT scholarship story",
      "SAT changed my life",
      "SAT motivation",
      "SAT full scholarship"
    ],
    "intro": [
      "Hey, my name is Manav. I usually use this channel to share SAT tips, but I wanted to tell you a little about my personal life and how my perfect SAT score changed my life.",
      "That sounds dramatic, but for me it is true. The SAT was not the whole story of my life, obviously. But it was one of the first big levers I could pull, and pulling it changed what was available to me."
    ],
    "sections": [
      {
        "heading": "Where I was starting from",
        "body": [
          "Growing up, I grew up pretty poor. What I did have was two hardworking parents, and I am extremely thankful for that. But besides that, we did not always have much.",
          "I grew up working summers, being on Medicaid, and living in a small Brooklyn apartment. Anyone from New York City knows that green MetroCard life. I took the bus to school and back home every day.",
          "Especially if you know anything about Indian culture, you know the idea that college is basically the way out. That was what I understood. But I did not really know how university worked. I went to a good high school, but I did not have many mentors walking me through the college process, and we could not afford college advisors.",
          "All I really knew from TV, from conventional wisdom, and from what people around me said was that I needed to destroy the SAT and get into a strong college."
        ]
      },
      {
        "heading": "The summer I self-studied",
        "body": [
          "So I got to work. I self-studied for an entire summer before junior year. I basically locked myself in a room and figured out the best way to work on my strengths and weaknesses and maximize my score.",
          "A huge part of it was question volume. I did a lot of questions, but I was not just doing them randomly. I was trying to reverse engineer the psychology of each question. What is this question really testing? Why is the wrong answer tempting? What strategy works for this exact type?",
          "Eventually, I built a custom strategy for basically every type of question that came up for me. I was unwrapping each question type and breaking down the formula behind it.",
          "When I came back to school that September, I took the exam for the first time and got a perfect score. It was a great feeling because for the whole summer, it was basically the only thing I cared about."
        ]
      },
      {
        "heading": "What that score did for college",
        "body": [
          "When college applications came around, I was able to apply broadly because my SAT was strong. I was awarded a few full scholarships and ended up going to Northeastern University in Boston, where I received an honors scholarship.",
          "With that scholarship and my Pell Grant, college was pretty much free for me. I paid very little to attend Northeastern while many of my friends were paying around $70,000 per year. If you do the math, that is close to $300,000 over four years, and some people are still in debt from that.",
          "I came out of school debt-free. That changed my life in a very practical way. Starting adulthood without that debt gave me freedom that I would not have had otherwise."
        ]
      },
      {
        "heading": "College gave me access to rooms I had not been in",
        "body": [
          "I know everyone likes to say college is a scam these days. I understand where that comes from. But for me, a great college gave me access to the same circles as wealthy students whose families were paying $70,000 per year plus expensive rent to be there.",
          "That elevated my financial and social environment. I was around people, recruiters, networks, and expectations that I had not really been exposed to growing up.",
          "Once I had a strong group of friends and a stronger network, I got internships at Wayfair, JP Morgan, and Morgan Stanley. I was not totally sure what I wanted to do with my life, so I bounced between finance and tech for a while.",
          "Eventually I settled into Microsoft as a new grad software engineer. At 23, I was making more than $200,000 per year and working fully remote. That is a real blessing, and it allowed me to travel the world. Recently I had trips to London, Paris, and Mexico, and yes, I showed the Rolex in the video too."
        ]
      },
      {
        "heading": "Why I am telling this story",
        "body": [
          "I am making this point to motivate anyone who is struggling to study hard over the next few months. I want you to stay locked in and look at the other side.",
          "If you give life real effort, it will reward you. I have not seen anyone prove that wrong to me yet. That does not mean everything is fair. It does not mean the SAT is perfect. But effort compounds, and the SAT is one place where effort can turn into opportunity pretty quickly.",
          "I want you to study hard and take your life seriously. Do not fall into self-pity. Do not immediately accept advice from people who are coping and telling you SAT scores do not matter. Smart people can have low SAT scores, of course. But as a general rule, a strong SAT score correlates with discipline, preparation, and future options.",
          "The SAT is not the whole story. But it is a very good shot at making money, getting scholarships, and at least starting to figure out your path."
        ]
      },
      {
        "heading": "Pay the cost up front",
        "body": [
          "My advice is to pay the cost up front. Study hard for the SAT now so you can have more room later in life. That is basically what happened to me.",
          "Also, do not settle. Have a vision and work toward it. Manifestation without work is just daydreaming, but vision plus hard work can actually change your life.",
          "I am extremely thankful for the life I have today. The SAT did not hand me everything, but it gave me a clean shot. I took that shot seriously, and it mattered."
        ]
      }
    ],
    "closing": [
      "If you are in the middle of studying and you feel tired, I get it. I was there too.",
      "But if you can treat this exam as a lever instead of just another annoying test, it can open real doors. Study hard, take your life seriously, and do not settle for less than you are capable of."
    ],
    "readingTime": "6 min read"
  },
  {
    "slug": "sat-circles-guide",
    "title": "The SAT Circle Guide: Radius, Diameter, Arc Length, and Equations",
    "description": "An edited transcript covering the circle facts, formulas, graph equations, radians, arcs, and tangent lines that show up on SAT Math.",
    "publishedAt": "2026-05-04",
    "videoId": "gwPipkJL9BU",
    "keywords": [
      "SAT circles",
      "SAT circle equations",
      "arc length SAT",
      "radians degrees SAT",
      "SAT geometry circles"
    ],
    "intro": [
      "Hey there, my name is Manav Sharma and I am an SAT tutor. Back in high school I got a perfect score, and since then I have been helping students prepare for the SAT.",
      "A lot of students struggle with circles on the SAT. Circles are a very common shape on the exam, basically in the same conversation as triangles and squares in terms of importance.",
      "So let us go through the circle facts and formulas you need to know, then walk through the kinds of questions the SAT likes to ask."
    ],
    "sections": [
      {
        "heading": "What makes a circle a circle",
        "body": [
          "A circle has 360 degrees and zero sides, but that is not the most special thing about it. Other shapes, like an oval, can also have 360 degrees and no sides.",
          "The property that really separates a circle from an oval is this: every point on the edge of a circle is the same distance from the center. That distance is called the radius.",
          "If you draw from the center to any point on the circle, that segment has the same length. There are infinitely many points on the edge, and all of them are equidistant from the center.",
          "The diameter is the radius's older brother. It goes through the center of the circle and touches two points on the circle. The diameter is double the radius."
        ],
        "bullets": [
          "A circle has 360 degrees.",
          "A circle has zero sides.",
          "Every point on the circle is the same distance from the center.",
          "The radius goes from the center to the edge.",
          "The diameter goes through the center and equals twice the radius."
        ]
      },
      {
        "heading": "The two foundational formulas",
        "body": [
          "The two foundational formulas are circumference and area. Circumference is the length around the circle. Area is the space inside the circle.",
          "The circumference formula is C = pi d. Since the diameter is 2r, you can also write circumference as C = 2 pi r.",
          "The area formula is A = pi r^2. I recommend memorizing these. The old memory trick I learned was, cherry pies are delicious and apple pies are too. It is silly, but I still remember it from middle school, so it did its job.",
          "These formulas matter because a lot of the later circle questions build on them. Arc length, sectors, radius questions, and graph questions all come back to knowing what the radius, diameter, circumference, and area represent."
        ]
      },
      {
        "heading": "The equation of a circle",
        "body": [
          "The equation of a circle on a graph is (x - h)^2 + (y - k)^2 = r^2. This equation lets you plot a circle on the coordinate plane.",
          "To draw a circle, you really need two pieces of information: where the center is and how big the radius is. That is exactly what the equation gives you.",
          "The center is (h, k). The radius is r. If the equation says (x - 2)^2 + (y - 2)^2 = 25, the center is (2, 2) and the radius is 5.",
          "One thing students miss is that the signs inside the parentheses look opposite. If you see x - 2, the h value is positive 2. If you see y + 3, that means y - negative 3, so the k value is negative 3."
        ]
      },
      {
        "heading": "Arc length is just a fraction of circumference",
        "body": [
          "An arc is a piece of the circle's edge. If you imagine a slice of pizza, the crust of that slice is the arc. The distance along that crust is the arc length.",
          "The formula is: arc length = circumference times arc degree over 360.",
          "This formula is not random. A full circle has 360 degrees. If your arc uses 180 degrees, it is half the circle, so the arc length is half the circumference. If it uses 90 degrees, it is one fourth of the circle, so the arc length is one fourth of the circumference.",
          "For example, if a 180-degree arc comes from a circle with circumference 100 pi, the arc length is 50 pi because 180 over 360 is one half."
        ]
      },
      {
        "heading": "Converting radians and degrees",
        "body": [
          "The SAT can also ask you to convert between radians and degrees. Radians and degrees measure the same thing, just like inches and feet both measure length. They are different units for angles.",
          "Radian measurements often have pi in them, like pi over 2, pi over 4, or pi over 8. Degree measurements look like 90 degrees, 45 degrees, or any other degree value.",
          "To convert from radians to degrees, multiply by 180 over pi. To convert from degrees to radians, multiply by pi over 180.",
          "If you forget which fraction to use, think about what needs to cancel. If you start with pi over 2 radians and want degrees, the pi has to disappear. That means you need a pi in the denominator, so you multiply by 180 over pi. The result is 90 degrees.",
          "If you start with 45 degrees and want radians, you need to introduce pi, so you multiply by pi over 180. That gives 45pi over 180, which reduces to pi over 4."
        ]
      },
      {
        "heading": "Tangent lines and perpendicular slopes",
        "body": [
          "A tangent line is a line that touches a circle at exactly one point. The useful SAT fact is that the tangent line is perpendicular to the radius drawn to the point of tangency.",
          "That means if a line touches the circle at one point, and you draw a segment from that point back to the center, the angle between the tangent line and that radius is 90 degrees.",
          "This becomes powerful on coordinate geometry questions. Perpendicular lines have negative reciprocal slopes. If one line has slope 2, the perpendicular slope is negative one half. If one line has slope negative 2, the perpendicular slope is one half.",
          "So if the SAT gives you the center of a circle and the point where a tangent line touches the circle, you can find the slope of the radius, then flip and negate it to get the tangent line's slope."
        ]
      },
      {
        "heading": "Question type: points inside or outside a circle",
        "body": [
          "One example asks about a circle in the xy-plane with an equation like (x + 3)^2 + (y - 1)^2 = 25, then asks which point does not lie in the interior of the circle.",
          "You can solve this algebraically by plugging in each point and checking whether the left side is less than 25. But you can also use Desmos. Type the circle equation into Desmos, then plot the answer choices.",
          "Any point clearly inside the circle is not the answer. The point outside the circle is the one that does not lie in the interior. In the example from the video, choice D was the point outside the circle.",
          "This is one of those questions where the graphing calculator can save time, especially if the answer choices are just coordinate points."
        ]
      },
      {
        "heading": "Question type: arc length to circumference",
        "body": [
          "Another example gives a circle with center O and points A and B on the circle. The measure of arc AB is 45 degrees and the length of the arc is 3 inches. The question asks for the circumference.",
          "I still draw these out, even after doing SAT questions for years. Drawing the circle and marking the 45-degree arc makes the relationship obvious.",
          "Use the formula: arc length = circumference times angle over 360. The arc length is 3, the angle is 45, and the circumference is unknown. So 3 = C times 45 over 360.",
          "Since 45 over 360 is one eighth, we have 3 = C over 8. Multiply by 8 and the circumference is 24 inches."
        ]
      },
      {
        "heading": "Question type: radians to degrees",
        "body": [
          "If an angle has a measure of 9pi over 20 radians and the SAT asks for degrees, multiply by 180 over pi.",
          "The pi cancels. Then you simplify 9 times 180 over 20. Since 180 over 20 is 9, the result is 81 degrees.",
          "The important move is not memorizing that exact answer. The important move is knowing that radians with pi should lose the pi when you convert to degrees."
        ]
      },
      {
        "heading": "Question type: finding the radius from a graphed equation",
        "body": [
          "Another example gives an equation like 2x^2 - 6x + 2y^2 + 2y = 45 and tells you the graph is a circle. It asks for the radius.",
          "You could complete the square, and that is a valid algebra method. But in the video I showed the Desmos approach. Type the equation into Desmos, then identify the top and bottom points of the circle.",
          "I trust the top and bottom points more than random left and right-looking points because Desmos will often show exact extrema there. In the example, the top and bottom points were 10 units apart, so that distance is the diameter.",
          "If the diameter is 10, the radius is 5. That is the answer."
        ]
      },
      {
        "heading": "Question type: tangent line slope",
        "body": [
          "A tangent line question might say a circle has center (-4, -6), and line k is tangent to the circle at (-7, -7). What is the slope of line k?",
          "Before doing anything else, draw it. The tangent point is on the circle, and the center is inside the circle. Connect the center to the tangent point. That segment is a radius, and the tangent line is perpendicular to it.",
          "Find the slope of the radius using change in y over change in x. From (-4, -6) to (-7, -7), the change in y is -1 and the change in x is -3, so the radius slope is 1 over 3.",
          "The tangent line has the negative reciprocal slope. Flip 1 over 3 to get 3, then change the sign. The slope of line k is -3."
        ]
      },
      {
        "heading": "Question type: diameter endpoints",
        "body": [
          "A final example gives a circle with a diameter whose endpoints are (2, 4) and (2, 14). The equation is written as (x - 2)^2 + (y - 9)^2 = r^2, and the question asks for r.",
          "Because the x-coordinate is the same for both endpoints, the diameter is vertical. The y-values are 4 and 14, so the distance between them is 10.",
          "That means the diameter is 10. The radius is half the diameter, so r equals 5.",
          "You can also see why the center is (2, 9): it is halfway between y = 4 and y = 14. But the question only asks for r, so the radius is enough."
        ]
      }
    ],
    "closing": [
      "Circles on the SAT are very pattern-based. Know the definitions, know the formulas, and draw the picture before you start chasing algebra.",
      "If you remember radius, diameter, circumference, area, arc length, radians, and tangent-line perpendicularity, you will be ready for most circle questions the test can throw at you."
    ],
    "readingTime": "11 min read"
  },
  {
    "slug": "solve-sat-vocab-questions-without-knowing-word",
    "title": "How to Solve SAT Vocabulary Questions When You Do Not Know the Word",
    "description": "An edited transcript on using context, your own blank word, and connotation to solve SAT vocabulary questions.",
    "publishedAt": "2026-05-04",
    "videoId": "1eI7eJecJ-c",
    "keywords": [
      "SAT vocabulary questions",
      "SAT vocab in context",
      "words in context SAT",
      "SAT reading strategy",
      "SAT vocab strategy"
    ],
    "intro": [
      "Hey there. Today I am going to help you figure out how to solve basically any SAT vocabulary question, even if you have never seen some of the words before.",
      "Before I get into the step-by-step method, I want to give a short piece of advice. If you are watching this on the way to the testing center, feel free to ignore the long-term part and just use the strategy. But if you have months, vocabulary growth works like gaining muscle at the gym."
    ],
    "sections": [
      {
        "heading": "The long-term way to get better at vocab",
        "body": [
          "At the gym, you take your current limit and try to do one more rep, or you increase the weight on the bar. Every workout, you go a little beyond what your body can already do, and slowly your body adapts.",
          "Vocabulary works similarly. If I were tutoring someone over many months, I would want them to increase their vocabulary capacity over time. That means reading more op-eds, reading more articles, browsing Wikipedia once in a while, and regularly reading a novel that is on the harder side for them.",
          "This naturally forces your brain to adapt to words that are not familiar. You already have a bank of words in your head, and your brain tries to decipher new ones using the knowledge you already have. It compares roots, connotations, sentence clues, and context.",
          "That is why you sometimes get the feeling, I do not know exactly what this word means, but I kind of get what the writer is trying to say. The goal is to make your brain quicker at doing that."
        ]
      },
      {
        "heading": "Who I am and why I like small tricks",
        "body": [
          "Quick thing about me: I am Manav. I scored perfectly on my SAT when I took it in high school, and since then I have helped many students prepare for the digital exam.",
          "Over the years, I have come up with strategies that I did not really see in textbooks or hear from other tutors. Part of that is just how my brain works. I was not always the biggest fan of studying. I am a notorious procrastinator, so my brain tends to optimize for small tricks that make a question easier to attack.",
          "This vocabulary method is one of those tricks. It is simple, but it works because it stops you from staring at four choices and hoping one of them feels right."
        ]
      },
      {
        "heading": "The four-step system",
        "body": [
          "The system starts with a quick glance at the choices. I do mean quick. Do not sit there and analyze the choices first, because then you will bias yourself toward the words you already know well. The unfamiliar words will feel worse in your brain even if one of them is correct.",
          "After that, read the passage. Notice where the blank is. Read it twice if you need to. I usually do, so there is no shame there.",
          "Then comes the main move: fill in the blank in your own words before looking seriously at the answer choices. Make the word as simple as possible. In fact, the simpler your own word is, the more it usually shows that you understand the context.",
          "Finally, choose the answer that most closely matches your word. You are not asking, which fancy word do I recognize? You are asking, which choice matches the meaning that the sentence already demanded?"
        ],
        "bullets": [
          "Glance quickly at the choices, but do not obsess over them.",
          "Read the passage carefully and locate the blank.",
          "Fill the blank in your own simple words.",
          "Pick the answer choice that best matches your word and its tone."
        ]
      },
      {
        "heading": "Why I care about these questions so much",
        "body": [
          "I push vocab questions hard because they set the tone for the rest of the module. They often appear right at the beginning of Reading and Writing.",
          "If you leave a couple of those early questions feeling like you got destroyed, it can dampen your emotions for the rest of the section. You start reading with less confidence. You second-guess yourself more.",
          "If you knock these questions out cleanly, you move through the rest of the module with your chest a little higher. That matters more than students realize."
        ]
      },
      {
        "heading": "Do not just match meaning, match connotation",
        "body": [
          "A small extra tip: do not stop at the rough meaning. Also think about connotation. Is the word you need positive, negative, or neutral? Is it intense or mild? Is it technical or casual?",
          "A choice can be in the same general neighborhood as your word but have the wrong tone. The SAT likes that. If your blank word is something like harmless, a choice that means new or deceptive is not going to work just because it sounds sophisticated.",
          "So write the simple meaning in your head, then label the feeling of that meaning. That makes it easier to eliminate choices."
        ]
      },
      {
        "heading": "Example one: harmless stimuli",
        "body": [
          "In the first practice question, the passage describes scientists studying external stimuli that reduce itching from an allergic histamine response. It says harmless applications of vibration or warming can provide temporary distraction, but that such blank stimuli offer less relief than something that seems less benign, like mild electric shock.",
          "As I read it, I want my own word before I care about the answers. The sentence already gives me clues: harmless, simple, and less benign as the contrast. So my blank word is something like harmless, low-key, low-intensity, or benign.",
          "Then I check the choices. Novel means new, so that is not it. Impractical does not match. Deceptive feels like some spy thing, and it does not fit the harmless idea. Innocuous means harmless or innocent, so that matches perfectly.",
          "The answer is innocuous. Even if you did not know innocuous at first, the sentence was pointing toward harmless the whole time."
        ]
      },
      {
        "heading": "Example two: venom potency",
        "body": [
          "The second practice question talks about scientists studying a freshwater stingray species to determine whether biological differences, such as age and sex, have a blank effect on the toxicity of the venom. The next sentence says they want to see if differences in these traits are associated with considerable variations in venom potency.",
          "Again, I fill the blank myself first. The phrase considerable variations tells me the effect should be significant, clear, impactful, or large.",
          "Now I compare. Imperceptible is the opposite. Acceptable does not really match. The word substantial means large or significant, so substantial is the best answer.",
          "That is the method. You are letting the passage tell you the answer before the choices confuse you."
        ]
      }
    ],
    "closing": [
      "This strategy is simple, but that is why it works. Do not let the answer choices bully you into guessing based on word familiarity.",
      "Read the sentence, fill the blank in your own words, check the connotation, and then choose the closest match. That is how you solve vocab questions even when the words look unfamiliar."
    ],
    "readingTime": "7 min read"
  },
  {
    "slug": "desmos-digital-sat-math",
    "title": "How to Use Desmos on the Digital SAT Without Wasting Time",
    "description": "An edited transcript on the Desmos moves that solve many digital SAT Math questions quickly.",
    "publishedAt": "2026-05-04",
    "videoId": "ywQZjlE122o",
    "keywords": [
      "Desmos SAT",
      "digital SAT calculator",
      "SAT math Desmos",
      "SAT graphing calculator",
      "Desmos SAT tips"
    ],
    "intro": [
      "Most students do not realize this, but the built-in Desmos calculator on the SAT is not just a basic tool. If you know how to use it, it can save time, improve accuracy, and help you solve questions you might otherwise skip.",
      "Hi, I am Manav from Evergreen Prep. In this article, I am going through the Desmos uses from the video: equations, systems, intercepts, quadratics, inequalities, functions, and statistics.",
      "I am not going to waste your time. Let us get into the moves that matter most."
    ],
    "sections": [
      {
        "heading": "Single-variable equations",
        "body": [
          "The simplest Desmos use case is a single-variable equation. You can probably solve many of these by hand, but if your brain is tired or you want a quick check, Desmos can do it cleanly.",
          "One method is to type the equation into Desmos and look for the x-intercept or the solution point. For example, if the equation simplifies to something like 4x - 28 = -24, Desmos will show you where the graph hits the relevant value, and the solution is x = 1.",
          "Another method is to split the equation into two lines: y equals the left side and y equals the right side. Then the intersection gives the solution. If you type y = 4x - 28 and y = -24, the intersection shows x = 1.",
          "Desmos points are sticky. When you click an intersection, it gives you the coordinates exactly. That is one of the reasons it is so useful on the digital SAT."
        ]
      },
      {
        "heading": "Systems of equations",
        "body": [
          "Systems of equations are also mostly typing. If the system is y = 4 and x = y + 6, type both equations into Desmos. The intersection is the solution.",
          "In that example, Desmos shows the intersection at (10, 4). That means x = 10 and y = 4 satisfy both equations.",
          "This is especially helpful when the algebra is annoying but the equations are graphable. The SAT often rewards efficiency, and there is no prize for doing a Desmos question by hand if the calculator can solve it faster."
        ]
      },
      {
        "heading": "Intercept questions",
        "body": [
          "Intercept questions are another clean use case. If a function g is defined by g(x) = x + 8 and the question asks for g(0), it is really asking for the y-intercept.",
          "In Desmos, I usually type y instead of g(x) when I just want the graph. So I would type y = x + 8. Desmos shows both intercepts, and the y-intercept is (0, 8). So g(0) is 8.",
          "Be careful to read whether the question wants the x-intercept, the y-intercept, or a function value. Desmos can show all of them, but you still have to answer the actual question."
        ]
      },
      {
        "heading": "Quadratic maximums and minimums",
        "body": [
          "Desmos is great for quadratic maximum and minimum questions because those are really vertex questions. If the parabola opens upward, it has a minimum. If it opens downward, it has a maximum.",
          "For example, if the equation is y + 57 = x^2, type it into Desmos. You will see a parabola opening upward, so you are looking for the minimum point.",
          "Click the vertex. In the video example, the minimum is at (0, -57). The key is that Desmos will identify the point for you if you graph the equation cleanly."
        ]
      },
      {
        "heading": "Inequalities and shaded regions",
        "body": [
          "The SAT often asks whether an ordered pair is a solution to a system of inequalities. Desmos makes this visual.",
          "If the inequalities are y <= x and y <= -x, type both into Desmos. To enter less than or equal to, type the less-than sign and then add the equals sign. Desmos will shade the regions that satisfy each inequality.",
          "A solid boundary line means points on the line are included. A dotted boundary line means the line itself is not included. The answer must land in the overlapping shaded region.",
          "You can also add a table and type in the answer choices as points. Desmos will plot them. In the video example, the only point in the overlap was (0, -1), so that was the solution."
        ]
      },
      {
        "heading": "How many solutions does a system have?",
        "body": [
          "Another common SAT question asks how many solutions a system has. If you can graph both equations, the number of intersections is the number of solutions.",
          "No intersection means no solution. One intersection means one solution. Two intersections means two solutions. This comes up with lines, parabolas, circles, and other graphs.",
          "The important thing is to zoom appropriately. Sometimes the intersection is off-screen. But if you enter the equations correctly, Desmos usually gives you a very fast path to the answer."
        ]
      },
      {
        "heading": "Function notation",
        "body": [
          "Desmos also handles function notation directly. If a question says f(x) = (2x - 1) / 3 and asks for f(5), you do not need to plug it in by hand.",
          "Type f(x) = (2x - 1) / 3 into Desmos. Then type f(5). Desmos returns 3.",
          "This is not fancy, but it saves mental energy. On a timed exam, saving mental energy matters."
        ]
      },
      {
        "heading": "Mean, median, and variables in lists",
        "body": [
          "Mean and median questions are also built into Desmos. You can type mean followed by a list of numbers, and Desmos will calculate the mean. You can do the same with median.",
          "This is useful when a question gives a set of scores and asks for the mean or median after another score is added. You can type the list directly instead of doing arithmetic from scratch.",
          "A lot of students do not realize you can introduce a variable into these lists too. If the fifth golf score is x, for example, you can put x into the list and see how the mean changes as x changes.",
          "That can turn a statistics word problem into a graph or equation you can inspect. It is one of those small Desmos moves that can save you from messy manual work."
        ]
      },
      {
        "heading": "What to actually master",
        "body": [
          "There are many tiny Desmos tricks, and you can go much deeper. But these are the hard-hitting ones that solve a huge share of calculator-friendly SAT Math questions.",
          "Learn equations, systems, intersections, intercepts, quadratics, inequalities, functions, and mean or median. If you can use Desmos for those confidently, you will stop wasting time on math that the calculator can handle for you."
        ],
        "bullets": [
          "Use intersections for equations and systems.",
          "Use intercepts for function-value and graph questions.",
          "Use vertices for quadratic maximums and minimums.",
          "Use shaded regions and plotted points for inequalities.",
          "Use built-in function notation and statistics commands when the test allows it."
        ]
      }
    ],
    "closing": [
      "Desmos will not replace knowing math, but it can make your math cleaner and faster.",
      "Practice these moves before test day so they feel automatic. The calculator is only useful if you know what to type and what the graph is telling you."
    ],
    "readingTime": "7 min read"
  },
  {
    "slug": "digital-sat-changed-what-matters",
    "title": "The Digital SAT Changed. Here Is What Actually Matters.",
    "description": "An edited transcript on the digital SAT format, adaptive modules, Desmos, changed content, and how to prep with current materials.",
    "publishedAt": "2026-05-04",
    "videoId": "I7HEkOg6Rt4",
    "keywords": [
      "digital SAT changes",
      "new SAT format",
      "adaptive SAT modules",
      "digital SAT prep",
      "SAT Bluebook practice"
    ],
    "intro": [
      "Did you know the SAT you are about to take is nothing like the one your older friends took? Starting in 2024, the SAT went fully digital, and the changes can affect test-day performance if you prep with outdated information.",
      "In the video, I answer three questions: what changed about the format, how those changes affect your strategy, and what resources and habits you should use so you are actually prepared."
    ],
    "sections": [
      {
        "heading": "The test is fully digital and shorter",
        "body": [
          "First and foremost, the SAT is now fully digital. You take it on a computer instead of on paper. That digital shift has streamlined the test and made it a little over two hours long, compared with the old three-hour version that could feel even longer once breaks were included.",
          "One of the biggest changes is that Reading and Writing are now combined into a single English section. The old test had longer passages with multiple questions attached. The digital version gives you very short passages, each followed by one question.",
          "That means you are reading less per question, but you still need strong comprehension and editing skills. Shorter does not mean brainless. It just means the test is asking in a different format."
        ]
      },
      {
        "heading": "The SAT is adaptive now",
        "body": [
          "The test is also adaptive. You probably already know this, but here is how it works. Each section, both English and Math, starts with module 1. Based on your performance in module 1, the difficulty of module 2 changes.",
          "If you perform well in module 1, you get the harder module 2, which gives you the chance to earn a higher score. If you struggle in module 1, the module 2 questions are easier, but your maximum score can be limited.",
          "This adaptive design allows the test to evaluate your ability more precisely in less time than the old linear format. It also means your early performance matters. You cannot treat module 1 like a casual warmup."
        ]
      },
      {
        "heading": "Math changed because calculator use changed",
        "body": [
          "Another major change is the Math section. Calculator use is allowed for all problems, and you have access to the Desmos graphing calculator inside the testing app.",
          "Desmos is much easier to use than the TI-84 and TI-83 calculators I was used to when I took the exam. You can still bring your own approved handheld calculator if you prefer, but a lot of students do not realize how much the built-in calculator can do.",
          "Because Desmos is always available, you should practice using it for more than basic arithmetic. Use it for graphing, visualizing problems, solving systems, checking work, and making sure an algebra answer actually makes sense."
        ]
      },
      {
        "heading": "Some math topics shifted",
        "body": [
          "The new digital SAT has also streamlined some math content. Some topics that used to appear, like complex and imaginary numbers, have been removed from the tested content.",
          "At the same time, certain fundamentals have become more prominent. Geometry questions, especially involving triangle congruence and similarity, are more important. Algebra is still a core component, with a strong focus on linear equations, functions, and systems of equations.",
          "Word problems are usually shorter and more direct than before. The test is less likely to tell you a person's whole life story before asking for an equation. But do not be fooled. Shorter word problems still require strong problem solving.",
          "Data analysis has also been refined toward interpreting graphs and tables efficiently. I think this is one of the easier question types for many students, but you still need to practice it."
        ]
      },
      {
        "heading": "Shorter Reading does not mean easier Reading",
        "body": [
          "A lot of students find the shorter Reading and Writing passages less stressful. I understand why. You are not staring at a giant passage that takes up the whole page anymore.",
          "But some students have also said the newer tests feel harder, especially in Math. The College Board is still calibrating difficulty across versions, so there has been variation.",
          "The main point is that you should not prep as if you are taking the old paper SAT. The format, pacing, tools, and question style are different enough that old habits can hurt you."
        ]
      },
      {
        "heading": "Practice on a computer or tablet",
        "body": [
          "Studying for the digital exam requires different habits from studying for a paper test. First, practice on a computer or tablet, just like you will on test day.",
          "Get familiar with the digital interface. Learn how to navigate questions, flag questions, move between screens, and use the available tools. If the interface feels new on test day, that is wasted mental energy.",
          "When practicing with Desmos, learn how to use its features efficiently. Do more than graph. Use it to visualize, solve, and check. If you have extra time, use Desmos as part of your review process too."
        ]
      },
      {
        "heading": "Use official practice tests first",
        "body": [
          "Use the official SAT practice tests from the College Board, especially Bluebook and the official PDFs. These are essential because you will not get a closer version of the actual test than the material made by the same company.",
          "Set aside time to take these practice tests in an environment that mimics the real test. Sit at a desk. Use a timer. Do the whole thing. Do not pause every five minutes to check your phone.",
          "After each practice session, review your answers and how you managed your time and energy. Did you rush early? Did you panic late? Did you fail to review flagged questions? That reflection helps you refine your strategy and build stamina."
        ]
      },
      {
        "heading": "Study smart, then review honestly",
        "body": [
          "For efficient prep, start with official resources and Khan Academy, which partners with the College Board and has updated content for the digital format.",
          "Use diagnostic quizzes to identify weak areas. Then focus your study time on the concepts that need the most improvement. Do not just grind random questions and call it studying.",
          "When you miss a question, analyze why. Was it a content gap? A careless mistake? A timing problem? Did you understand the concept but fail to recognize the question type? The root cause matters because different mistakes need different fixes.",
          "If you understand why you got something wrong, you are much less likely to repeat the same mistake."
        ]
      }
    ],
    "closing": [
      "The digital SAT is shorter, adaptive, calculator-friendly, and built around a different interface. That does not make it impossible. It just means your prep has to match the test in front of you.",
      "Use current materials, practice digitally, learn Desmos, and review mistakes deeply. That is how you adjust to the new SAT instead of preparing for the old one by accident."
    ],
    "readingTime": "7 min read"
  },
  {
    "slug": "study-for-sat-without-burning-out",
    "title": "How to Study for the SAT Without Burning Out",
    "description": "An edited transcript on building a realistic SAT schedule while balancing school, college applications, review, and motivation.",
    "publishedAt": "2026-05-04",
    "videoId": "lqWIGsptSno",
    "keywords": [
      "SAT burnout",
      "SAT study schedule",
      "SAT college applications",
      "avoid burnout SAT",
      "SAT study plan"
    ],
    "intro": [
      "Are you feeling overwhelmed trying to balance SAT prep and college applications? In the video, I talk through how to study smart and avoid burning out while preparing for the SAT and handling college apps.",
      "The three main ideas are building a long-term study schedule that works for you, reviewing the material properly, and finding your own study style so you can stay consistent."
    ],
    "sections": [
      {
        "heading": "Think like a sculptor, not a crammer",
        "body": [
          "Imagine you are a sculptor working on a masterpiece. You do not rush the whole process at the end. You start early, chip away slowly, and make steady progress over time.",
          "SAT prep is like that. You need patience, focus, and a realistic pace. If you start early and spread your sessions over a longer period, you can build skills without feeling like your whole life is collapsing into one test.",
          "If you are in 10th or 11th grade, that is a great time to start. That is when I recommend many students begin. The earlier you start, the shorter each study session can be, and the more likely you are to retain information long term.",
          "If you are starting in 12th grade, do not stress. That is when I started, and I still got a perfect score. The same principle applies, just with a tighter timeline. Break things into manageable chunks and do not overload yourself."
        ]
      },
      {
        "heading": "Do not copy a schedule that does not fit your brain",
        "body": [
          "One of the biggest mistakes I see is students trying to study for hours and hours in one sitting when that is not their study style. That leads to burnout.",
          "Most people do better with shorter, more consistent sessions. For many students, 30 to 60 minutes a day over a longer period is more effective than one five-hour marathon every Saturday.",
          "That said, my more ADHD-prone people will understand the merit of longer bursts a few times a week. That worked for me. I could sit down for three-hour sessions a couple times a week and go deep. But that is not everyone.",
          "The point is not to worship one schedule. The point is to build something you can actually sustain."
        ]
      },
      {
        "heading": "Mix college application work with SAT prep",
        "body": [
          "Something students do not always think about is mixing in some college application work with SAT prep. For example, after studying math for 45 minutes, take a break and spend 30 minutes drafting your personal statement, organizing application materials, or emailing teachers for recommendations.",
          "That way you stay productive without hating yourself. SAT studying can be the primary task, and when your focus starts to waver, you can switch to a secondary task that still moves your life forward.",
          "This is especially useful during junior and senior year when SAT prep and applications start competing for the same mental space."
        ]
      },
      {
        "heading": "Write a long-term outline",
        "body": [
          "Write out a long-term study outline. It does not need to be a perfect schedule, and I can guarantee it will change. Think of it more like a road map.",
          "The goal is to put things in perspective. When you know what you are working toward, you can see milestones instead of just seeing a giant mountain of work.",
          "A rough outline also helps you avoid panic. If your test is months away and you know what topics you plan to cover, you do not feel the same pressure to cram everything this weekend."
        ]
      },
      {
        "heading": "Take practice tests under real conditions",
        "body": [
          "Practice tests matter, but you have to take them seriously. Sit aside the time, use the allowed Desmos calculator, work in a quiet space, and mimic the real test as much as possible.",
          "You do not need to do this every day, but it should be a clear pillar of your study strategy. Boxers training for a fight will often train at the same time of day as the fight. The principle is similar. You want to prime your brain for the setting and the motions.",
          "After you finish the test, do not just grade it and move on. Go through your mistakes like a tutor grading the exam or a doctor looking at lab results. Look at exactly what you got wrong and why."
        ]
      },
      {
        "heading": "Review is where the learning happens",
        "body": [
          "You will learn something by ripping through thousands of questions, but in my experience it is better not to churn through practice tests like a robot. Materials are limited, especially official materials, so you should maximize each test.",
          "Do not panic if your practice test score dips here and there. You want a general upward trajectory, but one dip between tests is not the end of the world.",
          "If you are making different mistakes, that can still be progress. The tests are not perfect copies of each other. Topics, difficulty, and question mix will vary. The key is that you are learning, building knowledge, and fine-tuning your skills."
        ]
      },
      {
        "heading": "Use spaced repetition",
        "body": [
          "It is not enough to study something once and move on. You have to review material if you want to retain it. This is where spaced repetition comes in.",
          "After you learn something new, schedule a review session a few days later. Then review it again after about a week. The more you revisit it over time, the more solid it becomes.",
          "This helps you truly understand the material instead of memorizing it for a short period and forgetting it by test day."
        ]
      },
      {
        "heading": "Find your own study style",
        "body": [
          "Your study style is personal. What works for someone else might not work for you, and that is okay.",
          "Some students thrive on short daily sessions. Others do better with longer, focused bursts a few times a week. I found that three-hour sessions worked for me because they let me deep dive into the material.",
          "Do not force yourself to adopt a popular technique just because people online praise it. One of my students came to me using the Pomodoro technique, where you study for 25 minutes and take a five-minute break. It works for some people, but it did not fit his style. When I asked why he was forcing it, he said people said it worked better. I asked whether it worked for him. He said no. There is your answer.",
          "The goal is consistency and sustainability. Choose the method that helps you stay on track without burning out."
        ]
      },
      {
        "heading": "Use priorities when SAT prep and applications collide",
        "body": [
          "One of the biggest challenges is juggling SAT prep and college applications, especially in 12th grade. It can feel overwhelming, but you do not have to do everything at once.",
          "Use a priority system. Focus on the most critical task first. If your SAT test date is coming up soon, SAT prep should probably be the priority. Once you finish your daily or weekly study session, shift attention to college essays or application tasks.",
          "Make a realistic weekly schedule that includes time for both. Break tasks into smaller pieces so you do not feel buried under a mountain of work. Maybe one day is essay work, and another day is SAT Reading. Alternating can keep you moving without making everything feel like one giant blob."
        ]
      },
      {
        "heading": "Find people with similar goals",
        "body": [
          "One strategy people ignore is finding like-minded people with similar goals. Friends, classmates, or an online group can help you stay motivated if they are actually aligned with what you want.",
          "You are the average of the five people you talk to the most, so surround yourself with people who lift you up and are as ambitious as you. If you say your goal score and your friends act like you are insane for even aiming there, maybe you need some people outside that main friend group who understand the goal.",
          "At the same time, examine your relationship with online communities. SAT forums and Reddit threads can help, but they can also hurt your confidence if all you do is compare yourself to people boasting about scores.",
          "A community should have a net positive effect. It can challenge you, but if it is making you anxious, less consistent, or more negative, reexamine your relationship with it."
        ]
      }
    ],
    "closing": [
      "Avoiding burnout is not about studying less because you are lazy. It is about studying in a way you can sustain long enough to improve.",
      "Start early if you can, review deeply, build a schedule that fits your brain, and surround yourself with people and habits that make consistency easier."
    ],
    "readingTime": "8 min read"
  },
  {
    "slug": "day-before-sat-avoid-these-mistakes",
    "title": "The Day Before Your SAT: Avoid These Common Mistakes",
    "description": "An edited transcript on what to do, and what not to do, in the final 24 hours before the SAT.",
    "publishedAt": "2026-05-04",
    "videoId": "zXUsKUibtWg",
    "keywords": [
      "day before SAT",
      "SAT test day checklist",
      "SAT cramming",
      "SAT anxiety",
      "night before SAT"
    ],
    "intro": [
      "The day before your SAT can make or break your performance. One small mistake can sabotage months of hard work and preparation, so the final 24 hours should be about protecting the work you have already done.",
      "In the video, I cover the biggest mistake students make the day before the SAT, how to mentally prepare and reduce anxiety, and how to create a checklist so you do not forget the essentials."
    ],
    "sections": [
      {
        "heading": "The biggest mistake: cramming",
        "body": [
          "The single biggest mistake students make the day before the SAT is cramming. It can undo a lot of the hard work you have put in.",
          "Imagine you have been caring for a plant for months. You watered it, gave it sunlight, and it is growing beautifully. Then right before it blooms, you panic and overwater it. Instead of helping the plant, you drown it.",
          "SAT prep is similar. If you overdo it the day before by cramming or studying late into the night, you can hurt the performance you spent months building.",
          "Your brain needs time to absorb what it has learned. The extra hours you spend trying to stuff information into your brain are not as valuable as you think. This is the law of diminishing returns: after a point, each extra hour gives you less and less benefit.",
          "Cramming the day before can leave you exhausted, anxious, and mentally drained on test day. What should you do instead? Rest. Give your brain time to recover and process. You have done the work, so now you need to trust yourself."
        ]
      },
      {
        "heading": "Prepare mentally, not frantically",
        "body": [
          "The day before the SAT is not about panic studying. It is about getting your mind in the right place so you can stay calm and focused.",
          "One thing you can do is visualization. Picture yourself walking into the test center, sitting down, and confidently answering questions. Visualizing success can reduce anxiety and help you feel more prepared.",
          "Do something relaxing. That might be light exercise, a walk, meditation, watching a movie, or even scrolling on your phone for a little bit. The point is to calm your nerves, not send yourself into a spiral.",
          "Avoid negative self-talk. Telling yourself you are going to fail or that you are not ready will not help. Even if you feel underprepared, repeating that story to yourself the day before does nothing useful. Focus on what helps now."
        ]
      },
      {
        "heading": "Do not obsess over tiny details",
        "body": [
          "It is easy to get caught thinking you need to memorize every single fact the day before. That will just stress you out.",
          "By this point, you should know that no two SAT exams are exactly the same. The content varies, and you cannot perfectly predict the exact test you will see. Even if you wanted to prepare for the exact questions the day before, you could not.",
          "The final day should be about mental relaxation, not overload. You are trying to walk into the test fresh, not fried."
        ]
      },
      {
        "heading": "Do not take a full-length practice test the day before",
        "body": [
          "Another mistake is taking a full-length practice test the day before the SAT. I understand the impulse. You want last-minute reassurance that your score is where you want it to be.",
          "But taking a full test the day before can lead to burnout. Your brain has been training hard already. Pushing it too much right before the real test can wear you out.",
          "Instead, do something lighter. Review notes. Flip through flashcards. Do a small amount of familiar practice if it helps you feel settled. But do not overload your brain with new material.",
          "If you really want to do something productive, review your last two practice tests. Look at the wrong answers and make a cheat sheet based on what you wish someone had told you in the moment. The point is not to bring that sheet with you, because you cannot. The value is in the process of making it."
        ]
      },
      {
        "heading": "Pack your checklist the night before",
        "body": [
          "This is the time to prepare practically and avoid last-minute stress. Get your materials ready the day before so you are not rushing around in the morning.",
          "Your checklist should include your SAT admission ticket, photo ID, snacks, water, and a comfortable outfit for test day. If you are bringing an approved calculator, pack that too, along with fresh batteries or a charge if needed.",
          "Also make sure you know how to get to the test center, what time to leave, and how much extra time to give yourself in case of delays. If you need to arrive at 7:45 and the center is 30 minutes away, I would rather you wake up early than cut it close.",
          "Having a test-day plan helps you feel more in control and reduces stress."
        ],
        "bullets": [
          "Admission ticket",
          "Photo ID",
          "Approved calculator if you plan to use one",
          "Snacks and water",
          "Comfortable outfit",
          "Route and arrival plan"
        ]
      },
      {
        "heading": "Prioritize sleep",
        "body": [
          "One of the most important things you can do the day before the SAT is get a good night's sleep. Sleep directly affects how your brain performs on testing.",
          "Create a calming evening routine. Read a book, watch a movie, take a walk, or do something else relaxing. Whatever you do, do not stay up late trying to study more.",
          "The goal is relaxation, not panic. You want to wake up clear-headed, not exhausted because you tried to squeeze in one more grammar rule at midnight."
        ]
      },
      {
        "heading": "Do not experiment with caffeine",
        "body": [
          "If you normally drink coffee, it is fine to have caffeine in the morning. But if you normally do not drink coffee, do not start on the day of the SAT.",
          "I had a student make this mistake. He was already nervous, then he drank coffee even though he was not used to it. He got jittery and anxious during the test because he did not know how his body would react.",
          "Test day is not the day to experiment. Keep your routine familiar."
        ]
      },
      {
        "heading": "Eat normally and stay hydrated",
        "body": [
          "The day before, stick to a balanced dinner. Not too heavy, not too light. Drink water so you are hydrated, but do not overdo it to the point where you feel bloated or wake up constantly.",
          "For breakfast on test day, eat something you usually have that gives you energy without weighing you down. Think whole grains, fruit, and protein if that is normal for you.",
          "The point is steady energy. You do not want a huge spike and crash in the middle of the exam."
        ]
      }
    ],
    "closing": [
      "The day before the SAT is about protecting your preparation. Do not cram, do not panic, do not take a full practice test, and do not introduce weird new routines.",
      "Rest, pack your materials, plan your morning, eat normally, and get sleep. Then walk in and take the test you prepared for."
    ],
    "readingTime": "7 min read"
  }
];
