import {
	deleteObject,
	getDownloadURL,
	listAll,
	ref,
	uploadBytes,
} from 'firebase/storage';
import { v4 as createId } from 'uuid';
import { Photo } from '../interface/Photo';
import { storage } from '../libs/firebase';

export const getAllPhotos = async () => {
	let list: Photo[] = [];

	const imagesFolder = ref(storage, 'images');
	const photoList = await listAll(imagesFolder);

	for (let i in photoList.items) {
		let photoUrl = await getDownloadURL(photoList.items[i]);

		list.push({
			name: photoList.items[i].name,
			url: photoUrl,
		});
	}

	return list;
};

export const insertPhotos = async (file: File) => {
	if (['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
		let randomName = createId();
		let newFile = ref(storage, `images/${randomName}`);

		let upload = await uploadBytes(newFile, file);
		let photoUrl = await getDownloadURL(upload.ref);
		return {
			name: upload.ref.name,
			url: photoUrl,
		} as Photo;
	} else {
		return new Error('Tipo de arquivo não permitido');
	}
};

export const deletePhoto = async (name: string) => {
	let photoRef = ref(storage, `images/${name}`);
	await deleteObject(photoRef);
};