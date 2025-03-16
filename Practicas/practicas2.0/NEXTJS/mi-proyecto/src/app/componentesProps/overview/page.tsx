function Avatar() {
  return (
    <img
      className="avatar"
      src="/componentesProps.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}

export default function Profile() {
  return <Avatar />;
}
