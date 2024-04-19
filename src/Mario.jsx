/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 mario.glb 
Author: nitwit.friends (https://sketchfab.com/nitwit.friends)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mario-0254649f5b0047f5875749b7c6fd65f5
Title: Mario
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model({animation}) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/mario.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions[animation]?.reset().fadeIn(0.1).play();
    return () => actions[animation]?.fadeOut(0.1);
  }, [animation]);
  return (
    <group ref={group} dispose={null} scale={1.5}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="fbx_mergefbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <group name="Object_6" position={[0, 0.753, 0.034]} />
                  <group name="mario_obj">
                    <group name="polygon1_polygon1" position={[0, 0.753, 0.034]} />
                  </group>
                  <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials['mario_eye_tx.001']} skeleton={nodes.Object_7.skeleton} />
                  <skinnedMesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials['mario_all_tx.001']} skeleton={nodes.Object_8.skeleton} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/mario.glb')