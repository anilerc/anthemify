import './App.css';
import React, { useCallback, useRef, useState } from 'react';
import jsondata from "./anil.json"
import ManualSelector from './components/ManualSelector';
import VolumeSlider from './components/VolumeSlider';
import DurationSlider from './components/DurationSlider';
import ControlButtons from './components/ControlButtons';
import AnthemInformation from './components/AnthemInformation';
import HeaderText from './components/HeaderText';
import ParticlesBg from 'particles-bg';

function App() {

  const [songIndex, setSongIndex] = useState(0)
  const [volume, setVolume] = useState(0.5);
  const [muteVal, setMuteVal] = useState(volume);
  const [cTime, setCTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const song = useRef();
  const countrySpecificColor = jsondata[songIndex].color;


  console.log(isPlaying)

  const volumeHandler = (event, nbr) => {
    song.current.volume = nbr;
    setVolume(nbr);
  }

  const backwardHandler = () => {
    console.log("backward handler reruns")
    if (song.current.currentTime > 0) {
      song.current.pause();
      song.current.currentTime = 0;
      setIsPlaying(false);
    } else {

      if (songIndex != 0) {
        setSongIndex((prevIndex) => prevIndex - 1);
      } else {
        setSongIndex(jsondata.length - 1);
      }
      setIsPlaying(true)
    }

  }

  const forwardHandler = () => {
    if (songIndex != jsondata.length - 1) {
      setSongIndex((prevIndex) => prevIndex + 1);
    } else {
      setSongIndex(0)
    }
  }

  
  const muteHandler = () => {
    if (volume != 0) {
      setMuteVal(volume);
      song.current.volume = 0;
      setVolume(0)
    } else {
      song.current.volume = muteVal;
      setVolume(muteVal);
    }
  }

  const pausePlay = useCallback(() => {
    if (!isPlaying) {
      setIsPlaying(true)
      song.current.play()
    } else {
      setIsPlaying(false)
      song.current.pause()
    }
  }, [isPlaying]);

  const durationSliderHandler = () => {
    setCTime(song.current.currentTime / song.current.duration)
    if (song.current.currentTime == song.current.duration) {
      forwardHandler();
    }
  }

  const durationChangeHandler = (event, value) => {
    if(value != 1){
    song.current.currentTime = value * song.current.duration;
    }
  }

  const autocompleteHandler = (event, value) => {
    for (let i = 0; i < jsondata.length; i++) {
      if (value == jsondata[i].country) {
        setSongIndex(i);
      }
    }
  }

  return (

    <React.Fragment> 

    <div className="flex flex-col justify-center items-center p-12 h-max w-screen">
      <div className='flex flex-col justify-center items-center'>
        <HeaderText />
        <div className="w-max drop-shadow-2xl box-shadow-2xl bg-slate-100">
          <audio onTimeUpdate={durationSliderHandler} autoPlay ref={song} src={jsondata[songIndex].src}></audio>
          <div className='flex flex-col justify-center items-center border-black border-2 rounded-2xl p-8 box-shadow-xl'>
            <AnthemInformation color={countrySpecificColor} data={jsondata[songIndex]} />
            <DurationSlider color={countrySpecificColor} cTime={cTime} durationChangeHandler={durationChangeHandler} />
            <ControlButtons color={countrySpecificColor} isPlaying={isPlaying} backwardHandler={backwardHandler} forwardHandler={forwardHandler} pausePlay={pausePlay} />
            <VolumeSlider color={countrySpecificColor} volume={volume} muteHandler={muteHandler} volumeHandler={volumeHandler} />
          </div>
        </div>
        </div>
        <ManualSelector autocompleteHandler={autocompleteHandler} jsondata={jsondata} />
      </div>
    
      <ParticlesBg num={120} bg={true} type="cobweb" />
      </React.Fragment>
    );

}
export default App;
