import { Container } from './styles';

interface PhotoItemProps {
	url: string;
	name: string;
	onDelete: (name: string) => void;
}

export function PhotoItem({ url, name, onDelete }: PhotoItemProps) {
	return (
		<Container>
			<img src={url} alt={name} />
			{name}
			<button onClick={() => onDelete(name)}>Excluir</button>
		</Container>
	);
}
