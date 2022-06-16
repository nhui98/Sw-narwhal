interface AvatarProps {
  avatar: string;
}

export default function Avatar({ avatar }: AvatarProps) {
  return (
    <div className="avatar">
      <img src={avatar} alt="Avatar" />
    </div>
  );
}
