import React, { useState } from "react";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import NavBar from "./comps/NavBar";
import SideBar from "./comps/SideBar";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [view, setView] = useState(true)

  const handleFormView = () => {
    setUploading(!uploading)
  }

  const handleView = () => {
    setView(!view)
  }

  return (
    <div className="container">
      <SideBar />
      <div className="App">
        <div>
          <NavBar uploading={uploading} setUploading={setUploading} handleFormView={handleFormView} />
          <Title view={view} setView={setView} handleView={handleView} />
          <UploadForm uploading={uploading} setUploading={setUploading} handleFormView={handleFormView} />
          <ImageGrid setSelectedImg={setSelectedImg} view={view} />
          {selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
          )}
        </div>

      </div>
    </div>
  );
}

export default App;
