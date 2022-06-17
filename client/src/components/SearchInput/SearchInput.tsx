interface IconSearchProps {
  value: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  name: string;
  placeholder: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({
  value,
  icon: Icon,
  name,
  placeholder,
  type,
  onChange,
}: IconSearchProps) {
  return (
    <div className="search-box">
      <Icon />
      <input
        type={type}
        className="input-search"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
