import { useRef, useCallback, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';
import * as faceapi from 'face-api.js';
// import Jimp from 'jimp';

import { logoDark } from '../assets';
import { Navbar } from '../components';

const FaceCapture = () => {
  // const videoRef = useRef(null);
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const capture = useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();

    console.log(imageSrc)

    // Pre-performed face validation checks
    if (await isValidFace(imageSrc)) {
      await sendFaceToBackend(imageSrc);

      setCapturedImage(imageSrc); 
    } else {
      console.error('Invalid face capture. Please try again.');
    }
  }, []);

  useEffect(() => {
    // Load face-api.js models
    async function loadModels() {
      await faceapi.loadSsdMobilenetv1Model('/models');
      await faceapi.loadFaceLandmarkModel('/models');

      // await faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
      // await faceapi.nets.FaceLandmarkModel.loadFromUri('/models');
    }
    loadModels();
  }, []);

  // Fxn to perform face validation using MTCNN
  const isValidFace = async (imageData) => {
    const minFaceSize = 100;
    const minImageQuality = 0.7;

    const img = new Image();
    img.src = imageData;

    // Use MTCNN to detect face in the captured image
    const detections = await faceapi.detectAllFaces(img).withFaceLandmarks();

    // const faces = await mtcnn.detect(img)
    
    // Check if at least one face is detected and meets the minimum size requirement
    if (detections.length > 0 && detections[0].detection.box.width >= minFaceSize) {
    // if (faces && faces.length > 0 && faces[0].box.width >= minFaceSize) {
      const image = await Jimp.read(imageData);
      const imageQuality = image.quality / 100;

       if (imageQuality >= minImageQuality) {
        return true;
      }
      return true;
    } else {
      return false;
    }
  };
  

  // Fxn to send the face to the backend
  const sendFaceToBackend = async (imageData) => {
    const apiUrl = '';

    try {
      const response = await axios.post(apiUrl, { capturedFace: imageData });

      if (response.status === 200) {
        console.log("Face captured and stored successfully.");
      } else {
        console.error("Error storing the face:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="fixed w-full z-10 top-0 ">
        <Navbar src={logoDark} />
      </div>

      <div className="min-h-screen flex items-center justify-center mx-auto "> {/**pt-16 */}
        <div className="bg-white rounded-lg shadow-lg p-8 w-1/3 text-center">
          <h1 className="text-xl font-semibold mb-2">Face Capture</h1>
          {/* <div className="flex flex-col items-center"> */}
            <div className="rounded-full overflow-hidden w-48 h-48 mx-auto border-2 border-primary">
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                mirrored={true}
                className="w-full h-full"
                videoConstraints={{ width: {  ideal: '1920' }, height: { ideal: '1080'} }}
              />
            </div>
            <button
              type="button"
              onClick={capture}
              className="block mx-auto text-white text-xs font-semibold bg-primary p-2 outline-0 rounded-md mt-4"
            >
              Capture
            </button>
            {capturedImage && (
              <div className="mt-4">
                <h2 className="text-xl font-semibold mb-2">Captured Image:</h2>
                <img src={capturedImage} alt="Captured" className="max-w-md mx-auto rounded-lg border-2 border-primary" />
              </div>
            )}
          </div>
        {/* </div> */}
      </div>
    </div>
  )
};

export default FaceCapture;