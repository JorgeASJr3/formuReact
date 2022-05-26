import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type Inputs = {
  name: string
  email: string
  password: number
  confirmedPassword: number
}

const schema = yup
  .object({
    name: yup.string().required('O nome é obrigatório'),
    email: yup
      .string()
      .email('digite um email válido')
      .required('O email é obrigatório'),
    password: yup
      .string()
      .min(6, 'A senha tem que ter pelo menos 6 dig')
      .required(),
    confirmedPassword: yup
      .string()
      .required('Confirmar a senha é obrigatório ')
      .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
  })
  .required()

export function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })
  console.log(errors)
  function onSubmit(userData: any) {}

  return (
    <>
      <div className="formContact">
        <div className="content">
          <form className="formInputLabel" onSubmit={handleSubmit(onSubmit)}>
            <h1> Cadastro de Clientes</h1>
            <label htmlFor="nome">
              Nome
              <input type="text" {...register('name', { required: true })} />
              <span>{errors.name?.message}</span>
            </label>
            <label htmlFor="nome">
              Email
              <input type="text" {...register('email', { required: true })} />
              <span>{errors.email?.message}</span>
            </label>
            <label htmlFor="password">
              Senha
              <input
                type="password"
                {...register('password', { required: true })}
              />
              <span>{errors.password?.message}</span>
            </label>

            <label htmlFor="confirmedPassword">
              Confirme Senha
              <input
                type="confirmedPassword"
                {...register('confirmedPassword', { required: true })}
              />
              <span>{errors.confirmedPassword?.message}</span>
            </label>
            <label htmlFor="notificacao">Receber Notificação</label>
            <select>
              <option className="option" value="email">
                Email
              </option>
              <option className="option" value="telefone">
                Telefone
              </option>
            </select>
            {/* <label>Sugestão</label>
            <textarea placeholder="Apenas texto"></textarea> */}
            <div className="submit">
              <button type="submit">Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
      <div className="formContact">
        <div className="content">
          <form className="formInputLabel">
            <h1>Informações Clientes</h1>
          </form>
        </div>
      </div>
    </>
  )
}
