"use client";

import { useContext } from "react";

// --- 1. IMPORTACIONES DE AWS ---
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

// --- 2. TUS IMPORTACIONES ORIGINALES ---
import { FooterSignUp } from "@/components/molecules/FooterSignUp";
import { AsideMenu } from "@/components/organisms/AsideMenu";
import { FooterPlayer } from "@/components/organisms/FooterPlayer";
import { ListAudiosHome } from "@/components/templates/ListAudiosHome";
import { AuthContext } from "@/context/AuthContext";
import { PlayerProvider } from "@/context/PlayerContext";
// --- 3. CONFIGURACIÓN DE AWS (Tus llaves) ---
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "us-west-2_kGK9hV71v",
      userPoolClientId: "37aa0sd8enkuui83natm82gtm2",
      signUpVerificationMethod: "code",
      loginWith: {
        email: true,
      },
    },
  },
});

export default function Home() {
  // Nota: Con Authenticator, el usuario SIEMPRE estará logueado si logra ver la página.
  // Por eso simplificamos la lógica del footer.

  return (
    // --- 4. EL MURO DE SEGURIDAD ---
    <Authenticator>
      {({ signOut, user }) => (
        <PlayerProvider>
          <main className="relative flex h-screen flex-col">
            {/* Botón temporal de Logout (para que puedas salir) */}
            <div className="absolute right-2 top-2 z-50">
              <button
                onClick={signOut}
                className="rounded bg-red-600 px-2 py-1 text-xs text-white hover:bg-red-700"
              >
                Salir ({user?.signInDetails?.loginId})
              </button>
            </div>

            <div className="relative flex flex-1 overflow-hidden">
              <AsideMenu />
              <ListAudiosHome />
            </div>

            {/* Como el muro obliga a estar logueado, mostramos el Player siempre */}
            <FooterPlayer />
          </main>
        </PlayerProvider>
      )}
    </Authenticator>
  );
}
