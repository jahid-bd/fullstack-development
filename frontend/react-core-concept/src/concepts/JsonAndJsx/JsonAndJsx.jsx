import "./style.css";

import TaskCard from "./components/TaskCard";

const getDate = () => {
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

const getDay = () => {
  const date = new Date();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const day = days[date.getDay()];

  return day;
};

const taskData = [
  {
    id: "task-id-001",
    date: `${getDate()}, ${getDay()}`,
    subTitle: "Subtitle",
    tags: [
      {
        text: "Its done",
        icon: "D",
      },
      {
        text: "Its cancelled",
        icon: "C",
      },
      {
        text: "Its in progress",
        icon: "P",
      },
      {
        text: "Just worte this",
        icon: "T",
      },
    ],
    comments: [
      {
        id: "comment-id-001",
        user: {
          avatar: "A",
          name: "Viral",
          id: "user-id-001",
        },

        comment:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum distinctio ducimus temporibus ad corrupti voluptas delectus totam obcaecati doloremque quasi saepe modi vitae maiores quisquam quis eos quam, suscipit neque?",
      },
    ],
    tasks: [
      {
        title: "Foggy Nelson",
        status: "done",
        text: "Here to clean the streets of Hells Kitchen",
      },
      {
        title: "Louis CK",
        status: "cancelled",
        text: "This one is cancelled",
      },
      {
        title: "Albert Einstein",
        status: "in-progress",
        text: "In Progress",
      },
      {
        title: "Albert Einstein",
        status: "in-progress",
        text: "In Progress",
      },
    ],
  },
  {
    id: "task-id-001",
    date: `${getDate()}, ${getDay()}`,
    subTitle: "The game changer",
    tags: [
      {
        text: "Its done",
        icon: "D",
      },
      {
        text: "Its cancelled",
        icon: "C",
      },
      {
        text: "Its in progress",
        icon: "P",
      },
      {
        text: "Just worte this",
        icon: "T",
      },
      {
        text: "Just worte this",
        icon: "T",
      },
    ],
    comments: [
      {
        id: "comment-id-001",
        user: {
          avatar: "A",
          name: "Viral",
          id: "user-id-001",
        },

        comment:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum distinctio ducimus temporibus ad corrupti voluptas delectus totam obcaecati doloremque quasi saepe modi vitae maiores quisquam quis eos quam, suscipit neque?",
      },
    ],
    tasks: [
      {
        title: "Foggy Nelson",
        status: "done",
        text: "Here to clean the streets of Hells Kitchen",
      },
      {
        title: "Louis CK",
        status: "cancelled",
        text: "This one is cancelled",
      },
      {
        title: "Albert Einstein",
        status: "in-progress",
        text: "In Progress",
      },
      {
        title: "Albert Einstein",
        status: "in-progress",
        text: "In Progress",
      },
    ],
  },
];

const JsonAndJsx = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Json And Jsx</h1>
      <div>
        {taskData.map((task) => (
          <TaskCard task={task} />
        ))}
      </div>
    </>
  );
};

export default JsonAndJsx;
