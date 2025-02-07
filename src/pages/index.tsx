import { useState } from "react";
import { Container, UploadBox, Input, Label, Title, UploadIcon, DragText, Modal, ModalContent, Button, SuccessIcon, ErrorIcon } from "../styles";
import { GlobalStyle } from "../styles/globals";
import { CloudUpload, CheckCircle, XCircle } from "lucide-react";

export default function UploadPage() {
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [dragging, setDragging] = useState(false);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    processFile(file);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
    const file = event.dataTransfer.files?.[0];
    processFile(file);
  };

  const processFile = (file?: File) => {
    if (file) {
      if (file.type !== "video/mp4") {
        setModalMessage("Erro: Apenas arquivos .mp4 são permitidos.");
        setIsError(true);
        return;
      }

      setTimeout(() => {
        setModalMessage("Assim que seu arquivo for processado, um arquivo .zip com os frames será enviado no seu email!");
        setIsError(false);
      }, 1500);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Extrator de Frames</Title>
        <UploadBox 
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }} 
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          dragging={dragging}
        >
          <UploadIcon>
            <CloudUpload size={50} color="#00d4ff" />
          </UploadIcon>
          <DragText>Arraste e solte um arquivo MP4 aqui ou</DragText>
          <Label htmlFor="file-upload">clique para selecionar</Label>
          <Input id="file-upload" type="file" accept="video/mp4" onChange={handleUpload} />
        </UploadBox>
        {modalMessage && (
          <Modal>
            <ModalContent isError={isError}>
              {isError ? <ErrorIcon><XCircle size={50} color="#ff4d4d" /></ErrorIcon> : <SuccessIcon><CheckCircle size={50} color="#00ff99" /></SuccessIcon>}
              <p>Upload realizado com sucesso!</p>
              <br/>
              <p style={{color: 'white'}}>{modalMessage}</p>
              <Button onClick={() => setModalMessage(null)}>Fechar</Button>
            </ModalContent>
          </Modal>
        )}
      </Container>
    </>
  );
}