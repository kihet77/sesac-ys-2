export default function Notice({ chat }) {

  return (
    <>
      <div className={`list ${chat.type}`}>
        <div className="content">{chat.content}</div>
      </div>
    </>
  );
}