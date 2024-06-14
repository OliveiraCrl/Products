import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth'; 


const firebaseConfig = {
  apiKey: "AIzaSyC3sVOy8-CnbYWgS3OeGlIgZpliQ-qZcNQ",
  authDomain: "projeto-30796.firebaseapp.com",
  databaseURL: "https://projeto-30796-default-rtdb.firebaseio.com",
  projectId: "projeto-30796",
  storageBucket: "projeto-30796.appspot.com",
  messagingSenderId: "607954020221",
  appId: "1:607954020221:web:6b4f9bfc50b254e0ac0e14",
  measurementId: "G-5XCQ9LF2BN"
};
// Inicialize o Firebase
// Delete o Firebase App existente, se existir
if (firebase.apps.length) {
  firebase.apps[0].delete()
    .then(() => {
      console.log('Firebase App excluído com sucesso');
      // Inicialize o Firebase com a nova configuração
      firebase.initializeApp(firebaseConfig);
    })
    .catch(error => {
      console.error('Erro ao excluir o Firebase App:', error);
    });
} else {
  console.log('Nenhum Firebase App encontrado para excluir');
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
