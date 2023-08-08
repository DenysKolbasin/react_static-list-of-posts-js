export const CommentInfo = ({ comment: {
  name,
  email,
  body,
},
}) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">
        {name}
      </strong>

      {' by '}

      <a
        className="CommentInfo__email"
        target="_blank"
        rel="noreferrer"
        href={`mailto:${email}`}
      >
        {email}
      </a>
    </div>

    <div className="CommentInfo__body">
      {body}
    </div>
  </div>
);
