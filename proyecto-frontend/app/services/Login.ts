import { Route } from 'next';
import clienteAxios from './Axios';

export const loginUser = async (user: any, router: any) => {
  try {
    const response = await fetch("http://localhost:8080/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })

    const json = await response.json();
    console.log(json);

    if (json.role === 'ADM') {
      router.push('/admin');
    } else if (json.role === 'USR') {
      router.push('/browse');
    } else {
      throw new Error('Role de usuario Invalido.')
    }

  } catch (error) {
    console.log('Error al logearse.', error)
  }
}