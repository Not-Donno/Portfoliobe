import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import fig from "../assets/3d/fig.glb";

const HeroThree = (props) => {
    const figRef = useRef();
    const { nodes, materials } = useGLTF(fig);


    let time = 0;

    useFrame(() => {
        if (figRef.current) {
            time += 0.01; 
            figRef.current.rotation.y += 0.002; 
            figRef.current.position.y = Math.sin(time) * 0.2; 
            figRef.current.rotation.x = Math.cos(time * 0.5) * 0.1; 
        }
    });

    return (
        <group ref={figRef} {...props}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.043}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Blokjes_1_Blokjes1_0.geometry}
                        material={materials["Blokjes.1"]}
                        position={[-216.908, -38.665, -208.781]}
                        rotation={[1.3, -0.918, 2.805]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Control_2_Control1_0.geometry}
                        material={materials["Control.1"]}
                        position={[7.849, -52.117, 8.815]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Disc_1_Disc1_0.geometry}
                        material={materials["Disc.1"]}
                        position={[-218.865, -60.424, -142.101]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.PS4_PS4_0.geometry}
                        material={materials.material}
                        position={[-89.605, 252.533, 30.08]}
                        rotation={[0.141, 0.042, 0.288]}
                        scale={0.113}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["T_Rex_T-Rex2_0"].geometry}
                        material={materials["T-Rex.2"]}
                        position={[-152.414, 216.22, -193.778]}
                    />
                </group>
            </group>
        </group>
    );
};

export default HeroThree;
