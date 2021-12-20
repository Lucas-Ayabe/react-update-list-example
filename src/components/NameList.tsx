type Props = {
  names: string[];
  onEdit: (name: string) => void;
};

export default function NameList({ names, onEdit }: Props) {
  if (!names.length) return null;
  return (
    <ul>
      {names.map((name) => (
        <li key={name}>
          {name} - <button onClick={() => onEdit(name)}>Edit</button>
        </li>
      ))}
    </ul>
  );
}
