import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import 'animate.css';

const formsSchema = yup.object({
     fullName: yup.string().required('Informe seu nome completo'),
     email: yup.string().email('E-mail inválido.')
     .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Informe seu e-mail")
     .required('Informe seu email'),
     tel: yup.string()
     .matches(/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/, "Telefone inválido")
     .required('Informe seu telefone'),
     position: yup
     .string()
     .oneOf([
       'Desenvolvedor Frontend',
  'Desenvolvedor Backend',
  'Desenvolvedor Full Stack',
  'Desenvolvedor Mobile',
  'Desenvolvedor de Software',
  'Engenheiro de Software',
  'Arquiteto de Software',
  'UI/UX Designer',
  'Analista de Sistemas',
  'Analista Programador',
  'DevOps Engineer',
  'Engenheiro de Dados',
  'QA Engineer',
  'Scrum Master',
  'Product Owner'
     ],
     'Selecione um cargo válido'
    )
    .required('Cargo é obrigatório'),
    linkdin: yup
    .string()
    .nullable()
    .notRequired(),
    github: yup
    .string()
    .nullable()
    .notRequired() 
})


export default function FormValidate() {

  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    resolver: yupResolver(formsSchema)
  });

  const [formSubmitSms, setFormSubmitSms] = useState('');

  const submitForm = (data) => {
    const existingData = JSON.parse(localStorage.getItem('frontendFusinMembers')) || [];
    const updated = [...existingData, data];
    localStorage.setItem('frontendFusinMembers', JSON.stringify(updated))

    if(!data) {
      setFormSubmitSms('Falha ao cadastrar.')
    }else{
       setFormSubmitSms('Cadastro realizado com sucesso!')
    }

    reset()
   
  }

  setTimeout(() => {
     setFormSubmitSms()
  }, 35 * 1000);



  return (
  
      <form onSubmit={handleSubmit(submitForm)} className='border rounded border-gray-300 w-xs md:w-md p-2.5 md:p-4 lg:p-5 animate__animated  animate__backInDown'>
        <div className='flex flex-col text-left'>
          <label htmlFor='fullName' className='font-semibold'>
          Nome Completo <span className='text-gray-400 font-extralight'>(obrigatório)</span>
        </label>
        <input className='border rounded border-gray-300 p-2 mt-2' type='text' id='fullName' placeholder='Seu nome completo'  {...register('fullName')}  />
         { errors.fullName && <p className='text-red-600 mt-1.5 animate__animated animate__shakeX'>{errors.fullName?.message} </p>
      }
        </div>

        <div className='flex flex-col text-left'>
          <label htmlFor='email' className='font-semibold'>
          E-mail <span className='text-gray-400 font-extralight'>(obrigatório)</span>
        </label>
        <input  className='border rounded border-gray-300 p-2 mt-2' type='text' placeholder='exemplo@gmail.com' id='email' {...register('email')} />
       { errors.email && <p className='text-red-600 mt-1.5  animate__animated animate__shakeX'>{errors.email?.message} </p>}
        </div>

        <div className='flex flex-col text-left'>
          <label htmlFor='tel' className='font-semibold'>
          Telefone <span className='text-gray-400 font-extralight'>(obrigatório)</span>
        </label>
        <input  className='border rounded border-gray-300 p-2 mt-2' type='tel' id='tel' {...register('tel')} />
      { errors.tel && <p className='text-red-600 mt-1.  animate__animated animate__shakeX'>{errors.tel?.message} </p>}
        </div>

        <div className='flex flex-col text-left'>
          <label htmlFor='position' className='font-semibold'>
          Cargo pretendido <span className='text-gray-400 font-extralight'>(obrigatório)</span>
        </label>
        <select  className='border rounded border-gray-300 py-2 mt-2 ' name='position' id='position' {...register('position')}>
          <option value='' disabled selected >Escolha cargo pretendido</option>
          <option value='Desenvolvedor Frontend'>Desenvolvedor Frontend</option>
          <option value='Desenvolvedor Backend'>Desenvolvedor Backend</option>
          <option value='Desenvolvedor Full Stack'>Desenvolvedor Full Stack</option>
          <option value='Desenvolvedor Mobile'>Desenvolvedor Mobile</option>
          <option value='Desenvolvedor de Software'>Desenvolvedor de Software</option>
          <option value='Engenheiro de Software'>Engenheiro de Software</option>
          <option value='Arquiteto de Software'>Arquiteto de Software</option>
          <option value='UI/UX Designer'>UI/UX Designer</option>
          <option value='Analista de Sistemas'>Analista de Sistemas</option>
          <option value='Analista Programador'>Analista Programador</option>
          <option value='DevOps Engineer'>DevOps Engineer</option>
          <option value='Engenheiro de Dados'>Engenheiro de Dados</option>
          <option value='QA Engineer'>QA Engineer</option>
          <option value='Scrum Master'>Scrum Master</option>
          <option value='Product Owner'>Product Owner</option>
        </select>
         {errors.position &&  <p className='text-red-600 mt-1.5  animate__animated animate__shakeX'>{errors.position?.message} </p>}
        </div>

        <div className='flex flex-col text-left'>
            <label htmlFor='linkdin' className='font-semibold'>
          Linkdin <span className='text-gray-400 font-extralight'>(opcional)</span>
        </label>
        <input  className='border rounded border-gray-300 p-2 mt-2' type='text' id='linkdin' {...register('linkdin')} />
        </div>
       
        <div className='flex flex-col text-left'>
          <label htmlFor='github' className='font-semibold'>
          Github <span className='text-gray-400 font-extralight'>(opcional)</span>
        </label>
        <input  className='border rounded border-gray-300 p-2 mt-2' type='text' id='github' {...register('github')} />
        </div>

        {
         formSubmitSms && <div className='bg-green-500 hover:bg-green-300 my-2 cursor-pointer rounded p-2 animate__animated animate__fadeIn'>
           <p className='font-semibold  text-neutral-100 '>{formSubmitSms}</p>
        </div>
        }

        <button className='w-full text-white bg-blue-700 h-12 uppercase font-semibold rounded hover:bg-blue-500 cursor-pointer ' type='submit'>Cadastrar</button>
      </form>
    
  );
}
