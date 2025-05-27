import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const formsSchema = yup.object({
     fullName: yup.string().required('Informe seu nome completo'),
     email: yup.string().email('Email invalido.')
     .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "email invalido")
     .required('Informe seu email'),
     tell: yup.number()
     .matches(/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/, "Telefone inválido")
     .required('Informe seu invalido'),
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
     'Selecione um cargo valido'
    )
    .required('Cargo e Obrigatorio'),
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

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(formsSchema)
  });

  const submitForm = (data) => {
    console.log(data)
  }


  return (
  
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <label htmlFor='fullName'>
          Nome Completo <span>(obrigatório)</span>
        </label>
        <input type='text' id='fullName' {...register('fullName')}  />
        <p>{errors.fullName?.message} </p>
        </div>

        <div>
          <label htmlFor='email'>
          E-mail <span>(obrigatório)</span>
        </label>
        <input type='email' id='email' {...register('email')} />
        <p>{errors.email?.message} </p>
        </div>

        <div>
          <label htmlFor='tell'>
          Telefone <span>(obrigatório)</span>
        </label>
        <input type='tell' id='tell' {...register('tell')} />
        <p>{errors.tell?.message} </p>
        </div>

        <div>
          <label htmlFor='cargo'>
          Cargo pretendido <span>(obrigatório)</span>
        </label>
        <select name='position' id='position' {...register('position')}>
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
        <p>{errors.position?.message} </p>
        </div>

        <div>
            <label htmlFor='linkdin'>
          Linkdin <span>(opcional)</span>
        </label>
        <input type='text' id='linkdin' {...register('linkdin')} />
       <p>{errors.linkdin?.message} </p>
        </div>
       
        <div>
          <label htmlFor='github'>
          Github <span>(opcional)</span>
        </label>
        <input type='text' id='github' {...register('github')} />
         <p>{errors.github?.message} </p>
        </div>

        <button type='submit'>Cadastrar</button>
      </form>
    
  );
}
