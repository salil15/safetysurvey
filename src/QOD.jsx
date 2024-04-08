// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function () {
    const questions = [
        {
            type: "radiogroup",
            name: "fireDiscovery",
            title: "What should you do if you discover a fire in the workplace?",
            choices: [
                "Ignore it, someone else will deal with it",
                "Try to extinguish it without alerting anyone",
                "Immediately pull the fire alarm and evacuate",
                "Take a photo for social media"
            ],
            correctAnswer: "Immediately pull the fire alarm and evacuate"
        },
        {
            type: "radiogroup",
            name: "preventFalls",
            title: "Which of the following is an important practice to prevent slips, trips, and falls in the workplace?",
            choices: [
                "Running in hallways",
                "Keeping work areas clutter-free",
                "Wearing shoes with smooth soles",
                "Storing liquids on high shelves"
            ],
            correctAnswer: "Keeping work areas clutter-free"
        },
        {
            type: "radiogroup",
            name: "heavyLifting",
            title: "When lifting a heavy object, what is the safest practice?",
            choices: [
                "Bend at your waist and lift with your back",
                "Get someone else to do it",
                "Bend your knees and lift with your legs",
                "Lift quickly with a jerking motion"
            ],
            correctAnswer: "Bend your knees and lift with your legs"
        },
        {
            type: "radiogroup",
            name: "purposeOfPPE",
            title: "What is the purpose of Personal Protective Equipment (PPE)?",
            choices: [
                "To look professional and uniform",
                "To protect the wearer from health or safety risks at work",
                "To limit the company's liability",
                "To replace other safety measures"
            ],
            correctAnswer: "To protect the wearer from health or safety risks at work"
        },
        {
            type: "radiogroup",
            name: "evacuationReminder",
            title: "In the event of an evacuation, what is the most important thing to remember?",
            choices: [
                "Take all personal belongings with you",
                "Use elevators for a quick exit",
                "Stay calm and proceed to the nearest exit",
                "Wait for a phone call with instructions"
            ],
            correctAnswer: "Stay calm and proceed to the nearest exit"
        },
        {
            type: "radiogroup",
            name: "fireExtinguisherUse",
            title: "Which type of fire extinguisher should be used on electrical fires?",
            choices: [
                "Water",
                "Foam",
                "Dry powder",
                "Wet chemical"
            ],
            correctAnswer: "Dry powder"
        },
        {
            type: "radiogroup",
            name: "correctPPEForHeights",
            title: "Which piece of Personal Protective Equipment (PPE) is necessary for working at heights?",
            choices: [
                "Safety goggles",
                "Hard hat",
                "Safety harness",
                "Earplugs"
            ],
            correctAnswer: "Safety harness"
        },
        {
            type: "radiogroup",
            name: "chemicalSpillAction",
            title: "What is the first action you should take in the event of a chemical spill?",
            choices: [
                "Try to clean it up immediately",
                "Evacuate the area and alert others",
                "Take photos for documentation",
                "Open windows for ventilation"
            ],
            correctAnswer: "Evacuate the area and alert others"
        },
        {
            type: "radiogroup",
            name: "handlingSharpObjects",
            title: "How should you handle sharp objects in the workplace?",
            choices: [
                "Carry them with the point facing up",
                "Leave them lying around after use",
                "Pass them directly to another person",
                "Keep them pointed away from yourself and others"
            ],
            correctAnswer: "Keep them pointed away from yourself and others"
        },
        {
            type: "radiogroup",
            name: "emergencyExitsImportance",
            title: "Why is it important to keep emergency exits clear at all times?",
            choices: [
                "To prevent theft",
                "To keep the area clean",
                "For easy access during an emergency",
                "To avoid fines"
            ],
            correctAnswer: "For easy access during an emergency"
        }
    ];

    const nQuestion = Math.floor((Math.random() * questions.length));
    const surveyJson = {
        title: "Workplace Safety Quiz",
        showCorrectAnswer: "always",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [{
            elements: [{
                type: "html",
                html: "You are about to start a quiz on Workplace Safety. <br>You will have 30 seconds for every question and 60 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
            }, {
                type: "text",
                name: "username",
                titleLocation: "hidden",
                isRequired: true
            }]
        }, {
            elements: [questions[nQuestion]]
        }]
    };
    const survey = new Model(surveyJson);

    survey.onComplete.add(function (sender) {
        var questions = sender.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var correctAnswer = question.correctAnswer;
            var userAnswer = question.value;
            var questionTitle = question.title;
            console.log("Question: " + questionTitle);
            console.log("Correct Answer: " + correctAnswer);
            console.log("User Answer: " + userAnswer);
        }
    });

    return <Survey model={survey} />;
}
