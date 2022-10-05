import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonIcon,
  IonButtons,
  IonButton
} from "@ionic/react";

var numbers = [...Array(10)];

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonIcon name="search" slot="icon-only" />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <ul>
          {numbers.map(e => (
            <li>{e}</li>
          ))}
        </ul>
      </IonContent>
    </IonPage>
  );
};

export default Home;
