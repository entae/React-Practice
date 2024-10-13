import logo from '../assets/money.png'

export default function Header() {
    return <header id="header">
        <img src={logo} alt='Logo showing stacks of money'/>
        <h1>Investment Calculator</h1>
    </header>
}