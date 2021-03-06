import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation } from '../../context/Location'
import Loader from '../Loader'
import {Container} from './styles'
import {AiOutlineMenu} from 'react-icons/ai'
import CompanyInfoModal from '../CompanyInfoModal'

export default function Header(){
  
  const [companyInfo, setCompanyInfo] = useState([])
  const {currentLocation} = useLocation()
  const [loading, setLoading] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // fetch company info
  useEffect(() => {

    setLoading(true)

    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/osaka-${currentLocation}-infos`)
    .then(({data}) => {
      setCompanyInfo(data.data[0].attributes)
      setLoading(false)
    })
    // eslint-disable-next-line
  }, [])

  return(
    
      <Container>
      {
        loading && <Loader loading={loading} position="inherit"/>
      }

      {
        (companyInfo && !loading) &&
        <>
          <div className='info'>
            <div className='image'>
              <img src={companyInfo.logo_url} alt="logo"/>
            </div>
            <div className="text">
              <h4>{companyInfo.name}</h4>
              <p>Bem Vindo</p>
            </div>
          </div>

          <div className='icon' onClick={() => setIsMenuOpen(true)}>
            <AiOutlineMenu/>
          </div>

          {
            <CompanyInfoModal 
            companyInfo={companyInfo} 
            setIsMenuOpen={setIsMenuOpen}
            isMenuOpen={isMenuOpen}
            />
          }

        </>
      }
    </Container>
  )
}