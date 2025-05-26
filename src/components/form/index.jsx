import { useForm } from "react-hook-form";

export default function FormValidate() {

  

  const {register, handleSubmit, formState: {errors}} = useForm();


  return (
    <>
      <form>
        <label htmlFor="full-name">
          Nome Completo <span>(obrigatório)</span>
        </label>
        <input type="text" id="full-name" />
        <label htmlFor="email">
          E-mail <span>(obrigatório)</span>
        </label>
        <input type="email" id="email" />
        <label htmlFor="tell">
          Telefone <span>(obrigatório)</span>
        </label>
        <input type="tell" id="tell" />
        <label htmlFor="cargo">
          Cargo pretendido <span>(obrigatório)</span>
        </label>
        <select name="cargo-pretendido" id="cargo">
          <option value="Desenvolvedor Frontend">Desenvolvedor Frontend</option>
          <option value="Desenvolvedor Backend">Desenvolvedor Backend</option>
          <option value="Desenvolvedor Full Stack">Desenvolvedor Full Stack</option>
          <option value="Desenvolvedor Mobile">Desenvolvedor Mobile</option>
          <option value="Desenvolvedor de Software">Desenvolvedor de Software</option>
          <option value="Engenheiro de Software">Engenheiro de Software</option>
          <option value="Arquiteto de Software">Arquiteto de Software</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
          <option value="Analista de Sistemas">Analista de Sistemas</option>
          <option value="Analista Programador">Analista Programador</option>
          <option value="DevOps Engineer">DevOps Engineer</option>
          <option value="Engenheiro de Dados">Engenheiro de Dados</option>
          <option value="QA Engineer">QA Engineer</option>
          <option value="Scrum Master">Scrum Master</option>
          <option value="Product Owner">Product Owner</option>
        </select>
        <label htmlFor="Linkdin">
          Linkdin <span>(opcional)</span>
        </label>
        <input type="text" id="Linkdin" />
        <label htmlFor="full-name">
          Github <span>(opcional)</span>
        </label>
        <input type="text" id="Github" />
        <button>Cadastrar</button>
      </form>
    </>
  );
}
