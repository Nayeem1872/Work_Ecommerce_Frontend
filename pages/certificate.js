import Header from "@/components/Header";
import Center from "@/components/Center";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Title from "@/components/Title";
import Footer from "@/components/Footer";

const CertificateContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CertificateItem = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
  gap: 10px;
  padding-bottom: 40px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CertificateModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;


export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [images, setImages] = useState([]);

  const toggleCertificateModal = (certificate) => {
    setSelectedCertificate(certificate);
  };
  useEffect(() => {
    fetch('/api/images')
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <>
      <Header />
      <Center>
        <Title>Certificates</Title>
        <CertificateContainer>
          {images.map((certificate) => (
            <CertificateItem
              key={certificate.id}
              onClick={() => toggleCertificateModal(certificate)}
            >
              {/* Render the certificate image */}
              <img src={certificate.location}  />


              {/* Render the certificate title */}
              <div>{certificate.title}</div>
            </CertificateItem>
            
          ))}
          {selectedCertificate && (
        <CertificateModal onClick={() => toggleCertificateModal(null)}>
          <ModalImage src={selectedCertificate.location} alt={selectedCertificate.title} />
        </CertificateModal>
      )}
        </CertificateContainer>
      </Center>
      <Footer />
    </>
  );
}
