import { Menu } from './Menu'

export function Header() {
  return (
    <div className="topHeader">
      <h1>Novo Tempo</h1>
      <Menu />
      <button className="topButton">Entre em contato</button>
    </div>
  )
}
