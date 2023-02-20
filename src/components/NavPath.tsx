interface Props {
  items: string[]
}

export const NavPath = ({ items = [] }: Props) => {
  return (
    <div>
      <p>{items.join(' > ')}</p>
    </div>
  );
}
