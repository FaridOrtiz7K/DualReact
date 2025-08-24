import React from "react";
import { styled, keyframes } from "@mui/system";

// Animaciones
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const progress = keyframes`
  0% { width: 0%; }
  70% { width: 70%; }
  100% { width: 85%; }
`;

// Componentes estilizados
const Container = styled("div")`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin-top: 40px;
`;

const Card = styled("div")`
  background: white;
  border-radius: 20px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  padding: 40px;
  max-width: 600px;
  width: 100%;
  text-align: center;
  position: relative;
  overflow: hidden;
  animation: ${fadeIn} 0.8s ease-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background: #691c32;
  }
`;

const ImageContainer = styled("div")`
  width: 180px;
  height: 180px;
  margin: 0 auto 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
  border-radius: 50%;
  padding: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  animation: ${pulse} 3s infinite ease-in-out;
`;

const MaintenanceImage = styled("img")`
  width: 100%;
  height: auto;
  border-radius: 50%;
`;

const Title = styled("h1")`
  color: #333;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 2.2rem;
`;

const Message = styled("p")`
  color: #666;
  line-height: 1.6;
  margin-bottom: 25px;
  font-size: 1.1rem;
`;

const ProgressContainer = styled("div")`
  background-color: #f1f1f1;
  border-radius: 10px;
  height: 12px;
  margin: 30px 0;
  overflow: hidden;
`;

const ProgressBar = styled("div")`
  height: 100%;
  width: 85%;
  background:  #691c32;
  border-radius: 10px;
  animation: ${progress} 2s ease-in-out;
`;

const ContactInfo = styled("div")`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  
  p {
    margin-bottom: 10px;
    color: #555;
  }
  
  a {
    color: #4776E6;
    text-decoration: none;
    transition: color 0.3s;
    
    &:hover {
      color: #8E54E9;
      text-decoration: underline;
    }
  }
`;

// Componente principal
const MaintenancePage = () => {
  return (
    <Container>
      <Card>
        <ImageContainer>
          <MaintenanceImage 
            src="./images/logo_estrella copy.png" 
            alt="En mantenimiento" 
          />
        </ImageContainer>
        
        <Title>Estamos realizando mantenimiento</Title>
        
        <Message>
          Lo sentimos, esta sección se encuentra actualmente en mantenimiento para mejorar su experiencia. 
          Estamos trabajando diligentemente para completar las actualizaciones lo antes posible.
        </Message>
        
        <Message>
          Por favor, vuelva más tarde. Agradecemos su paciencia y comprensión.
        </Message>
        
        <ProgressContainer>
          <ProgressBar />
        </ProgressContainer>
        
       {/* <ContactInfo>
          <p>Si necesita asistencia inmediata, contáctenos:</p>
          <p>Email: <a href="mailto:soporte@empresa.com">soporte@empresa.com</a></p>
          <p>Teléfono: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
        </ContactInfo>*/}
      </Card>
    </Container>
  );
};

export default MaintenancePage;