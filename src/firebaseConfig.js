import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBjzGMpNpvkDUoAxmcIh7bW2U0gRug19b4',
	authDomain: 'tienda-virtual-coder23.firebaseapp.com',
	projectId: 'tienda-virtual-coder23',
	storageBucket: 'tienda-virtual-coder23.appspot.com',
	messagingSenderId: '20808989909',
	appId: '1:20808989909:web:42ee82359dab4bc98df65c',
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
