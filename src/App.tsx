import { FormEvent, useEffect, useState } from 'react';

import { Photo } from './interface/Photo';
import { deletePhoto, getAllPhotos, insertPhotos } from './services/photos';

import {
	Area,
	Container,
	PhotoList,
	ScreenWarning,
	UploadForm,
} from './App.styles';
import { GlobalStyle } from './styles/global';
import { PhotoItem } from './components/PhotoItem';

export function App() {
	const [uploading, setUploading] = useState(false);
	const [loading, setLoading] = useState(false);
	const [photos, setPhotos] = useState<Photo[]>([]);

	useEffect(() => {
		getPhotos();
	}, []);

	const getPhotos = async () => {
		setLoading(true);

		setPhotos(await getAllPhotos());

		setLoading(false);
	};

	const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const file = formData.get('image') as File;

		if (file && file.size > 0) {
			setUploading(true);
			let result = await insertPhotos(file);
			setUploading(false);

			if (result instanceof Error) {
				alert(`${result.name} - ${result.message}`);
			} else {
				let newPhotoList = [...photos];
				newPhotoList.push(result);
				setPhotos(newPhotoList);
			}
		}
	};

	const handleDeleteClick = async (name: string) => {
		await deletePhoto(name);
		getPhotos();
	};

	return (
		<>
			<Container>
				<Area>
					<h1>Galeria de Fotos</h1>

					<UploadForm method="POST" onSubmit={handleFormSubmit}>
						<input type="file" name="image" />
						<input type="submit" value="Enviar" />
						{uploading && 'Enviando...'}
					</UploadForm>

					{loading && (
						<ScreenWarning>
							<div className="emoji">🤏🏿</div>
							<div>Carregando...</div>
						</ScreenWarning>
					)}
					{!loading && photos.length > 0 && (
						<PhotoList>
							{photos.map((item, index) => (
								<PhotoItem
									key={index}
									url={item.url}
									name={item.name}
									onDelete={handleDeleteClick}
								/>
							))}
						</PhotoList>
					)}
					{!loading && photos.length === 0 && (
						<ScreenWarning>
							<div className="emoji">😰</div>
							<div>Não Há Fotos Cadastradas</div>
						</ScreenWarning>
					)}
				</Area>
			</Container>
			<GlobalStyle />
		</>
	);
}
