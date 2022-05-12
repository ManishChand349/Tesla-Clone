import React, {useState} from 'react'
import styledComponents from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'
function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  
 

  return (
    <Container>
      <Link to="/">
        <img src="/images/logo.svg" alt="" />
      </Link>
      
      <Menu>
        <li> <Link to="/modelS"> Model S      
        </Link> </li>
        <li> <Link to="/model3"> Model 3      
        </Link> </li>
        <li> <Link to="/modelX"> Model X      
        
        </Link> </li>
        <li> <Link to="/modelY"> Model Y      
        </Link> </li>
        
      </Menu>

      <RightMenu>
        <Link to="#">Shop</Link >
        <Link to="#">Tesla Account</Link >
        <CustomMenu onClick={()=>setBurgerStatus(true)}>
        <Link to="#">Menu</Link >
        </CustomMenu>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
        <CustomClose onClick={()=>setBurgerStatus(false)}/>
        </CloseWrapper>
        <li><Link to="">Exsiting Inventory</Link ></li>
        <li><Link to="">Trade-In</Link ></li>
        <li><Link to="">Test Drive</Link ></li>
        <li><Link to="">Insurance</Link ></li>
        <li><Link to="">Solar Roof</Link ></li>
        <li><Link to="">Solar Panels</Link ></li>
        <li><Link to="">Used Inventory</Link ></li>
        <li><Link to="">Powerwall</Link ></li>
        <li><Link to="">Commercial Energy</Link ></li>
        <li><Link to="">Utilies</Link ></li>
        <li><Link to="">Charging</Link ></li>
        <li><Link to="">Find Us</Link ></li>
        <li><Link to="">Support</Link ></li>
        <li><Link to="">Investor Relations</Link ></li>
        <li><Link to="">Shop</Link ></li>
        <li><Link to="">Account</Link ></li>
        <li><Link to="">More</Link ></li>
      </BurgerNav>
    </Container>
  )
}

export default Header
const Container = styledComponents.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`
const Menu = styledComponents.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

   li {
      font-weight: 600;
      text-transform: uppercase;
      padding: 0 20px;
      flex-wrap: nowrap;
      cursor: pointer;
      list-style: none;
      
      
    }
    li:hover{
      background-color: rgb(199, 217, 234, 0.50);
      padding: 5px 20px;
      border-radius: 40px;
    }

    @media(max-width: 768px){
      display: none;
    }
`
const RightMenu = styledComponents.div`
 display: flex;
 align-items: center;
a {
  font-weight: 600;
  text-transform: uppercase;
  margin-right:5px;
  flex-wrap: nowrap;
  padding: 0 8px;
  margin-left: 10px;
}
a:hover{
  background-color: rgb(199, 217, 234, 0.50);
  padding: 5px 8px;
  border-radius: 40px;
}
`

const CustomMenu = styledComponents.div`
  cursor: pointer;
`

const BurgerNav = styledComponents.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.2s;

    li{
      padding: 15px 28px;

      a{
        font-weight: 600;
      }
    }
`
const CustomClose = styledComponents(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styledComponents.div`
    display: flex;
    justify-content: flex-end;

`