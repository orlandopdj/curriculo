import foto from './assets/orlando.jpeg'
import { FaInbox, FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaLinkedinIn, FaGithub, FaInstagramSquare } from "react-icons/fa";
import './App.css'
import generatePDF, { Margin } from 'react-to-pdf'

const personalizacao = {
  method: 'open',
  page: {
    // margin is in MM, default is Margin.NONE = 0
    margin: Margin.MEDIUM,
    // default is 'A4'
    format: 'A4',
    // default is 'portrait'
    orientation: 'landscape',
  },
}

const CriarPDF = () => document.getElementById('conteudo');

function App() {

  return (
    <div id='conteudo'>
      <header className='flex flex-col md:flex md:flex-row items-center bg-cyan-950 md:max-h-40'>
        <div>
          <img className='w-32 h-32 rounded-full border-2 border-cyan-600 md:rounded-none md:border-2 md:border-cyan-600 md:w-40 md:h-40' src={foto} alt="foto de orlando" />
        </div>
        <div className='text-center md:p-8 md:text-start md:mt-4'>
          <h1 className='text-base md:text-4xl text-white'>Orlando Pinheiro Dias Junior</h1>
          <h2 className='text-xs text-gray-400 md:text-sm md:indent-4'>Desenvolvedor Front-End</h2>
          <div className='flex flex-col text-center p-2 md:flex-row md:gap-8 md:mt-6'>
            <div className='flex items-center gap-2'>

              <FaInbox className='text-sm text-gray-400' /> <p className='text-sm text-gray-400'>orlandopdjr6@gmail.com</p>
            </div>
            <div className='flex items-center gap-2'>
              <FaPhoneAlt className='text-sm text-gray-400' /> <p className='text-sm text-gray-400'>51 980629661</p>
            </div>
            <div className='flex items-center gap-2'>
              <FaMapMarkerAlt className='text-sm text-gray-400' /> <p className='text-sm text-gray-400'>Osório, Rio Grande do Sul, Brasil</p>
            </div>
          </div>
        </div>
      </header>

      <main className='flex divide-x-2 px-2'>
        <section className='text-left ml-2'>
          <article className='divide-y-2 divide-y-reverse'>
            <h3 className='text-sm font-black py-2 md:text-2xl'>Perfil profissional</h3>
            <p className='text-xs indent-4 pb-2 md:text-sm md:px-3'>Profissional com 10 anos na indústria calçadista, evoluindo de Cronoanalista para <br />  RH. Experiência em  liderança, gestão de equipe e adaptação rápida a novos desafios. <br /> Busco transição  para TI Front-End, combinando habilidades de liderança com vontade <br /> de aprender e contribuir  para projetos inovadores.</p>
          </article>
          <article className='divide-y-2 divide-y-reverse'>
            <h3 className='text-sm font-black py-2 md:text-2xl'>Experiência</h3>
            <p className='text-xs indent-3 pb-4 md:text-sm md:px-3 '>
              <ul >
                <li>Cronoanalista com 3 anos de experiência</li>
                <li>Atualmente estou na área de Recursos Humanos e possuo mais de 2 anos de experiência na área</li>
                <li>Obtive a formação do PDI (Programa de Desenvolvimento Interno)</li>
              </ul>
            </p>
          </article>
          <article className='divide-y-2 divide-y-reverse'>
            <h3 className='text-sm font-black py-2 md:text-2xl'>Educação</h3>
            <p className='text-xs indent-3 pb-4 md:text-sm md:px-3 '>
              <ul >
                <li>Ensino fundamental - EEEF Profº Milton Pacheco</li>
                <li>Ensino médio - EEEM Maria Teresa Vilanova Castilhos (Polivalente)</li>
                <li>2 Semestres em Analise Desenvolvimento de Sistema na instituição uniasselvi</li>
              </ul>
            </p>
          </article>
          <article className='divide-y-2 divide-y-reverse'>
            <h3 className='text-sm font-black py-2 md:text-2xl'>Cursos</h3>
            <p className='text-xs indent-3 pb-4 md:text-sm md:px-3 '>
              <ul >
                <li>HTML,CSS e Javascript com Curso em vídeo</li>
                <li>Curso de JavaScript com Roger Melo (CJRM)</li>
                <li>React do Zero a Maestria (c/ hooks, router, API, Projetos) com Matheus Battisti</li>
              </ul>
            </p>
          </article>

        </section>
        <section className='flex flex-col px-4'>
          <h3 className='text-sm font-black py-2 md:text-2xl'>Competências</h3>
          <p>
            <ul className='text-xs text-start pb-2 md:text-sm'>
              <li>Pontual</li>
              <li>Facilidade em aprender</li>
              <li>Gestão de equipe e pessoas</li>
              <li>Trabalho em equipe</li>
            </ul>
          </p>
          <h3 className='text-sm font-black md:text-2xl'>Idiomas</h3>
          <div className="mb-1 text-xs font-medium text-black md:text-sm">Inglês</div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
            <div className="bg-blue-600 h-1.5 rounded-full dark:bg-cyan-600 w-5"></div>

          </div>

        </section>

      </main>
      <footer className='bg-cyan-800'>
        <nav className='flex justify-center py-2 gap-5'>
          <a href="https://www.instagram.com/orlandopdj" target='_blank'><FaInstagramSquare className='text-xl text-cyan-200 hover:text-cyan-300' /></a>
          <a href="https://www.linkedin.com/in/orlandopdj/" target='_blank'><FaLinkedinIn className='text-xl text-cyan-200  hover:text-cyan-300' /></a>
          <a href="https://github.com/orlandopdj" target='_blank'><FaGithub className='text-xl text-cyan-200  hover:text-cyan-300' /></a>
        </nav>
      </footer>
    </div>
  )
}

export default App
