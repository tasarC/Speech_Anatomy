
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model.js";
import {Nav}from 'react-bootstrap';

import { useSpeechSynthesis } from "react-speech-kit";

export default function Aapp() {
  const [text, setText] = useState("");
  const {speak,voices } = useSpeechSynthesis();
  const [action, setAction] = useState("a");
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);
  const [count, setCount] = useState(0);
  const [page,setPage]=useState(0);

  const handleOnClick = () => {
    setTimeout(()=>setCount(count+1),100)
    speak({text:text,pitch,rate,voice:voices[0] });
    // console.log(speak);
  };
  
  useEffect(() => {
    if(count<text.length && count>0){
      setTimeout(()=>setCount(count+1),100);
      setAction(text[count][0],pitch,rate);
    }
    else{
      setCount(0);
    }
  }, [count]);
  useEffect(()=>{
    if(text.length>count&&count>0){
        
        if(text[count][0]===' '){
            setAction("m")
            setTimeout(()=>setCount(count+1),1);
        }
        else{
          setAction(text[count][0]);
        }
    }
},[count])

  // const audio = new Audio("http://streaming.tdiradio.com:8000/house.mp3");

  // const start = () => {
  //   audio.play();
  // };
  // const pause = () => {
  //   audio.pause();
  // };

  const [yuz_1, setYuz] = useState("#ffffff");
  const [kas, setKas] = useState("#ffffff");
  const [kirpik, setKirpik] = useState("#ffffff");
  const [goz, setGoz] = useState("#ffffff");
  const [iris, setIris] = useState("#ffffff");
  const [sac_1, setSac1] = useState("#ffffff");
  const [sac_2, setSac2] = useState("#ffffff");
  function ganche(num){
    if(num!==page)
    {
        
        setPage(num);
    }
    else {};
}
  return (
    <div className="App">
            <div  className="div">
        <h1 className="h2">METİN OKUYUCU</h1>
        <input
          className="metin"
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
        <button
          className="listen"
          onClick={() => {
            handleOnClick();
          }}
        >
          Listen
        </button>
        {/* <div className="searcbar"><input className="input"></input></div> */}
        <div className="rangeContainer">
        <div>
          <label className="rate"htmlFor="rate">Rate: </label>
          <span className="rate">{rate}</span>
        </div>
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={rate}
          onChange={(e) => {
            setRate(e.target.value);
          }}
        />
      </div>
      <div className="rangeContainer">
        <div>
          <label className="pitch" htmlFor="pitch">Pitch: </label>
          <span className="pitch">{pitch}</span>
        </div>
        <input
          type="range"
          min="0"
          max="2"
          step="0.1"
          value={pitch}
          id="pitch"
          onChange={(event) => {
            setPitch(event.target.value);
          }}
        />
      </div>
      </div>
     
      <div className="wrapper">
        <div className="card">
          <div className="product-canvas">
            <Canvas camera={{ position: [0, -1, 10] }}>
            <ambientLight intensity={0.9} />
             
              <Suspense fallback={null}>
                <Model
                  action={action}
                  customColors={{
                    yuz_1: yuz_1,
                    kas: kas,
                    kirpik:kirpik,
                    goz: goz,
                    iris: iris,
                    sac_1:sac_1,
                    sac_2:sac_2
                  }}
                />
              </Suspense>
              <OrbitControls />
            </Canvas>
            <h2>Color chooser</h2>
            <div className="colors">
              <div className="colors">
                <input  className="input"
                  type="color"
                  id="yuz_1"
                  name="yuz_1"
                  value={yuz_1}
                  onChange={(e) => setYuz(e.target.value)}
                />
                <label className="label" htmlFor="yuz_1">Yüz</label>
              </div>

              <div className="colors">
                <input  className="input"
                  type="color"
                  id="kas"
                  name="kas"
                  value={kas}
                  onChange={(e) => setKas(e.target.value)}
                />
                <label  className="label" htmlFor="kas">Kaş</label>
              </div>
              
              <div className="colors">
                <input  className="input"
                  type="color"
                  id="goz"
                  name="goz"
                  value={goz}
                  onChange={(e) => setGoz(e.target.value)}
                />
                <label  className="label" htmlFor="goz">Göz</label>
              </div>
              <div className="colors">
                <input  className="input"
                  type="color"
                  id="iris"
                  name="iris"
                  value={iris}
                  onChange={(e) => setIris(e.target.value)}
                />
                <label  className="label" htmlFor="iris">İris</label>
              </div>
              <div className="colors">
                <input  className="input"
                  type="color"
                  id="sac_1"
                  name="sac_1"
                  value={sac_1}
                  onChange={(e) => setSac1(e.target.value)}
                />
                <label  className="label" htmlFor="sac_1">Saç</label>
              </div>
              <div className="colors">
                <input  className="input"
                  type="color"
                  id="sac_2"
                  name="sac_2"
                  value={sac_2}
                  onChange={(e) => setSac2(e.target.value)}
                />
                <label  className="label" htmlFor="sac_2">Topuz</label>
              </div>
              <div className="colors">
                <input  className="input"
                  type="color"
                  id="kirpik"
                  name="kirpik"
                  value={kirpik}
                  onChange={(e) => setKirpik(e.target.value)}
                />
                <label  className="label" htmlFor="kirpik">Kirpik</label>
              </div>
             
            </div>
            <Nav  >
                <Nav.Item className="navv" ><Nav.Link className="b" style={{color: 'black'}} onClick={()=>ganche(1)}>Harfler</Nav.Link></Nav.Item>
                <Nav.Item className="navv"><Nav.Link className="b" style={{color: 'black'}} onClick={()=>ganche(2)}>ÇIKIŞ </Nav.Link></Nav.Item>
            </Nav>
            
            {page===1?( <div className="a">
              <button className="button" onClick={() => {setAction("a");speak({text:"A",voice:voices[0] })}}> A</button>
              <button className="button" onClick={() => {setAction("b");speak({text:"B",voice:voices[0] })}}> B</button>
              <button className="button" onClick={() => {setAction("c");speak({text:"C",voice:voices[0] })}}> C</button>
              <button className="button" onClick={() => {setAction("ç");speak({text:"Ç",voice:voices[0] })}}> Ç</button>
              <button className="button" onClick={() => {setAction("d");speak({text:"D",voice:voices[0] })}}> D</button>
              <button className="button" onClick={() => {setAction("e");speak({text:"E",voice:voices[0] })}}> E</button>
              <button className="button" onClick={() => {setAction("f");speak({text:"F",voice:voices[0] })}}> F</button>
              <button className="button" onClick={() => {setAction("g");speak({text:"G",voice:voices[0] })}}> G</button>
              <button className="button" onClick={() => {setAction("h");speak({text:"H",voice:voices[0] })}}> H</button>
              <button className="button" onClick={() => {setAction("ı");speak({text:"I",voice:voices[0] })}}> I</button>
              <button className="button" onClick={() => {setAction("i");speak({text:"i",voice:voices[0] })}}> İ</button>
              <button className="button" onClick={() => {setAction("j");speak({text:"J",voice:voices[0] })}}> J</button>
              <button className="button" onClick={() => {setAction("k");speak({text:"K",voice:voices[0] })}}> K</button>
              <button className="button" onClick={() => {setAction("l");speak({text:"L",voice:voices[0] })}}> L</button>
              <button className="button" onClick={() => {setAction("m");speak({text:"M",voice:voices[0] })}}> M</button>
              <button className="button" onClick={() => {setAction("n");speak({text:"N",voice:voices[0] })}}> N</button>
              <button className="button" onClick={() => {setAction("o");speak({text:"O",voice:voices[0] })}}> O</button>
              <button className="button" onClick={() => {setAction("p");speak({text:"P",voice:voices[0] })}}> P</button>
              <button className="button" onClick={() => {setAction("r");speak({text:"R",voice:voices[0] })}}> R</button>
              <button className="button" onClick={() => {setAction("s");speak({text:"S",voice:voices[0] })}}> S</button>
              <button className="button" onClick={() => {setAction("t");speak({text:"T",voice:voices[0] })}}> T</button>
              <button className="button" onClick={() => {setAction("u");speak({text:"U",voice:voices[0] })}}> U</button>
              <button className="button" onClick={() => {setAction("f");speak({text:"V",voice:voices[0] })}}> V</button>
              <button className="button" onClick={() => {setAction("y");speak({text:"Y",voice:voices[0] })}}> Y</button>
              <button className="button" onClick={() => {setAction("z");speak({text:"Z",voice:voices[0] })}}> z</button>
              {/* <button className="button" onClick={start}>start</button>
              <button className="button" onClick={pause}>stop</button> */}
            </div>):null} 
            
            {page===2?(<div ></div>):null}  
          
           
            
           
          </div>
        </div>
      </div>
    </div>
  );
}


