const commentsData = [
  {
    name: "Mac",
    text: "Honestly the beat is hitting more than the verse",
    replies: [
      {
        name: "Mac",
        text: "Honestly the beat is hitting more than the verse",
        replies: [
          {
            name: "Mac",
            text: "Honestly the beat is hitting more than the verse",
            replies: [
              {
                name: "Mac",
                text: "Honestly the beat is hitting more than the verse",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Mac",
    text: "Honestly the beat is hitting more than the verse",
    replies: [
      {
        name: "Mac",
        text: "Honestly the beat is hitting more than the verse",
        replies: [
          {
            name: "Mac",
            text: "Honestly the beat is hitting more than the verse",
            replies: [
              {
                name: "Mac",
                text: "Honestly the beat is hitting more than the verse",
                replies: [],
              },
            ],
          },
          {
            name: "Mac",
            text: "Honestly the beat is hitting more than the verse",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Mac",
    text: "Honestly the beat is hitting more than the verse",
    replies: [
      {
        name: "Mac",
        text: "Honestly the beat is hitting more than the verse",
        replies: [
          {
            name: "Mac",
            text: "Honestly the beat is hitting more than the verse",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Mac",
    text: "Honestly the beat is hitting more than the verse",
    replies: [
      {
        name: "Mac",
        text: "Honestly the beat is hitting more than the verse",
        replies: [
          {
            name: "Mac",
            text: "Honestly the beat is hitting more than the verse",
            replies: [
              {
                name: "Mac",
                text: "Honestly the beat is hitting more than the verse",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Mac",
    text: "Honestly the beat is hitting more than the verse",
    replies: [
      {
        name: "Mac",
        text: "Honestly the beat is hitting more than the verse",
        replies: [
          {
            name: "Mac",
            text: "Honestly the beat is hitting more than the verse",
            replies: [],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex items-center bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-8 rounded-full"
        src="https://yt3.ggpht.com/yti/ADpuP3Py1c1CPl-Rmhy5Z-smdqRH5tU5JHguo7AdDJ4=s88-c-k-c0x00ffffff-no-rj"
        alt="profile"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, i) => (
    <div key={i}>
      <Comment data={comment} />
      <div className="pl-5  border-l-2 ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
