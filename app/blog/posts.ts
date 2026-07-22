import { VIDEO_POSTS } from "./video-posts";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  videoId?: string;
  image?: {
    src: string;
    alt: string;
    caption?: string;
    result?: string;
    width: number;
    height: number;
  };
  keywords: string[];
  intro: string[];
  sections: {
    heading: string;
    body: string[];
    bullets?: string[];
  }[];
  closing: string[];
};

const WRITTEN_BLOG_POSTS: BlogPost[] = [
  {
    slug: "ava-1310-to-1430-sat-superscore",
    title: "How Ava Went From a 1310 to a 1430 SAT Superscore",
    description:
      "How Ava raised her SAT superscore from 1310 to 1430 with targeted prep and a cleaner test-day process.",
    publishedAt: "2026-07-21",
    readingTime: "4 min read",
    image: {
      src: "/blog/ava-sat-case-study.png",
      alt: "Ava, a SAT tutoring student who raised her SAT superscore from 1310 to 1430",
      caption: "Ava raised her SAT superscore from 1310 to 1430.",
      result: "1310 to 1430",
      width: 946,
      height: 1478,
    },
    keywords: [
      "SAT tutoring case study",
      "SAT superscore improvement",
      "1310 to 1430 SAT",
      "private SAT tutor results",
      "digital SAT tutoring",
    ],
    intro: [
      "Ava came in as a strong student with a 1310 SAT. She was already capable, but her score did not yet reflect the full level of work she could do.",
      "Her family was looking for private SAT prep that would give her a clear plan instead of more generic practice. The goal was not to bury her in random assignments. The goal was to figure out where the points were actually leaking and train those areas directly.",
      "By the end of the process, Ava raised her SAT superscore to a 1430.",
    ],
    sections: [
      {
        heading: "The starting point",
        body: [
          "Ava started with a 1310. At that level, a student usually does not need to relearn the entire test from scratch.",
          "The work is more precise. You have to separate content gaps from timing issues, rushed reading, trap answers, and avoidable mistakes. A vague plan like do more practice tests is usually not enough.",
          "For Ava, the main job was to build a cleaner process for Reading and Writing while keeping Math strong.",
        ],
      },
      {
        heading: "The first official result",
        body: [
          "After working together, Ava got a 1360 on an official SAT: 630 Reading and Writing and 730 Math.",
          "That gave her a 1420 superscore. The Math score showed she had a strong section high to protect, and the next opportunity was clear: if Reading and Writing moved, the superscore could move with it.",
          "That is one reason superscoring matters. A student does not need every section to peak on the same test date. The goal is to build section highs that hold up across attempts.",
        ],
      },
      {
        heading: "The last-minute retake",
        body: [
          "A few weeks later, Ava decided to take the SAT again pretty last minute. She did not do a major final prep push. She took it to see what would happen.",
          "That test came back as a 1330, but the split mattered more than the total: 700 Reading and Writing and 630 Math.",
          "Combined with her previous 730 Math, that raised her superscore to a 1430.",
        ],
        bullets: [
          "Starting SAT: 1310",
          "Best Math section: 730",
          "Best Reading and Writing section: 700",
          "Final SAT superscore: 1430",
          "Total superscore increase: 120 points",
        ],
      },
      {
        heading: "Why the result mattered",
        body: [
          "The most important part of Ava's result was not just that the number went up. It was that the work carried over even when the retake was last minute.",
          "Ava later said the Reading section still felt hard in places, especially when some questions were long and time got tight. That is normal. Strong SAT results do not require the test to feel easy.",
          "They require a student to stay organized under pressure, protect the questions they should get right, and have a better process when the test gets uncomfortable.",
        ],
      },
      {
        heading: "Ava's note",
        body: [
          "After the retake, Ava sent a simple update: she had raised her superscore again and wanted to say thank you.",
          "That is the kind of result I like seeing. Not a miracle promise. Not a fake overnight transformation. A strong student got a more accurate process, built section highs, and turned a 1310 into a 1430 superscore.",
        ],
        bullets: [
          "\"Just wanted to say thank u so much for all ur help again!\"",
        ],
      },
    ],
    closing: [
      "Ava's case is a good example of what SAT prep should do for a strong student. It should make the test less random.",
      "When the review is specific and the plan is built around the student's real score leaks, improvement does not have to come from endless practice. It can come from knowing exactly what to fix next.",
    ],
  },
  {
    slug: "wyatt-1180-to-1390-bluebook-sat-practice",
    title: "How Wyatt Built a 1390 Bluebook SAT Practice Score in Two Weeks",
    description:
      "How Wyatt used a two-week SAT prep sprint to move from an 1180 official starting point to a 1390 Bluebook practice score.",
    publishedAt: "2026-07-21",
    readingTime: "4 min read",
    image: {
      src: "/blog/wyatt-sat-case-study.png",
      alt: "Wyatt, a SAT tutoring student who built a 1390 Bluebook practice score after an 1180 official SAT starting point",
      caption:
        "Wyatt moved from an 1180 official SAT starting point to a 1390 Bluebook practice score in a two-week prep window.",
      result: "1180 to 1390",
      width: 400,
      height: 400,
    },
    keywords: [
      "SAT tutoring case study",
      "two week SAT prep",
      "1180 to 1390 SAT",
      "Bluebook SAT practice test",
      "SAT prep for athletes",
      "engineering SAT score",
    ],
    intro: [
      "Wyatt came in with a tight timeline.",
      "He had taken the SAT on May 2 and scored an 1180: 600 Math and 580 Reading and Writing. His next SAT was already scheduled for June 6, which meant there was no time for a slow, generic prep plan.",
      "The context mattered. Wyatt had a 4.0 GPA, was being recruited for college football, and was interested in engineering. Some of the stronger academic programs looking at him wanted to see a much higher SAT score, closer to the 1400 range.",
    ],
    sections: [
      {
        heading: "A short timeline changes the plan",
        body: [
          "The first thing I told Wyatt's family was that the timeline was short, so expectations had to be realistic.",
          "But I also saw upside, especially on Math. A 600 Math score without having fully learned some of the higher-level SAT concepts yet is not a bad starting point. It usually means the student has ability, but the test is exposing missing curriculum and unfamiliar question types.",
          "So we treated the two weeks like a sprint.",
        ],
      },
      {
        heading: "What the sprint looked like",
        body: [
          "The plan was focused: five 90-minute tutoring sessions, targeted homework, full-length practice tests, and direct work on the concepts most likely to move his score quickly.",
          "We did not have time to study everything equally. We had to find the highest-value fixes first.",
          "That meant diagnosing the score, drilling the topics that could move fastest, and building a simple process Wyatt could actually use on test day.",
        ],
        bullets: [
          "Five 90-minute tutoring sessions",
          "Targeted homework and classwork",
          "Full-length Bluebook practice testing",
          "Focused Math content repair",
          "Reading and Writing process work",
        ],
      },
      {
        heading: "Math was the clearest opportunity",
        body: [
          "For Wyatt, Math was the clearest opportunity. He was naturally stronger there, but he had gaps in topics like trigonometry and higher-level algebra that he had not fully covered in school yet.",
          "Once those patterns were named, they became trainable.",
          "That is a different problem from a student who has seen every topic and still cannot execute. Wyatt needed fast exposure, clean examples, and enough repetition to make unfamiliar SAT patterns feel less random.",
        ],
      },
      {
        heading: "Reading and Writing needed a process",
        body: [
          "Reading and Writing required a different kind of work.",
          "The goal was to make his process more reliable: slower answer elimination, cleaner reading on long questions, and less guessing from instinct when the choices sounded similar.",
          "In a two-week window, Reading and Writing cannot become a completely different section overnight. But the student can stop giving away points by rushing, overtrusting vibes, or failing to compare answer choices carefully.",
        ],
      },
      {
        heading: "The practice result",
        body: [
          "After the focused prep sprint, Wyatt took a Bluebook practice test and scored a 1390.",
          "That result mattered because it showed that his original 1180 was not his ceiling. He had the ability to operate much higher when the missing content, timing pressure, and SAT-specific patterns were addressed directly.",
          "The takeaway is not that every student can jump to a perfect score in two weeks. The takeaway is that a short window can still produce meaningful progress when the work is precise.",
        ],
        bullets: [
          "Official starting SAT: 1180",
          "Starting Math: 600",
          "Starting Reading and Writing: 580",
          "Bluebook practice score after focused prep: 1390",
          "Prep window: two weeks",
        ],
      },
    ],
    closing: [
      "Wyatt's case is a good example of why a first SAT score does not always reflect a student's real ceiling.",
      "Sometimes the student is capable, but the test is revealing curriculum gaps, pacing issues, and unfamiliar question patterns all at once. When those are separated, the plan gets much clearer.",
    ],
  },
  {
    slug: "amy-1290-to-1400-sat-superscore",
    title: "How Amy Went From a 1290 SAT to a 1400 Superscore",
    description:
      "How Amy used focused Math prep to move from a 1290 SAT to a 1400 superscore.",
    publishedAt: "2026-07-21",
    readingTime: "4 min read",
    image: {
      src: "/blog/amy-sat-case-study.png",
      alt: "Amy, a SAT tutoring student who raised her SAT superscore from 1290 to 1400",
      caption:
        "Amy improved in both sections, raised her official SAT from 1290 to 1350, and later reached a 1400 superscore.",
      result: "1290 to 1400",
      width: 924,
      height: 1532,
    },
    keywords: [
      "SAT tutoring case study",
      "SAT superscore improvement",
      "1290 to 1400 SAT",
      "SAT math prep",
      "private SAT tutor results",
      "digital SAT tutoring",
    ],
    intro: [
      "Amy came in as a strong student who already had a lot working in her favor.",
      "Her Reading and Writing foundation was strong, but Math still needed a more deliberate plan. The goal was not to rebuild her entire SAT approach. The goal was to sharpen the section that had the most room to move.",
      "She started from a 1290 SAT and eventually reached a 1400 superscore.",
    ],
    sections: [
      {
        heading: "The starting point",
        body: [
          "Amy's earlier SAT score was a 1290. That is already a solid score, but it was not fully aligned with the kind of student she was.",
          "Her English side was already strong. Math was the section where extra structure could make the biggest difference.",
          "That meant the prep had to be specific. Instead of treating every topic equally, we focused on the Math patterns that were most likely to show up repeatedly and cost real points.",
        ],
      },
      {
        heading: "The eight-week Math push",
        body: [
          "The March SAT gave us a clear timeline. We had roughly eight weeks to drill, repeat, and clean up the topics that were still inconsistent.",
          "The structure was simple: a weekly class, assigned homework, review of mistakes, and repeated exposure to high-value Math question types.",
          "That kind of repetition matters. A student does not become more consistent by seeing a concept once. They become more consistent by seeing the same idea in enough forms that the test stops feeling random.",
        ],
        bullets: [
          "Weekly 75-90 minute sessions",
          "Focused SAT Math review",
          "Assigned homework between classes",
          "Repeated drilling of high-value topics",
          "Review built around actual missed questions",
        ],
      },
      {
        heading: "The first score jump",
        body: [
          "After that prep cycle, Amy reported back with a 1350 SAT.",
          "That was a 60-point increase from her earlier 1290, and importantly, she improved in both Reading and Writing and Math.",
          "For a student who already had a strong academic base, that kind of movement showed that the issue was not ability. It was precision, repetition, and test-specific execution.",
        ],
        bullets: [
          "Previous SAT: 1290",
          "New official SAT: 1350",
          "Overall improvement: 60 points",
          "Improved in both sections",
        ],
      },
      {
        heading: "The May retake",
        body: [
          "Amy kept pushing and took the SAT again in May.",
          "Her total score moved to a 1360, but the bigger story was the superscore. Her Math score improved by 50 points, which brought her superscore to a 1400.",
          "That is exactly why section-specific work matters. If a student's Reading and Writing is already strong, even a targeted Math increase can change the full admissions picture.",
        ],
        bullets: [
          "May SAT total: 1360",
          "Math improvement: 50 points",
          "Final SAT superscore: 1400",
          "Total superscore gain from starting point: 110 points",
        ],
      },
      {
        heading: "Amy's note",
        body: [
          "After getting her May score back, Amy sent a simple update saying she had reached her goal and could not have done it without the help.",
          "That is the kind of result I care about most: not just a higher number, but a student who feels the work actually got them where they were trying to go.",
        ],
        bullets: [
          "\"I could not have done it without you thank you for helping me reach my goal!\"",
        ],
      },
    ],
    closing: [
      "Amy's case is a good example of how SAT prep should work for a strong student with one section holding the score back.",
      "The plan does not need to be dramatic. It needs to be honest about where the points are being lost, disciplined enough to repeat the right skills, and specific enough to turn ability into a higher score.",
    ],
  },
  {
    slug: "stuck-at-1350-1450-digital-sat",
    title: "Why You're Stuck at 1350 to 1450 on the Digital SAT, Even After Studying",
    description:
      "A frank breakdown of why strong students plateau in the mid 1300s and low 1400s on the digital SAT, and what to fix first.",
    publishedAt: "2026-05-02",
    readingTime: "7 min read",
    keywords: [
      "digital SAT plateau",
      "stuck at 1400 SAT",
      "how to improve SAT score",
      "SAT tutor 1500",
    ],
    intro: [
      "If you are sitting around 1350 to 1450 and your score is not moving, the problem usually is not that you are lazy. It is also probably not that you need another giant pile of random practice questions.",
      "At this score range, most students know enough content to do well. They can factor. They know punctuation rules. They can read a science passage without panicking. The issue is smaller and more annoying: the same few leaks keep showing up, and nobody is naming them clearly.",
      "That is why the plateau feels so frustrating. You study for ten more hours, take another practice test, and the score moves from 1390 to 1410, then back to 1380. It feels random. It is usually not random.",
    ],
    sections: [
      {
        heading: "The mid 1400 plateau is usually a diagnosis problem",
        body: [
          "Most students review SAT mistakes in a way that feels productive but does not actually change anything. They look at the answer explanation, nod, maybe write down the right formula, then move on.",
          "That is fine when you are missing content. It is useless when the miss happened because you read too quickly, picked an answer that was almost right, rushed the last line of algebra, or spent three minutes on a problem that should have been skipped.",
          "A real review asks a more uncomfortable question: why did I choose the wrong answer when the right answer was available to me?",
        ],
        bullets: [
          "Did you not know the rule?",
          "Did you know the rule but fail to recognize that this question was testing it?",
          "Did you run out of time because an earlier problem stole two extra minutes?",
          "Did you change a right answer because another choice sounded more sophisticated?",
          "Did you miss a negative sign, a unit, or the word except?",
        ],
      },
      {
        heading: "Module 1 matters more than students want to admit",
        body: [
          "The digital SAT is adaptive. Your performance on the first module affects the difficulty of the second module within that section. That does not mean one mistake ruins your score. It does mean that sloppy work early can put a ceiling on what happens later.",
          "This is where a lot of strong students lose points. They treat module 1 like a warmup. They rush because the questions feel manageable. Then they miss two medium questions they absolutely should have gotten right.",
          "If you are trying to break 1500, module 1 is not the place to be casual. It is where you earn access to the scoring range you want.",
        ],
        bullets: [
          "Slow down on the first ten questions if you tend to make careless mistakes.",
          "Do not use module 1 to prove how fast you are.",
          "Flag annoying questions quickly, but do not casually guess on medium questions.",
          "Treat easy and medium questions as score protection, not as filler.",
        ],
      },
      {
        heading: "Careless mistakes are not careless",
        body: [
          "Parents and students love the phrase careless mistake because it makes the miss sound harmless. It is also a bad phrase because it hides the actual fix.",
          "A careless math mistake could mean five different things. You may be skipping written steps. You may be doing too much mental math. You may be copying values incorrectly from the question. You may be solving the right equation for the wrong variable. You may be rushing because your pacing strategy is broken.",
          "Those are not the same problem. They do not get solved the same way.",
        ],
        bullets: [
          "If you copy numbers wrong, circle or rewrite given values before solving.",
          "If you solve for the wrong thing, underline the final ask before starting.",
          "If you lose signs, write one more line than feels necessary.",
          "If you rush late, practice earlier skips instead of promising to be more careful.",
        ],
      },
      {
        heading: "Your practice is probably too broad",
        body: [
          "Once you are above 1350, broad practice starts giving weaker returns. Doing a full mixed set every day can keep you busy while avoiding the exact skill that needs work.",
          "If transitions are costing you points, do transitions until you can explain why every wrong answer is wrong. If advanced algebra is the issue, stop doing random geometry and data questions for a week. If vocabulary in context keeps hitting you, build a process for those questions instead of hoping your vocabulary magically expands before test day.",
          "You do not need to study everything equally. You need to find the few categories that keep charging you 20 or 30 points and attack them directly.",
        ],
      },
      {
        heading: "The review should take almost as long as the work",
        body: [
          "This is the part most students skip. They want to do the questions, check the score, and move on. That is why the same mistake shows up again next Saturday.",
          "For every missed or guessed question, write one sentence in plain English about what happened. Not the official explanation. Your explanation.",
          "Bad review sounds like this: I forgot the grammar rule. Good review sounds like this: I treated a transition question like a vibes question instead of asking whether the second sentence agrees, disagrees, or gives an example.",
        ],
        bullets: [
          "Question type",
          "What you picked",
          "Why you picked it",
          "The real reason it was wrong",
          "What you will do next time when you see this pattern",
        ],
      },
      {
        heading: "What I would fix first",
        body: [
          "If a student came to me stuck in this range, I would not start by assigning four more practice tests. I would ask for the last test, the score breakdown, and the exact questions they missed.",
          "Then I would sort the misses into buckets. Content gap, recognition gap, pacing issue, trap answer, execution error. The plan comes after that.",
          "Most students do not need more motivation. They need a cleaner diagnosis and a practice plan that stops pretending every point has the same cause.",
        ],
        bullets: [
          "Protect module 1 first.",
          "Build an error log that names the real reason for each miss.",
          "Drill the top two recurring question types before taking another full test.",
          "Practice skipping as a skill, not as a last resort.",
          "Redo missed questions cold after a few days to see if the fix actually stuck.",
        ],
      },
    ],
    closing: [
      "The honest answer is that a 1350 to 1450 plateau is fixable, but not by doing vague extra studying. You need to stop treating the SAT like a school subject and start treating it like a pattern test.",
      "If you can name the leak, you can train it. If you keep calling everything careless or hard, you will probably stay stuck.",
    ],
  },
  {
    slug: "break-1500-digital-sat-without-20-practice-tests",
    title: "How to Break 1500 on the Digital SAT Without Taking 20 Practice Tests",
    description:
      "Practice tests are useful, but they are not the whole plan. Here is how I would train for a 1500+ digital SAT score without wasting weeks.",
    publishedAt: "2026-05-02",
    readingTime: "8 min read",
    keywords: [
      "break 1500 digital SAT",
      "1500 SAT study plan",
      "digital SAT practice tests",
      "SAT prep strategy",
    ],
    intro: [
      "A lot of students think the way to break 1500 is to take practice test after practice test until the score finally listens.",
      "That sounds disciplined. It is also a pretty inefficient way to study.",
      "A practice test tells you what is broken. It does not automatically fix it. If you take a test on Saturday, skim the answer explanations on Sunday, and take another test the next week, you may feel busy, but you are not training the skill that cost you points.",
    ],
    sections: [
      {
        heading: "Full practice tests are diagnostics, not medicine",
        body: [
          "A full test is useful when you need a clean read on your current level. It shows pacing, stamina, scoring range, and weak categories. That matters.",
          "But if the test says you missed function notation, transition questions, and two hard geometry problems, the next move is not another full test. The next move is focused repair.",
          "Think of it like getting an X-ray. You do not keep getting X-rays and call that treatment. You use the X-ray to decide what to fix.",
        ],
      },
      {
        heading: "A better rhythm",
        body: [
          "For most students trying to move from the 1400s into the 1500s, I like a simple rhythm: diagnose, drill, retest.",
          "Diagnose with a full test or a timed module. Drill the two biggest leaks for several days. Retest only after you have changed something real.",
          "If you are taking full tests every two or three days, you are probably not giving yourself enough time to improve between measurements.",
        ],
        bullets: [
          "Take one full test to set the baseline.",
          "Spend the next week drilling the top two weak categories.",
          "Use timed modules to check pacing without burning a whole day.",
          "Take another full test only when the practice work looks different.",
        ],
      },
      {
        heading: "What actually moves a 1450 to a 1500+",
        body: [
          "At this level, you are not trying to learn the entire SAT from scratch. You are trying to remove the expensive mistakes.",
          "One missed easy math question can cost more than one missed brutal question. One bad module 1 performance can make the rest of the section harder to rescue. One wrong answer you picked because it sounded smart can be the difference between a 760 and a 720 on Reading and Writing.",
          "Breaking 1500 is usually about getting boringly consistent on questions you already should be getting right.",
        ],
        bullets: [
          "No casual misses on easy and medium questions.",
          "Fast recognition on common grammar patterns.",
          "A plan for vocabulary in context that is not just guessing by tone.",
          "Cleaner algebra setup on word problems.",
          "Better decisions about which hard questions deserve time.",
        ],
      },
      {
        heading: "The 80 percent review rule",
        body: [
          "If you spend 40 minutes doing a timed set, you should be willing to spend at least 30 minutes reviewing it. That sounds annoying because it is. It is also where the improvement happens.",
          "Most students want the dopamine of finishing another set. Review does not feel as satisfying. You sit with the ugly part: the answer you picked, the assumption you made, the line you skipped, the grammar rule you half remembered.",
          "That is why review works. It forces the mistake to become specific.",
        ],
      },
      {
        heading: "A sample two week plan",
        body: [
          "Here is what I would rather see than two weeks of random full tests.",
          "This is not magic. It is just structured enough that every day has a reason.",
        ],
        bullets: [
          "Day 1: Full practice test. Do not overreact to the score. Pull the misses into categories.",
          "Day 2: Review Reading and Writing misses. Drill the biggest grammar or transition leak.",
          "Day 3: Review Math misses. Drill the biggest algebra or functions leak.",
          "Day 4: Timed Reading and Writing module. Review every miss and every guess.",
          "Day 5: Timed Math module. Practice written setup, not just final answers.",
          "Day 6: Redo missed questions from days 2 and 3 without looking at notes.",
          "Day 7: Light mixed set. Fix pacing decisions.",
          "Day 8: Drill the second biggest Reading and Writing leak.",
          "Day 9: Drill the second biggest Math leak.",
          "Day 10: Timed modules back to back.",
          "Day 11: Heavy review. Rewrite your process for the recurring mistakes.",
          "Day 12: Mixed hard set, but skip intentionally when needed.",
          "Day 13: Full practice test.",
          "Day 14: Review the test and decide what actually changed.",
        ],
      },
      {
        heading: "Do not use hard questions to avoid basic misses",
        body: [
          "High scoring students sometimes love hard questions because hard questions make studying feel serious. The problem is that many of them are still dropping points on questions that are not hard.",
          "If you miss an easy punctuation question and then spend an hour proving you can solve the hardest math problem in the bank, you are protecting your ego more than your score.",
          "The SAT rewards clean execution. You do not need to look impressive while practicing. You need to stop bleeding points.",
        ],
      },
      {
        heading: "When practice tests are worth it",
        body: [
          "Full tests are still important. You need to practice the length of the exam. You need to know how your brain behaves when you are tired. You need real score data.",
          "Just do not confuse measurement with training. If the score did not move, ask what changed between tests. If the answer is basically nothing, then the next score probably will not change much either.",
        ],
        bullets: [
          "Use a full test for baseline.",
          "Use one after a real block of targeted work.",
          "Use more full tests close to test day for pacing and stamina.",
          "Do not burn through all official tests just to feel productive.",
        ],
      },
    ],
    closing: [
      "Breaking 1500 is not about doing the most SAT work possible. It is about making the work sharper.",
      "Take enough practice tests to know what is wrong. Then spend most of your time fixing the exact thing that is wrong. That is less dramatic than grinding 20 tests, but it works a lot better.",
    ],
  },
  {
    slug: "private-sat-tutor-vs-sat-prep-course",
    title: "Private SAT Tutor vs. SAT Prep Course: What Actually Moves the Score",
    description:
      "A straight answer on when a prep course makes sense, when a private SAT tutor is worth it, and what parents should watch for.",
    publishedAt: "2026-05-02",
    readingTime: "8 min read",
    keywords: [
      "private SAT tutor vs SAT prep course",
      "is SAT tutoring worth it",
      "best SAT prep option",
      "1:1 SAT tutor",
    ],
    intro: [
      "The honest answer is that both can work. A prep course can be useful. A private tutor can be useful. Both can also waste your money if the fit is wrong.",
      "The wrong way to choose is to ask which one is better in general. The right way is to ask what your student actually needs right now.",
      "A student at 1080 who has never learned the core grammar rules is in a different situation from a student at 1440 who keeps missing two transition questions and three math questions under time pressure. Those students should not be buying the same kind of help.",
    ],
    sections: [
      {
        heading: "When a prep course makes sense",
        body: [
          "A prep course is usually best when the student needs structure more than diagnosis. If they have not seen the test much, do not know the format, and need a guided tour through the basics, a course can help.",
          "Courses are also cheaper per hour. That matters. If the goal is to build general familiarity and keep the student accountable for a few weeks, a decent course can be a reasonable first step.",
          "The problem is that courses are built for groups. They have to move through a curriculum even if half the class already knows the topic and the other half is lost. That is not a flaw. It is just the business model.",
        ],
        bullets: [
          "Good for students who need the basics.",
          "Good for families that want a lower cost starting point.",
          "Good when the student has no study routine yet.",
          "Less useful when the student has a specific plateau.",
        ],
      },
      {
        heading: "When a private tutor makes more sense",
        body: [
          "A private tutor makes sense when the problem is specific. The student is not just bad at SAT. They are bad at certain question types, certain pacing decisions, or certain habits under pressure.",
          "That is where 1:1 work earns its keep. A good tutor is not just teaching content. They are watching how the student thinks. They can see when the student is guessing too early, overcomplicating an easy math setup, or choosing an answer because it sounds mature instead of because it is supported.",
          "A group course cannot pause the whole class because your kid keeps mishandling semicolons or gets trapped by function notation. A tutor can.",
        ],
        bullets: [
          "Best for students stuck around the same score after studying.",
          "Best for students aiming for 1450, 1500, or higher.",
          "Best when the student needs fast feedback on exact mistakes.",
          "Best when motivation and accountability are part of the issue.",
        ],
      },
      {
        heading: "The biggest difference is feedback speed",
        body: [
          "Most SAT improvement comes from shortening the loop between mistake and correction.",
          "If a student makes a mistake on Monday and figures out the real reason two weeks later, that habit has already repeated. If they make the mistake in a 1:1 session and get corrected immediately, the fix has a better chance of sticking.",
          "This matters more at higher scores because the mistakes are subtle. The student often understands the explanation after the fact. The issue is that they did not recognize the pattern during the test.",
        ],
      },
      {
        heading: "Bad tutoring is just an expensive worksheet",
        body: [
          "Private tutoring is not automatically better. A bad tutor can sit there while the student does problems, explain the ones they miss, and call that a session.",
          "That is not enough. You can get explanations online for free. The value of a tutor is diagnosis, prioritization, pacing strategy, accountability, and knowing when to stop doing random practice.",
          "If the tutor cannot tell you what changed from week to week, what categories are improving, and what the next two priorities are, you may be paying for homework supervision.",
        ],
        bullets: [
          "Ask what question types your student is missing most.",
          "Ask how the tutor tracks improvement.",
          "Ask what happens between sessions.",
          "Ask how often the student should take full practice tests.",
          "Ask what score range the tutor has actually helped students reach.",
        ],
      },
      {
        heading: "Bad courses hide behind the curriculum",
        body: [
          "A weak course can feel polished and still be useless for your student. Nice slides, a portal, a schedule, and a big brand name do not guarantee score movement.",
          "The question is simple: does the course adapt when the student is not improving?",
          "If everyone gets the same lesson sequence no matter what, then the student has to fit the course. Sometimes that works. Often, especially for students trying to break into the 1500s, it does not.",
        ],
      },
      {
        heading: "How I would decide as a parent",
        body: [
          "If your student is below 1200 and has not done much prep, I would probably start with structured fundamentals. That could be Khan Academy, a course, or a tutor who is comfortable building from the ground up.",
          "If your student is already in the high 1200s or 1300s and has obvious content gaps, either path can work. The key is whether they will actually do the review and homework.",
          "If your student is already 1350+ and feels stuck, I would be much more skeptical of a generic course. At that point, the issue is usually too specific for a one size fits all curriculum.",
        ],
        bullets: [
          "Below 1200: build fundamentals and routine.",
          "1200 to 1350: mix content review with timed practice.",
          "1350 to 1450: diagnose the recurring leaks.",
          "1450+: protect easy points, sharpen pacing, and train the exact question types still causing misses.",
        ],
      },
      {
        heading: "Do not buy prestige. Buy fit.",
        body: [
          "Parents sometimes choose the option that sounds most official. Big company, big package, lots of hours. That can feel safer.",
          "But SAT prep is not better because it is bigger. It is better when the work matches the student.",
          "A 20 hour course that spends five hours on things your student already knows is not cheaper than 1:1 help. It is just slower. On the other hand, private tutoring is overkill if the student mainly needs basic structure and has not tried free resources seriously.",
        ],
      },
    ],
    closing: [
      "The best SAT prep is not the fanciest option. It is the one that finds the actual bottleneck and fixes it quickly.",
      "If you are choosing between a tutor and a course, start with the last practice test. Look at the misses. If they are broad and basic, a course may be fine. If they are specific, repeated, and expensive, you probably want someone looking directly at your student's work.",
    ],
  },
  {
    slug: "practice-test-score-higher-than-real-sat",
    title: "Why Your Practice Test Score Is Higher Than Your Real SAT Score",
    description:
      "A blunt look at why students score higher at home than on the actual SAT, and how to make practice feel more like test day.",
    publishedAt: "2026-05-02",
    readingTime: "7 min read",
    keywords: [
      "practice test score higher than real SAT",
      "SAT score dropped on test day",
      "digital SAT test day anxiety",
      "SAT practice test conditions",
    ],
    intro: [
      "If your practice test score is higher than your real SAT score, do not immediately assume you got unlucky. Luck can matter a little, but it is usually not the full story.",
      "A lot of practice tests are taken under fake conditions. Not fake because the student is cheating. Fake because the environment is way easier than the actual test.",
      "At home, you are comfortable. You know where the bathroom is. You might pause for a second without calling it a pause. You might check your phone between modules. You might take the test at 2 PM after sleeping in. None of that sounds like a big deal until the real SAT happens at 8 AM in a room full of stressed juniors.",
    ],
    sections: [
      {
        heading: "Most at-home practice tests are softer than students admit",
        body: [
          "Students rarely mean to make practice easier. It just happens. A five minute break becomes eight. A parent walks in, so the student stops for a second. The dog barks. The student loses focus, resets, and keeps going.",
          "On the real SAT, the clock does not care that your brain blanked for 40 seconds. The module keeps moving. That difference matters.",
          "If you want your practice score to predict the real score, the practice has to be a little uncomfortable. Not dramatic. Just honest.",
        ],
        bullets: [
          "Take the test in one sitting.",
          "Use the exact break lengths.",
          "Start in the morning at least once.",
          "Keep your phone in another room.",
          "Do not pause because you feel mentally messy.",
        ],
      },
      {
        heading: "The real test adds friction before question one",
        body: [
          "People underestimate how much energy gets burned before the first module starts. Waking up early, finding the room, checking in, waiting around, hearing other people talk about scores, trying not to look nervous.",
          "Then the test starts and you are expected to be sharp immediately. That is not the same as opening your laptop at home after breakfast.",
          "This is why some students miss easy questions early. They are not dumb. They are not warmed up. They are tense, and they spend the first ten questions settling in.",
        ],
      },
      {
        heading: "Module 1 panic is real",
        body: [
          "On a practice test, a hard question in module 1 feels annoying. On the real test, it can feel like a threat. Students start thinking, if this is supposed to be the easier module, am I cooked?",
          "That thought is expensive. It eats time. It makes students reread the same sentence three times. It makes them change answers for no reason.",
          "You need a rule for this before test day: if a question feels weird, flag it, make the best move you can, and keep the module alive. Do not turn one bad question into four rushed ones.",
        ],
      },
      {
        heading: "Your practice score may be inflated by familiarity",
        body: [
          "Some students accidentally reuse material too much. They do an official test, review it, then later take pieces of it again and feel like the score is clean.",
          "It is not clean. Even if you do not remember the exact answer, you may remember the shape of the question. That little bit of familiarity helps.",
          "This is especially true for Reading and Writing. If a passage feels familiar, you are not reading it the same way you would on test day.",
        ],
        bullets: [
          "Track which official tests you have already used.",
          "Do not count repeated questions as a fresh score.",
          "Use repeated questions for review, not prediction.",
          "Save at least one clean official test for close to test day.",
        ],
      },
      {
        heading: "What to do about it",
        body: [
          "The fix is not to panic. The fix is to make practice more honest and make test day less new.",
          "Do one full rehearsal under strict conditions. Morning start. Real breaks. No phone. No pausing. No music. No snacks outside the break. If the score drops, good. You found the gap while it was still fixable.",
          "Then review the drop. Did it happen in module 1? Late in Math? On Reading and Writing after your attention faded? The location tells you what to train.",
        ],
        bullets: [
          "If the drop is early, build a warmup routine.",
          "If the drop is late, train stamina with back to back modules.",
          "If the drop is pacing, practice skips instead of just going faster.",
          "If the drop is anxiety, rehearse the exact test morning routine.",
        ],
      },
    ],
    closing: [
      "A lower real score does not mean your practice work was fake. It means your practice conditions were probably too comfortable.",
      "Make practice look more like the real thing, and the real thing starts feeling less like an ambush.",
    ],
  },
  {
    slug: "sat-in-14-days-need-80-points",
    title: "What I'd Do If My SAT Was in 14 Days and I Needed 80 Points",
    description:
      "A two week SAT triage plan for students who need points fast and do not have time for fake productivity.",
    publishedAt: "2026-05-02",
    readingTime: "8 min read",
    keywords: [
      "SAT in 14 days",
      "improve SAT score fast",
      "two week SAT study plan",
      "SAT last minute prep",
    ],
    intro: [
      "If your SAT is in two weeks and you need 80 points, this is not the time to become a new person. You are not going to master every weak topic. You are not going to reinvent your reading ability. You need triage.",
      "Triage means you stop asking what would be nice to learn and start asking what is most likely to pay you back before test day.",
      "The goal is not to study everything. The goal is to stop losing the points that are easiest to save.",
    ],
    sections: [
      {
        heading: "First, find the cheap points",
        body: [
          "Cheap points are not easy questions. Cheap points are points you are losing for reasons that can be fixed quickly.",
          "A grammar rule you forgot is cheap. A repeated sign error is cheap. Running out of time because you refuse to skip is cheap. A hard reading question where two answer choices are genuinely close is not cheap.",
          "Start with your last practice test and mark every miss that makes you think, I should have had that. Those are the first targets.",
        ],
        bullets: [
          "Misread the question.",
          "Solved for x when the question asked for 2x.",
          "Picked a transition by vibes.",
          "Forgot a punctuation rule.",
          "Spent three minutes on a question that should have been skipped.",
        ],
      },
      {
        heading: "Stop chasing low-yield topics",
        body: [
          "This part annoys students, but it matters. If the test is in 14 days, you do not have time to give equal attention to every topic.",
          "If you have missed one obscure geometry question in the last month, do not spend two days becoming a geometry monk. If you miss transitions every test, transitions deserve more time.",
          "The question is not, what am I bad at? The question is, what shows up often enough to matter and is fixable quickly?",
        ],
      },
      {
        heading: "My two week structure",
        body: [
          "I would not take five full practice tests in two weeks. That feels intense, but it usually turns into score checking with no repair in between.",
          "I would take two full tests max. One at the start, one near the end. The rest of the time goes to targeted modules and review.",
        ],
        bullets: [
          "Day 1: Full test. Sort every miss into buckets.",
          "Day 2: Fix the biggest Reading and Writing leak.",
          "Day 3: Fix the biggest Math leak.",
          "Day 4: Timed Reading and Writing module, then deep review.",
          "Day 5: Timed Math module, then deep review.",
          "Day 6: Redo missed questions from days 1 to 5.",
          "Day 7: Light mixed set and pacing practice.",
          "Day 8: Drill the second biggest Reading and Writing leak.",
          "Day 9: Drill the second biggest Math leak.",
          "Day 10: Back to back timed modules.",
          "Day 11: Review every repeated mistake.",
          "Day 12: Full test under real conditions.",
          "Day 13: Review only. No panic grinding.",
          "Day 14: Light warmup and sleep.",
        ],
      },
      {
        heading: "The biggest mistake is panic practice",
        body: [
          "Panic practice is when you do random questions because sitting still feels irresponsible. It gives you the feeling of working without the benefit of a plan.",
          "Two weeks out, every session should have a reason. If you cannot say what skill you are training, you are probably just calming yourself down with more questions.",
          "There is nothing wrong with wanting to feel prepared. Just do not confuse anxiety management with score improvement.",
        ],
      },
      {
        heading: "What to do the final 48 hours",
        body: [
          "The final 48 hours are for protecting your score, not discovering a new personality.",
          "Do not take a full test the day before. Do not stay up late reviewing every formula. Do not watch six strategy videos and try to change your whole approach.",
          "Do a light warmup. Review your error log. Remind yourself of your skip rules. Sleep like it is part of the test, because it is.",
        ],
        bullets: [
          "Review the top five mistakes you keep making.",
          "Redo a small set of questions you previously missed.",
          "Set your module 1 pacing plan.",
          "Pack everything the night before.",
          "Go to bed earlier than feels necessary.",
        ],
      },
    ],
    closing: [
      "An 80 point jump in two weeks is not guaranteed. Anyone who promises that is selling too hard.",
      "But if the missed points are cheap and the plan is focused, it is possible to make a real move. The key is to stop studying like you have six months when you have 14 days.",
    ],
  },
  {
    slug: "how-to-tell-if-sat-tutor-is-helping",
    title: "How to Tell If Your SAT Tutor Is Actually Helping",
    description:
      "A practical checklist for parents who want to know whether SAT tutoring is producing real progress or just expensive homework time.",
    publishedAt: "2026-05-02",
    readingTime: "7 min read",
    keywords: [
      "is SAT tutor helping",
      "SAT tutor results",
      "how to evaluate SAT tutor",
      "private SAT tutoring",
    ],
    intro: [
      "A lot of parents have a weird feeling after a few tutoring sessions. The student likes the tutor. The sessions seem productive. Homework is being assigned. But nobody can clearly answer the obvious question: is this actually working?",
      "That is a fair question. SAT tutoring should not be a black box where you pay every week and hope the score eventually improves.",
      "A tutor does not need to produce a miracle in two sessions. But there should be signs that the work is becoming more specific, more targeted, and more connected to the student's actual misses.",
    ],
    sections: [
      {
        heading: "The tutor should know the student's mistake patterns",
        body: [
          "If you ask what your student needs to work on and the answer is broad, that is not great. Needs to improve reading is not a diagnosis. Needs to slow down is not a plan.",
          "A useful answer sounds more like this: she is losing points on transition questions because she is choosing based on tone instead of the relationship between sentences. Or: he knows the algebra but keeps solving for the wrong final value on word problems.",
          "That level of detail matters because it changes the homework.",
        ],
        bullets: [
          "Which question types are repeated misses?",
          "Are the misses content, pacing, or execution?",
          "Which mistakes are disappearing?",
          "Which mistakes are still showing up after review?",
        ],
      },
      {
        heading: "The homework should not feel random",
        body: [
          "Random homework is a bad sign. A student should know why they are doing the assignment.",
          "If the tutor assigns a mixed set, there should be a reason. If the tutor assigns grammar, it should connect to missed grammar questions. If the tutor assigns a full test, it should be because the student needs a full diagnostic, stamina work, or a clean retest after targeted practice.",
          "Busy work is easy to assign. Useful work is tied to a pattern.",
        ],
      },
      {
        heading: "Score movement is not the only early signal",
        body: [
          "The score may not jump right away, especially if the student has only taken one retest. That does not mean tutoring is failing.",
          "Look for smaller signals first. Fewer repeated mistakes. Cleaner written work. Better pacing decisions. Less guessing. Better explanation of why wrong answers are wrong.",
          "A student who can explain the trap is usually closer to improving than a student who just memorized the official answer explanation.",
        ],
        bullets: [
          "The student is missing fewer easy and medium questions.",
          "The same error is not appearing three weeks in a row.",
          "The student can say why an answer is wrong without reading the explanation.",
          "Timing is getting more predictable.",
          "The tutor can name the next two priorities.",
        ],
      },
      {
        heading: "The tutor should not be afraid to tell you the truth",
        body: [
          "Some families want encouragement. That is normal. But if the tutor only says everything is going great, be careful.",
          "Good tutoring includes uncomfortable honesty. Maybe the student is not doing homework. Maybe the target score is possible but the timeline is too tight. Maybe the student needs fundamentals before chasing a 1500.",
          "You are not paying for someone to flatter the situation. You are paying for a clear read on what is happening.",
        ],
      },
      {
        heading: "Questions I would ask after three or four sessions",
        body: [
          "You do not need to interrogate the tutor. Just ask enough to see whether there is a real plan.",
          "The answers should be specific. If everything sounds like a brochure, that is the problem.",
        ],
        bullets: [
          "What are the top two question types costing points right now?",
          "What has improved since the first session?",
          "What homework matters most this week?",
          "When should we take the next full practice test?",
          "What score range feels realistic if the student keeps doing the work?",
        ],
      },
    ],
    closing: [
      "SAT tutoring should make the problem clearer, not more mysterious.",
      "If the tutor can show you what is changing and what still needs work, good. If every week feels like another worksheet with a friendly adult nearby, you may not be buying score improvement. You may be buying supervised studying.",
    ],
  },
  {
    slug: "study-practice-test-only-missed-6-questions",
    title: "How to Study From a Practice Test When You Only Missed 6 Questions",
    description:
      "High scorers need a different review process. Here is how to learn from a tiny number of misses without overreacting.",
    publishedAt: "2026-05-02",
    readingTime: "7 min read",
    keywords: [
      "missed 6 questions SAT",
      "high score SAT review",
      "SAT practice test review 1500",
      "improve from 1500 SAT",
    ],
    intro: [
      "When you only miss six questions on a practice test, review gets weird.",
      "If you miss 25 questions, the patterns are obvious. You probably have content gaps. You can see whole categories that need work. But when you miss six, each question feels huge. It is easy to overreact.",
      "One missed vocab question does not mean your vocabulary is broken. One missed geometry question does not mean you need to spend the week on geometry. High scorers need to be careful because the sample size is tiny.",
    ],
    sections: [
      {
        heading: "Do not build a whole study plan from one miss",
        body: [
          "This is the biggest mistake high scorers make. They miss one question type and immediately decide it is their new weakness.",
          "Maybe it is. Maybe it was just one weird question. You need to compare it against older tests before changing the plan.",
          "If transitions have shown up as a miss three times, that is a pattern. If one hard geometry question appeared once, it may just be part of the normal cost of a hard test.",
        ],
        bullets: [
          "Is this question type a repeat miss?",
          "Was the mistake caused by content or execution?",
          "Would you get it right tomorrow without looking at the explanation?",
          "Did time pressure cause the miss?",
          "Did you pick a trap answer you have picked before?",
        ],
      },
      {
        heading: "Separate expensive misses from acceptable misses",
        body: [
          "Not every miss deserves the same emotional reaction.",
          "If you miss a brutal final Math question after making good decisions all section, that is annoying but not catastrophic. If you miss question 4 because you rushed a unit conversion, that is a bigger problem.",
          "High scorers are not trying to become perfect at every hard question. They are trying to stop losing points they had no business losing.",
        ],
        bullets: [
          "Easy or medium miss: high priority.",
          "Repeat pattern: high priority.",
          "Miss caused by rushing: high priority.",
          "One-off hard question: review it, but do not panic.",
          "Question you guessed correctly: still review it.",
        ],
      },
      {
        heading: "Guesses matter even if they were right",
        body: [
          "If you only look at wrong answers, you miss half the story. A correct guess is a future wrong answer wearing makeup.",
          "Mark every question where you were not fully sure. If you guessed between two answers and got lucky, review it like a miss.",
          "This is how high scorers find hidden instability before it shows up on the real test.",
        ],
      },
      {
        heading: "Redo the six misses cold",
        body: [
          "Do not just read the explanation and move on. Wait a day or two, then redo the missed questions cold.",
          "If you get it right quickly and can explain why, the issue may be fixed. If you hesitate or repeat the same wrong logic, the explanation did not stick.",
          "The redo is the truth. The explanation only tells you that the answer made sense once someone showed it to you.",
        ],
      },
      {
        heading: "Make a short list of rules, not a giant notebook",
        body: [
          "A high scorer does not need a 40 page error log. They need a short list of personal rules that prevent repeated leaks.",
          "The rule should be specific enough that it changes behavior during the test.",
        ],
        bullets: [
          "For transition questions, name the relationship before looking at choices.",
          "For word problems, underline what the final answer is asking for.",
          "For graph questions, check units before calculating.",
          "For paired Reading and Writing choices, reject the answer that goes one step beyond the text.",
          "For hard Math, skip after 60 to 75 seconds if no clean path appears.",
        ],
      },
    ],
    closing: [
      "When you only missed six questions, the work is not about doing more. It is about being more precise.",
      "Do not panic from one miss. Do not ignore a repeated one. High score review is mostly learning which tiny problems are real and which ones are noise.",
    ],
  },
  {
    slug: "should-you-retake-a-1500-sat",
    title: "Should You Retake a 1500 SAT? A Frank Answer",
    description:
      "A practical way to decide whether retaking a 1500 SAT is worth the time, risk, and stress.",
    publishedAt: "2026-05-02",
    readingTime: "7 min read",
    keywords: [
      "should I retake a 1500 SAT",
      "is 1500 SAT enough",
      "retake SAT 1500",
      "SAT score college admissions",
    ],
    intro: [
      "A 1500 is a great score. That should be said first because students on the internet have completely lost perspective.",
      "But the question should I retake a 1500 is still real. For some students, retaking makes sense. For others, it is a waste of time and energy that would be better spent on essays, grades, activities, or not burning out.",
      "The right answer depends on the section split, target schools, target major, timeline, and how fixable the remaining misses are.",
    ],
    sections: [
      {
        heading: "Start with the section split",
        body: [
          "A 1500 can mean different things. A 790 Math and 710 Reading and Writing is not the same admissions signal as a 750 and 750, especially for engineering or CS.",
          "If your target major is math-heavy, a low Math split matters more. If your Math is already high and Reading and Writing is lagging, the retake question becomes about whether those Reading and Writing misses are trainable.",
          "Do not treat the composite score like it tells the whole story. Colleges do not ignore the split.",
        ],
        bullets: [
          "STEM applicant with 710 Math: I would strongly consider retaking.",
          "STEM applicant with 790 Math and 710 Reading and Writing: maybe, depending on schools.",
          "Humanities applicant with balanced 750 and 750: probably less urgent.",
          "Student with superscore opportunity: retake can make more sense.",
        ],
      },
      {
        heading: "Look at your school list, not TikTok",
        body: [
          "A 1500 is above the range for many excellent schools. It is around the competitive range for a lot of top schools. It may be below the most comfortable range for some hyper-competitive programs.",
          "The mistake is using one universal answer. A student applying to a state flagship, a top 30, and MIT is not making the same decision for each school.",
          "Look at the middle 50 percent ranges for the actual schools on your list. Then decide if another 30 or 40 points would materially change your position.",
        ],
      },
      {
        heading: "Ask if the remaining points are fixable",
        body: [
          "This is the part students skip. They say, I want a 1550, but they do not ask where the next 50 points would come from.",
          "If the last practice test shows repeated grammar misses, pacing issues, or careless Math errors, there may be a real path. If the only misses are a few brutal reading questions that vary from test to test, the next 50 points may be less predictable.",
          "Retaking makes more sense when the misses are specific and repeatable. It makes less sense when the plan is just hope harder.",
        ],
        bullets: [
          "Specific recurring misses: retake is more reasonable.",
          "Strong superscore chance: retake is more reasonable.",
          "No time to prep: retake is less reasonable.",
          "Essays are unfinished: retake may be a distraction.",
          "Current score is already strong for your list: retake may not matter much.",
        ],
      },
      {
        heading: "Do not ignore opportunity cost",
        body: [
          "Every hour spent chasing a higher SAT score is an hour not spent somewhere else.",
          "If your essays are weak, a 1530 will not save lazy writing. If your grades are slipping, another SAT attempt may not be the smartest move. If you are exhausted, grinding for a tiny increase can backfire.",
          "This is not an argument against ambition. It is an argument for not treating the SAT like the only lever in the application.",
        ],
      },
      {
        heading: "My honest rule",
        body: [
          "If you have a 1500, I would retake only if there is a clear reason.",
          "Clear reason means the score split hurts your intended major, your top schools have very high score ranges, you have a superscore opportunity, or your practice data shows obvious fixable leaks.",
          "If none of that is true, I would probably take the win and spend the time making the rest of the application stronger.",
        ],
      },
    ],
    closing: [
      "A 1500 is not a problem. It is a strong score that may or may not be worth improving.",
      "Retake if there is a real path and a real reason. Do not retake because the internet made you feel like a 1500 is mid. It is not.",
    ],
  },
  {
    slug: "parents-guide-reading-sat-score-report",
    title: "The Parent's Guide to Reading an SAT Score Report Without Panicking",
    description:
      "How parents should read an SAT score report, what matters, what is noise, and what to ask before buying more prep.",
    publishedAt: "2026-05-02",
    readingTime: "8 min read",
    keywords: [
      "SAT score report explained",
      "parents guide SAT scores",
      "how to read SAT score report",
      "SAT section score meaning",
    ],
    intro: [
      "The SAT score report can make parents spiral because it looks official, but it does not always tell you what to do next.",
      "You see a composite score, section scores, ranges, percentiles, maybe some skill bars, and it is tempting to turn every number into a crisis.",
      "Do not do that. The score report is useful, but it is not a full diagnosis. It tells you where to look. It does not always tell you why the score is there.",
    ],
    sections: [
      {
        heading: "Start with the section split",
        body: [
          "The first thing I look at is not the composite. I look at Reading and Writing versus Math.",
          "A 1350 with 700 Math and 650 Reading and Writing is a different student from a 1350 with 610 Math and 740 Reading and Writing. Same total score, different plan.",
          "If one section is much lower, that is where the first conversation starts. If the sections are balanced, the student may need broad improvement or more precise work inside both sections.",
        ],
      },
      {
        heading: "Do not overreact to percentiles",
        body: [
          "Percentiles are not useless, but they are often less helpful than parents think. They tell you how the student compares to other test takers. They do not tell you which habits cost points.",
          "A parent sees 92nd percentile and thinks good. Another sees 78th percentile and panics. Neither reaction builds a study plan.",
          "Use percentiles for context. Use the missed questions and section split for action.",
        ],
      },
      {
        heading: "Skill bars can be misleading",
        body: [
          "The score report may suggest broad skill categories. That can be a starting point, but it is usually too vague.",
          "If Reading and Writing says information and ideas is weak, that could mean the student struggles with command of evidence, inference, main idea, charts, or just one bad passage. Those are different problems.",
          "The score report points to the neighborhood. The actual questions give the address.",
        ],
        bullets: [
          "Do not build the whole plan from a broad skill label.",
          "Look at the actual missed questions if you have access.",
          "Separate content gaps from pacing and attention errors.",
          "Check whether the same category is weak across multiple tests.",
        ],
      },
      {
        heading: "One test is not a personality profile",
        body: [
          "Parents sometimes treat one SAT score like it reveals the student's ceiling. It does not.",
          "A bad test can happen. A good test can happen. The question is whether the score matches the student's recent practice range.",
          "If the real score is 100 points below practice, investigate test-day conditions. If practice and real scores match, the score is probably a fair snapshot of current level.",
        ],
      },
      {
        heading: "What I would ask before buying more prep",
        body: [
          "Before signing up for a course or tutor, ask a few practical questions.",
          "You do not need a complicated spreadsheet. You need enough information to know whether the student needs content, strategy, accountability, or a more honest testing setup.",
        ],
        bullets: [
          "Which section is actually limiting the score?",
          "Are the missed points from content gaps or mistakes on material the student knows?",
          "Is timing a problem in one module or across the whole test?",
          "Does the student review mistakes deeply or just read explanations?",
          "Has the student taken practice tests under real conditions?",
        ],
      },
      {
        heading: "When a low section score matters more",
        body: [
          "A low section score matters more when it conflicts with the student's intended major or school list.",
          "For a CS or engineering applicant, Math carries extra weight. For a student applying broadly to less test-heavy schools, a slightly uneven split may not be a big deal.",
          "Context matters. Do not panic in the abstract. Compare the score to the actual goal.",
        ],
      },
    ],
    closing: [
      "A score report is a starting point, not a verdict.",
      "Read the section split first. Use percentiles for context, not panic. Then look at real missed questions before deciding what kind of prep your student actually needs.",
    ],
  },
];

export const BLOG_POSTS: BlogPost[] = [...WRITTEN_BLOG_POSTS, ...VIDEO_POSTS];

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
