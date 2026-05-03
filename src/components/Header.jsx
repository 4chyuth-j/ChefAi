import logo from '../assets/logoChefAi.png'

const Header = () => {
  return (
    <header>
        <img src={logo} alt="ChefAi logo" />
        <h1>
            Chef<span className="ai-text">Ai</span>
        </h1>
        
        
    </header>
  )
}

export default Header