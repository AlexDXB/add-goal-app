import React from "react";
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import styled from "styled-components";

const GoalList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const CourseGoalList = (props) => {
  return (
    <GoalList>
      {props.items.map((goal) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </GoalList>
  );
};

export default CourseGoalList;
