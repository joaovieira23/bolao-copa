// interface HomeProps {
//   count: number;
// }

import Image from 'next/image';
import appPreviewImg from '../assets/app-nlw-copa-preview.png';
import logoImg from '../assets/logo.svg';
import usersAvatarExampleImg from '../assets/users-avatar-example.png';
import iconCheckImg from '../assets/icon-check.svg';

export default function Home() {
  return (
    <div>
      <main>
        <Image src={logoImg} alt="NLW Copa" />
        <h1>Crie seu próprio bolão da copa e compartilhe com seus amigos!</h1>

        <div>
          <Image src={usersAvatarExampleImg} alt="" />

          <strong>
            <span>+12.623</span> pessoas já estão usando
          </strong>
        </div>


        <form action="">
          <input type="text" required placeholder='Qual o nome do seu bolão?' />
          <button type="submit">Criar meu bolão</button>
        </form>

        <p>
          Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀
        </p>

        <div>
          <div>
            <Image src={iconCheckImg} alt="Icone de Check" />
            <div>
              <span>+2.359</span>
            </div>
          </div>
          <div>
            <Image src={iconCheckImg} alt="Icone de Check" />
              <div>
                <span>+2.359</span>
              </div>
          </div>
        </div>

      </main>

      <Image 
        src={appPreviewImg} 
        alt="Exibindo uma prévia da aplicação na imagem em dois celulares" 
        quality={100}
      />
    </div>
  )
}

// export const getServerSideProps = async () => {
//   const response = await fetch('http://localhost:3333/pools/count')
//   const data = await response.json();

//   console.log('data', data);

//   return {
//     props: {
//       count: data.count
//     }
//   }
// }