import { useRef,useEffect} from 'react'
import { useGLTF,useAnimations} from '@react-three/drei'
import { LoopOnce } from 'three';


export default function Model(props) {
    const group = useRef()
    const previousAction = usePrevious(props.action);
    const { nodes, materials,animations } = useGLTF("/at.glb");
   
    const { actions } = useAnimations(animations, group);
    useEffect(() => {
        if (previousAction) {
        actions[previousAction].fadeOut(0.2);
        actions[props.action].stop();
        }
        actions[props.action].setLoop(LoopOnce);
        actions[props.action].play();
        actions[props.action].fadeIn(0.2);
    }, [actions,props.action, previousAction]);
    return (
      
      
      <group ref={group} dispose={null} scale={5}>
         <primitive object={nodes.root} />
         <skinnedMesh
          geometry={nodes.yuz_1.geometry}
          material={materials.yuzrenk}
          skeleton={nodes.yuz_1.skeleton}
          material-color={props.customColors.yuz_1}
        />
             <skinnedMesh
          geometry={nodes.yuz_2.geometry}
          material={materials.dilrenk}
          skeleton={nodes.yuz_2.skeleton}
        //   material-color={props.customColors.yuz}
        />
           <skinnedMesh
          geometry={nodes.kas.geometry}
          material={materials.kasrenk}
          skeleton={nodes.kas.skeleton}
          material-color={props.customColors.kas}
        />
           <skinnedMesh
          geometry={nodes.kirpik.geometry}
          material={materials.kirpikrenk}
          skeleton={nodes.kirpik.skeleton}
          material-color={props.customColors.kirpik}
        />
          <skinnedMesh
          geometry={nodes.goz.geometry}
          material={materials.gozrenk}
          skeleton={nodes.goz.skeleton}
          material-color={props.customColors.goz}
          
        />
          <skinnedMesh
          geometry={nodes.iris.geometry}
          material={materials.irisrenk}
          skeleton={nodes.iris.skeleton}
          material-color={props.customColors.iris}
        /> 
           <skinnedMesh
          geometry={nodes.yuz_3.geometry}
          material={materials.dudakrenk}
          skeleton={nodes.yuz_3.skeleton}
          // material-color={props.customColors.yuz_3}
        />
           <skinnedMesh
          geometry={nodes.sac_1.geometry}
          material={materials.sacrenk}
          skeleton={nodes.sac_1.skeleton}
          material-color={props.customColors.sac_1}
        />
           <skinnedMesh
          geometry={nodes.sac_2.geometry}
          material={materials.sactoprenk}
          skeleton={nodes.sac_2.skeleton}
          material-color={props.customColors.sac_2}
        />
         <skinnedMesh
          geometry={nodes.mouth_in.geometry}
          material={materials.Material}
          skeleton={nodes.mouth_in.skeleton}
        />
         
        

      </group>
    )
  }
  useGLTF.preload("/at.glb");

  function usePrevious(value) {
    // ref nesnesi, geçerli özelliği değiştirilebilir olan genel bir kapsayıcıdır ...
      // ... ve bir sınıftaki örnek özelliğine benzer herhangi bir değeri tutabilir
     const ref = useRef();
     // Geçerli değeri ref'de sakla
    //  useEffect(() => {
    //    ref.current = value;
    //  }, [value,ref]); // Yalnızca değer değişirse yeniden çalıştır
     // Önceki değeri döndür (yukarıdaki useEffect'te güncellemeden önce olur)
     return value;
   }