/**
 * Sample/Simulated Persona Data
 * Project: StudyFlow
 * Note: These personas are created from simulated research data for educational/portfolio purposes.
 * They do not represent real individuals.
 */

const personaData = {
    ananya: {
        id: "ananya",
        name: "Ananya",
        age: 20,
        occupation: "College Student",
        context: "Undergraduate student managing assignments, projects and examinations.",
        type: "The Overloaded Planner",
        description: "Ananya wants to stay organized but often struggles when several academic deadlines overlap.",
        quote: "I know what I need to finish, but when everything feels urgent, I don't know where to start.",
        image: "assets/images/ananya-profile.png",
        goals: {
            academic: ["Submit assignments on time", "Prepare for exams consistently", "Avoid last-minute work"],
            productivity: ["Know what to work on first", "Keep track of upcoming deadlines", "Plan study sessions"],
            personal: ["Reduce academic stress", "Maintain a balanced routine", "Feel more in control of workload"]
        },
        painPoints: [
            { title: "Deadline Overlap", desc: "Multiple assignments can become overwhelming." },
            { title: "Poor Prioritization", desc: "It can be difficult to determine which task deserves attention first." },
            { title: "Fragmented Planning", desc: "Tasks may be distributed across notebooks, reminders and applications." },
            { title: "Lack of Progress Visibility", desc: "It is difficult to see overall academic progress at a glance." },
            { title: "Last-Minute Pressure", desc: "Unplanned workload creates stress close to deadlines." }
        ],
        motivations: ["Academic success", "Feeling organized", "Completing tasks early", "Reducing stress", "Maintaining consistency", "Having more personal time"],
        behaviors: [
            "Uses phone reminders",
            "Checks deadlines frequently",
            "Writes down important tasks",
            "Sometimes switches between multiple productivity tools",
            "Prioritizes urgent assignments",
            "Feels motivated when progress is visible"
        ],
        techHabits: {
            devices: ["Smartphone", "Laptop"],
            tools: ["Calendar apps", "Notes apps", "Messaging apps", "To-do applications"],
            behavior: ["Frequently checks notifications", "Prefers simple interfaces", "Wants quick task entry", "Avoids complicated workflows"]
        }
    },
    rahul: {
        id: "rahul",
        name: "Rahul",
        age: 21,
        occupation: "College Student",
        type: "The Last-Minute Learner",
        description: "Rahul tends to postpone academic tasks and becomes highly focused when deadlines approach.",
        quote: "I usually start working seriously when the deadline is close.",
        image: "assets/images/rahul-profile.png",
        goals: [
            "Complete assignments before deadlines",
            "Remember important academic events",
            "Develop a consistent study routine",
            "Reduce last-minute pressure",
            "Track progress"
        ],
        painPoints: [
            "Procrastination",
            "Overwhelming task lists",
            "Difficulty estimating study time",
            "Forgetting upcoming deadlines",
            "Lack of consistent routine"
        ],
        motivations: ["Better grades", "Less stress", "More free time", "Visible progress", "Short-term achievable goals"],
        behaviors: [
            "Often delays starting tasks",
            "Responds strongly to approaching deadlines",
            "Uses reminders",
            "Prefers simple task lists",
            "Works intensely close to submission dates"
        ]
    }
};
