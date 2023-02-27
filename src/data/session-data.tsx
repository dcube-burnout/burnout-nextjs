import { TextList } from "@lifesg/react-design-system";
import { Text } from "@lifesg/react-design-system/text";
import {
  IAccomplishmentData,
  IQuestionnaireData,
  IScoreData,
  ISessionStartData,
  ISummaryData,
} from "./types";
import styled from "styled-components";

const WhiteText = styled.span`
  color: #fff !important;
`;

export const startData: ISessionStartData = {
  imgSrc: "",
  title: "Post Retro Mental Check-in",
  description:
    "Answer this short questionnaire based on how you feel after completing the tasks during your recent sprint.",
  instruction: (
    <>
      <Text.Body>
        <WhiteText>
          Based on the scoring below, indicate within the questionnaire how you
          felt during the sprint.{" "}
        </WhiteText>
      </Text.Body>
      <Text.Body>
        <WhiteText>
          The details of this questionnaire would be kept strictly between you
          and your supervisor.
        </WhiteText>
      </Text.Body>
      <ul style={{ marginLeft: "1rem", padding: "1rem" }}>
        <li>0 - Never</li>
        <li>1 - At least once</li>
        <li>2 - Two to three times</li>
        <li>3 - Four to five times</li>
        <li>4 - Six to seven times</li>
        <li>5 - Frequently within a week</li>
        <li>6 - Every day</li>
      </ul>
      <Text.Body>
        <WhiteText>
          * This questionnaire does not replace nor is it intended to replace a
          diagnosis by mental health professionals.
        </WhiteText>
      </Text.Body>
    </>
  ),
  buttons: [{ label: "Begin" }, { label: "Exit" }],
};

export const questionnaireData: IQuestionnaireData = {
  sections: [
    {
      title: "Section A",
      description: "This section accesses feelings associated with burnout.",
      questions: [
        { itemId: 1, questionText: "I feel emotionally drained by my work." },
        {
          itemId: 2,
          questionText:
            "Working with people all day long requires a great deal of effort.",
        },
        { itemId: 3, questionText: "I feel like my work is breaking me down." },
        { itemId: 4, questionText: "I feel frustrated by my work." },
        { itemId: 5, questionText: "I feel like I work too hard at my job." },
        {
          itemId: 6,
          questionText:
            "It stresses me too much to work in direct contact with people.",
        },
        { itemId: 7, questionText: "I feel like I’m at the end of my rope." },
      ],
    },
    {
      title: "Section B",
      description: "This section accesses feelings associated with detachment.",
      questions: [
        {
          itemId: 8,
          questionText:
            "I feel I look after tasks impersonally, as if they are objects.",
        },
        {
          itemId: 9,
          questionText:
            "I feel tired when I get up in the morning and have to face another day at work.",
        },
        {
          itemId: 10,
          questionText:
            "I have the impression that my teammates/stakeholders make me responsible for some of their problems.",
        },
        {
          itemId: 11,
          questionText:
            "I am at the end of my patience at the end of my work day.",
        },
        {
          itemId: 12,
          questionText:
            "I really don’t care about what happens to some of my teammates/stakeholders.",
        },
        {
          itemId: 13,
          questionText:
            "I have become more insensitive to people since I’ve been working.",
        },
        {
          itemId: 14,
          questionText: "I am afraid this job is making me uncaring.",
        },
      ],
    },
    {
      title: "Section C",
      description:
        "This section accesses feelings associated personal achievement.",
      questions: [
        {
          itemId: 15,
          questionText: "I accomplish many worthwhile things in this job.",
        },
        { itemId: 16, questionText: "I feel full of energy." },
        {
          itemId: 17,
          questionText:
            "I am easily able to understand what my patients/clients feel.",
        },
        {
          itemId: 18,
          questionText:
            "I look after my teammates/stakeholder’s problems very effectively.",
        },
        {
          itemId: 19,
          questionText: "In my work, I handle emotional problems very calmly.",
        },
        {
          itemId: 20,
          questionText:
            "Through my work, I feel that I have a positive influence on people.",
        },
        {
          itemId: 21,
          questionText:
            "I am easily able to create a relaxed atmosphere with my patients/clients.",
        },
        {
          itemId: 22,
          questionText:
            "I feel refreshed when I have been close to my teammates/stakeholders at work.",
        },
      ],
    },
  ],
  buttons: [{ label: "Next" }, { label: "Back" }],
};

export const accomplishmentData: IAccomplishmentData = {
  title: "My personal accomplishments 🏆",
  description:
    "Congrats, you’ve made it to the end of the sprint! Take a few moments to reflect and write down something which you are proud of.",
  buttons: [{ label: "Next" }, { label: "Back" }],
};

export const summaryData = (
  title: string,
  date: string,
  scores: IScoreData,
  accomplishments: string
): ISummaryData => ({
  title: "Post Sprint Summary",
  info: [
    {
      label: "Title",
      data: title,
    },
    {
      label: "Date",
      data: date,
    },
  ],
  description: "Based on your responses, here are your results:",
  indivScores: scores.indiv,
  overallScore: scores.overall,
  accomplishments,
  buttons: [{ label: "Complete" }],
});
